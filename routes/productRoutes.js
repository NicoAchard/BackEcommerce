const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/:slug", productController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  productController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  productController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  productController.destroy,
);

module.exports = router;
