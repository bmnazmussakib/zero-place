import React from 'react'
import SectionContainer from '../shared/SectionContainer'
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import PremiumButton from '../shared/PremiumButton';

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
        <div className='group relative py-4 px-10 bg-white border border-border/40 shadow-xs hover:shadow-lg rounded-sm mx-4 w-56 h-20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 overflow-hidden'>
            <img
                src={logo}
                alt={name}
                className='w-auto h-10 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100'
            />
            {/* <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
        </div>
    );
}

function OurBrands() {
    return (
        <SectionContainer className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                            Trusted by <span className="text-primary italic">Global</span> Brands
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Your brand designs are too important to be left in the hands of unreliable freelancers. Why not hire an experienced designer who knows your brand by heart?
                        </p>
                    </div>

                    <div className="">
                        <PremiumButton asChild>
                            <Link href="/pricing">
                                Get Started
                            </Link>
                        </PremiumButton>
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-2 relative">
                    {/* Decorative background element */}
                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 blur-3xl opacity-50" />

                    <div className="relative">
                        <Marquee
                            autoFill={true}
                            pauseOnHover={true}
                            gradient={true}
                            gradientColor="var(--background)"
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
                            gradientColor="var(--background)"
                            gradientWidth={100}
                            direction="right"
                            className="py-8 overflow-hidden"
                        >
                            {BRANDS.slice(5).map((brand, i) => (
                                <BrandCard key={i} {...brand} />
                            ))}
                        </Marquee>
                    </div>
                </div>

            </div>
        </SectionContainer>
    )
}

export default OurBrands
