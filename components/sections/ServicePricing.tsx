// components/PricingPlanVisual.tsx

"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import SectionContainer from '../shared/SectionContainer';
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

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
        ],
    },
};

export default function ServicePricing() {
    const [activePlan, setActivePlan] = useState<Plan>('1month');
    const current = planData[activePlan];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 120
            } as const
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="relative py-20 md:py-28 bg-linear-to-br from-[#6c46fd]/5 via-white to-indigo-50/40 overflow-hidden">
            {/* Fixed background blobs — breathing animation */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.7, 0.5],
                        rotate: [-6, -4, -6]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -left-20 top-10 h-[140%] w-[140%] rounded-[40%] bg-linear-to-br from-[#6c46fd]/10 to-indigo-500/5 blur-3xl opacity-70 -rotate-6"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.4, 0.6, 0.4],
                        rotate: [12, 10, 12]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute -right-40 bottom-0 h-[120%] w-[150%] rounded-[45%] bg-linear-to-tl from-[#6c46fd]/15 via-purple-400/5 to-transparent blur-3xl opacity-60 rotate-12"
                />
            </div>

            <SectionContainer>
                <div className="relative">
                    {/* Tabs Entrance */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-1.5 lg:mb-0 mb-10 w-fit mx-auto lg:absolute static top-8 right-8 md:top-10 md:right-12 lg:top-12 lg:right-16 z-20 bg-white rounded-full border border-primary p-2 shadow-lg"
                    >
                        {(['1month', '3months', '6months'] as Plan[]).map((plan) => {
                            const isActive = activePlan === plan;
                            return (
                                <button
                                    key={plan}
                                    onClick={() => setActivePlan(plan)}
                                    className={cn(
                                        "relative px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-tighter transition-colors duration-300",
                                        isActive ? "text-white" : "text-primary hover:bg-gray-50"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="pricing-tab-highlight"
                                            className="absolute inset-0 bg-primary rounded-full z-0"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {plan === '1month' ? '1 month' : plan.replace('months', ' months')}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* Main card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className='relative overflow-hidden text-white p-8 md:p-12 lg:p-16 xl:mask-[url(/images/price_cta-bg.png)] bg-linear-to-br from-[#6c46fd]/80 via-indigo-600 to-purple-700 w-full h-full xl:mask-top-right xl:mask-cover xl:mask-no-repeat rounded-4xl shadow-2xl shadow-[#6c46fd]/20'
                    >
                        {/* Visual tag */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:absolute top-10 left-8 md:left-12 mb-8 lg:mb-0"
                        >
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-5 py-2 text-sm font-medium text-white border border-white/30 shadow-sm">
                                <span className="text-lg">✎</span> Visual
                            </span>
                        </motion.div>

                        <div className="mt-4 md:mt-10 lg:mt-14 max-w-3xl">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white"
                            >
                                Graphic Design
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed"
                            >
                                Graphic designs for day-to-day marketing needs. Within this plan you get a dedicated designer for:
                            </motion.p>

                            <AnimatePresence mode="wait">
                                <motion.ul
                                    key={activePlan}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, x: -20 }}
                                    variants={containerVariants}
                                    className="space-y-4 md:space-y-5 text-base md:text-lg opacity-95"
                                >
                                    {current.features.map((feature: string, idx: number) => (
                                        <motion.li
                                            key={`${activePlan}-${idx}`}
                                            variants={fadeInUp}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/25 text-white text-sm font-bold">
                                                ✓
                                            </span>
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </AnimatePresence>
                        </div>

                        {/* Price & CTA Block */}
                        <div className="lg:absolute static bottom-10 md:bottom-12 lg:bottom-16 right-8 md:right-12 lg:right-16 lg:text-right text-center mt-12 lg:mt-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePlan}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {current.discountLabel && (
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-xl font-semibold opacity-90 mb-2"
                                        >
                                            {current.discountLabel}
                                        </motion.div>
                                    )}
                                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3">
                                        {current.price}
                                        <span className="text-xl md:text-2xl font-bold opacity-80"> /PER MONTH</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-4 inline-block rounded-full bg-white px-8 py-4 text-lg md:text-lg font-bold text-[#0f0e21] shadow-xl transition-colors hover:bg-gray-50"
                            >
                                GET STARTED
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </SectionContainer>
        </div>
    );
}