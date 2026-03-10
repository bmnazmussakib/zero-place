"use client";

import React, { useRef } from 'react';
import SectionContainer from '../shared/SectionContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from 'swiper/modules';
import { ChevronUp, ChevronDown, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionBadge from '../shared/SectionBadge';
import * as motion from "motion/react-client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

const TESTIMONIALS = [
    {
        name: "James Miller",
        role: "Company Director",
        logo: "https://logoipsum.com/img/logo/logo-1.svg",
        content: "Zero Place has completely transformed our business operations. The results are outstanding!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Emily Roberts",
        role: "Project Manager",
        logo: "https://logoipsum.com/img/logo/logo-2.svg",
        content: "The team at Zero Place is incredibly professional and dedicated. A pleasure to work with.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Michael Johnson",
        role: "Marketing Director",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "Zero Place has significantly boosted our brand visibility. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Sarah Brown",
        role: "Operations Manager",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "Efficient, reliable, and delivering top-notch service. That's Zero Place.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "David Chen",
        role: "Technical Director",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "The solutions provided by Zero Place are exactly what we needed for our growth.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Olivia White",
        role: "Product Manager",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "Zero Place has been a game-changer for our team. Fantastic work!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Noah Brown",
        role: "Lead Developer",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "As a developer, I am impressed by the quality and functionality they provide.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Isabella Taylor",
        role: "Design Manager",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "Zero Place has provided us with the creative solutions we needed to stand out.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Liam Walker",
        role: "CEO",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "A pivotal partner in our journey. Zero Place delivers excellence.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "Natasha Green",
        role: "Executive Manager",
        logo: "https://logoipsum.com/img/logo/logo-3.svg",
        content: "Our experience with Zero Place has been exceptional from start to finish.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
];

export default function Testimonial() {
    const swiperRef = useRef<any>(null);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
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
                delayChildren: 0.2
            }
        }
    };

    return (
        <section className="bg-white pb-16 py-8 md:py-16 lg:py-24 overflow-hidden relative">
            {/* Background Decorative Rings */}
            <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-[600px] h-[600px] border-40 border-primary/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[400px] h-[400px] border-20 border-primary/5 rounded-full pointer-events-none" />

            <SectionContainer>
                <div className="flex flex-col lg:flex-row items-center lg:gap-16 md:gap-12 gap-8">
                    {/* Left Column: Info */}
                    <motion.div
                        className="w-full lg:w-1/2 lg:space-y-10 md:space-y-8 space-y-6 text-center lg:text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <div className="space-y-6">
                            <motion.div variants={fadeInUp}>
                                <SectionBadge className="lg:mb-6">
                                    Testimonials
                                </SectionBadge>
                            </motion.div>
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-heading leading-[1] tracking-normal"
                            >
                                Why Businesses <br />Love <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Zero Place</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                className="text-sm md:text-base lg:text-lg text-text-muted max-w-2xl mx-auto"
                            >
                                We've streamlined our design process to be as efficient and transparent as possible, moving from selection to delivery in record time.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start"
                        >
                            <div className="avatar-group -space-x-3">
                                <div className="avatar border-2 border-white">
                                    <div className="w-8 md:w-10 lg:w-12">
                                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                    </div>
                                </div>
                                <div className="avatar border-2 border-white">
                                    <div className="w-8 md:w-10 lg:w-12">
                                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                    </div>
                                </div>
                                <div className="avatar border-3 border-white">
                                    <div className="w-8 md:w-10 lg:w-12">
                                        <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                    </div>
                                </div>
                                <div className="avatar border-3 border-white">
                                    <div className="w-8 md:w-10 lg:w-12">
                                        <img src="https://i.pravatar.cc/300" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm md:text-base font-medium space-y-1">
                                <p className="text-foreground font-black">669k+ Active</p>
                                <p className="text-muted-foreground">Users world-wide</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Swiper Slide */}
                    <motion.div
                        className="w-full sm:w-5/6 lg:w-1/2 relative px-4 md:px-0"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-col items-center gap-8">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards, Navigation, Autoplay]}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                className="testimonial-swiper w-full aspect-video sm:aspect-4/3"
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {TESTIMONIALS.map((testimonial, index) => (
                                    <SwiperSlide key={index} className="rounded-[3rem] shadow-2xl overflow-visible min-h-[280px] md:h-[300px]">
                                        <div className="h-full w-full  bg-white p-8 md:p-10 lg:p-14 flex flex-col justify-between border border-primary/5 relative group rounded-[3rem]">
                                            {/* Top: Logo */}
                                            <div className="w-full flex justify-start lg:mb-4 hidden">
                                                <div className="h-10 opacity-90 group-hover:opacity-100 transition-all duration-500">
                                                    <img src={testimonial.logo} alt="brand" className="h-full object-contain filter-primary" />
                                                </div>
                                            </div>

                                            {/* Middle: Testimonial Content */}
                                            <div className="flex-1 flex flex-col justify-center lg:py-6">
                                                <p className="text-sm md:text-lg lg:text-xl font-medium leading-[1.4] text-zinc-700 tracking-tight font-heading italic">
                                                    "{testimonial.content}"
                                                </p>
                                            </div>

                                            {/* Bottom: Author & Quote Icon */}
                                            <div className="flex items-end justify-between lg:pt-10 mt-auto">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="font-bold text-foreground text-lg md:text-xl lg:text-2xl leading-none tracking-tight">{testimonial.name}</h4>
                                                        <p className="text-sm md:text-base text-muted-foreground font-medium">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                                <div className="text-primary opacity-20 group-hover:opacity-100 transition-all duration-700 mb-[-15px] transform group-hover:scale-110">
                                                    <Quote className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 fill-current rotate-180" strokeWidth={0.5} />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Horizontal Navigation Controls */}
                            <div className="hidden sm:flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", border: "none" }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground hover:text-white transition-colors duration-300"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", border: "none" }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground hover:text-white transition-colors duration-300"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Mobile Nav Indicators */}
                        <div className="flex sm:hidden justify-center gap-4 mt-36 ">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-10 h-10 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground active:scale-90 transition-transform"
                            >
                                <ChevronUp className="w-6 h-6 -rotate-90" />
                            </motion.button>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-10 h-10 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground active:scale-90 transition-transform"
                            >
                                <ChevronDown className="w-6 h-6 -rotate-90" />
                            </motion.button>
                        </div>
                    </motion.div>
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