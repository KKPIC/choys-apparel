import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import path from "node:path";
import url from "node:url";
import helmet from "helmet";
const app = express();

const DIR_NAME = path.dirname(url.fileURLToPath(import.meta.url));
// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.options("*", cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PATCH", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// Serving static files
app.use(express.static(path.join(DIR_NAME, "public")));
app.use(helmet());
app.get("/", (req, res) => {
  //   console.log(req);
  return res.status(234).send("Welcome To MERN STACK");
});

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);
export default app;
