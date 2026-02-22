"use client";

import React from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionBadge from "@/components/shared/SectionBadge";
import {
    LayoutDashboard,
    Trophy,
    Ship,
    Search,
    Bell,
    Coins,
    ArrowRightLeft,
    Package,
    Users,
    Instagram,
    Facebook,
    Twitter,
    MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

export default function RealtimeDashboard() {
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

    const leftReveal = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", damping: 20, stiffness: 100 } as const
        }
    };

    const rightReveal = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", damping: 20, stiffness: 100 } as const
        }
    };

    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } as const
        }
    };
    return (
        <section className="py-24 overflow-hidden bg-background relative">
            {/* Background patterns could go here */}

            <SectionContainer className="relative z-10">
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={fadeInUp}>
                        <SectionBadge>Take Control in Real Time</SectionBadge>
                    </motion.div>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl font-heading font-black text-text-heading leading-[0.9] tracking-tighter max-w-3xl mx-auto"
                    >
                        Real-Time Dashboard
                    </motion.h2>
                </motion.div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Top Stats Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto relative z-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(108, 70, 253, 0.15)" }}
                            className="bg-white p-8 rounded-3xl border-2 border-primary shadow-[0_0_30px_rgba(190,242,100,0.2)] text-center space-y-2 transition-shadow duration-300"
                        >
                            <span className="text-6xl font-black text-text-heading">50%</span>
                            <p className="text-text-muted font-medium italic">Transaction cost savings</p>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(108, 70, 253, 0.15)" }}
                            className="bg-white p-8 rounded-3xl border-2 border-primary shadow-[0_0_30px_rgba(190,242,100,0.2)] text-center space-y-2 transition-shadow duration-300"
                        >
                            <span className="text-6xl font-black text-text-heading">25%</span>
                            <p className="text-text-muted font-medium italic">Higher conversion rate</p>
                        </motion.div>
                    </motion.div>

                    {/* Floating Social Elements - Left */}
                    <motion.div
                        className="absolute top-40 -left-12 lg:-left-24 hidden md:block space-y-16 z-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={leftReveal}
                            className="relative group animate-float"
                        >
                            <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-border-subtle text-text-heading">
                                <span className="font-bold text-xl">S</span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={leftReveal}
                            className="relative group animate-float [animation-delay:1s] translate-x-12"
                        >
                            <div className="absolute -top-10 -left-20 bg-white/90 backdrop-blur-sm border border-border-subtle px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap text-[10px] font-medium scale-0 group-hover:scale-100 transition-transform origin-bottom-right">
                                We mentioned your business on X
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-border-subtle text-text-heading">
                                <Twitter size={20} />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Floating Social Elements - Right */}
                    <motion.div
                        className="absolute top-40 -right-12 lg:-right-24 hidden md:block space-y-16 z-10 text-right"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={rightReveal}
                            className="relative group animate-float [animation-delay:0.5s]"
                        >
                            <div className="absolute -top-10 -right-20 bg-white/90 backdrop-blur-sm border border-border-subtle px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap text-[10px] font-medium scale-0 group-hover:scale-100 transition-transform origin-bottom-left">
                                We mentioned your business on facebook
                            </div>
                            <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-border-subtle text-text-heading ml-auto">
                                <Facebook size={24} />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={rightReveal}
                            className="relative group animate-float [animation-delay:1.5s] -translate-x-12"
                        >
                            <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-border-subtle text-text-heading ml-auto">
                                <Instagram size={18} />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* SVG Connector Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 5 }}>
                        <motion.path
                            d="M 80 350 Q 80 450 200 650"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            className="text-text-muted/20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={pathVariants}
                        />
                        <motion.path
                            d="M 920 350 Q 920 450 800 650"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            className="text-text-muted/20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={pathVariants}
                        />
                    </svg>

                    {/* Dashboard Mockup Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="w-full overflow-hidden transform hover:scale-[1.01] transition-transform duration-500 relative z-10"
                    >
                        <img
                            src="/images/mockups/control-plan.png"
                            alt="Dashboard Mockup"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </SectionContainer>

            {/* Background soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[#BEF264]/5 rounded-full blur-[150px] -z-10" />
        </section>
    );
}

