const User = require("../models/User");
const jwt = require("jsonwebtoken");

async function token(req, res) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      //   attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.json("Credenciales inválidas");
    } else {
      console.log(user);
      const isMatch = await user.comparePassword(req.body.password);
      console.log(isMatch);
      if (!isMatch) {
        return res.json("Credenciales inválidas");
      } else {
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
        return res.json({
          token,
          user,
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error en el servidor");
  }
}

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect("/");
  });
}

module.exports = { token, logout };