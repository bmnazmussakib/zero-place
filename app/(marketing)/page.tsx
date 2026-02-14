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

export default function HomePage() {
    return (
        <>
            <HeroSection />

            <OurBrands />

            <ServicesPreview />

            <OurWorks />

            <WorkStep />


            <Pricing />
            <RealtimeDashboard />

            <FAQ />

            <Testimonial />
        </>
    );
}
