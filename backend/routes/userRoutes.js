import express from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
  DeleteUser,
} from "../controllers/userController.js";

import {
  signup,
  login,
  logout,
  protect,
  isLoggedIn,
  restrictTo,
  forgotPassword,
  resetPassword,
  updatePassword,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);

// router.use(protect);

router.route("/").get(getAllUsers);
// router.route("/").get(getAllProducts).post(createProduct);

// router.route("/head-apparel").get(getAllHead);

// router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);
export default router;
