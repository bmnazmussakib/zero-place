"use server";

import connectDB from "@/lib/db";
import { FAQ } from "@/models/Utility";
import { revalidatePath } from "next/cache";

export async function createFAQ(formData: FormData) {
  await connectDB();
  
  const question = formData.get("question") as string;
  const answer = formData.get("answer") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  await FAQ.create({
    question,
    answer,
    order
  });

  revalidatePath("/admin/faqs");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}

export async function updateFAQ(formData: FormData) {
  await connectDB();
  
  const id = formData.get("id") as string;
  const question = formData.get("question") as string;
  const answer = formData.get("answer") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  await FAQ.findByIdAndUpdate(id, {
    question,
    answer,
    order
  });

  revalidatePath("/admin/faqs");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}

export async function deleteFAQ(formData: FormData) {
  const id = formData.get("id") as string;
  await connectDB();
  await FAQ.findByIdAndDelete(id);
  revalidatePath("/admin/faqs");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}
