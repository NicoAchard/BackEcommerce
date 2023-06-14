const { Role } = require("../models");

module.exports = async () => {
  const role = [
    {
      id: 100,
      name: "Buyer",
      description: "This user can only view and purchase products",
    },

    { id: 200, name: "Admin", description: "This user can manage CRUD actions" },
  ];

  await Role.bulkCreate(role);
  console.log("[Database] Se corrió el seeder de Role");
};
