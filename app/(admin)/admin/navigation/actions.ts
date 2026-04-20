"use server";

import connectDB from "@/lib/db";
import { NavigationItem } from "@/models/NavigationItem";
import { revalidatePath } from "next/cache";

export async function updateNavigation(formData: FormData) {
  await connectDB();
  
  const navItemsRaw = formData.get("navItems") as string;
  const navItems = navItemsRaw ? JSON.parse(navItemsRaw) : [];

  // Helper function to flat save items
  async function saveItems(items: any[], parentId: string | null = null) {
    const results = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const saved = await NavigationItem.findOneAndUpdate(
        { id: item.id },
        {
          id: item.id,
          title: item.title,
          href: item.href,
          icon: item.icon,
          type: item.type,
          details: item.details,
          parentId: parentId,
          order: i
        },
        { upsert: true, new: true }
      );
      results.push(saved.id);
      if (item.children && item.children.length > 0) {
        const childIds = await saveItems(item.children, item.id);
        results.push(...childIds);
      }
    }
    return results;
  }

  // 1. Clear existing items that are not in the new list (to handle deletions)
  const allCurrentItems = await saveItems(navItems);
  await NavigationItem.deleteMany({ id: { $nin: allCurrentItems } });

  revalidatePath("/");
  revalidatePath("/admin/navigation");
  revalidatePath("/api/navigation");
  
  return { success: true };
}

