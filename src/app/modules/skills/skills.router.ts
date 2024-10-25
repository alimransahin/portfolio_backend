import express from "express";
import { skillController } from "./skills.controller";

const router = express.Router();

router.post("/", skillController.createSkill);
router.get("/", skillController.getAllSkill);
router.put("/:id", skillController.updateSkill);
router.delete("/:id", skillController.deleteSkill);

export const SkillRoutes = router;
