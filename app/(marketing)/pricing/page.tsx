import PricingHero from "@/components/sections/PricingHero";
import ConfidenceSection from "@/components/sections/ConfidenceSection";
import OurBrands from "@/components/sections/OurBrands";
import FAQ from "@/components/sections/FAQ";
import Testimonial from "@/components/sections/Testimonial";
import { OurWorks } from "@/components/sections/OurWorks";
import { 
  getBrands, 
  getPortfolioItems, 
  getFAQs, 
  getTestimonials,
  getPricingPlans
} from "@/lib/data-fetching";

export default async function PricingPage() {
  const [brands, portfolio, faqs, testimonials, oneTimePlans, subscriptionPlans] = await Promise.all([
    getBrands(),
    getPortfolioItems(),
    getFAQs(),
    getTestimonials(),
    getPricingPlans('one-time'),
    getPricingPlans('subscription')
  ]);

  // Transform DB plans to PricingTier type if necessary
  const formatPlans = (plans: any[]) => plans.map(p => ({
    name: p.name,
    price: p.priceText,
    description: p.description,
    features: p.features.map((f: any) => ({ name: f.name, price: f.price })),
    isPopular: p.isPopular
  }));

  const dynamicOneTime = formatPlans(oneTimePlans);
  const dynamicSubscriptions = formatPlans(subscriptionPlans);

  return (
    <div className="bg-[#ffffff] min-h-screen">
      {dynamicOneTime.length > 0 && (
        <PricingHero
          badge="One Time Plan"
          titlePrefix="One Time Pricing for"
          plans={dynamicOneTime}
          priceSuffix="/lifetime"
        />
      )}

      <ConfidenceSection />

      {dynamicSubscriptions.length > 0 && (
        <PricingHero
          badge="Monthly Subscription"
          titlePrefix="Monthly Subscription for"
          plans={dynamicSubscriptions}
          priceSuffix="/per month"
        />
      )}

      <OurBrands initialBrands={JSON.parse(JSON.stringify(brands))} />
      <OurWorks initialWorks={JSON.parse(JSON.stringify(portfolio))} />
      <FAQ initialFaqs={JSON.parse(JSON.stringify(faqs))} />
      <Testimonial initialTestimonials={JSON.parse(JSON.stringify(testimonials))} />
    </div>
  );
}
