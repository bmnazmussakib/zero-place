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