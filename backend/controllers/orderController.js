import Order from "../models/orderModel.js";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

export const getAllOrders = getAll(Order);
export const getOrder = getOne(Order);
export const createOrder = createOne(Order);
export const updateOrder = updateOne(Order);
export const deleteOrder = deleteOne(Order);
