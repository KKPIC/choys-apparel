import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").get(getAllOrders).post(createOrder);

export default router;
