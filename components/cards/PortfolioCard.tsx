import React from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';

interface PortfolioCardProps {
    title: string;
    category: string;
    image: string;
    index: number;
}

const colors = [
    "bg-[#FF9666]", // Orange
    "bg-[#D9FF00]", // Lime
    "bg-[#1C1B29]", // Dark
    "bg-[#7C5CFF]", // Purple
];

export default function PortfolioCard({ title, category, image, index }: PortfolioCardProps) {
    const bgColor = colors[index % colors.length];

    return (
        <div className={cn(
            "group relative aspect-4/3 rounded-4xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
        )}>
            <div className="relative h-full w-full bg-white rounded-4xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-sm">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Hover Overlay with info - optional but premium */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-50">
                    <span className="bg-white/90 backdrop-blur-sm text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                        {category}
                    </span>
                    <h3 className="text-white text-2xl font-heading font-black drop-shadow-md">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
}
