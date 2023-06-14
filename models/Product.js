const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(100),
        },
        description: {
          type: DataTypes.TEXT,
        },
        slug: {
          type: DataTypes.STRING(200),
        },
        highlight: {
          type: DataTypes.STRING(100),
        },
        stock: {
          type: DataTypes.SMALLINT,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        photo: {
          type: DataTypes.JSON,
        },
      },
      {
        sequelize,
        modelName: "product",
      },
    );

    return Product;
  }
}

module.exports = Product;
