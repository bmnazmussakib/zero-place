"use client";

import * as motion from "motion/react-client";
import PremiumButton from "../shared/PremiumButton";
import SectionContainer from "../shared/SectionContainer";

export default function ServicesHeroCTA() {
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
            <div className="overflow-hidden">

                <SectionContainer className="px-5 md:px-10 4xl:px-0 py-10 md:py-16 ">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="flex flex-col items-center text-center max-w-4xl mx-auto  relative z-10"
                    >
                        {/* Subtle warm glow behind */}
                        <motion.div
                            // animate={{
                            //     scale: [1, 1.1, 1],
                            //     opacity: [0.3, 0.4, 0.3],
                            // }}
                            // transition={{
                            //     duration: 8,
                            //     repeat: Infinity,
                            //     ease: "easeInOut"
                            // }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 blur-3xl -z-10 rounded-full mix-blend-multiply"
                        />

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-6xl lg:text-7xl font-black font-heading mb-6 tracking-tight text-[#0f0e21]"
                        >
                            Scale your success with outstanding design
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-sm md:text-base lg:text-lg text-[var(--text-body)] max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-10 leading-relaxed"
                        >
                            Leading companies trust Duck.design to deliver high-quality design at scale. Book a call and start working with a dedicated team of professional designers.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="relative z-20">
                            <PremiumButton
                                href="/book-a-call"
                                className="font-bold tracking-wide"
                            >
                                BOOK A CALL
                            </PremiumButton>
                        </motion.div>
                    </motion.div>
                </SectionContainer>
            </div>
        </>
    );
}
