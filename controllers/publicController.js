const User = require("../models/User");
const jwt = require("jsonwebtoken");

async function tokens(req, res) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res.json({ response: "Credenciales inválidas", status: 404 });
    } else {
      const isMatch = await user.comparePassword(req.body.password);

      if (!isMatch) {
        return res.json({ response: "Credenciales inválidas", status: 404 });
      } else {
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
        return res.json({
          token,
          data: user,
          status: 200,
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error en el servidor");
  }
}

async function resetDatabase(req, res) {
  delete require.cache[require.resolve("../seeders/runAllSeeders")];
  require("../seeders/runAllSeeders");
  return res.json("OK");
}

module.exports = { tokens, resetDatabase };
