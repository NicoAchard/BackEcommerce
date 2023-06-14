const { Category } = require("../models");

module.exports = async () => {
  const category = [
    {
      name: "Skate",
      description:
        "Skateboards are designed for agility and versatility, allowing riders to perform tricks such as flips, spins, and slides.",
    },

    {
      name: "Carver",
      description:
        "Carvers provides a dynamic and exhilarating riding experience, enabling riders to simulate the sensation of surfing on land.",
    },

    {
      name: "Longboard",
      description:
        "Longboards offer stability and a smooth ride, making them suitable for riders who prioritize speed and comfort.",
    },

    {
      name: "Penny",
      description:
        "Penny boards offer a fluid ride due to their soft wheels and are favored by those who enjoy a more laid-back skateboarding experience.",
    },
  ];

  await Category.bulkCreate(category);
  console.log("[Database] Se corrió el seeder de Category");
};
