const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const publicRoutes = require("./publicRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");
module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/", publicRoutes);
};
