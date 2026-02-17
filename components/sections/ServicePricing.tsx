// components/PricingPlanVisual.tsx

"use client";

import React, { useState } from 'react';
import SectionContainer from '../shared/SectionContainer';

type Plan = '1month' | '3months' | '6months';

interface PlanInfo {
    price: string;
    discountLabel?: string;
    features: string[];
}

const planData: Record<Plan, PlanInfo> = {
    '1month': {
        price: '$1199',
        discountLabel: undefined,
        features: [
            'Banner Ads',
            'Social media creatives',
            'Blog Graphics',
            'Clothing & Merchandise Design',
            'Packaging and Label',
            'Any other graphics needed',
        ],
    },
    '3months': {
        price: '$1079', // 1199 × 0.9 ≈ 10% off
        discountLabel: '10% off',
        features: [
            'Banner Ads',
            'Social media creatives',
            'Blog Graphics',
            'Clothing & Merchandise Design',
            'Packaging and Label',
            'Any other graphics needed',
            // Optional: add extra benefit here
        ],
    },
    '6months': {
        price: '$959', // 1199 × 0.8 ≈ 20% off
        discountLabel: '20% off',
        features: [
            'Banner Ads',
            'Social media creatives',
            'Blog Graphics',
            'Clothing & Merchandise Design',
            'Packaging and Label',
            'Any other graphics needed',
            // Optional: add more value here
        ],
    },
};

export default function ServicePricing() {
    const [activePlan, setActivePlan] = useState<Plan>('1month');
    const current = planData[activePlan];

    return (
        <>

            <div className="relative py-20 md:py-28 bg-gradient-to-br from-[#6c46fd]/5 via-white to-indigo-50/40 overflow-hidden">
                {/* Fixed background blobs — stays the same across tabs */}
                <SectionContainer>
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -left-20 top-10 h-[140%] w-[140%] rounded-[40%] bg-gradient-to-br from-[#6c46fd]/10 to-indigo-500/5 blur-3xl opacity-70 -rotate-6"></div>
                        <div className="absolute -right-40 bottom-0 h-[120%] w-[150%] rounded-[45%] bg-gradient-to-tl from-[#6c46fd]/15 via-purple-400/5 to-transparent blur-3xl opacity-60 rotate-12"></div>
                    </div>

                    <div className="relative ">
                        {/* DaisyUI Tabs – unique name="pricing_tabs" */}
                        <div className="tabs tabs-bordered tabs-lg absolute top-8 right-8 md:top-10 md:right-12 lg:top-12 lg:right-16">
                            <input
                                type="radio"
                                name="pricing_tabs"
                                className="tab [--tab-bg:white] [--tab-border-color:white/30] text-[#0f0e21]"
                                aria-label="1 month"
                                defaultChecked
                                onChange={() => setActivePlan('1month')}
                            />
                            <input
                                type="radio"
                                name="pricing_tabs"
                                className="tab [--tab-bg:white] [--tab-border-color:white/30] text-[#0f0e21]"
                                aria-label="3 months 10% off"
                                onChange={() => setActivePlan('3months')}
                            />
                            <input
                                type="radio"
                                name="pricing_tabs"
                                className="tab [--tab-bg:white] [--tab-border-color:white/30] text-[#0f0e21]"
                                aria-label="6 months 20% off"
                                onChange={() => setActivePlan('6months')}
                            />
                        </div>
                        {/* Main card with irregular shape + brand gradient */}
                        <div
                            className='relative overflow-hidden text-white p-8 md:p-12 lg:p-16 mask-[url(/images/price_cta-bg.png)] bg-gradient-to-br from-[#6c46fd]/80 via-indigo-600 to-purple-700 w-full h-full mask-top-right mask-cover mask-no-repeat rounded-4xl'
                        >
                            {/* Visual tag */}
                            <div className="absolute top-10 left-8 md:left-12 ">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-5 py-2 text-sm font-medium text-white border border-white/30 shadow-sm">
                                    <span className="text-lg">✎</span> Visual
                                </span>
                            </div>



                            {/* Main content – changes with tab */}
                            <div className="mt-10 md:mt-10 lg:mt-14 max-w-3xl">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                                    Graphic Design
                                </h2>

                                <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
                                    Graphic designs for day-to-day marketing needs. Within this plan you get a dedicated designer for:
                                </p>

                                <ul className="space-y-4 md:space-y-5 text-base md:text-lg opacity-95">
                                    {current.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/25 text-white text-sm font-bold">
                                                ✓
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price & CTA – bottom right, updates with tab */}
                            <div className="absolute bottom-10 md:bottom-12 lg:bottom-16 right-8 md:right-12 lg:right-16 text-right">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-3">
                                    {current.price}
                                    <span className="text-2xl md:text-3xl font-bold opacity-80"> /PER MONTH</span>
                                </div>

                                {current.discountLabel && (
                                    <div className="text-xl font-semibold opacity-90 mb-6">
                                        {current.discountLabel}
                                    </div>
                                )}

                                <button
                                    className="
                mt-4 inline-block rounded-full bg-white px-10 py-5 text-lg md:text-xl
                font-bold text-[#0f0e21] shadow-xl
                hover:bg-gray-100 active:scale-95 transition-all
              "
                                >
                                    GET STARTED
                                </button>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </div>
        </>
    );
}