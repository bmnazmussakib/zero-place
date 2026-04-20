"use server";

import connectDB from "@/lib/db";
import { Brand } from "@/models/Utility";
import { revalidatePath } from "next/cache";

export async function createBrand(formData: FormData) {
  await connectDB();
  
  const name = formData.get("name") as string;
  const logo = formData.get("logo") as string;

  await Brand.create({
    name,
    logo
  });

  revalidatePath("/admin/brands");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}

export async function updateBrand(formData: FormData) {
  await connectDB();
  
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const logo = formData.get("logo") as string;

  await Brand.findByIdAndUpdate(id, {
    name,
    logo
  });

  revalidatePath("/admin/brands");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}

export async function deleteBrand(formData: FormData) {
  const id = formData.get("id") as string;
  await connectDB();
  await Brand.findByIdAndDelete(id);
  revalidatePath("/admin/brands");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}
