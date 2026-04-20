"use server";

import connectDB from "@/lib/db";
import { Testimonial } from "@/models/Showcase";
import { revalidatePath } from "next/cache";

export async function createTestimonial(formData: FormData) {
  await connectDB();
  
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const content = formData.get("content") as string;
  const avatar = formData.get("avatar") as string;
  const logo = formData.get("logo") as string;

  await Testimonial.create({
    name,
    role,
    content,
    avatar,
    logo,
    order: 0
  });

  revalidatePath("/admin/testimonials");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}

export async function updateTestimonial(formData: FormData) {
  await connectDB();
  
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const content = formData.get("content") as string;
  const avatar = formData.get("avatar") as string;
  const logo = formData.get("logo") as string;

  await Testimonial.findByIdAndUpdate(id, {
    name,
    role,
    content,
    avatar,
    logo
  });

  revalidatePath("/admin/testimonials");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}

export async function deleteTestimonial(formData: FormData) {
  const id = formData.get("id") as string;
  await connectDB();
  await Testimonial.findByIdAndDelete(id);
  revalidatePath("/admin/testimonials");
  revalidatePath("/services");
  revalidatePath("/pricing");
  revalidatePath("/");
  
  return { success: true };
}
