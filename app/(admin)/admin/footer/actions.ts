"use server";

import connectDB from "@/lib/db";
import { SiteSetting } from "@/models/SiteSetting";
import { revalidatePath } from "next/cache";

export async function updateFooter(formData: FormData) {
  await connectDB();
  
  const address = formData.get("address") as string;
  const officeHours = formData.get("officeHours") as string;
  const footerDescription = formData.get("footerDescription") as string;
  const facebookUrl = formData.get("facebookUrl") as string;
  const instagramUrl = formData.get("instagramUrl") as string;
  const twitterUrl = formData.get("twitterUrl") as string;
  const linkedinUrl = formData.get("linkedinUrl") as string;
  const contactEmail = formData.get("contactEmail") as string;
  const contactPhone = formData.get("contactPhone") as string;

  await SiteSetting.findOneAndUpdate({}, {
    address,
    officeHours,
    footerDescription,
    facebookUrl,
    instagramUrl,
    twitterUrl,
    linkedinUrl,
    contactEmail,
    contactPhone
  }, { upsert: true });

  revalidatePath("/");
  revalidatePath("/admin/footer");
  
  return { success: true };
}
