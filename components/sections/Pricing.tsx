"use client";

import React, { useState } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionBadge from "@/components/shared/SectionBadge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import PremiumButton from "@/components/shared/PremiumButton";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const PLANS = [
    {
        name: "Starter Plan",
        subscriptionPrice: "$49",
        oneTimePrice: "$499",
        features: [
            "Perfect for small businesses",
            "2.5% + $0.30 per transaction",
            "No setup fees",
            "Basic support",
            "Custom rates",
        ],
    },
    {
        name: "Growth Plan",
        subscriptionPrice: "$99",
        oneTimePrice: "$999",
        features: [
            "Ideal for growing SMEs",
            "2.0% + $0.25 per transaction",
            "Advanced analytics",
            "Priority support",
            "Dedicated account manager",
        ],
    },
];

type BillingCycle = "subscription" | "onetime";

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>("subscription");

    const getPrice = (plan: typeof PLANS[0]) => {
        return billingCycle === "subscription" ? plan.subscriptionPrice : plan.oneTimePrice;
    };

    const getLabel = () => {
        return billingCycle === "subscription" ? "/per month" : "/lifetime";
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
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
                delayChildren: 0.1
            }
        }
    };

    return (
        <section id="pricing" className="py-24 bg-footer-bg overflow-hidden">
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Side: Pricing Cards */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col md:flex-row gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {PLANS.map((plan, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -8,
                                    borderColor: "rgba(108, 70, 253, 0.2)",
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="flex-1 bg-white rounded-4xl p-8 shadow-2xl shadow-black/5 border border-transparent group cursor-default"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-heading font-black text-text-heading leading-tight">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 h-14">
                                        <div className="relative w-24 h-full">
                                            <AnimatePresence mode="wait">
                                                <motion.span
                                                    key={billingCycle}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -20, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                                    className="absolute inset-x-0 bottom-0 text-5xl font-black text-text-heading tracking-tight"
                                                >
                                                    {getPrice(plan)}
                                                </motion.span>
                                            </AnimatePresence>
                                        </div>
                                        <span className="text-text-muted text-sm font-medium italic self-end pb-1 translate-y-[-4px]">
                                            {getLabel()}
                                        </span>
                                    </div>

                                    {/* Features List */}
                                    <div className="bg-[#F1F4FA] rounded-[1.5rem] p-6 space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="mt-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center shrink-0">
                                                    <Check size={10} className="text-white stroke-4" />
                                                </div>
                                                <span className="text-[13px] font-semibold text-text-heading leading-tight">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-4 text-[11px] font-black uppercase tracking-[0.2em] mt-4 transition-all duration-300">
                                        SELECT THIS PLAN
                                    </button>

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Side: Text Content */}
                    <motion.div
                        className="lg:col-span-5 space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <div className="space-y-4">
                            <motion.div variants={fadeInUp}>
                                <SectionBadge>Pricing Plan</SectionBadge>
                            </motion.div>
                            <motion.h2
                                variants={fadeInUp}
                                className="text-5xl md:text-6xl font-heading font-black text-white leading-[0.9] tracking-tighter"
                            >
                                Flexible <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span> for Every Business
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                className="text-text-muted text-lg leading-relaxed max-w-lg"
                            >
                                &quot;Stackly Pay offers transparent, customizable pricing plans tailored to startups, SMEs, and enterprises—ensuring affordability, scalability.&quot;
                            </motion.p>
                        </div>

                        {/* Custom Toggle */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex items-center gap-4  shadow-primary/5 shrink-0"
                        >
                            <span className={cn(
                                "text-sm font-black uppercase tracking-widest transition-colors",
                                billingCycle === "subscription" ? "text-primary" : "text-text-muted"
                            )}>
                                Subscription
                            </span>
                            <input
                                type="checkbox"
                                className="toggle toggle-primary bg-primary border-neutral-200 checked:bg-white checked:border-primary"
                                checked={billingCycle === "onetime"}
                                onChange={(e) => setBillingCycle(e.target.checked ? "onetime" : "subscription")}
                            />
                            <span className={cn(
                                "text-sm font-black uppercase tracking-widest transition-colors",
                                billingCycle === "onetime" ? "text-primary" : "text-text-muted"
                            )}>
                                One-Time
                            </span>
                        </motion.div>
                    </motion.div>

                </div>
            </SectionContainer>
        </section>
    );
}
