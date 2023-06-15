const { Category } = require("../models");

module.exports = async () => {
  const category = [
    {
      name: "Skate",
      description:
        "Skateboards are designed for agility and versatility, allowing riders to perform tricks such as flips, spins, and slides.",
    },

    {
      name: "Cruiser",
      description:
        "Cruiser provides a dynamic and exhilarating riding experience, enabling riders to simulate the sensation of surfing on land.",
    },

    {
      name: "Longboard",
      description:
        "Longboards offer stability and a smooth ride, making them suitable for riders who prioritize speed and comfort.",
    },

    {
      name: "Surf Board",
      description:
        "Surf table are specifically designed for surfers and surfing enthusiasts. It is typically a long and narrow table, resembling the shape of a surfboard.",
    },
  ];

  await Category.bulkCreate(category);
  console.log("[Database] Se corrió el seeder de Category");
};
