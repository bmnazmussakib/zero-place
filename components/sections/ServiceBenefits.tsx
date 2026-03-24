"use client";

import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import { CreditCard, Zap, CheckCircle, Clock, Users, UserCheck } from 'lucide-react';

import * as motion from "motion/react-client";

import * as LucideIcons from 'lucide-react';
import { ServiceDetail } from '@/types';

const defaultBenefits = [
    {
        icon: "CreditCard",
        title: "Fixed monthly rate",
        description: "No hidden costs. Pay the same price every month."
    },
    {
        icon: "Zap",
        title: "Unlimited requests",
        description: "Don't limit your creativity. Request as many designs as you need."
    },
    {
        icon: "CheckCircle",
        title: "Unlimited revisions",
        description: "Request changes without limits. We iterate until you say it's perfect."
    },
    {
        icon: "Clock",
        title: "Same-day delivery",
        description: "Receive your designs on the same day with our higher-tier package."
    },
    {
        icon: "Users",
        title: "Professional designers",
        description: "Work with experienced designers who bring creativity and precision to every project."
    },
    {
        icon: "UserCheck",
        title: "Designer match",
        description: "Each request goes to the most qualified designer for the job."
    }
];

export default function ServiceBenefits({ data }: { data?: ServiceDetail['benefits'] }) {
    const items = data?.items || defaultBenefits;
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
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
        <section className="bg-white relative overflow-hidden">
            <SectionContainer className='px-5 md:px-10 4xl:px-0 py-10 md:py-16 '>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {items.map((benefit, index) => {
                        const IconComponent = (LucideIcons as any)[benefit.icon] || LucideIcons.HelpCircle;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="bg-white lg:p-8 md:p-6 p-4 lg:rounded-3xl rounded-2xl border border-gray-100 shadow-lg shadow-[#6c46fd]/5 hover:shadow-[#6c46fd]/10 hover:border-[#6c46fd]/20 transition-colors duration-300 flex flex-col items-start gap-5 group cursor-default"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`lg:w-16 lg:h-16 w-12 h-12 rounded-2xl flex items-center justify-center bg-[#6c46fd]/10 lg:mb-2 transition-transform duration-300`}
                                >
                                    <IconComponent className="lg:w-8 lg:h-8 text-[#6c46fd]" />
                                </motion.div>
                                <div>
                                    <h3 className="lg:text-xl text-lg font-bold text-[#0f0e21] mb-2 md:mb-3 group-hover:text-[#6c46fd] transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </SectionContainer>
        </section>
    );
}
