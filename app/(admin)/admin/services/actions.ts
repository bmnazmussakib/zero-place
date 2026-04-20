"use server";

import connectDB from "@/lib/db";
import { ServiceCategory } from "@/models/Service";
import { revalidatePath } from "next/cache";

export async function createServiceCategory(formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as string;
  const color = formData.get("color") as string || "bg-blue-500";
  const textColor = formData.get("textColor") as string || "text-white";
  const colSpan = parseInt(formData.get("colSpan") as string) || 1;
  const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  await ServiceCategory.create({
    title,
    slug,
    image,
    color,
    textColor,
    colSpan,
    description,
    order: 0
  });

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  
  return { success: true };
}

export async function updateServiceCategory(formData: FormData) {
  await connectDB();
  
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as string;
  const color = formData.get("color") as string;
  const textColor = formData.get("textColor") as string;
  const colSpan = parseInt(formData.get("colSpan") as string);
  const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  await ServiceCategory.findByIdAndUpdate(id, {
    title,
    slug,
    image,
    color,
    textColor,
    colSpan,
    description
  });

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  
  return { success: true };
}

export async function deleteServiceCategory(formData: FormData) {
  const id = formData.get("id") as string;
  await connectDB();
  await ServiceCategory.findByIdAndDelete(id);
  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  
  return { success: true };
}
