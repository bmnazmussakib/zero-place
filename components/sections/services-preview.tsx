"use client";

import React, { useEffect, useState } from 'react';
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

export function ServicesPreview() {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/api/services');
                if (response.ok) {
                    const data = await response.json();
                    setServices(data);
                }
            } catch (error) {
                console.error('Failed to fetch services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <section className="overflow-hidden bg-gray-50 py-10 md:py-16 lg:py-24">
            <SectionContainer className="mb-8 lg:mb-16">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-heading leading-[0.9] tracking-tighter mb-4">Our Services</h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Premium quality, fast delivery, and scalable solutions tailored to your business goals
                    </p>
                </motion.div>
            </SectionContainer>

            <SectionContainer className="py-0 ">
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="loading loading-spinner loading-lg text-primary"></div>
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {services.map((item, index) => {
                            return (
                                <Link href={`/services/${item.slug}`} key={index} className="block">
                                    <motion.div
                                        className="group relative space-y-4 bg-white p-6 rounded-md cursor-pointer border border-transparent shadow-sm h-full"
                                        variants={cardVariant}
                                        whileHover={{
                                            y: -8,
                                            borderColor: "rgba(0,0,0,0.05)",
                                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="p-3 rounded-xl bg-primary/10 w-fit transition-colors group-hover:bg-primary/20">
                                            <Image src={item.imageIcon} alt={item.title} width={30} height={30} className="object-contain" />
                                        </div>
                                        <h4 className='text-xl md:text-2xl font-light group-hover:text-primary transition-colors'>{item.title}</h4>
                                        <p className="text-sm md:text-base text-text-muted leading-relaxed">{item.description}</p>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </SectionContainer>
        </section>
    );
}
