"use client";

import React from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionBadge from "@/components/shared/SectionBadge";
import { Zap, ShieldCheck, Store } from "lucide-react";
import { cn } from "@/lib/utils";
import PremiumButton from "../shared/PremiumButton";

import * as motion from "motion/react-client";

const features = [
    {
        icon: Zap,
        title: "Lightning-Fast Transactions",
        description: "Experience instant, reliable payments designed to keep your business moving at the speed of thought."
    },
    {
        icon: ShieldCheck,
        title: "Bank-Grade Security",
        description: "Protecting every transaction with advanced encryption and fraud detection systems you can trust."
    },
    {
        icon: Store,
        title: "Trusted by Businesses",
        description: "Thousands of businesses worldwide rely on Zeroplace for secure and scalable payment solutions."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
} as const;

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 120
        }
    }
} as const;

export default function ConfidenceSection() {
    return (
        <section className="bg-section overflow-hidden">
            <SectionContainer className="px-5 md:px-10 4xl:px-0 py-10 md:py-16 ">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 md:gap-10 gap-8 items-center lg:mb-20 md:mb-14 mb-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="lg:col-span-8 md:space-y-6 space-y-4"
                    >
                        <div className="space-y-4">
                            <motion.div variants={fadeInUp}>
                                <SectionBadge className="bg-white/50 border-primary/20 text-primary">
                                    Smarter Way to Pay
                                </SectionBadge>
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-heading leading-[1] tracking-normal">
                                Powering <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Payments</span> <br /> with Confidence
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-text-body text-sm md:text-base lg:text-lg leading-relaxed max-w-lg font-medium">
                                Zeroplace delivers secure, seamless, and reliable transactions with advanced protection and global reach, empowering businesses to build trust.
                            </motion.p>
                        </div>

                        <motion.div variants={fadeInUp}>
                            <PremiumButton href="/pricing">
                                Read More
                            </PremiumButton>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative z-10 rounded-4xl bg-white/20 backdrop-blur-sm">
                            <img
                                src="/images/mockups/control-plan.png"
                                alt="Dashboard Mockup"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>
                        {/* Decorative background circle */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] -z-10"
                        />
                    </motion.div>
                </div>

                {/* Bottom Features */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(108 70 253 / 0.15)" }}
                            className="bg-white lg:p-8 p-5 lg:rounded-3xl md:rounded-xl rounded-lg border border-primary/5 shadow-xl shadow-primary/5 flex flex-col lg:gap-6 gap-4 transition-all duration-300"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="lg:w-14 lg:h-14 w-10 h-10 bg-primary/10 lg:rounded-2xl rounded-md flex items-center justify-center text-primary"
                            >
                                <feature.icon size={24} strokeWidth={2} />
                            </motion.div>
                            <div className="md:space-y-3 space-y-2">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-black text-text-heading leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-text-muted text-sm font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </SectionContainer>
        </section>
    );
}
