// routes/user/auth.routes.js
import { Router } from "express";
import {
  signup
} from "../../controller/user.controller.js";
import {
  signupValidator
} from "../../validators/auth.validator.js";

const router = Router();

router.post("/signup", signupValidator, signup);

export default router;
