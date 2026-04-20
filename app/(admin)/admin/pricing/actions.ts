'use server'

import connectDB from "@/lib/db";
import { PricingPlan } from "@/models/Pricing";
import { revalidatePath } from "next/cache";

export async function createPricingPlan(formData: FormData) {
  try {
    await connectDB();
    
    const name = formData.get('name') as string;
    const priceText = formData.get('priceText') as string;
    const description = formData.get('description') as string;
    const type = formData.get('type') as 'one-time' | 'subscription';
    const isPopular = formData.get('isPopular') === 'true';
    const order = parseInt(formData.get('order') as string) || 0;
    
    // Parse features from JSON string
    const featuresJson = formData.get('features') as string;
    const features = JSON.parse(featuresJson);

    await PricingPlan.create({
      name,
      priceText,
      description,
      type,
      isPopular,
      order,
      features
    });

    revalidatePath('/');
    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');
    
    return { success: true };
  } catch (error) {
    console.error("Failed to create pricing plan:", error);
    return { success: false, error: "Failed to create pricing plan" };
  }
}

export async function updatePricingPlan(id: string, formData: FormData) {
  try {
    await connectDB();
    
    const name = formData.get('name') as string;
    const priceText = formData.get('priceText') as string;
    const description = formData.get('description') as string;
    const type = formData.get('type') as 'one-time' | 'subscription';
    const isPopular = formData.get('isPopular') === 'true';
    const order = parseInt(formData.get('order') as string) || 0;
    
    const featuresJson = formData.get('features') as string;
    const features = JSON.parse(featuresJson);

    await PricingPlan.findByIdAndUpdate(id, {
      name,
      priceText,
      description,
      type,
      isPopular,
      order,
      features
    });

    revalidatePath('/');
    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update pricing plan:", error);
    return { success: false, error: "Failed to update pricing plan" };
  }
}

export async function deletePricingPlan(id: string) {
  try {
    await connectDB();
    await PricingPlan.findByIdAndDelete(id);

    revalidatePath('/');
    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete pricing plan:", error);
    return { success: false, error: "Failed to delete pricing plan" };
  }
}

export async function reorderPricingPlans(ids: string[]) {
  try {
    await connectDB();
    
    const updates = ids.map((id, index) => 
      PricingPlan.findByIdAndUpdate(id, { order: index })
    );
    
    await Promise.all(updates);

    revalidatePath('/');
    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');
    
    return { success: true };
  } catch (error) {
    console.error("Failed to reorder pricing plans:", error);
    return { success: false, error: "Failed to reorder pricing plans" };
  }
}
