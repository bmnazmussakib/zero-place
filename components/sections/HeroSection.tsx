"use client"
import PremiumButton from "@/components/shared/PremiumButton";
import SectionBadge from "../shared/SectionBadge";
import SectionContainer from "@/components/shared/SectionContainer";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-background before:absolute before:bg-primary before:size-120 before:rounded-full before:opacity-[0.25] before:end-[calc(50%-740px)] before:translate-x-1/2 before:top-0 before:blur-[100px]" >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--primary-soft),var(--color-background))] opacity-40" />

            <SectionContainer className="relative grid grid-cols-2">
                <div className="text-left space-y-8">
                    <SectionBadge>
                        Unlimited Design Subscription
                    </SectionBadge>
                    <div className="flex items-center gap-2">
                        <div className="avatar-group -space-x-3">
                            <div className="avatar border-2 border-white">
                                <div className="w-6">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar border-2 border-white">
                                <div className="w-6">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar border-3 border-white">
                                <div className="w-6">
                                    <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                </div>
                            </div>
                            <div className="avatar border-3 border-white">
                                <div className="w-6">
                                    <img src="https://i.pravatar.cc/300" />
                                </div>
                            </div>
                        </div>
                        <p>150+ Happy Clients</p>
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
                <div className="mt-20 relative group animate-float">
                    <div className="absolute -top-6 -left-12 z-10 px-6 py-4 bg-white/90 backdrop-blur-md border border-primary/20 rounded-2xl shadow-2xl animate-float flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="size-8 rounded-full border-2 border-white overflow-hidden bg-section">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-text-heading leading-tight italic">Trusted by</span>
                            <span className="text-sm font-black text-primary leading-tight">800+ Tech Giants</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-[550px] aspect-square ms-auto relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
                        <div className="relative w-full h-full bg-white shadow-3xl rounded-[3rem] border border-border-subtle overflow-hidden">
                            <div className="w-full h-full bg-linear-to-br from-section to-white flex items-center justify-center">
                                <img src="/images/hero/hero-img.jpeg" alt="Hero Showcase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}
