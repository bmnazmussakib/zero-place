"use client";

import React from 'react';
import { MoveRight } from "lucide-react";
import Link from "next/link";
import PremiumButton from "../shared/PremiumButton";
import SectionBadge from '../shared/SectionBadge';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import SectionContainer from '../shared/SectionContainer';
import * as motion from "motion/react-client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const works = [
    {
        title: "Modern Brand Identity",
        category: "Branding",
        image: "/images/work/examples-10.png",
    },
    {
        title: "E-commerce Interface",
        category: "UI/UX",
        image: "/images/work/examples-11.png",
    },
    {
        title: "Corporate Platform",
        category: "Web Design",
        image: "/images/work/examples-12.png",
    },
    {
        title: "Mobile App Concept",
        category: "Development",
        image: "/images/work/examples-17.png",
    },
    {
        title: "Creative Illustration",
        category: "Design",
        image: "/images/work/examples-3-1.png",
    },
    {
        title: "SaaS Dashboard",
        category: "UI/UX",
        image: "/images/work/examples-4-1.png",
    },
    {
        title: "Marketing Deck",
        category: "Marketing",
        image: "/images/work/examples-5-1.png",
    },
    {
        title: "Brand Style Guide",
        category: "Branding",
        image: "/images/work/examples-9-1.png",
    }
];

export function OurWorks() {
    const swiperConfig = {
        modules: [Autoplay, FreeMode],
        loop: true,
        speed: 50000,
        freeMode: true,
        allowTouchMove: true,
        breakpoints: {
            0: { slidesPerView: 2.2, spaceBetween: 10 },
            480: { slidesPerView: 2.2, spaceBetween: 10 },
            768: { slidesPerView: 3.2, spaceBetween: 10 },
            1024: { slidesPerView: 4.2, spaceBetween: 20 },
            1440: { slidesPerView: 5.2, spaceBetween: 20 },
            1920: { slidesPerView: 3.2, spaceBetween: 20 },
        },
    };

    const fadeInUp = {
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
        <section className="py-8 lg:py-20 overflow-hidden">
            {/* Header - centered */}
            <SectionContainer className="mb-8 md:mb-12 lg:mb-16">
                <motion.div
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={fadeInUp}>
                        <SectionBadge className="mb-4">
                            Portfolio
                        </SectionBadge>
                    </motion.div>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl font-heading font-black text-text-heading leading-[0.9] tracking-tighter"
                    >
                        Our <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Creative</span> Masterpieces
                    </motion.h2>
                </motion.div>
            </SectionContainer>

            {/* Sliders */}
            <motion.div
                className="relative w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
            >
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Top row - moving left */}
                <Swiper
                    {...swiperConfig}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    className="services-swiper marquee-linear w-full px-4 md:px-6 mb-6 md:mb-8"
                >
                    {works.map((work, index) => (
                        <SwiperSlide key={index}>
                            <WorkCard work={work} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom row - moving right */}
                <Swiper
                    {...swiperConfig}
                    autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                    className="services-swiper marquee-linear w-full px-4 md:px-6"
                >
                    {[...works].reverse().map((work, index) => (
                        <SwiperSlide key={index}>
                            <WorkCard work={work} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            {/* Call-to-action button - centered, below sliders */}
            <div className="mt-12 md:mt-16 flex justify-center hidden">
                <PremiumButton
                    href="/works"
                    variant="outline"
                    className=""
                >
                    Read More
                </PremiumButton>
            </div>
        </section>
    );
}

function WorkCard({ work, index }: { work: any; index: number }) {
    return (
        <motion.div
            className="group relative aspect-5/4 overflow-hidden rounded-2xl bg-muted border border-transparent"
            whileHover={{
                y: -5,
                borderColor: "rgba(0,0,0,0.05)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <img
                src={work.image}
                alt={work.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 md:p-6 text-left">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-primary text-xs font-semibold mb-2 px-2.5 py-1 border border-primary-soft/30 bg-white/90 rounded-full w-fit group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                    {work.category}
                </motion.span>
                <p className="text-white font-heading font-bold text-base md:text-lg leading-tight">
                    {work.title}
                </p>

                <div className="mt-4 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
        </motion.div>
    );
}