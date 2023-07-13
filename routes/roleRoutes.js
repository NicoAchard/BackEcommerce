const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();

const roleController = require("../controllers/roleController");

router.get(
  "/",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  roleController.index,
);

module.exports = router;
