"use client";

import React, { useState } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionBadge from "@/components/shared/SectionBadge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import PremiumButton from "@/components/shared/PremiumButton";

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

    return (
        <section id="pricing" className="py-24 bg-[#F8F9FA]">
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Side: Pricing Cards */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
                        {PLANS.map((plan, index) => (
                            <div
                                key={index}
                                className="flex-1 bg-white rounded-4xl p-8 shadow-2xl shadow-black/5 border border-transparent transition-all duration-500 hover:border-primary/20 group"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-text-heading">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-text-heading tracking-tight transition-all duration-300">
                                            {getPrice(plan)}
                                        </span>
                                        <span className="text-text-muted text-sm font-medium italic">
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

                                    <button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-4 text-[11px] font-black uppercase tracking-[0.2em] mt-4 transition-all duration-300  hover:scale-[1.02]">
                                        SELECT THIS PLAN
                                    </button>
                                    
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <SectionBadge>Pricing Plan</SectionBadge>
                            <h2 className="text-5xl md:text-7xl font-black text-text-heading leading-none tracking-tighter">
                                Flexible Pricing for Every Business
                            </h2>
                            <p className="text-text-muted text-lg leading-relaxed max-w-lg">
                                &quot;Stackly Pay offers transparent, customizable pricing plans tailored to startups, SMEs, and enterprises—ensuring affordability, scalability.&quot;
                            </p>
                        </div>

                        {/* Custom Toggle */}
                        <div className="flex items-center gap-4  shadow-primary/5 shrink-0">
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
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </section>
    );
}
