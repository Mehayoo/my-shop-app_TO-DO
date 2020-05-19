const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route files
const assets = require("./routes/assets");
const products = require("./routes/products");

const app = express();
app.use(cors());

//Body parser
app.use(express.json());

//Dev logging middleware - only want this to run if we're in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Mount routers
app.use("/api/v1/assets", assets);
app.use("/api/v1/products", products);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1)); //exit with failure, meaning the app will crash because if our database isn't connecting, we don't want our app to work, that's why we put 1 in there
});
