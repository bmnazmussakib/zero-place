"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import PremiumButton from "../shared/PremiumButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import SectionContainer from '../shared/SectionContainer';

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
            480: { slidesPerView: 2.2, spaceBetween: 10 },
            768: { slidesPerView: 3.2, spaceBetween: 10 },
            1024: { slidesPerView: 4.2, spaceBetween: 20 },
            1440: { slidesPerView: 5.2, spaceBetween: 20 },
            1920: { slidesPerView: 3.2, spaceBetween: 20 },
        },
    };

    return (
        <section className="py-20 overflow-hidden">
            <SectionContainer className="py-0 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                            Portfolio
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Our <span className="text-primary">Creative</span> Masterpieces
                        </h2>
                    </div>
                    <PremiumButton
                        asChild
                        variant="outline"
                        className="text-primary border-primary/20 hover:border-primary"
                    >
                        <Link href="/works">
                            Explore Full Portfolio
                        </Link>
                    </PremiumButton>
                </div>
            </SectionContainer>

            <div className="flex flex-col gap-6 w-full relative">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Top Slider - Moving Left */}
                <Swiper
                    {...swiperConfig}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    className="services-swiper marquee-linear w-full px-4"
                >
                    {works.map((work, index) => (
                        <SwiperSlide key={index}>
                            <WorkCard work={work} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom Slider - Moving Right */}
                <Swiper
                    {...swiperConfig}
                    autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                    className="services-swiper marquee-linear w-full px-4"
                >
                    {[...works].reverse().map((work, index) => (
                        <SwiperSlide key={index}>
                            <WorkCard work={work} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

function WorkCard({ work, index }: { work: any; index: number }) {
    return (
        <div className="group relative aspect-5/4 overflow-hidden rounded-2xl bg-muted transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <img
                src={work.image}
                alt={work.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 text-left">
                <span className="text-primary-soft text-xs font-semibold mb-2 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 px-2 py-0.5 border border-primary-soft/30 bg-white rounded-full w-fit">
                    {work.category}
                </span>
                <p className="text-white font-heading font-bold text-lg leading-tight">
                    {work.title}
                </p>

                <div className="mt-4 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
        </div>
    );
}

