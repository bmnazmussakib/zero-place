"use client";

import React, { useState } from 'react';
import SectionContainer from "@/components/shared/SectionContainer";
import PortfolioCard from "@/components/cards/PortfolioCard";
import { cn } from "@/lib/utils";

const portfolioItems = [
  {
    title: "Brand Identity - Zeno",
    category: "Branding",
    image: "/images/work/examples-10.png",
  },
  {
    title: "Mobile App - Fitness Tracker",
    category: "UI/UX Design + Mobile App",
    image: "/images/work/examples-17.png",
  },
  {
    title: "E-Commerce Experience",
    category: "Website",
    image: "/images/work/examples-11.png",
  },
  {
    title: "Presentation Deck - Pitch",
    category: "Presentation Design",
    image: "/images/work/examples-5-1.png",
  },
  {
    title: "SaaS Dashboard Concept",
    category: "SAAS",
    image: "/images/work/examples-4-1.png",
  },
  {
    title: "Social Media Banner Set",
    category: "Social Media banners & Ad Creative",
    image: "/images/work/examples-3-1.png",
  },
  {
    title: "Company Quarterly Report",
    category: "Infographics",
    image: "/images/work/examples-12.png",
  },
  {
    title: "Modern Logo Collection",
    category: "Logo",
    image: "/images/work/examples-9-1.png",
  },
];

const categories = [
  "All", "Branding", "Infographics", "Logo", "Presentation Design",
  "UI/UX Design + Mobile App", "Website", "SAAS",
  "Social Media banners & Ad Creative", "Gifs", "Printing", "Videos"
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <SectionContainer className="pt-24 pb-32">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-6 md:gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-8xl font-heading font-black tracking-tighter text-text-heading flex items-center gap-4">
              Zeroplace
            </h1>
            {/* <div className="relative -rotate-12">
              <div className="bg-primary border-4 border-black px-4 py-2 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-xs md:text-sm font-black text-white whitespace-nowrap uppercase tracking-tighter block">
                  Featured <br /> Works
                </span>
              </div>
            </div> */}
            <h1 className="text-3xl md:text-4xl lg:text-8xl font-heading font-black tracking-tighter text-text-heading">
              Portfolio
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl font-medium leading-relaxed">
            No matter the industry you're in, or the asset you need, we can design it for you
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-col items-center mb-20">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-3 rounded-full border-1 border-primary/50 font-bold text-sm uppercase tracking-tighter transition-all",
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary hover:bg-gray-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.title}
                title={item.title}
                category={item.category}
                image={item.image}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[3rem] border-4 border-dashed border-gray-200">
            <p className="text-2xl font-heading font-black text-text-muted uppercase tracking-tighter">
              More items coming soon to {activeCategory}!
            </p>
          </div>
        )}
      </SectionContainer>
    </div>
  );
}

