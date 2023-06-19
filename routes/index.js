const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const privateRoutes = require("./privateRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/admin", privateRoutes);
  app.use("/", authRoutes);
};
