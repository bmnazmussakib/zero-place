"use client"
import PremiumButton from "@/components/shared/PremiumButton";
import SectionContainer from "@/components/shared/SectionContainer";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-background before:absolute before:bg-primary before:size-120 before:rounded-full before:opacity-[0.25] before:end-[calc(50%-740px)] before:translate-x-1/2 before:top-0 before:blur-[100px]" >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--primary-soft),var(--color-background))] opacity-40" />

            <SectionContainer className="relative grid grid-cols-2">
                <div className="text-left space-y-8">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-semibold tracking-wide uppercase">
                        Unlimited Design Subscription
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-extrabold text-text-heading leading-[1.1] tracking-tight">
                        Boost Your Brand with Expert <br />
                        <span className="text-primary">
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'Branding',
                                    1000,
                                    'UI/UX',
                                    1000,
                                    'Web Development',
                                    1000,
                                    'Apps Development',
                                    500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className="text-xl text-text-muted">
                        Premium quality, fast delivery, and scalable solutions tailored to your business goals.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
                        <PremiumButton href="/pricing" className="w-full sm:w-auto">
                            View Pricing
                        </PremiumButton>
                        <PremiumButton
                            href="/portfolio"
                            variant="outline"
                            className="w-full sm:w-auto"
                        >
                            See our work
                        </PremiumButton>
                    </div>
                </div>

                {/* Hero Image / Mockup Placeholder */}
                <div className="mt-20 relative">
                    <div className="absolute top-0 left-0 z-10 p-4 bg-primary text-white backdrop-blur-sm">
                        Trusted by 800+ Tech Giants.
                    </div>
                    <div className="w-[550px] h-[550px] ms-auto bg-white shadow-2xl border border-border-subtle overflow-hidden">
                        <div className="w-full h-full aspect-square bg-linear-to-br from-section to-white flex items-center justify-center font-medium text-text-muted">
                            <img src="/images/hero/hero-img.jpeg" alt="Hero Showcase" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}
