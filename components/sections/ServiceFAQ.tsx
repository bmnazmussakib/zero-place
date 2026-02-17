"use client";

import React, { useState } from 'react';
import SectionContainer from '../shared/SectionContainer';
import { Plus, Minus, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import PremiumButton from '../shared/PremiumButton';
import SectionBadge from '../shared/SectionBadge';

const FAQ_DATA = [
    {
        question: "Who is it for?",
        answer: "Our services are perfect for startups, agencies, and growing businesses looking for high-quality design without the overhead of hiring a full-time team."
    },
    {
        question: "What does unlimited requests and revisions really mean?",
        answer: "You can submit as many design requests as you want, and we'll work through them one by one. If you're not happy with a design, we'll revise it until it's perfect."
    },
    {
        question: "What is the turnaround time?",
        answer: "Most requests are completed within 24-48 hours. Complex projects may take longer, but we'll provide regular updates on progress."
    },
    {
        question: "What kind of designs can I request?",
        answer: "We cover a wide range of design needs including logos, branding, social media graphics, UI/UX design, presentations, and marketing materials."
    },
    {
        question: "Do I own the rights to the designs?",
        answer: "Yes, you own 100% of the rights to all work created for you. We provide all source files and assets upon completion."
    },
    {
        question: "Can I pause my subscription?",
        answer: "Absolutely. If you don't have enough work for a full month, you can pause your subscription and resume it when you need us again."
    },
    {
        question: "What is your 7-day money-back guarantee?",
        answer: "If you're not satisfied with our service within the first 7 days, we'll refund your payment in full. No questions asked."
    },
    {
        question: "What are your designers' working hours?",
        answer: "Our team works Monday to Friday. We ensure overlap with major time zones to facilitate smooth communication and timely delivery."
    }
];

export default function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-24 overflow-hidden">
            <SectionContainer>
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Info & Contact */}
                    <div className="w-full lg:w-5/12 space-y-12">
                        <div className="space-y-6">
                            <SectionBadge className="mb-6">
                                FAQ
                            </SectionBadge>
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-[#0f0e21] leading-[1.1] tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                                Find answers to common questions about our design services and how we work.
                            </p>
                            <div>
                                <PremiumButton href="/contact">
                                    Contact Us
                                </PremiumButton>
                            </div>
                        </div>

                        {/* Contact Card - Matching the theme but in light mode */}
                        <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-8 max-w-sm">
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Getting started is easy! Simply reach out us through our contact form or give us a call & we'll schedule a call.
                            </p>

                            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Call us now</p>
                                    <p className="text-sm font-bold font-heading text-[#6c46fd]">+1 (888) 333-8181</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 overflow-hidden border border-gray-100">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                                            alt="Expert"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#6c46fd] flex items-center justify-center shadow-lg shadow-[#6c46fd]/20 hover:rotate-12 transition-transform cursor-pointer">
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
                                        isOpen ? "bg-white border-[#6c46fd]/20 shadow-lg shadow-[#6c46fd]/5" : "bg-gray-50 border-transparent hover:border-[#6c46fd]/20"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                                    >
                                        <span className={cn(
                                            "text-lg md:text-xl font-heading font-bold transition-colors duration-300",
                                            isOpen ? "text-[#6c46fd]" : "text-[#0f0e21]"
                                        )}>
                                            {faq.question}
                                        </span>
                                        <div className={cn(
                                            "flex-none w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                                            isOpen ? "bg-[#6c46fd]" : "bg-white border border-gray-100"
                                        )}>
                                            {isOpen ? (
                                                <Minus className="w-4 h-4 text-white" strokeWidth={3} />
                                            ) : (
                                                <Plus className="w-4 h-4 text-[#6c46fd]" strokeWidth={3} />
                                            )}
                                        </div>
                                    </button>

                                    <div className={cn(
                                        "grid transition-all duration-500 ease-in-out",
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    )}>
                                        <div className="overflow-hidden">
                                            <div className="px-6 md:px-8 pb-8 pt-0 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100/50 mt-2">
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
