import express from "express";
import { checkSchema } from "express-validator";
import { signupValidationSchema } from "../validator/signup.validator.js";
import { signup } from "../controllers/signup.js";
import { signin } from "../controllers/signin.js";
import { signinValidationSchema } from "../validator/signin.validator.js";

const router = express.Router();

router.post("/signup", checkSchema(signupValidationSchema), signup);
router.post("/signin", checkSchema(signinValidationSchema), signin);

export default router;
