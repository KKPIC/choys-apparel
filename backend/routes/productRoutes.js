import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  getAllHead,
  uploadProductImages,
  resizeProductImages,
} from "../controllers/productController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post(uploadProductImages, resizeProductImages, createProduct);

router.route("/head-apparel").get(getAllHead);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);
export default router;
