import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionContainer from "@/components/shared/SectionContainer";
import { pricingTiers } from "@/lib/constants";
import PricingCard from "@/components/cards/PricingCard";
import PremiumButton from "@/components/shared/PremiumButton";
import OurBrands from "@/components/sections/OurBrands";
import { ServicesPreview } from "@/components/sections/services-preview";
import { OurWorks } from "@/components/sections/OurWorks";
import WorkStep from "@/components/sections/WorkStep";
import RealtimeDashboard from "@/components/sections/RealtimeDashboard";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Testimonial from "@/components/sections/Testimonial";
import { 
  getBrands, 
  getServicesCategories, 
  getPortfolioItems, 
  getWorkSteps, 
  getFAQs, 
  getTestimonials,
  getServiceItems
} from "@/lib/data-fetching";

export default async function HomePage() {
    const [brands, portfolio, workSteps, faqs, testimonials, serviceItems] = await Promise.all([
        getBrands(),
        getPortfolioItems(),
        getWorkSteps(),
        getFAQs(),
        getTestimonials(),
        getServiceItems()
    ]);

    return (
        <>
            <HeroSection />


            <OurBrands initialBrands={JSON.parse(JSON.stringify(brands))} />

            <ServicesPreview initialServices={JSON.parse(JSON.stringify(serviceItems))} />

            <OurWorks initialWorks={JSON.parse(JSON.stringify(portfolio))} />

            <WorkStep initialSteps={JSON.parse(JSON.stringify(workSteps))} />

            <Pricing />

            <RealtimeDashboard />

            <FAQ initialFaqs={JSON.parse(JSON.stringify(faqs))} />

            <Testimonial initialTestimonials={JSON.parse(JSON.stringify(testimonials))} />
        </>
    );
}
