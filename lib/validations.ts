// /lib/validations.ts
import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  description: z.string().min(10),
  content: z.string().optional(),

  link: z.string().url().optional().nullable(),
  github: z.string().url().optional().nullable(),
  image: z.string().optional().nullable(),

  tags: z.array(z.string()).default([]),

  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  order: z.number().default(0),
});