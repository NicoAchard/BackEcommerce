const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },

        products: DataTypes.JSON,
        status: DataTypes.ENUM("payment pending", "payment approved", "sent", "delivered"),
      },
      {
        sequelize,
        modelName: "order",
      },
    );

    return Order;
  }
}

module.exports = Order;
