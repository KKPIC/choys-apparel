import multer from "multer";
import sharp from "sharp";
import Product from "../models/productModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadProductImages = upload.fields([
  // {
  //   name: "imageCover",
  //   maxCount: 1,
  // },
  { name: "images", maxCount: 4 },
]);

export const resizeProductImages = catchAsync(async (req, res, next) => {
  // if (!req.files.imageCover || !req.files.images) return next();
  if (!req.files.images) return next();

  //1 Cover image
  // req.body.imageCover = `product-${req.params.id}-${Date.now()}-cover.jpeg`;
  // await sharp(req.files.imageCover[0].buffer)
  //   .resize(2000, 1333)
  //   .toFormat("jpeg")
  //   .jpeg({ quality: 90 })
  //   .toFile(`public/img/${req.body.imageCover}`);

  // 2 images
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `product-${req.body.name}-${Date.now()}-${i + 1}.png`;
      await sharp(file.buffer)
        .resize(222, 200)
        .toFormat("png")
        .jpeg({ quality: 90 })
        .toFile(`public/img/apparel/${filename}`);
      req.body.images.push(filename);
      console.log(req.body);
    })
  );
  next();
});

export const getAllProducts = getAll(Product);
export const getProduct = getOne(Product);
export const createProduct = createOne(Product);
export const updateProduct = updateOne(Product);
export const deleteProduct = deleteOne(Product);

export const getAllHead = catchAsync(async (req, res, next) => {
  const HeadApparel = await Product.aggregate([
    {
      $match: {
        bodyTag: "Head",
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      HeadApparel,
    },
  });
});
