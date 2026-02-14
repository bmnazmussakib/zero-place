"use client";

import React, { useState } from 'react';
import SectionContainer from "@/components/shared/SectionContainer";
import { PricingTier } from "@/types";
import SectionBadge from "@/components/shared/SectionBadge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingHeroProps {
    badge: string;
    titlePrefix: string;
    plans: PricingTier[];
    priceSuffix?: string;
}

export default function PricingHero({
    badge,
    titlePrefix,
    plans,
    priceSuffix = "/per month"
}: PricingHeroProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SectionContainer className="pt-24 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                {/* Left Side: Content & Plan List */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-6">
                        <SectionBadge>{badge}</SectionBadge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-heading leading-[0.9] tracking-tighter">
                            {titlePrefix} <br />
                            <span className="text-primary italic">
                                {plans[activeIndex].name}
                            </span>
                        </h1>
                        <p className="text-text-body text-lg leading-relaxed max-w-2xl font-medium">
                            &quot;Zeroplace offers transparent, customizable pricing plans tailored to startups, SMEs, and enterprises—ensuring affordability, scalability.&quot;
                        </p>
                    </div>

                    {/* Interactive Plan List - Styled like the image */}
                    <div className="divide-y divide-black/5 border-t border-b border-black/5">
                        {plans.map((tier, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={cn(
                                    "group flex items-center justify-between py-10 transition-all duration-300 cursor-pointer",
                                    activeIndex === index ? "px-4" : "px-0"
                                )}
                            >
                                <div className="flex items-center gap-12">
                                    {/* <span className="text-sm font-black text-text-heading uppercase tracking-widest">
                                        {tier.name}
                                    </span> */}
                                    <h3 className={cn(
                                        "text-3xl font-heading font-black transition-all",
                                        activeIndex === index ? "text-primary scale-110" : "text-text-heading"
                                    )}>
                                        {/* Plan - {index + 1} */}
                                         {tier.name}
                                    </h3>
                                </div>

                                <div className={cn(
                                    "px-8 py-3 rounded-full border border-black font-bold text-xs uppercase tracking-widest transition-all",
                                    activeIndex === index
                                        ? "bg-black text-white"
                                        : "bg-white text-black hover:bg-black hover:text-white"
                                )}>
                                    View
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Pricing Card - Matches Homepage Style */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <div key={activeIndex} className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-black/5 border border-black/5 animate-in fade-in slide-in-from-right-8 duration-500">

                        <div className="mb-10">
                            <h3 className="text-2xl font-heading font-black text-text-heading mb-6">{plans[activeIndex].name}</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-heading font-black text-text-heading">{plans[activeIndex].price}</span>
                                <span className="text-text-muted font-bold text-xl">{priceSuffix}</span>
                            </div>
                        </div>

                        {/* Feature List - Grey Background as requested */}
                        <div className="bg-[#F1F4FA] rounded-4xl p-8 space-y-5 mb-10">
                            {plans[activeIndex].features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-5 h-5 bg-[#1C3A27] rounded-full flex items-center justify-center shrink-0">
                                        <Check size={12} className="text-white stroke-4" />
                                    </div>
                                    <span className="text-base font-bold text-text-heading leading-tight italic">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full bg-white border-2 border-primary/20 hover:border-primary text-text-heading rounded-full py-5 text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.02] shadow-sm">
                            SELECT THIS PLAN
                        </button>
                    </div>
                </div>

            </div>
        </SectionContainer>
    );
}
