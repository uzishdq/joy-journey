import { z } from "zod";

const allowedRegex = /^[a-zA-Z0-9.,/ \-']+$/;

const emailSchema = z
  .email()
  .min(5, "must be at least 5 characters long.")
  .max(50, "must not exceed 50 characters.");
const passwordSchema = z
  .string({ error: "required" })
  .min(6, "must be at least 6 characters long.")
  .max(50, "must not exceed 50 characters.");

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
  });
