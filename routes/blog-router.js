import express from "express";
import {
  addBlog,
  deleteBlog,
  getAllBlog,
  getById,
  getByUserId,
  updateBlog,
} from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/getall", getAllBlog);
blogRouter.post("/addblog", addBlog);
blogRouter.put("/updateblog/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);
blogRouter.get("/getid/:id", getById);
blogRouter.get("/getuser/:id", getByUserId);

export default blogRouter;
