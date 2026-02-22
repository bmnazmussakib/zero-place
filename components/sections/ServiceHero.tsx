// serviceHero.tsx
import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import PremiumButton from '../shared/PremiumButton';
import * as motion from "motion/react-client";

export default function ServiceHero() {
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
        <>
            <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-40">
                <SectionContainer>
                    {/* Subtle background blobs using brand purple */}
                    <div className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-multiply">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.3, 0.2],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#6c46fd]/20 blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.15, 0.25, 0.15],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-[#6c46fd]/15 blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                            className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
                        />
                    </div>

                    <div className="relative">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="w-full flex flex-col items-center text-center lg:items-start lg:text-left"
                            >
                                {/* Breadcrumb */}
                                <motion.nav variants={fadeInUp} className="mb-6 text-sm font-medium text-gray-500">
                                    <ol className="flex items-center justify-center gap-2 lg:justify-start">
                                        <li>
                                            <a href="/" className="text-[#0f0e21] hover:text-[#6c46fd] transition-colors">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <span className="text-gray-400 mx-1">›</span>
                                        </li>
                                        <li className="text-[#0f0e21]">Graphic Design Services</li>
                                    </ol>
                                </motion.nav>

                                {/* Main heading - split line with gradient on "Services" */}
                                <motion.h1 variants={fadeInUp} className="mb-6 max-w-5xl font-extrabold tracking-tight text-[#0f0e21] text-5xl md:text-6xl lg:text-7xl">
                                    Graphic Design
                                    <br className="hidden sm:block" />
                                    <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Services
                                    </span>
                                </motion.h1>

                                {/* Description */}
                                <motion.p variants={fadeInUp} className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl lg:mx-0 lg:text-left">
                                    Get all your graphic design needs met—from ad creative to website illustrations—with a tech-enabled solution
                                    that empowers your team to get the design they need, when they need it.
                                </motion.p>

                                <motion.div variants={fadeInUp}>
                                    <PremiumButton href="/book-a-call" className="hidden sm:inline-flex">
                                        Book a Call
                                    </PremiumButton>
                                </motion.div>
                            </motion.div>

                            {/* Floating illustration card */}
                            <motion.div
                                initial={{ opacity: 0, x: 50, rotate: 5 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    rotate: 0,
                                    y: [0, -15, 0]
                                }}
                                transition={{
                                    opacity: { duration: 1, delay: 0.5 },
                                    x: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 },
                                    y: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="relative mt-10 w-full max-w-md self-center lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/3 lg:mt-0 lg:w-96 xl:w-[420px]"
                            >
                                <div className="relative aspect-[4/3.2] overflow-hidden rounded-3xl border border-gray-100 bg-white/80 shadow-2xl shadow-[#6c46fd]/15 backdrop-blur-md">
                                    {/* Inner decorative elements */}
                                    <div className="absolute inset-0">
                                        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-[#6c46fd] to-indigo-500 opacity-90 blur-xl"></div>
                                        <div className="absolute -left-16 bottom-8 h-40 w-40 rounded-full bg-purple-400/70 blur-xl"></div>
                                        <div className="absolute right-10 top-20 h-24 w-24 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg rotate-6"></div>

                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute left-1/2 top-1/3 -translate-x-1/2 text-yellow-400/80 text-4xl drop-shadow-lg"
                                        >
                                            ★
                                        </motion.div>
                                        <motion.div
                                            animate={{ scale: [1, 1.3, 1], rotate: [0, -15, 0] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="absolute right-16 bottom-20 text-orange-300/70 text-5xl drop-shadow-xl rotate-12"
                                        >
                                            ✦
                                        </motion.div>

                                        <div className="absolute right-12 top-1/4 text-9xl text-[#6c46fd]/70 drop-shadow-2xl rotate-[-15deg]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M18 2l-1.8 1.8c-.8-.4-1.7-.6-2.6-.6-3.3 0-6 2.7-6 6 0 .9.2 1.8.6 2.6L2 18l2 2 7.4-7.4c.8.4 1.7.6 2.6.6 3.3 0 6-2.7 6-6 0-.9-.2-1.8-.6-2.6L20 6l-2-4zM8 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6c46fd]/5 to-transparent opacity-60 blur-md -rotate-2 scale-[1.02] -z-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </>
    );
}