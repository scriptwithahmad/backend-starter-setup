import { Router } from "express";
import authRoutes from "./user/auth.routes.js";

const router = Router();

// API Routes
// every route will be prefixed with `/api/v1/auth/`
// '/api/v1/' is already defined in express.js
router.use("/auth", authRoutes);

export default router;