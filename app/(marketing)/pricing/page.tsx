import PricingHero from "@/components/sections/PricingHero";
import ConfidenceSection from "@/components/sections/ConfidenceSection";
import { pricingTiers, subscriptionTiers } from "@/lib/constants";
import OurBrands from "@/components/sections/OurBrands";
import FAQ from "@/components/sections/FAQ";
import Testimonial from "@/components/sections/Testimonial";
import { OurWorks } from "@/components/sections/OurWorks";

export default function PricingPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
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

      <OurBrands />
      <OurWorks />
      <FAQ />
      <Testimonial />
    </div>
  );
}
