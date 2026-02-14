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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const STEPS = [
    {
        title: "Choose a Plan",
        description: "Clients select from various plans based on their needs and budget. Our flexible options allow you to scale your design needs up or down anytime.",
        icon: CreditCard,
    },
    {
        title: "Payment",
        description: "After selecting a plan, clients proceed to payment. Secure and fast processing so we can get started on your creative journey immediately.",
        icon: Zap,
    },
    {
        title: "Onboarding and Brief",
        description: "A project manager is assigned to the client for onboarding and task clarification. Fill out a brief detailing your business and design needs.",
        icon: FileText,
    },
    {
        title: "Designer Assignment",
        description: "A personal designer is assigned to the client after the brief is completed. You'll work directly with a pro who understands your brand.",
        icon: UserCheck,
    },
    {
        title: "Task Creation",
        description: "Clients create and submit tasks, providing necessary materials (logos, texts, images, etc.). Manage everything from your dedicated dashboard.",
        icon: PlusSquare,
    },
    {
        title: "Feedback and Revisions",
        description: "The designer submits completed tasks for review. Clients review the work and request unlimited revisions until it's absolutely perfect.",
        icon: MessageSquare,
    },
    {
        title: "Task Completion",
        description: "Once the client is satisfied, the task is marked as complete. You receive the high-resolution source files ready for production.",
        icon: CheckCircle2,
    },
    {
        title: "New Project",
        description: "After completing one task, clients can create new tasks and continue the process. Keep the momentum going with your next creative request.",
        icon: LayoutGrid,
    }
];

export default function WorkStep() {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-gray-50/50">
            <SectionContainer className="mb-16">
                <div className="text-center space-y-4">
                    <SectionBadge>
                        Our Process
                    </SectionBadge>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-text-heading tracking-tight">
                        One Goal, <span className="text-primary ">Seamless Steps</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        We've streamlined our design process to be as efficient and transparent as possible, moving from selection to delivery in record time.
                    </p>
                </div>
            </SectionContainer>

            <SectionContainer className="py-0 relative">
                <div className="relative group px-4">
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
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1440: { slidesPerView: 4 },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="pb-16"
                    >
                        {STEPS.map((step, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <SwiperSlide key={index}>
                                    <div className={cn(
                                        "h-full flex flex-col p-8 rounded-2xl transition-all duration-500 border border-transparent",
                                        isActive
                                            ? "bg-white shadow-2xl shadow-primary/5 border-primary/20 scale-100"
                                            : "bg-transparent scale-95 opacity-60"
                                    )}>
                                        <div className={cn(
                                            "w-16 h-16 rounded-xl flex items-center justify-center mb-10 transition-colors",
                                            isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                                        )}>
                                            <step.icon size={32} strokeWidth={1.5} />
                                        </div>

                                        <div className="grow space-y-4">
                                            <h3 className="text-2xl font-bold text-text-heading leading-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-text-muted text-base leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        <div className="mt-12 pt-6 border-t border-border-subtle flex justify-between items-center outline-hidden">
                                            <span className="text-xs font-bold tracking-widest text-text-muted/50 uppercase">
                                                Step _ 0{index + 1}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Custom Navigation & Progress Area */}
                    <div className="flex flex-col items-center gap-10 mt-8">
                        <div className="flex items-center gap-8">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:shadow-lg transition-all text-text-heading disabled:opacity-30"
                                disabled={activeIndex === 0}
                            >
                                <ChevronLeft size={24} />
                            </button>

                            {/* Progress Line */}
                            <div className="flex items-center gap-2">
                                <div className="h-[2px] w-32 md:w-64 bg-border-subtle relative overflow-hidden">
                                    <div
                                        className="absolute inset-y-0 left-0 bg-primary transition-all duration-500"
                                        style={{ width: `${((activeIndex + 1) / STEPS.length) * 100}%` }}
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
                                className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:shadow-lg transition-all text-text-heading disabled:opacity-30"
                                disabled={activeIndex === STEPS.length - 1}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}
