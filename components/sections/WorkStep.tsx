"use client";

import React from 'react';
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
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import PremiumButton from '../shared/PremiumButton';

const STEPS = [
    {
        title: "Choose a Plan",
        description: "Clients select from various plans based on their needs and budget. Our flexible options allow you to scale your design needs up or down anytime.",
        icon: CreditCard,
        color: "bg-orange-500",
        lightColor: "bg-orange-50",
        borderColor: "border-orange-200"
    },
    {
        title: "Payment",
        description: "After selecting a plan, clients proceed to payment. Secure and fast processing so we can get started on your creative journey immediately.",
        icon: Zap,
        color: "bg-blue-500",
        lightColor: "bg-blue-50",
        borderColor: "border-blue-200"
    },
    {
        title: "Onboarding and Brief",
        description: "A project manager is assigned to the client for onboarding and task clarification. Fill out a brief detailing your business and design needs.",
        icon: FileText,
        color: "bg-purple-500",
        lightColor: "bg-purple-50",
        borderColor: "border-purple-200"
    },
    {
        title: "Designer Assignment",
        description: "A personal designer is assigned to the client after the brief is completed. You'll work directly with a pro who understands your brand.",
        icon: UserCheck,
        color: "bg-pink-500",
        lightColor: "bg-pink-50",
        borderColor: "border-pink-200"
    },
    {
        title: "Task Creation",
        description: "Clients create and submit tasks, providing necessary materials (logos, texts, images, etc.). Manage everything from your dedicated dashboard.",
        icon: PlusSquare,
        color: "bg-emerald-500",
        lightColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
    },
    {
        title: "Feedback and Revisions",
        description: "The designer submits completed tasks for review. Clients review the work and request unlimited revisions until it's absolutely perfect.",
        icon: MessageSquare,
        color: "bg-amber-500",
        lightColor: "bg-amber-50",
        borderColor: "border-amber-200"
    },
    {
        title: "Task Completion",
        description: "Once the client is satisfied, the task is marked as complete. You receive the high-resolution source files ready for production.",
        icon: CheckCircle2,
        color: "bg-green-500",
        lightColor: "bg-green-50",
        borderColor: "border-green-200"
    },
    {
        title: "New Project",
        description: "After completing one task, clients can create new tasks and continue the process. Keep the momentum going with your next creative request.",
        icon: LayoutGrid,
        color: "bg-indigo-500",
        lightColor: "bg-indigo-50",
        borderColor: "border-indigo-200"
    }
];

export default function WorkStep() {
    return (
        <section className="py-24 relative bg-background">
            <SectionContainer>
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Sticky Sidebar Header */}
                    <div className="lg:sticky lg:top-40 w-full lg:w-1/3 space-y-6">

                        <span className="inline-block text-primary font-bold tracking-wider uppercase text-xs px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full">
                            Our Process
                        </span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight leading-[1.1]">
                            ZigZag <span className="text-primary italic">Timeline</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Display on a zigzag timeline the most relevant stages of a particular process in chronological order.
                        </p>
                        <div className="pt-4">
                            <PremiumButton>
                                Get Started
                            </PremiumButton>
                        </div>
                    </div>

                    {/* Timeline Container */}
                    <div className="w-full lg:w-2/3 relative pt-8 px-4 md:px-0">
                        {/* The Snake Path Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-muted-foreground/10 -translate-x-1/2 z-0 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-primary to-transparent animate-pulse" />
                        </div>

                        {/* Steps */}
                        <div className="space-y-20 md:space-y-32 relative z-10">
                            {STEPS.map((step, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0",
                                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    )}
                                >
                                    {/* Step Content */}
                                    <div className={cn(
                                        "w-full md:w-1/2 pl-16 md:pl-0",
                                        index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 text-left md:text-right"
                                    )}>
                                        <div className={cn(
                                            "space-y-2 md:space-y-4 group",
                                            index % 2 !== 0 ? "md:items-end md:flex-col md:flex" : "items-start flex flex-col"
                                        )}>
                                            <h4 className={cn(
                                                "text-4xl md:text-5xl font-heading font-black opacity-100 mb-1 md:mb-2 transition-transform duration-500 group-hover:scale-110",
                                                step.color.replace('bg-', 'text-')
                                            )}>
                                                0{index + 1}
                                            </h4>
                                            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                                                {step.title}
                                            </h3>
                                            <div className={cn(
                                                "w-16 md:w-24 h-1 bg-muted group-hover:w-full transition-all duration-700",
                                                step.color
                                            )} />
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm md:max-w-none">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Central Marker */}
                                    <div className="absolute left-8 md:left-1/2 top-10 md:top-auto -translate-x-1/2 flex flex-col items-center justify-center">
                                        <div className={cn(
                                            "w-10 h-10 md:w-16 md:h-16 rounded-full border-4 md:border-[6px] border-white shadow-xl flex items-center justify-center relative z-20 group transition-transform duration-500 hover:scale-125 cursor-pointer",
                                            step.color
                                        )}>
                                            <step.icon className="w-4 h-4 md:w-7 md:h-7 text-white" />

                                            {/* Pulse Ring */}
                                            <div className={cn(
                                                "absolute -inset-2 rounded-full opacity-20 animate-ping -z-10",
                                                step.color
                                            )} />
                                        </div>
                                    </div>

                                    {/* Empty Space for Zigzag */}
                                    <div className="hidden md:block w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </section>
    );
}