import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user-router";
import blogRouter from "./routes/blog-router";
const app = express();

dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);

// db
mongoose
  .connect(process.env.DATA_BASE)
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to DB and listening to PORT"))
  .catch((err) => console.log(err));
