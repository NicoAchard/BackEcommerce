const { Sequelize } = require("sequelize");

const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};
if (process.env.DB_CONNECTION === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);

const User = require("./User");
const Product = require("./Product");
const Role = require("./Role");
const Category = require("./Category");
const Order = require("./Order");

User.initModel(sequelize);
Product.initModel(sequelize);
Role.initModel(sequelize);
Category.initModel(sequelize);
Order.initModel(sequelize);

Category.hasMany(Product);
Product.belongsTo(Category);

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Product,
  Role,
  Category,
  Order,
};
