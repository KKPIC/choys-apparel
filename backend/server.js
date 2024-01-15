import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

// for getting all the dot env files
dotenv.config({ path: "./config.env" });

//for access the mongo database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// for connectiong to the databases
mongoose.connect(DB, {}).then(() => console.log("DB connection successfully!"));

const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Listening to port ${port}`);
// });
const server = app.listen(port, () => {
  console.log(`App running on port ${port}.....`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLER REJECTION! Shutting down.....");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
