import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "Order must belong to a Product!"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Order must belong to a User!"],
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

orderSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "product",
    select: "name images price",
  });
  next();
});
const Order = mongoose.model("Order", orderSchema);

export default Order;
