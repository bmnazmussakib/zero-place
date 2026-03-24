"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import SectionContainer from '../shared/SectionContainer';
import { ArrowUpRight } from 'lucide-react';

import * as motion from "motion/react-client";

import { ServiceCategory } from '@/types';

interface ServicesGridProps {
    services?: ServiceCategory[];
}

export default function ServicesGrid({ services: initialServices }: ServicesGridProps) {
    const [services, setServices] = React.useState<ServiceCategory[]>(initialServices || []);

    React.useEffect(() => {
        if (!initialServices) {
            const fetchServices = async () => {
                try {
                    const response = await fetch('/api/services-categories');
                    const data = await response.json();
                    setServices(data);
                } catch (error) {
                    console.error('Error fetching services categories:', error);
                }
            };
            fetchServices();
        }
    }, [initialServices]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 120
            } as const
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    return (
        <>
            <SectionContainer className="px-5 md:px-10 4xl:px-0 py-10 md:py-16">
                <div className="mb-6 md:mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading lg:mb-4 mb-2">All Services</h2>
                    <p className="text-sm md:text-base lg:text-lg text-[var(--text-body)] max-w-2xl">
                        We help you build a brand that stands out. From logo design to full-scale web development.
                    </p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[340px]"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            variants={fadeInUp}
                            className={cn(
                                "relative rounded-3xl overflow-hidden block",
                                service.colSpan === 2 ? "md:col-span-2" : "col-span-1"
                            )}
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group block h-full w-full relative"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="absolute inset-0 z-0 h-full w-full"
                                >
                                    {/* Background Image - Scale on Hover */}
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                </motion.div>

                                {/* Content Container */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                                    <div className="flex justify-between items-end w-full">
                                        <div className="md:space-y-3 relative w-full">
                                            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white leading-tight">
                                                {service.title}
                                            </h3>

                                            {service.description && (
                                                <motion.p
                                                    initial={{ height: 0, opacity: 0 }}
                                                    whileHover={{ height: "auto", opacity: 1 }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    className="text-gray-300 text-sm md:text-base overflow-hidden"
                                                >
                                                    {service.description}
                                                </motion.p>
                                            )}
                                        </div>

                                        {/* Arrow Icon */}
                                        <motion.div
                                            whileHover={{ x: 3, y: -3 }}
                                            className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </motion.div>
                                    </div>

                                    {/* Bottom Border Line Animation */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute bottom-0 left-0 h-1 bg-[#6c46fd]"
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </SectionContainer>
        </>
    );
}
