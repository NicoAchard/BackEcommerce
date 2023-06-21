const { Order } = require("../models");

module.exports = async () => {
  const order = [
    {
      products: [
        {
          name: "Skate",
          id: 1,
          qty: 1,
          unitPrice: 40,
        },
      ],
      status: "sent",
      userId: 1,
    },
    {
      products: [{ name: "Longboard", id: 2, qty: 5, unitPrice: 200 }],
      status: "sent",
      userId: 2,
    },
  ];

  await Order.bulkCreate(order);
  console.log("[Database] Se corrió el seeder de Order");
};
