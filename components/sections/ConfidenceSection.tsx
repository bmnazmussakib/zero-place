"use client";

import React from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionBadge from "@/components/shared/SectionBadge";
import { Zap, ShieldCheck, Store } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: Zap,
        title: "Lightning-Fast Transactions",
        description: "Experience instant, reliable payments designed to keep your business moving at the speed of thought."
    },
    {
        icon: ShieldCheck,
        title: "Bank-Grade Security",
        description: "Protecting every transaction with advanced encryption and fraud detection systems you can trust."
    },
    {
        icon: Store,
        title: "Trusted by Businesses",
        description: "Thousands of businesses worldwide rely on Zeroplace for secure and scalable payment solutions."
    }
];

export default function ConfidenceSection() {
    return (
        <section className="py-24 bg-section overflow-hidden">
            <SectionContainer>
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                    <div className="lg:col-span-6 space-y-8">
                        <div className="space-y-4">
                            <SectionBadge className="bg-white/50 border-primary/20 text-primary">
                                Smarter Way to Pay
                            </SectionBadge>
                            <h2 className="text-5xl md:text-7xl font-heading font-black text-text-heading leading-[0.9] tracking-tighter">
                                Powering Payments <br /> with Confidence
                            </h2>
                            <p className="text-text-body text-lg leading-relaxed max-w-lg font-medium">
                                Zeroplace delivers secure, seamless, and reliable transactions with advanced protection and global reach, empowering businesses to build trust.
                            </p>
                        </div>

                        <button className="bg-primary text-white px-8 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:scale-[1.05]">
                            GET APP DOWNLOAD
                        </button>
                    </div>

                    <div className="lg:col-span-6 relative">
                        <div className="relative z-10 p-4 border-8 border-primary/5 rounded-4xl bg-white/20 backdrop-blur-sm">
                            <img
                                src="/images/mockups/control-plan.png"
                                alt="Dashboard Mockup"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] -z-10" />
                    </div>
                </div>

                {/* Bottom Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl border border-primary/5 shadow-xl shadow-primary/5 flex flex-col gap-6 transition-all hover:border-primary/20 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <feature.icon size={28} strokeWidth={2.5} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-heading font-black text-text-heading">
                                    {feature.title}
                                </h3>
                                <p className="text-text-muted text-sm font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
