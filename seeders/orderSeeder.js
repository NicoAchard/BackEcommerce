const { Product } = require("../models");
const { Order } = require("../models");
const { User } = require("../models");
const { faker } = require("@faker-js/faker");
const { Sequelize } = require("sequelize");

module.exports = async () => {
  const createRandomOrder = async (i) => {
    try {
      const randomUser = await User.findOne({
        order: [Sequelize.literal("RANDOM()")],
      });

      const products = await Product.findAll({
        order: [Sequelize.literal("RANDOM()")],
        limit: 3,
      });

      const orderProducts = products.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        img: product.photos,
        qty: Math.floor(Math.random() * product.stock) + 1,
        unitPrice: product.price,
      }));

      const order = await Order.create({
        createdAt: faker.date.recent(),
        id: i,
        products: orderProducts,
        status: "payment pending",
        updatedAt: faker.date.recent(),
        userId: randomUser.id,
      });
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  for (let i = 0; i < 20; i++) {
    createRandomOrder(i + 1);
  }
  const order = [];

  await Order.bulkCreate(order);
  console.log("[Database] Se corrió el seeder de Order");
};
