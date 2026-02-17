"use client";

import React from 'react';
import PremiumButton from "@/components/shared/PremiumButton";

export default function ServicesHeroCTA() {
    return (
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 relative z-10">
            {/* Subtle warm glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 blur-3xl -z-10 rounded-full mix-blend-multiply" />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight text-[#0f0e21]">
                Scale your success with outstanding design
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-body)] max-w-3xl mx-auto mb-10 leading-relaxed">
                Leading companies trust Duck.design to deliver high-quality design at scale. Book a call and start working with a dedicated team of professional designers.
            </p>
            <div className="relative z-20">
                <PremiumButton
                    href="/book-a-call"
                    size="large"
                    className="font-bold tracking-wide"
                >
                    BOOK A CALL
                </PremiumButton>
            </div>
        </div>
    );
}
