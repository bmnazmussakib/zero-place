"use server";

import connectDB from "@/lib/db";
import { PortfolioItem } from "@/models/Showcase";
import { revalidatePath } from "next/cache";

export async function createPortfolioItem(formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  await PortfolioItem.create({
    title,
    category,
    image,
    order
  });

  revalidatePath("/admin/portfolio");
  revalidatePath("/portfolio");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}

export async function updatePortfolioItem(formData: FormData) {
  await connectDB();
  
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  await PortfolioItem.findByIdAndUpdate(id, {
    title,
    category,
    image,
    order
  });

  revalidatePath("/admin/portfolio");
  revalidatePath("/portfolio");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}

export async function deletePortfolioItem(formData: FormData) {
  const id = formData.get("id") as string;
  await connectDB();
  await PortfolioItem.findByIdAndDelete(id);
  revalidatePath("/admin/portfolio");
  revalidatePath("/portfolio");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}
