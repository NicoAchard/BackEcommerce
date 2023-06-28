const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/", (req, res) => {
  return res.json({ response: "Exito" });
});
router.post("/tokens", authController.tokens);

module.exports = router;
