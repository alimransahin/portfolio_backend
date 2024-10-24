import express from "express";
import { authController } from "./auth.controller";

const router = express.Router();

// signIn
router.post("/login", authController.signIn);
router.get("/:email", authController.getUserProfile);

export const AuthRoutes = router;
