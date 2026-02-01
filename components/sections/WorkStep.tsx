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
    Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import PremiumButton from '../shared/PremiumButton';

const STEPS = [
    {
        title: "Choose a Plan",
        description: "Clients select from various plans based on their needs and budget. Our flexible options allow you to scale your design needs up or down anytime.",
        icon: CreditCard,
        accent: "primary"
    },
    {
        title: "Payment",
        description: "After selecting a plan, clients proceed to payment. Secure and fast processing so we can get started on your creative journey immediately.",
        icon: Zap,
        accent: "secondary"
    },
    {
        title: "Onboarding and Brief",
        description: "A project manager is assigned to the client for onboarding and task clarification. Fill out a brief detailing your business and design needs.",
        icon: FileText,
        accent: "accent"
    },
    {
        title: "Designer Assignment",
        description: "A personal designer is assigned to the client after the brief is completed. You'll work directly with a pro who understands your brand.",
        icon: UserCheck,
        accent: "primary"
    },
    {
        title: "Task Creation",
        description: "Clients create and submit tasks, providing necessary materials (logos, texts, images, etc.). Manage everything from your dedicated dashboard.",
        icon: PlusSquare,
        accent: "secondary"
    },
    {
        title: "Feedback and Revisions",
        description: "The designer submits completed tasks for review. Clients review the work and request unlimited revisions until it's absolutely perfect.",
        icon: MessageSquare,
        accent: "accent"
    },
    {
        title: "Task Completion",
        description: "Once the client is satisfied, the task is marked as complete. You receive the high-resolution source files ready for production.",
        icon: CheckCircle2,
        accent: "primary"
    },
    {
        title: "New Project",
        description: "After completing one task, clients can create new tasks and continue the process. Keep the momentum going with your next creative request.",
        icon: LayoutGrid,
        accent: "secondary"
    }
];

export default function WorkStep() {
    return (
        <SectionContainer className="py-24 relative bg-background" as="section">
            <div className="flex flex-col lg:flex-row gap-16 items-start relative">
                {/* Sticky Sidebar Header */}
                <div className="lg:sticky lg:top-32 w-full lg:w-1/3 space-y-6 self-start">
                    <div className="badge badge-outline border-primary/20 text-primary px-4 py-3 text-xs font-bold uppercase tracking-widest">
                        Our Process
                    </div>
                    <h2 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.1]">
                        How it <span className="text-primary italic">Works</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        We've streamlined our design process to be as efficient and transparent as possible, moving from selection to delivery in record time.
                    </p>
                    <div className="pt-4">
                        <PremiumButton href="/pricing">
                            Get Started
                        </PremiumButton>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="w-full lg:w-2/3">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {STEPS.map((step, index) => (
                            <li key={index}>
                                {index !== 0 && <hr className="bg-primary/20" />}
                                <div className="timeline-middle">
                                    <div className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center p-2.5 transition-all duration-500 hover:scale-110 shadow-xl border-4 border-white z-10",
                                        step.accent === "primary" ? "bg-primary text-white" :
                                            step.accent === "secondary" ? "bg-secondary text-primary" :
                                                "bg-accent text-primary"
                                    )}>
                                        <step.icon className="w-full h-full" />
                                    </div>
                                </div>

                                <div className={cn(
                                    "mb-10 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl group",
                                    index % 2 === 0 ? "timeline-start md:text-end pr-8" : "timeline-end pl-8"
                                )}>
                                    <time className="font-heading font-black text-4xl opacity-10 mb-2 block group-hover:text-primary group-hover:opacity-100 transition-all duration-500">
                                        0{index + 1}
                                    </time>
                                    <h3 className="text-2xl font-bold mb-3 text-text-heading">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-body text-base leading-relaxed max-w-sm md:max-w-none ml-auto">
                                        {step.description}
                                    </p>
                                    <div className={cn(
                                        "w-12 h-1 mt-6 rounded-full transition-all duration-500 group-hover:w-full",
                                        step.accent === "primary" ? "bg-primary" : "bg-primary/40",
                                        index % 2 === 0 ? "ml-auto" : ""
                                    )} />
                                </div>
                                {index !== STEPS.length - 1 && <hr className="bg-primary/20" />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionContainer>
    );
}
