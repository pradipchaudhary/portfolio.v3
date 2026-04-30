"use server"

import { revalidatePath } from "next/cache";
import { socialLinkSchema } from "../validations";
import { prisma } from "../prisma";

export async function createSocialLink(formData: FormData) {
  // 1. Extract data
  const rawData = Object.fromEntries(formData.entries());
  
  // 2. Validate with Zod
  const validated = socialLinkSchema.safeParse({
    ...rawData,
    order: Number(rawData.order),
    isActive: rawData.isActive === "on",
  });

  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors };
  }

  try {
    // 3. Database Operation
    await prisma.socialLink.create({
      data: validated.data,
    });

    // 4. Purge Cache
    revalidatePath("/(admin)/dashboard/socials");
    revalidatePath("/(landing)"); 
    
    return { success: true };
  } catch (error) {
    return { error: "Database failure. Please try again." };
  }
}