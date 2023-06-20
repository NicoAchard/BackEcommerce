const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/:slug", productController.show);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  productController.destroy,
);

module.exports = router;
