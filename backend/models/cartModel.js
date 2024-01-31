import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "Cart must belong to a Product!"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Cart must belong to a User!"],
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: [true, "Cart must have a quantity!"],
    },
    totalPrice: {
      type: Number,
    },
    inCart: {
      type: Boolean,
      default: true,
    },
  },
  {
    timeStamps: true,
  }
);

cartSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "product",
    select: "name images price",
  });
  next();
});
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
