const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  userController.index,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  userController.destroy,
);
router.post("/", userController.store);

module.exports = router;
