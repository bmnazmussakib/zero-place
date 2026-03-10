"use client";

import React, { useState } from 'react';
import SectionContainer from '../shared/SectionContainer';
import { Plus, Minus, ArrowUpRight, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import PremiumButton from '../shared/PremiumButton';
import SectionBadge from '../shared/SectionBadge';
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const FAQ_DATA = [
    {
        question: "Connect with Us Live!",
        answer: "Get instant answers to your questions and personalized support with our live chat feature."
    },
    {
        question: "How do your branding, design, and development services work together?",
        answer: "We integrate these services to provide a holistic approach, ensuring a cohesive brand identity, engaging design, and flawless development for consistent success."
    },
    {
        question: "Can you help with branding for a new business?",
        answer: "Yes, our branding services include comprehensive strategy development to establish a strong, memorable and distinctive brand identity for your new venture."
    },
    {
        question: "What is your typical design and development process?",
        answer: "Our process involves close collaboration, starting with requirements gathering, followed by creative design and agile development to deliver high-quality, customized solutions."
    },
    {
        question: "Do you provide post-project support?",
        answer: "Yes, we offer comprehensive support and maintenance services post-completion to ensure your solutions remain functional, secure, and scalable."
    },
    {
        question: "How do you ensure data security throughout the development process?",
        answer: "We implement strict security measures and adhere to industry standards to protect your data during all stages of branding, design, and development."
    },
    {
        question: "What makes your company's design and branding unique?",
        answer: "Our focus is on combining creativity with strategic branding to create visually appealing and memorable designs that truly represent your brand's values and drive results."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="bg-footer-bg py-8 md:py-16 lg:py-24 overflow-hidden">
            <SectionContainer>
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Column: Info & Contact */}
                    <motion.div
                        className="w-full md:w-5/12 space-y-6 lg:space-y-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <div className="space-y-6">
                            <motion.div variants={fadeInUp}>
                                <SectionBadge className="lg:mb-6">
                                    Read FAQs
                                </SectionBadge>
                            </motion.div>
                            <motion.h2
                                variants={fadeInUp}
                                className="text-5xl md:text-6xl font-heading font-black text-white leading-none tracking-normal"
                            >
                                Quick Answers For Your <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Important</span> Questions
                            </motion.h2>
                            <motion.div variants={fadeInUp}>
                                <PremiumButton>
                                    Contact Us
                                </PremiumButton>
                            </motion.div>
                        </div>

                        {/* Contact Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="p-8 rounded-3xl bg-white border border-border/50 shadow-xs space-y-8 max-w-sm"
                        >
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Getting started is easy! Simply reach out us through our contact form or give us a call & we'll schedule.
                            </p>

                            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-border/50">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Call us now</p>
                                    <p className="text-sm font-bold font-heading text-primary">+1 (888) 333-8181</p>
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
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Accordion */}
                    <motion.div
                        className="w-full lg:w-7/12 space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {FAQ_DATA.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className={cn(
                                        "rounded-2xl border border-primary/20 transition-colors duration-300 overflow-hidden",
                                        isOpen ? "bg-white/5 shadow-md" : "bg-transparent hover:bg-white/5"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                                    >
                                        <span className={cn(
                                            "text-lg md:text-xl font-heading font-medium transition-colors duration-300",
                                            isOpen ? "text-primary" : "text-white"
                                        )}>
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{
                                                backgroundColor: isOpen ? "var(--primary)" : "rgba(255, 255, 255, 0.05)",
                                                rotate: isOpen ? 180 : 0,
                                                scale: isOpen ? 1.1 : 1
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="flex-none w-8 h-8 rounded-full flex items-center justify-center"
                                        >
                                            {isOpen ? (
                                                <Minus className="w-4 h-4 text-white" strokeWidth={3} />
                                            ) : (
                                                <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                                            )}
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                            >
                                                <div className="px-6 md:px-8 pb-8 pt-0 text-white/50 leading-relaxed text-sm md:text-base border-t border-primary/20 mt-2">
                                                    <div className="pt-4">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </SectionContainer>
        </section>
    );
}