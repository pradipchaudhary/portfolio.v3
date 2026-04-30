import { z } from "zod";

export const socialLinkSchema = z.object({
  platform: z.string().min(1, "Platform is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  href: z.string().url("Please enter a valid URL"),
  icon: z.string().min(1, "Icon selection is required"),
  color: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid Hex color").optional(),
  order: z.number().int().default(0),
  isActive: z.boolean().default(true),
});