"use server";

import connectDB from "@/lib/db";
import { WorkStep } from "@/models/Utility";
import { revalidatePath } from "next/cache";

export async function createWorkStep(formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const icon = formData.get("icon") as string || "CheckCircle";
  const order = parseInt(formData.get("order") as string) || 0;

  await WorkStep.create({
    title,
    description,
    icon,
    order
  });

  revalidatePath("/admin/work-steps");
  revalidatePath("/");
  
  return { success: true };
}

export async function updateWorkStep(formData: FormData) {
  await connectDB();
  
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const icon = formData.get("icon") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  await WorkStep.findByIdAndUpdate(id, {
    title,
    description,
    icon,
    order
  });

  revalidatePath("/admin/work-steps");
  revalidatePath("/");
  
  return { success: true };
}

export async function deleteWorkStep(formData: FormData) {
  const id = formData.get("id") as string;
  await connectDB();
  await WorkStep.findByIdAndDelete(id);
  revalidatePath("/admin/work-steps");
  revalidatePath("/");
  
  return { success: true };
}
