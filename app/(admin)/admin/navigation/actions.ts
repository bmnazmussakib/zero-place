"use server";

import connectDB from "@/lib/db";
import { SiteSetting } from "@/models/SiteSetting";
import { revalidatePath } from "next/cache";

export async function updateNavigation(formData: FormData) {
  await connectDB();
  
  const navItemsRaw = formData.get("navItems") as string;
  const navItems = navItemsRaw ? JSON.parse(navItemsRaw) : [];

  await SiteSetting.findOneAndUpdate({}, {
    navItems
  }, { upsert: true });

  revalidatePath("/");
  revalidatePath("/admin/navigation");
  
  return { success: true };
}
