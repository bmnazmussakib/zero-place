import connectDB from "@/lib/db";
import { ServiceCategory, ServiceItem, ServiceDetail } from "@/models/Service";
import { FAQ, Brand, WorkStep } from "@/models/Utility";
import { PortfolioItem, Testimonial } from "@/models/Showcase";
import { SiteSetting } from "@/models/SiteSetting";
import { PricingPlan } from "@/models/Pricing";

export async function getSiteSettings() {
  try {
    await connectDB();
    const settings = await SiteSetting.findOne();
    if (!settings) {
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
  } catch (error) {
    console.error("Failed to fetch site settings:", error);
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
}

export async function getServicesCategories() {
  try {
    await connectDB();
    return await ServiceCategory.find().sort({ order: 1 });
  } catch (error) {
    console.error("Failed to fetch services categories:", error);
    return [];
  }
}

export async function getServiceItems() {
  try {
    await connectDB();
    return await ServiceItem.find().sort({ order: 1 });
  } catch (error) {
    console.error("Failed to fetch service items:", error);
    return [];
  }
}

export async function getServiceDetails(slug: string) {
  try {
    await connectDB();
    const detail = await ServiceDetail.findOne({ slug }).lean();
    return detail ? JSON.parse(JSON.stringify(detail)) : null;
  } catch (error) {
    console.error(`Failed to fetch service details for ${slug}:`, error);
    return null;
  }
}

export async function getFAQs() {
  try {
    await connectDB();
    return await FAQ.find().sort({ order: 1 });
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
    return [];
  }
}

export async function getBrands() {
  try {
    await connectDB();
    return await Brand.find();
  } catch (error) {
    console.error("Failed to fetch brands:", error);
    return [];
  }
}

export async function getPortfolioItems() {
  try {
    await connectDB();
    return await PortfolioItem.find().sort({ order: 1 });
  } catch (error) {
    console.error("Failed to fetch portfolio items:", error);
    return [];
  }
}

export async function getTestimonials() {
  try {
    await connectDB();
    return await Testimonial.find().sort({ order: 1 });
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}

export async function getWorkSteps() {
  try {
    await connectDB();
    return await WorkStep.find().sort({ order: 1 });
  } catch (error) {
    console.error("Failed to fetch work steps:", error);
    return [];
  }
}

export async function getPricingPlans(type?: 'one-time' | 'subscription') {
  try {
    await connectDB();
    const query = type ? { type } : {};
    return await PricingPlan.find(query).sort({ order: 1 });
  } catch (error) {
    console.error("Failed to fetch pricing plans:", error);
    return [];
  }
}
