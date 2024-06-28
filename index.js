import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth_router from "./src/routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use("/api/auth", auth_router);

// middleware to handle error status
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    statusCode,
    message,
  });
});

// connect to Database
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Database sucessfully connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
