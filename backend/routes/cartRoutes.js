import express from "express";
import {
  createCart,
  deleteCart,
  getAllCarts,
  getCart,
  updateCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.route("/").get(getAllCarts).post(createCart);

router.route("/:id").get(getCart).patch(updateCart).delete(deleteCart);
export default router;
