"use client";

import React, { useRef, useState } from 'react';
import SectionContainer from '../shared/SectionContainer';
import {
    CheckCircle2,
    CreditCard,
    FileText,
    LayoutGrid,
    MessageSquare,
    PlusSquare,
    UserCheck,
    Zap,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionBadge from '../shared/SectionBadge';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import * as motion from "motion/react-client";
import { AnimatePresence } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const STEPS = [
    {
        title: "Choose a Plan",
        description: "Clients select from various plans based on their needs and budget.",
        icon: CreditCard,
    },
    {
        title: "Payment",
        description: "After selecting a plan, clients proceed to payment.",
        icon: Zap,
    },
    {
        title: "Onboarding and Brief",
        description: "A project manager is assigned to the client for onboarding and task clarification.",
        icon: FileText,
    },
    {
        title: "Designer Assignment",
        description: "A personal designer is assigned to the client after the brief is completed.",
        icon: UserCheck,
    },
    {
        title: "Task Creation",
        description: "Clients create and submit tasks, providing necessary materials.",
        icon: PlusSquare,
    },
    {
        title: "Feedback and Revisions",
        description: "The designer submits completed tasks for review.",
        icon: MessageSquare,
    },
    {
        title: "Task Completion",
        description: "Once the client is satisfied, the task is marked as complete.",
        icon: CheckCircle2,
    },
    {
        title: "New Project",
        description: "After completing one task, clients can create new tasks and continue the process.",
        icon: LayoutGrid,
    }
];

export default function WorkStep() {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

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
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    return (
        <>
            <div className="py-8 lg:py-20 bg-gray-50/50">
                <SectionContainer className="mb-8 md:mb-12 lg:mb-16">
                    <motion.div
                        className="text-center space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div variants={fadeInUp}>
                            <SectionBadge>
                                Our Process
                            </SectionBadge>
                        </motion.div>
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-heading leading-[0.9] tracking-tighter"
                        >
                            One Goal, <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Seamless Steps</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-sm md:text-base lg:text-lg text-text-muted max-w-2xl mx-auto"
                        >
                            We've streamlined our design process to be as efficient and transparent as possible, moving from selection to delivery in record time.
                        </motion.p>
                    </motion.div>
                </SectionContainer>

                <SectionContainer className="py-0 relative">
                    <motion.div
                        className="relative group px-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            initialSlide={2}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1440: { slidesPerView: 4 },
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className="!pb-8 !pt-4"
                        >
                            {STEPS.map((step, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <SwiperSlide key={index}>
                                        <motion.div
                                            layout
                                            className={cn(
                                                "h-full flex flex-col p-8 rounded-2xl transition-all duration-500 border border-transparent",
                                                isActive
                                                    ? "bg-white shadow-2xl shadow-primary/5 !border-primary"
                                                    : "bg-transparent opacity-60"
                                            )}
                                            animate={{
                                                scale: isActive ? 1 : 0.95,
                                                boxShadow: isActive ? "0 25px 50px -12px rgba(var(--primary-rgb), 0.05)" : "none"
                                            }}
                                            whileHover={{
                                                y: -5,
                                                borderColor: isActive ? "rgba(var(--primary-rgb), 0.3)" : "rgba(0,0,0,0.05)"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <motion.div
                                                className={cn(
                                                    "lg:w-16 lg:h-16 w-12 h-12 lg:rounded-xl rounded-md flex items-center justify-center mb-10 transition-colors",
                                                    isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                                                )}
                                                animate={{
                                                    rotate: isActive ? 0 : -5,
                                                    scale: isActive ? 1 : 0.9
                                                }}
                                            >
                                                <step.icon size={28} strokeWidth={1.5} />
                                            </motion.div>

                                            <div className="grow space-y-4 text-left">
                                                <h3 className="lg:text-2xl text-xl font-heading font-black text-text-heading leading-tight">
                                                    {step.title}
                                                </h3>
                                                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>

                                            <div className="mt-12 pt-6 border-t border-border-subtle flex justify-between items-center outline-hidden">
                                                <span className="text-xs font-bold tracking-widest text-text-muted/50 uppercase">
                                                    Step _ 0{index + 1}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>

                        {/* Custom Navigation & Progress Area */}
                        <div className="flex flex-col items-center gap-10 mt-8">
                            <div className="flex items-center gap-4 lg:gap-8 ">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="w-8 h-8 lg:w-12 lg:h-12 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:shadow-lg transition-all text-text-heading disabled:opacity-30"
                                    disabled={activeIndex === 0}
                                >
                                    <ChevronLeft size={18} />
                                </button>

                                {/* Progress Line */}
                                <div className="flex items-center gap-2">
                                    <div className="h-[2px] w-32 md:w-64 bg-border-subtle relative overflow-hidden">
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-primary"
                                            initial={false}
                                            animate={{ width: `${((activeIndex + 1) / STEPS.length) * 100}%` }}
                                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                        />
                                    </div>
                                    <div className="flex gap-1.5 ml-4">
                                        {STEPS.map((_, i) => (
                                            <div
                                                key={i}
                                                className={cn(
                                                    "size-1.5 rounded-full transition-all duration-300",
                                                    activeIndex === i ? "bg-primary w-4" : "bg-border-subtle"
                                                )}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="w-8 h-8 lg:w-12 lg:h-12 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:shadow-lg transition-all text-text-heading disabled:opacity-30"
                                    disabled={activeIndex === STEPS.length - 1}
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </SectionContainer>
            </div>
        </>
    );
}
