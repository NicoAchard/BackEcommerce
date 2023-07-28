const { Role } = require("../models");

async function index(req, res) {
  const rols = await Role.findAll();

  return res.json(rols);
}

module.exports = { index };
