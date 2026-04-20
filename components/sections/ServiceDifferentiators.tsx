"use client";

import React, { useState, useEffect } from 'react';
import SectionContainer from '../shared/SectionContainer';
import SectionBadge from '../shared/SectionBadge';
import * as LucideIcons from 'lucide-react';
import { DifferentiatorItem } from '@/types';
import { serviceDifferentiators } from '@/lib/constants';

import * as motion from "motion/react-client";


export default function ServiceDifferentiators() {
    const [differentiators, setDifferentiators] = useState<DifferentiatorItem[]>(serviceDifferentiators);
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
        <SectionContainer className="px-5 md:px-10 4xl:px-0 py-10 md:py-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-start">

                {/* Left Column: Heading & Description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-xl"
                >
                    <motion.div variants={fadeInUp}>
                        <SectionBadge className="mb-4">
                            SEE HOW WE COMPARE
                        </SectionBadge>
                    </motion.div>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-heading mb-6 leading-tight tracking-tighter"
                    >
                        What Makes Us <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Different?</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed"
                    >
                        We will take care of all your creative needs. No inefficient freelancers. No lengthy hiring procedures. No contracts. Just your work getting done!
                    </motion.p>
                </motion.div>

                {/* Right Column: Feature List */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:gap-y-6 gap-y-4 gap-x-8"
                >
                    {differentiators.map((feature, index) => {
                        const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Circle;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="flex items-center gap-3 group cursor-default"
                            >
                                <div className="shrink-0 mt-0.5 p-2 rounded-lg bg-[#6c46fd]/5 text-[#6c46fd] transition-colors group-hover:bg-[#6c46fd] group-hover:text-white">
                                    <IconComponent className="w-5 h-5" />
                                </div>
                                <p className="text-gray-700 text-sm md:text-base lg:text-lg font-medium group-hover:text-[#6c46fd] transition-colors">
                                    {feature.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </SectionContainer>
    );
}
