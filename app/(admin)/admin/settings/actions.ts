"use server";

import connectDB from "@/lib/db";
import { SiteSetting } from "@/models/SiteSetting";
import { revalidatePath } from "next/cache";

export async function updateSettings(formData: FormData) {
  await connectDB();
  
  const siteName = formData.get("siteName") as string;
  const logoUrl = formData.get("logoUrl") as string;
  const logoWhiteUrl = formData.get("logoWhiteUrl") as string;
  const description = formData.get("description") as string;
  const keywords = formData.get("keywords") as string;
  const googleAnalyticsId = formData.get("googleAnalyticsId") as string;

  await SiteSetting.findOneAndUpdate({}, {
    siteName,
    logoUrl,
    logoWhiteUrl,
    description,
    keywords,
    googleAnalyticsId
  }, { upsert: true });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/settings");
  
  return { success: true };
}
