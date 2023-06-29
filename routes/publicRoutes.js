const express = require("express");
const router = express.Router();
const publicController = require("../controllers/publicController");

router.post("/", (req, res) => {
  return res.json({ response: "Éxito" });
});
router.post("/tokens", publicController.tokens);

router.get("/runAllSeeders", publicController.resetDatabase);

module.exports = router;
