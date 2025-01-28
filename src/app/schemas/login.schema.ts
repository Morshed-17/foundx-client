import * as z from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email("Please enter a valid email").trim(),
  password: z.string().min(6, "Password must be at least 6 characters").trim(),
});
