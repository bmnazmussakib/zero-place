"use client";

import React, { useState } from 'react';
import SectionContainer from '../shared/SectionContainer';
import { Plus, Minus, ArrowUpRight, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import PremiumButton from '../shared/PremiumButton';

const FAQ_DATA = [
    {
        question: "What services does your company offer?",
        answer: "Our solutions are tailored to meet your unique business needs, improving efficiency, reducing costs, and enabling seamless digital transformation to boost growth and productivity and stay up-to-date with the latest technologies. The consultation phase and keep you informed."
    },
    {
        question: "How can your IT solutions help my business?",
        answer: "We provide strategic IT consulting and implementation services that streamline your workflows, automate repetitive tasks, and scale your digital infrastructure, allowing your team to focus on core business objectives while reducing operational overhead."
    },
    {
        question: "Do you provide support after project completion?",
        answer: "Yes, we offer comprehensive post-launch support and maintenance packages. Whether it's troubleshooting, updates, or scaling features, our team remains available to ensure your digital solutions continue to perform optimally."
    },
    {
        question: "How long does it take to implement an IT solution?",
        answer: "Timeline varies based on complexity. A typical project can take anywhere from 2 to 12 weeks. We follow a strict agile methodology with weekly updates to ensure transparent progress and timely delivery."
    },
    {
        question: "Is my data secure with your solutions?",
        answer: "Security is built into our core. We implement industry-standard encryption, secure cloud architectures, and regular security audits to protect your sensitive data and ensure compliance with global privacy regulations."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-background py-24 overflow-hidden">
            <SectionContainer>
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Info & Contact */}
                    <div className="w-full lg:w-5/12 space-y-12">
                        <div className="space-y-6">
                            <span className="inline-block text-primary font-bold tracking-wider uppercase text-xs px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full">
                                Read FAQs
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-foreground">
                                Quick Answers For Your Important Questions
                            </h2>
                            <div>
                                <PremiumButton>
                                    Contact Us
                                </PremiumButton>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="p-8 rounded-3xl bg-white border border-border/50 shadow-xs space-y-8 max-w-sm">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Getting started is easy! Simply reach out us through our contact form or give us a call & we'll schedule.
                            </p>

                            <div className="flex items-center justify-between p-4 bg-section rounded-2xl border border-primary/5">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Call us now</p>
                                    <p className="text-sm font-bold font-heading text-foreground">+1 (888) 333-8181</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white overflow-hidden border border-border/50">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                                            alt="Expert"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 hover:rotate-12 transition-transform cursor-pointer">
                                        <Phone className="w-4 h-4 text-white fill-current" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full lg:w-7/12 space-y-4">
                        {FAQ_DATA.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        "rounded-2xl border transition-all duration-500",
                                        isOpen ? "bg-white border-primary/20 shadow-md" : "bg-white/50 border-border/50 hover:border-primary/20"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                                    >
                                        <span className={cn(
                                            "text-lg md:text-xl font-heading font-medium transition-colors duration-300",
                                            isOpen ? "text-primary" : "text-foreground"
                                        )}>
                                            {faq.question}
                                        </span>
                                        <div className={cn(
                                            "flex-none w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                                            isOpen ? "bg-primary" : "bg-primary/5"
                                        )}>
                                            {isOpen ? (
                                                <Minus className="w-4 h-4 text-white" strokeWidth={3} />
                                            ) : (
                                                <Plus className="w-4 h-4 text-primary" strokeWidth={3} />
                                            )}
                                        </div>
                                    </button>

                                    <div className={cn(
                                        "grid transition-all duration-500 ease-in-out",
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    )}>
                                        <div className="overflow-hidden">
                                            <div className="px-6 md:px-8 pb-8 pt-0 text-muted-foreground leading-relaxed text-sm md:text-base border-t border-border/30 mt-2">
                                                <div className="pt-4">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}