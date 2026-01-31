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
import FAQ from "@/components/sections/FAQ";
import Testimonial from "@/components/sections/Testimonial";

export default function HomePage() {
    return (
        <>
            <HeroSection />

            {/* Brand Section */}
            <OurBrands />

            <ServicesPreview />

            <OurWorks />

            <WorkStep />

            <FAQ />

            <Testimonial />


            <SectionContainer id="pricing" className="bg-[var(--section)] hidden">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-4xl font-bold">Simple, transparent pricing</h2>
                    <p className="text-[var(--text-body)]">
                        Choose the package that fits your needs. No long-term contracts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier) => (
                        <PricingCard key={tier.name} tier={tier} />
                    ))}
                </div>
            </SectionContainer>

            {/* CTA Section Placeholder */}
            <SectionContainer className="text-center hidden">
                <div className="bg-[var(--primary)] rounded-3xl p-12 text-white">
                    <h2 className="text-4xl font-bold mb-6">Ready to transform your brand?</h2>
                    <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                        Book a call with us today and let's discuss how we can help you grow.
                    </p>
                    <PremiumButton asChild className="bg-white text-primary border-transparent">
                        <Link href="/book-a-call">
                            Book a Free 15-min Call
                        </Link>
                    </PremiumButton>
                </div>
            </SectionContainer>
        </>
    );
}
