"use client";

// components/WhyDuckDesign.tsx  (or whatever name you prefer)

import * as motion from "motion/react-client";
import SectionContainer from '../shared/SectionContainer';
import { cn } from "@/lib/utils";
import React from "react";

import { ServiceDetail } from "@/types";

export default function ServiceWhy({ data }: { data: ServiceDetail['why'] }) {
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
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    return (
        <>
            <section className="relative bg-white overflow-hidden">
                {/* Optional subtle background gradient / pattern */}

                <SectionContainer className="px-5 md:px-10 4xl:px-0 py-10 md:py-16 ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.07 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 pointer-events-none"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-[#6c46fd]/5 via-transparent to-indigo-500/5"></div>
                    </motion.div>
                    <div className="relative">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                            {/* Left side - two stat cards */}
                                {data.stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className={cn(
                                            "flex-1 min-w-[240px] aspect-[4/3.5] max-w-xs rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center text-center transition-colors cursor-default",
                                            stat.isHighlighted 
                                                ? "bg-linear-to-br from-[#6c46fd] to-indigo-700 text-white shadow-2xl shadow-[#6c46fd]/30 hover:shadow-[#6c46fd]/40" 
                                                : "bg-linear-to-br from-[#6c46fd]/10 to-indigo-600/5 border border-[#6c46fd]/15 shadow-xl shadow-[#6c46fd]/10 hover:shadow-[#6c46fd]/20"
                                        )}
                                    >
                                        <div className={cn(
                                            "text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3",
                                            stat.isHighlighted ? "text-white" : "text-[#6c46fd]"
                                        )}>
                                            {stat.value}
                                        </div>
                                        <div className={cn(
                                            "text-xl md:text-2xl font-bold mb-2",
                                            stat.isHighlighted ? "text-white" : "text-[#0f0e21]"
                                        )}>
                                            {stat.label}
                                        </div>
                                        <p className={cn(
                                            "text-base mt-2",
                                            stat.isHighlighted ? "text-white/90" : "text-gray-600"
                                        )}>
                                            {stat.description.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </motion.div>
                                ))}

                            {/* Right side - main text block */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                className="max-w-2xl text-center lg:text-left"
                            >
                                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f0e21] leading-tight mb-6 md:mb-8">
                                    {data.title}
                                </motion.h2>

                                <motion.p variants={fadeInUp} className="text-sm md:text-base lg:text-xl leading-relaxed text-gray-700 ">
                                    {data.description}
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </>
    );
}