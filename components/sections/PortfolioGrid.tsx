"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import PortfolioCard from "@/components/cards/PortfolioCard";

interface PortfolioItem {
    title: string;
    category: string;
    image: string;
}

interface PortfolioGridProps {
    categories: string[];
    items: PortfolioItem[];
}

export default function PortfolioGrid({ categories, items }: PortfolioGridProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? items
        : items.filter(item => item.category === activeCategory);

    return (
        <>
            {/* Categories Tabs */}
            <div className="flex flex-col items-center mb-20">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-3 rounded-full border border-primary/50 font-bold text-sm uppercase tracking-tighter transition-all",
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
        </>
    );
}
