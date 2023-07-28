const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");
const publicRoutes = require("./publicRoutes");
const orderRoutes = require("./orderRoutes");
const roleRoutes = require("./roleRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/rols", roleRoutes);
  app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/", publicRoutes);
};
