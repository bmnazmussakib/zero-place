// components/WhyDuckDesign.tsx  (or whatever name you prefer)

import React from 'react';
import SectionContainer from '../shared/SectionContainer';

export default function ServiceWhy() {
    return (
        <>
            <section className="relative bg-white py-20 md:py-28 overflow-hidden">
                <SectionContainer>

                    {/* Optional subtle background gradient / pattern */}
                    <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6c46fd]/5 via-transparent to-indigo-500/5"></div>
                    </div>

                    <div className="relative ">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                            {/* Left side - two stat cards */}
                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full lg:w-auto">
                                {/* Card 1 - 7+ years */}
                                <div
                                    className="
                flex-1 min-w-[240px] aspect-[4/3.5] max-w-xs
                rounded-3xl p-8 md:p-10
                bg-gradient-to-br from-[#6c46fd]/10 to-indigo-600/5
                border border-[#6c46fd]/15
                shadow-xl shadow-[#6c46fd]/10
                flex flex-col items-center justify-center text-center
                transition-all hover:shadow-[#6c46fd]/20 hover:scale-[1.02]
              "
                                >
                                    <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#6c46fd] tracking-tight mb-3">
                                        7+
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold text-[#0f0e21] mb-2">
                                        years
                                    </div>
                                    <p className="text-base text-gray-600 mt-2">
                                        Duck.design
                                        <br />
                                        on the market
                                    </p>
                                </div>

                                {/* Card 2 - 3% */}
                                <div
                                    className="
                flex-1 min-w-[240px] aspect-[4/3.5] max-w-xs
                rounded-3xl p-8 md:p-10
                bg-gradient-to-br from-[#6c46fd] to-indigo-700
                text-white
                shadow-2xl shadow-[#6c46fd]/30
                flex flex-col items-center justify-center text-center
                transition-all hover:shadow-[#6c46fd]/40 hover:scale-[1.02]
              "
                                >
                                    <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
                                        3%
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold mb-2">
                                        Get hired at
                                        <br />
                                        duck.design
                                    </div>
                                </div>
                            </div>

                            {/* Right side - main text block */}
                            <div className="max-w-2xl text-center lg:text-left">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f0e21] leading-tight mb-6 md:mb-8">
                                    A dedicated{' '}
                                    <span className="bg-gradient-to-r from-[#6c46fd] to-indigo-600 bg-clip-text text-transparent">
                                        super
                                    </span>{' '}
                                    team for all types of graphic
                                    <br className="hidden sm:block" />
                                    design from A to Z
                                </h2>

                                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8 md:mb-10">
                                    There's no limit to what you can get designed at Duck.Design. Whether you need an out-of-this-world
                                    illustration, beautiful print designs, or engaging digital marketing assets, Duck.Design's global community of
                                    world-class graphic designers can make it happen.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </>
    );
}