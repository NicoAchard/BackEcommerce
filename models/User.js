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
        avatar: {
          type: DataTypes.STRING(100),
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    User.beforeCreate(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    });
    return User;
  }

  toJSON() {
    const user = { ...this.get() };
    delete user.password;
    return user;
  }
}

// User.addHook("beforeCreate", async (user) => {
//   const hashedPassword = await bcrypt.hash(user.password, 10);
//   user.password = hashedPassword;
// });

User.prototype.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
