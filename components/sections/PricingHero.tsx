"use client";

import React, { useState, useEffect } from 'react';
import SectionContainer from "@/components/shared/SectionContainer";
import { PricingTier } from "@/types";
import SectionBadge from "@/components/shared/SectionBadge";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import PremiumButton from '../shared/PremiumButton';

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
    // Track which feature indices are selected for the active tier
    const [selectedFeatures, setSelectedFeatures] = useState<Set<number>>(
        new Set([0, 1, 2])
    );

    // When the active plan changes, reset to first 3 features selected
    useEffect(() => {
        setSelectedFeatures(new Set([0, 1, 2]));
    }, [activeIndex]);

    const activePlan = plans[activeIndex];

    const toggleFeature = (index: number) => {
        const next = new Set(selectedFeatures);
        if (next.has(index)) {
            next.delete(index);
        } else {
            next.add(index);
        }
        setSelectedFeatures(next);
    };

    const totalPrice = activePlan.features
        .filter((_, i) => selectedFeatures.has(i))
        .reduce((sum, f) => sum + f.price, 0);

    return (
        <SectionContainer className="pt-24 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                {/* Left Side: Content & Plan List */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-6">
                        <SectionBadge>{badge}</SectionBadge>
                        <h1 className="text-5xl md:text-6xl font-heading font-black text-text-heading leading-[1] tracking-normal">
                            {titlePrefix} <br />
                            <span className="text-primary italic">
                                {activePlan.name}
                            </span>
                        </h1>
                        <p className="text-text-body text-lg leading-relaxed max-w-2xl font-medium">
                            &quot;Zeroplace offers transparent, customizable pricing plans tailored to startups, SMEs, and enterprises—ensuring affordability, scalability.&quot;
                        </p>
                    </div>

                    {/* Interactive Plan List */}
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
                                    <h3 className={cn(
                                        "text-2xl md:text-3xl font-heading font-black text-text-heading leading-tight transition-all",
                                        activeIndex === index ? "text-primary scale-110" : "text-text-heading"
                                    )}>
                                        {tier.name}
                                    </h3>
                                </div>

                                <div className={cn(
                                    "px-8 py-3 rounded-full border border-black font-bold text-xs uppercase tracking-widest transition-all",
                                    activeIndex === index
                                        ? "bg-primary text-white border-primary"
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
                    <div key={activeIndex} className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 border border-black/5 animate-in fade-in slide-in-from-right-8 duration-500">

                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-heading font-black text-text-heading leading-tight mb-3">{activePlan.name}</h3>
                            <p className="text-text-muted text-sm font-medium mb-5">{activePlan.description}</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-heading font-black text-text-heading">
                                    ${totalPrice.toLocaleString()}
                                </span>
                                <span className="text-text-muted font-bold text-lg">{priceSuffix}</span>
                            </div>
                            <p className="mt-2 text-xs font-bold text-text-muted uppercase tracking-widest">
                                {selectedFeatures.size} feature{selectedFeatures.size !== 1 ? 's' : ''} selected
                            </p>
                        </div>

                        {/* Selectable Feature List */}
                        <div className="bg-[#F1F4FA] rounded-3xl p-6 space-y-3 mb-8">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-3">
                                Select features to include
                            </p>
                            {activePlan.features.map((feature, i) => {
                                const isSelected = selectedFeatures.has(i);
                                return (
                                    <div
                                        key={i}
                                        onClick={() => toggleFeature(i)}
                                        className={cn(
                                            "flex items-center justify-between gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-200",
                                            isSelected
                                                ? "bg-white shadow-sm shadow-black/5"
                                                : "bg-transparent hover:bg-white/60"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all",
                                                isSelected
                                                    ? "bg-[#1C3A27]"
                                                    : "border-2 border-black/20"
                                            )}>
                                                {isSelected && <Check size={11} className="text-white stroke-[3]" />}
                                            </div>
                                            <span className={cn(
                                                "text-sm font-bold leading-tight transition-all",
                                                isSelected ? "text-text-heading" : "text-text-muted"
                                            )}>
                                                {feature.name}
                                            </span>
                                        </div>
                                        <span className={cn(
                                            "text-xs font-black shrink-0 transition-all",
                                            isSelected ? "text-primary" : "text-text-muted"
                                        )}>
                                            {feature.price === 0 ? "Free" : `+$${feature.price}`}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <PremiumButton size='large' href="/contact" className='w-full'>
                            Get started — ${totalPrice.toLocaleString()}
                        </PremiumButton>
                    </div>
                </div>

            </div>
        </SectionContainer>
    );
}
