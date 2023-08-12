import express from "express";
import { getAllUser, login, signUp } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/getall", getAllUser);
userRouter.get("/login", login);
userRouter.post("/signup", signUp);

export default userRouter;
