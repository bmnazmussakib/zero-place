"use client";

import React, { useRef } from 'react';
import SectionContainer from '../shared/SectionContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import { ChevronUp, ChevronDown, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

const TESTIMONIALS = [
    {
        name: "Kevin Martin",
        role: "Web Designer",
        logo: "https://logoipsum.com/img/logo/logo-1.svg",
        content: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Sarah Jenkins",
        role: "Product Manager",
        logo: "https://logoipsum.com/img/logo/logo-2.svg",
        content: "The design implementation surpassed our expectations. The attention to detail and user experience polish is something we've been looking for for years.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Michael Chen",
        role: "CTO @ TechFlow",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "Switching to this agency was the best decision for our growth. Their technical expertise coupled with creative vision is truly rare in the industry.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

export default function Testimonial() {
    const swiperRef = useRef<any>(null);

    return (
        <section className="bg-background py-24 md:py-32 overflow-hidden relative">
            {/* Background Decorative Rings */}
            <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-[600px] h-[600px] border-40 border-primary/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[400px] h-[400px] border-20 border-primary/5 rounded-full pointer-events-none" />

            <SectionContainer>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Column: Info */}
                    <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
                                Testimonials
                            </span>
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-foreground leading-[1.1] tracking-tight">
                                Why Businesses <br /> Love Zero Place
                            </h2>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-zinc-200 overflow-hidden ring-1 ring-primary/10">
                                        <img
                                            src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&q=80&w=100&h=100`}
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-background bg-primary flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20 ring-1 ring-primary/10">
                                    +
                                </div>
                            </div>
                            <div className="text-sm md:text-base font-medium space-y-1">
                                <p className="text-foreground font-black">669k+ Active</p>
                                <p className="text-muted-foreground">users world-wide</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Swiper Slide */}
                    <div className="w-full lg:w-1/2 relative px-4 md:px-0">
                        <div className="flex items-center gap-8">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards, Navigation]}
                                className="testimonial-swiper w-full aspect-video sm:aspect-4/3"
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {TESTIMONIALS.map((testimonial, index) => (
                                    <SwiperSlide key={index} className="rounded-[3rem] shadow-2xl overflow-visible">
                                        <div className="h-full w-full bg-white p-10 md:p-14 flex flex-col justify-between border border-primary/5 relative group rounded-[3rem]">
                                            {/* Top: Logo */}
                                            <div className="w-full flex justify-start mb-4">
                                                <div className="h-10 opacity-90 group-hover:opacity-100 transition-all duration-500">
                                                    <img src={testimonial.logo} alt="brand" className="h-full object-contain filter-primary" />
                                                </div>
                                            </div>

                                            {/* Middle: Testimonial Content */}
                                            <div className="flex-1 flex flex-col justify-center py-6">
                                                <p className="text-xl md:text-2xl font-medium leading-[1.4] text-zinc-700 tracking-tight font-heading italic">
                                                    "{testimonial.content}"
                                                </p>
                                            </div>

                                            {/* Bottom: Author & Quote Icon */}
                                            <div className="flex items-end justify-between pt-10 mt-auto">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="font-bold text-foreground text-xl md:text-2xl leading-none tracking-tight">{testimonial.name}</h4>
                                                        <p className="text-sm md:text-base text-muted-foreground font-medium">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                                <div className="text-primary opacity-20 group-hover:opacity-100 transition-all duration-700 mb-[-15px] transform group-hover:scale-110">
                                                    <Quote className="w-20 h-20 fill-current rotate-180" strokeWidth={0.5} />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Vertical Navigation Controls */}
                            <div className="hidden sm:flex flex-col gap-4 ms-5">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 active:scale-90"
                                >
                                    <ChevronUp className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 active:scale-90"
                                >
                                    <ChevronDown className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Nav Indicators */}
                        <div className="flex sm:hidden justify-center gap-4 mt-12">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-14 h-14 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground active:scale-90 transition-transform"
                            >
                                <ChevronUp className="w-8 h-8 -rotate-90" />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-14 h-14 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground active:scale-90 transition-transform"
                            >
                                <ChevronDown className="w-8 h-8 -rotate-90" />
                            </button>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <style jsx global>{`
                .testimonial-swiper .swiper-slide {
                    background: transparent;
                }
                .testimonial-swiper .swiper-slide-shadow {
                    background: rgba(108, 70, 253, 0.05) !important;
                }
                .filter-primary {
                    filter: invert(31%) sepia(94%) saturate(5412%) hue-rotate(248deg) brightness(101%) contrast(101%);
                }
            `}</style>
        </section>
    );
}