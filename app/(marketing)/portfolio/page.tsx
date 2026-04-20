import React from 'react';
import SectionContainer from "@/components/shared/SectionContainer";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { getPortfolioItems } from "@/lib/data-fetching";

export default async function PortfolioPage() {
  const itemsRaw = await getPortfolioItems();
  const items = JSON.parse(JSON.stringify(itemsRaw));

  // Extract unique categories dynamically and ensure "All" is first
  const dynamicCategories = Array.from(new Set(items.map((item: any) => item.category))) as string[];
  const categories = ["All", ...dynamicCategories.sort()];

  return (
    <div className="bg-white min-h-screen">
      <SectionContainer className="px-5 md:px-10 4xl:px-0 py-10 md:py-16 ">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-10 lg:mb-20 space-y-4 lg:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black tracking-tighter text-text-heading flex items-center gap-4 uppercase">
            Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted max-w-3xl">
            A showcase of our best designs and creative solutions developed for modern brands across various industries.
          </p>
        </div>

        <PortfolioGrid categories={categories} items={items} />
      </SectionContainer>
    </div>
  );
}
