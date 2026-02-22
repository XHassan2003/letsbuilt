import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Product name must be at least 3 characters long" }),
  slug: z
    .string()
    .min(3, { message: "Product slug must be at least 3 characters long" })
    .max(140, { message: "Product slug must be less than 120 characters long" })
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Product slug must be URL-friendly (lowercase letters, numbers, and hyphens only)",
    ),
  tagline: z
    .string()
    .max(200, {
      message: "Product tagline must be less than 200 characters long",
    }),
  description: z.string().optional(),
  websiteUrl: z
    .string()
    .min(1, { message: "Product website URL must be a valid URL" }),
  tags: z
    .string()
    .min(1, { message: "Tags are required" })
    .transform((val) => val.split(",").map((tag) => tag.trim().toLowerCase())),
});
