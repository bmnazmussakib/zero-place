"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import SectionContainer from '../shared/SectionContainer';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCategory {
    title: string;
    slug: string;
    image: string;
    colSpan: number;
    description?: string;
}

interface ServicesGridProps {
    services: ServiceCategory[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <SectionContainer className="pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[340px]">
                {services.map((service, index) => (
                    <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={cn(
                            "group relative rounded-3xl overflow-hidden block transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                            // Dynamic Column Spans
                            service.colSpan === 2 ? "md:col-span-2" : "col-span-1"
                        )}
                    >
                        {/* Background Image - Scale on Hover */}
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradient Overlay & Content Container */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 md:p-8">

                            <div className="flex justify-between items-end w-full">
                                <div className="space-y-3 relative z-10 w-full">


                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
                                        {service.title}
                                    </h3>

                                    {/* Full description on hover (optional, or keep simple like WorkCard) */}
                                    {service.description && (
                                        <p className="text-gray-300 text-sm md:text-base opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                                            {service.description}
                                        </p>
                                    )}
                                </div>

                                {/* Arrow Icon */}
                                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Bottom Border Line Animation */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#6c46fd] transition-all duration-500 group-hover:w-full" />
                        </div>
                    </Link>
                ))}
            </div>
        </SectionContainer>
    );
}
