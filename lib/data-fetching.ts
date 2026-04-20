import connectDB from "@/lib/db";
import { ServiceCategory, ServiceItem, ServiceDetail } from "@/models/Service";
import { FAQ, Brand, WorkStep } from "@/models/Utility";
import { PortfolioItem, Testimonial } from "@/models/Showcase";
import { SiteSetting } from "@/models/SiteSetting";

export async function getSiteSettings() {
  await connectDB();
  const settings = await SiteSetting.findOne();
  if (!settings) {
    // Return defaults if no settings record exists yet
    return {
      siteName: 'Zero Place',
      logoUrl: '/images/zero-place-color-logo.svg',
      logoWhiteUrl: '/images/ZeroPlace White Color Logo.svg',
      description: 'Subscription-based design studio for modern brands.',
      keywords: 'design, studio, branding',
      contactEmail: 'hello@zeroplace.com',
      contactPhone: '+1 (888) 333-8181',
      socialLinks: []
    };
  }
  return settings;
}

export async function getServicesCategories() {
  await connectDB();
  return await ServiceCategory.find().sort({ order: 1 });
}

export async function getServiceItems() {
  await connectDB();
  return await ServiceItem.find().sort({ order: 1 });
}

export async function getServiceDetails(slug: string) {
  await connectDB();
  return await ServiceDetail.findOne({ slug });
}

export async function getFAQs() {
  await connectDB();
  return await FAQ.find().sort({ order: 1 });
}

export async function getBrands() {
  await connectDB();
  return await Brand.find();
}

export async function getPortfolioItems() {
  await connectDB();
  return await PortfolioItem.find().sort({ order: 1 });
}

export async function getTestimonials() {
  await connectDB();
  return await Testimonial.find().sort({ order: 1 });
}

export async function getWorkSteps() {
  await connectDB();
  return await WorkStep.find().sort({ order: 1 });
}
