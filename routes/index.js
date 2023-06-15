const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");

const privateRoutes = require("./privateRoutes");

module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);

  app.use("/admin", privateRoutes);
};
