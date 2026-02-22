"use client";

import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import Image from 'next/image';
import * as motion from "motion/react-client";

const serviceImages = [
    {
        id: 1,
        title: "UI/UX Design",
        description:
            "We make user interfaces that actually make sense. Real people, real needs, no frustrating experiences.",
        image: "/images/services/service-card-2.jpg",
        icon: "LayoutDashboard",
        imageIcon: "https://framerusercontent.com/images/8z76sKxLPVjqsmAodbiYaTNqT6k.png"
    },
    {
        id: 2,
        title: "Website Design",
        description:
            "Websites that don't just look good but actually do something for your business. More clicks, more stays, more customers.",
        image: "/images/services/service-card-5.jpg",
        icon: "Globe",
        imageIcon: "https://framerusercontent.com/images/ikSvZd1RCc2BDrqL4bILjC20NA8.png"
    },
    {
        id: 3,
        title: "Product Design",
        description:
            "Software shouldn't give people headaches. We simplify the complex stuff so your customers stick around instead of giving up.",
        image: "/images/services/service-card-6.jpg",
        icon: "Package",
        imageIcon: "https://framerusercontent.com/images/8wDkVxlj0xqU5rEKdSqJz9S77I.png"
    },
    {
        id: 4,
        title: "Mobile App Design",
        description:
            "Apps people actually want to use. Clean, smart designs that work how people expect them to work.",
        image: "/images/services/service-card-7.jpg",
        icon: "Smartphone",
        imageIcon: "https://framerusercontent.com/images/9BkEf4xmhxJJ8CGgZTFFQXKfFbc.png"
    },
    {
        id: 5,
        title: "Branding",
        description:
            "Your brand should say something worth hearing. We help you find your voice and make it stick.",
        image: "/images/services/service-card-12.jpg",
        icon: "Brush",
        imageIcon: "https://framerusercontent.com/images/V9fJFzeUHoyUXAGCmORzDx90sM.png"
    },
    {
        id: 6,
        title: "Website Development",
        description:
            "Websites that won't break when you need them most. Fast, reliable, and ready to grow when you do.",
        image: "/images/services/service-card-2.jpg",
        icon: "Code",
        imageIcon: "https://framerusercontent.com/images/1zxlDQLwA25TphCR2a6V7cSYXI.png"
    }
];

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
            delayChildren: 0.2
        }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100
        } as const
    }
};

export function ServicesPreview() {
    return (
        <section className="overflow-hidden bg-gray-50 py-16">
            <SectionContainer className="mb-16">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-black text-text-heading leading-[0.9] tracking-tighter mb-4">Our Services</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our wide range of professional services tailored to help your brand grow and succeed in the digital landscape.
                    </p>
                </motion.div>
            </SectionContainer>



            <SectionContainer className="py-0 ">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {serviceImages.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="group relative space-y-4 bg-white p-6 rounded-md cursor-pointer border border-transparent shadow-sm"
                                variants={cardVariant}
                                whileHover={{
                                    y: -8,
                                    borderColor: "rgba(0,0,0,0.05)",
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="p-3 rounded-xl bg-primary/10 w-fit transition-colors group-hover:bg-primary/20">
                                    <Image src={item.imageIcon} alt={item.title} width={32} height={32} className="object-contain" />
                                </div>
                                <h4 className='text-2xl font-light group-hover:text-primary transition-colors'>{item.title}</h4>
                                <p className="text-text-muted leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </SectionContainer>
        </section>
    );
}

