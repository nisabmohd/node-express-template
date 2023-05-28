import express from "express";
import { validate } from "../middlewares/requestValidator";
import { z } from "zod";
import { loginHandler, signupHandler } from "../controllers/auth.controller";

const router = express.Router();

/// login route ---------------------------------------
const loginRequestSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email required for login" })
      .email("Invalid email"),
    password: z
      .string({ required_error: "Password required to login" })
      .min(6, "Invalid password length"),
  }),
  query: z.object({
    redirect: z.string().transform(Boolean).optional(),
  }),
});
export type loginRequestType = z.infer<typeof loginRequestSchema>;

router.route("/login").post(validate(loginRequestSchema), loginHandler);
// ----------------------------------------------------

/// signup route --------------------------------------
const signupRequestSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email required for signup" })
      .email("Invalid email"),
    password: z
      .string({ required_error: "Password required to signup" })
      .min(6, "Invalid password length, Minimum 6 characters required"),
    fullName: z.string({ required_error: "Full name required for signing up" }),
  }),
});
export type signupRequestType = z.infer<typeof signupRequestSchema>;

router.route("/signup").post(validate(signupRequestSchema), signupHandler);
// -----------------------------------------------------

export default router;
