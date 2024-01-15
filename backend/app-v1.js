import path from "path";
import express from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import xss from "xss";

// import AppError from "./utils/appError";
// import globalErrorHandler from "./controllers/errorController";
// import userRouter from "./routes/userRoutes";
const app = express();
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
// global Middleware

// Implement CORS
app.use(cors());

// Access-Control-Allow-Origin
app.options("*", cors());

// Serving static files
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: [],
//       connectSrc: ["'self'", ...connectSrcUrls],
//       scriptSrc: ["'self'", ...scriptSrcUrls],
//       styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
//       workerSrc: ["'self'", "blob:"],
//       objectSrc: [],
//       imgSrc: ["'self'", "blob:", "data:", "https:"],
//       fontSrc: ["'self'", ...fontSrcUrls],
//     },
//   })
// );

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 64 * 1000,
  message: "Too many requests from this Ip, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser, reading data from body into req.body
// app.use(morgan('dev'));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against noSQL query injection
app.use(mongoSanitize());
// Data sanitation aganst XSS
app.use(xss());

// Prevent parameter polution BABALIK KA DITO

app.use(compression());

// Test middleware

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

// app.use("/api/v1/users", userRouter);
// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// app.use(globalErrorHandler);
export default app;
