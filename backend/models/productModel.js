import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "A product mush have a price"],
    },
    priceDiscount: {
      type: Number,
    },
    images: [String],
    genderTag: {
      type: String,
      required: [true, "A product must have a gender tag"],
      trim: true,
    },
    bodyTag: {
      type: String,
      required: [true, "A product must have a body tag"],
      trim: true,
    },
    otherTags: [String],
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be above 1.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    createAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
