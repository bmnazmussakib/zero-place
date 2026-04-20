"use client";

import React, { useEffect, useState } from 'react';
import SectionContainer from '../shared/SectionContainer'
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import PremiumButton from '../shared/PremiumButton';
import * as motion from "motion/react-client";

import { Brand } from '@/types';
import { brands as brandsData } from '@/lib/constants';

function BrandCard({ logo, name }: { logo: string; name: string }) {
  return (
    <div
      className="
        group relative py-2 px-4 lg:py-4 lg:px-6 
        bg-transparent hover:bg-[#1d1c3b] 
        rounded-sm mx-2 md:mx-4 w-40 md:w-56 h-16 md:h-20 
        flex items-center justify-center 
        transition-all duration-300 
        overflow-hidden
      "
    >
      <img
        src={logo}
        alt={name}
        className="
          w-auto h-10 object-contain 
          brightness-0 invert opacity-60 
          group-hover:invert group-hover:brightness-0 group-hover:opacity-100
          transition-all duration-500
        "
      />
    </div>
  );
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

interface OurBrandsProps {
    initialBrands?: Brand[];
}

function OurBrands({ initialBrands }: OurBrandsProps) {
    const [brands, setBrands] = useState<Brand[]>(initialBrands || brandsData);

    // Split brands for the two marquees, handle case when brands is empty
    const firstRow = brands.length > 0 ? brands.slice(0, Math.ceil(brands.length / 2)) : [];
    const secondRow = brands.length > 0 ? brands.slice(Math.ceil(brands.length / 2)) : [];

    return (
        <>
            <div className='bg-footer-bg overflow-hidden'>
                <SectionContainer className="py-10 md:py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                        <motion.div
                            className="lg:col-span-5 space-y-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.div className="space-y-4" variants={fadeInUp}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading- tracking-normal">
                                    Trusted by <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Global</span> Brands
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                                    Your brand designs are too important to be left in the hands of unreliable freelancers. Why not hire an experienced designer who knows your brand by heart? Live chat assistance available.
                                </p>
                            </motion.div>

                            <motion.div className="" variants={fadeInUp}>
                                <PremiumButton href="/pricing">
                                    Get Started
                                </PremiumButton>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-7 flex flex-col gap-2 relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInRight}
                        >
                            {/* Decorative background element */}
                            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 blur-3xl opacity-50" />

                            <div className="relative">
                                <Marquee
                                    autoFill={true}
                                    pauseOnHover={true}
                                    gradient={true}
                                    gradientColor="var(--footer-bg)"
                                    gradientWidth={100}
                                    className="py-4 md:py-8 overflow-hidden"
                                >
                                    {firstRow.map((brand, i) => (
                                        <BrandCard key={i} {...brand} />
                                    ))}
                                </Marquee>
                            </div>

                            <div className="relative">
                                <Marquee
                                    autoFill={true}
                                    pauseOnHover={true}
                                    gradient={true}
                                    gradientColor="var(--footer-bg)"
                                    gradientWidth={100}
                                    direction="right"
                                    className="py-4 md:py-8 overflow-hidden"
                                >
                                    {secondRow.map((brand, i) => (
                                        <BrandCard key={i} {...brand} />
                                    ))}
                                </Marquee>
                            </div>
                        </motion.div>

                    </div>
                </SectionContainer>
            </div>
        </>
    )
}

export default OurBrands
