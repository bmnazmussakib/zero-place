"use client";

import React from 'react';
import SectionContainer from "@/components/shared/SectionContainer";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { portfolioItems, categories } from "@/lib/constants";

export default function PortfolioPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <SectionContainer className="pt-24 pb-32">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-6 md:gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-8xl font-heading font-black tracking-tighter text-text-heading flex items-center gap-4">
              Zeroplace
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-8xl font-heading font-black tracking-tighter text-text-heading">
              Portfolio
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl font-medium leading-relaxed">
            No matter the industry you're in, or the asset you need, we can design it for you
          </p>
        </div>

        <PortfolioGrid categories={categories} items={portfolioItems} />
      </SectionContainer>
    </div>
  );
}

