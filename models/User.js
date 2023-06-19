const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

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
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    return User;
  }
  static beforeCreate(user) {
    user.password = hashFunction(user.password);
  }
}

function hashFunction(password) {
  return bcrypt.hash(password, 4);
}

User.prototype.comparePassword = async function (password) {
  console.log(password);
  console.log(this.password);
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
