import React from 'react'
import SectionContainer from '../shared/SectionContainer'
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import PremiumButton from '../shared/PremiumButton';
import * as motion from "motion/react-client";

const BRANDS = [
    { name: 'Ventoo', logo: '/images/brands/ventoo-logo.svg' },
    { name: 'Partner 1', logo: '/images/brands/partnernln-1.svg' },
    { name: 'Partner 2', logo: '/images/brands/partnernln-2.svg' },
    { name: 'Partner 3', logo: '/images/brands/partnernln-3.svg' },
    { name: 'Partner 9', logo: '/images/brands/partnernln-9.svg' },
    { name: 'Partner 10', logo: '/images/brands/partnernln-10.svg' },
    { name: 'Samsung', logo: '/images/brands/samsung_logo.svg' },
    { name: 'Skycop', logo: '/images/brands/skycop-logo.svg' },
    { name: 'BKFX', logo: '/images/brands/bkfx_logo.svg' },
];

function BrandCard({ logo, name }: { logo: string; name: string }) {
    return (
        <div className='group relative py-4 px-10 bg-transparent hover:bg-slate-100 rounded-sm mx-4 w-56 h-20 flex items-center justify-center transition-all duration-300  overflow-hidden'>
            <img
                src={logo}
                alt={name}
                className='w-auto h-10 object-contain filter invert brightness-0 opacity-60 group-hover:invert-0 group-hover:brightness-100 transition-all duration-500 '
            />
            {/* <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
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

function OurBrands() {
    return (
        <>
            <div className='bg-footer-bg'>
                <SectionContainer className="py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            className="lg:col-span-5 space-y-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.div className="space-y-4" variants={fadeInUp}>
                                <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading- tracking-normal">
                                    Trusted by <span className="bg-gradient-to-r from-[#6c46fd] via-indigo-600 to-purple-600 bg-clip-text text-transparent">Global</span> Brands
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Your brand designs are too important to be left in the hands of unreliable freelancers. Why not hire an experienced designer who knows your brand by heart?
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
                                    className="py-8 overflow-hidden"
                                >
                                    {BRANDS.slice(0, 5).map((brand, i) => (
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
                                    className="py-8 overflow-hidden"
                                >
                                    {BRANDS.slice(5).map((brand, i) => (
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
