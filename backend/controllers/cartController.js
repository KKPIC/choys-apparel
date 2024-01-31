import Cart from "../models/cartModel.js";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

export const getAllCarts = getAll(Cart);
export const getCart = getOne(Cart);
export const createCart = createOne(Cart);
export const updateCart = updateOne(Cart);
export const deleteCart = deleteOne(Cart);
