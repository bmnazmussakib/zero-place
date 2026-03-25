"use client";

import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from "motion/react-client";
import { ServiceItem } from '@/types';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100
        } as const
    }
};

interface ServicesListProps {
    services: ServiceItem[];
}

export default function ServicesList({ services }: ServicesListProps) {
    return (
        <section className="overflow-hidden bg-white py-12 md:py-20 lg:py-28">
            <SectionContainer className="mb-10 lg:mb-20">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-[#1C1C1E] leading-[0.9] tracking-tighter mb-6 uppercase">
                        Our Expertise
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        World-class design and development services. We don't just build, we craft experiences that drive real business results.
                    </p>
                </motion.div>
            </SectionContainer>

            <SectionContainer className="py-0">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {services.map((item, index) => (
                        <Link href={`/services/${item.slug}`} key={item.id} className="block group">
                            <motion.div
                                className="relative bg-[#F8F9FA] p-8 lg:p-10 rounded-3xl cursor-pointer border border-transparent transition-all duration-300 h-full overflow-hidden flex flex-col"
                                variants={cardVariant}
                                whileHover={{
                                    y: -10,
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "rgba(108, 70, 253, 0.1)",
                                    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.08), 0 18px 36px -18px rgba(0, 0, 0, 0.05)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="mb-8 p-4 rounded-2xl bg-white w-fit shadow-sm group-hover:bg-[#6c46fd]/10 transition-colors duration-300">
                                    {item.imageIcon ? (
                                        <Image 
                                            src={item.imageIcon} 
                                            alt={item.title} 
                                            width={40} 
                                            height={40} 
                                            className="object-contain" 
                                        />
                                    ) : (
                                        <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full" />
                                    )}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[#1C1C1E] group-hover:text-[#6c46fd] transition-colors duration-300 leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 flex-grow">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-[#6c46fd] font-bold text-sm uppercase tracking-wider gap-2">
                                    Learn More
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>

                                {/* Animated background accent */}
                                <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-[#6c46fd]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </SectionContainer>
        </section>
    );
}
