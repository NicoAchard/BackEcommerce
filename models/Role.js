const { Model, DataTypes } = require("sequelize");

class Role extends Model {
  static initModel(sequelize) {
    Role.init(
      {
        name: {
          type: DataTypes.STRING(100),
        },
        description: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "role",
      },
    );
    return Role;
  }
}

module.exports = Role;
