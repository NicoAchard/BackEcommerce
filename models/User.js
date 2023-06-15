const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        phone_number: {
          type: DataTypes.STRING(100),
        },
        address: {
          type: DataTypes.STRING(100),
        },
        orders: { type: DataTypes.JSON },
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    return User;
  }
}

module.exports = User;
