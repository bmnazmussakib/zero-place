"use client";

import React from 'react';
import SectionContainer from "@/components/shared/SectionContainer";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { portfolioItems, categories } from "@/lib/constants";

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen">
      <SectionContainer className="px-5 md:px-10 4xl:px-0 py-10 md:py-16 ">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-10 lg:mb-20 space-y-4 lg:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black tracking-tighter text-text-heading flex items-center gap-4">
            Zeroplace Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted max-w-3xl">
            No matter the industry you're in, or the asset you need, we can design it for you
          </p>
        </div>

        <PortfolioGrid categories={categories} items={portfolioItems} />
      </SectionContainer>
    </div>
  );
}

