import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import url from "url";
import Product from "../../models/productModel.js";

dotenv.config({ path: "./config.env" });
const DIR_NAME = path.dirname(url.fileURLToPath(import.meta.url));
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("DB connection successfully!"));

// read JSON file
const products = JSON.parse(
  fs.readFileSync(`${DIR_NAME}/products.json`, "utf-8")
);
// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Product.create(products);
    console.log("Data Successfully loaded!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Product.deleteMany();

    console.log("Data Successfully deleted!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
