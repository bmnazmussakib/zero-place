import PricingHero from "@/components/sections/PricingHero";
import ConfidenceSection from "@/components/sections/ConfidenceSection";
import { pricingTiers, subscriptionTiers } from "@/lib/constants";
import OurBrands from "@/components/sections/OurBrands";
import FAQ from "@/components/sections/FAQ";
import Testimonial from "@/components/sections/Testimonial";
import { OurWorks } from "@/components/sections/OurWorks";
import { 
  getBrands, 
  getPortfolioItems, 
  getFAQs, 
  getTestimonials 
} from "@/lib/data-fetching";

export default async function PricingPage() {
  const [brands, portfolio, faqs, testimonials] = await Promise.all([
    getBrands(),
    getPortfolioItems(),
    getFAQs(),
    getTestimonials()
  ]);

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <PricingHero
        badge="One Time Plan"
        titlePrefix="One Time Pricing for"
        plans={pricingTiers}
        priceSuffix="/lifetime"
      />

      <ConfidenceSection />

      <PricingHero
        badge="Monthly Subscription"
        titlePrefix="Monthly Subscription for"
        plans={subscriptionTiers}
        priceSuffix="/per month"
      />

      <OurBrands initialBrands={JSON.parse(JSON.stringify(brands))} />
      <OurWorks initialWorks={JSON.parse(JSON.stringify(portfolio))} />
      <FAQ initialFaqs={JSON.parse(JSON.stringify(faqs))} />
      <Testimonial initialTestimonials={JSON.parse(JSON.stringify(testimonials))} />
    </div>
  );
}
