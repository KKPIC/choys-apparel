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

export default router;
