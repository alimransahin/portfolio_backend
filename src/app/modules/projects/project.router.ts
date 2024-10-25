import express from "express";
import { projectController } from "./project.controller";

const router = express.Router();

router.post("/", projectController.createProject);
router.get("/", projectController.getAllProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

export const ProjectRoutes = router;
