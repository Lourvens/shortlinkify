import * as z from "zod";

export const schema = z.object({
  long_url: z
    .string()
    .regex(
      /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/,
      "Please enter a valid URL"
    ),
  access_code: z
    .string()
    .min(4, "Access code must be at least 4 characters long.")
    .optional(),
  expiresIn: z
    .number()
    .min(5, "Please select an expiration time of 5 minutes or more.")
    .optional(),
});
