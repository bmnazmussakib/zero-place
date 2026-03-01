'use client'
import { PricingTier } from "@/types";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import SectionBadge from "../shared/SectionBadge";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import PremiumButton from "../shared/PremiumButton";

interface PricingHeroProps {
    badge: string;
    titlePrefix: string;
    plans: PricingTier[];
    priceSuffix?: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
} as const;

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 120
        }
    }
} as const;

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
        .filter((_, idx) => selectedFeatures.has(idx))
        .reduce((sum, f) => sum + f.price, 0);

    return (
        <SectionContainer className="pt-24 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                {/* Left Side: Content & Plan List */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="lg:col-span-7 space-y-12"
                >
                    <div className="space-y-6">
                        <motion.div variants={fadeInUp}>
                            <SectionBadge>{badge}</SectionBadge>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-heading font-black text-text-heading leading-[1] tracking-normal">
                            {titlePrefix} <br />
                            <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                {activePlan.name}
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-text-body text-lg leading-relaxed max-w-2xl font-medium">
                            &quot;Zeroplace offers transparent, customizable pricing plans tailored to startups, SMEs, and enterprises—ensuring affordability, scalability.&quot;
                        </motion.p>
                    </div>

                    {/* Interactive Plan List */}
                    <motion.div variants={containerVariants} className="divide-y divide-black/5 border-t border-b border-black/5 relative">
                        {plans.map((tier, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className="relative group flex items-center justify-between py-6 cursor-pointer transition-colors duration-300"
                                >
                                    {/* Active Background Highlight - Layout Animation */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-plan-bg"
                                            className="absolute inset-0 bg-primary/5 -mx-4 px-4 z-0"
                                            initial={false}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    <div className="relative z-10 flex items-center gap-12 pl-0 transition-all duration-300 group-hover:pl-4">
                                        <h3 className={cn(
                                            "text-xl md:text-2xl font-heading font-black leading-tight transition-colors",
                                            isActive ? "text-primary " : "text-text-heading"
                                        )}>
                                            {tier.name}
                                        </h3>
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={cn(
                                            "relative z-10 px-5 py-2 rounded-full border border-black font-bold text-xs uppercase tracking-widest transition-all",
                                            isActive
                                                ? "bg-primary text-white border-primary"
                                                : "bg-white text-black hover:bg-black hover:text-white"
                                        )}
                                    >
                                        View
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Right Side: Sticky Pricing Card */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, type: "spring", damping: 20, stiffness: 100 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 border border-black/5"
                        >
                            <div className="mb-8">
                                <motion.h3 layout className="text-2xl md:text-3xl font-heading font-black text-text-heading leading-tight mb-3">
                                    {activePlan.name}
                                </motion.h3>
                                <motion.p layout className="text-text-muted text-sm font-medium mb-5">
                                    {activePlan.description}
                                </motion.p>
                                <motion.div layout className="flex items-baseline gap-2">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={totalPrice}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-5xl font-heading font-black text-text-heading"
                                        >
                                            ${totalPrice.toLocaleString()}
                                        </motion.span>
                                    </AnimatePresence>
                                    <span className="text-text-muted font-bold text-lg">{priceSuffix}</span>
                                </motion.div>
                                <motion.p layout className="mt-2 text-xs font-bold text-text-muted uppercase tracking-widest">
                                    {selectedFeatures.size} feature{selectedFeatures.size !== 1 ? 's' : ''} selected
                                </motion.p>
                            </div>

                            {/* Selectable Feature List */}
                            <div className="bg-[#F1F4FA] rounded-3xl p-6 space-y-3 mb-8">
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-3">
                                    Select features to include
                                </p>
                                <AnimatePresence>
                                    {activePlan.features.map((feature, i) => {
                                        const isSelected = selectedFeatures.has(i);
                                        return (
                                            <motion.div
                                                key={feature.name}
                                                layout
                                                onClick={() => toggleFeature(i)}
                                                whileHover={{ scale: 1.02, x: 5 }}
                                                whileTap={{ scale: 0.98 }}
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
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>

                            <PremiumButton
                                size='large'
                                href="/contact"
                                className='w-full'
                            >
                                Get started — ${totalPrice.toLocaleString()}
                            </PremiumButton>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </SectionContainer>
    );
}
