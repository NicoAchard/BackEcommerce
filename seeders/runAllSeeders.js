require("dotenv").config();
const db = require("../models");

async function runAllSeeders() {
  await db.sequelize.sync({ force: true });

  await require("./roleSeeder")();
  await require("./categorySeeder")();
  await require("./userSeeder")();
  await require("./productSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
