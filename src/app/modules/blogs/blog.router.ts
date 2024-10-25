import express from "express";
import { blogController } from "./blog.controller";

const router = express.Router();

router.post("/", blogController.createBlog);
router.get("/", blogController.getAllBlog);
router.get("/:id", blogController.updateBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

export const BlogRoutes = router;
