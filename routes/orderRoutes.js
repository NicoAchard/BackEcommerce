const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.get(
  "/",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  orderController.index,
);
router.post(
  "/",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  orderController.store,
);

module.exports = router;
