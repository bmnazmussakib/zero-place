// components/WhyDuckDesign.tsx  (or whatever name you prefer)

import * as motion from "motion/react-client";
import SectionContainer from '../shared/SectionContainer';

export default function ServiceWhy() {
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
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full lg:w-auto"
                            >
                                {/* Card 1 - 7+ years */}
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="
                                        flex-1 min-w-[240px] aspect-[4/3.5] max-w-xs
                                        rounded-3xl p-6 md:p-10
                                        bg-linear-to-br from-[#6c46fd]/10 to-indigo-600/5
                                        border border-[#6c46fd]/15
                                        shadow-xl shadow-[#6c46fd]/10
                                        flex flex-col items-center justify-center text-center
                                        transition-colors hover:shadow-[#6c46fd]/20 cursor-default
                                    "
                                >
                                    <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#6c46fd] tracking-tight mb-3">
                                        7+
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold text-[#0f0e21] mb-2">
                                        years
                                    </div>
                                    <p className="text-base text-gray-600 mt-2">
                                        Zeroplace
                                        <br />
                                        on the market
                                    </p>
                                </motion.div>

                                {/* Card 2 - 3% */}
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="
                                        flex-1 min-w-[240px] aspect-[4/3.5] max-w-xs
                                        rounded-3xl p-6 md:p-10
                                        bg-linear-to-br from-[#6c46fd] to-indigo-700
                                        text-white
                                        shadow-2xl shadow-[#6c46fd]/30
                                        flex flex-col items-center justify-center text-center
                                        transition-colors hover:shadow-[#6c46fd]/40 cursor-default
                                    "
                                >
                                    <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
                                        3%
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold mb-2">
                                        Get hired at
                                        <br />
                                        Zeroplace
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right side - main text block */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                className="max-w-2xl text-center lg:text-left"
                            >
                                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f0e21] leading-tight mb-6 md:mb-8">
                                    A dedicated{' '}
                                    <span className="bg-linear-to-r from-[#6c46fd] to-indigo-600 bg-clip-text text-transparent">
                                        super
                                    </span>{' '}
                                    team for all types of graphic
                                    <br className="hidden sm:block" />
                                    design from A to Z
                                </motion.h2>

                                <motion.p variants={fadeInUp} className="text-sm md:text-base lg:text-xl leading-relaxed text-gray-700 ">
                                    There's no limit to what you can get designed at Duck.Design. Whether you need an out-of-this-world
                                    illustration, beautiful print designs, or engaging digital marketing assets, Duck.Design's global community of
                                    world-class graphic designers can make it happen.
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </>
    );
}