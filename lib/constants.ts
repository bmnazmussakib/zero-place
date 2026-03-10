import { NavItem, PricingTier, Service, ServiceItem } from "@/types";
import {
    Palette,
    Globe,
    Video,
    Code2,
    Smartphone
} from "lucide-react";
import React from 'react';

export const serviceItems: ServiceItem[] = [
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
        title: "Saas Product & Software design",
        description:
            "We design software that actually makes sense. Real people, real needs, no frustrating experiences.",
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
        title: "Brand identity design",
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

export const navItems: NavItem[] = [
    {
        title: "Services",
        href: "/services",
        type: "megamenu",
        children: [
            {
                title: "Design",
                href: "#",
                children: [
                    {
                        title: "Graphic Design",
                        href: "/services/graphic-design",
                        icon: React.createElement(Palette, { size: 18 }),
                        details: [
                            "Banner Ads",
                            "Social Media ",
                            "Blog Graphics",
                            "Clothing & Merchandise",
                            "Package and Label",
                            "Any Other Graphics",
                        ]
                    },
                    {
                        title: "Website Design",
                        href: "/services/website-design",
                        icon: React.createElement(Globe, { size: 18 }),
                        details: [
                            "Landing Page ",
                            "Full Website UI/U",
                            "Responsive Layouts",
                            "Wireframing & Prototyping",
                            "Design System Creation",
                            "Figma Source Files",
                        ]
                    },
                    {
                        title: "Motion Graphics",
                        href: "/services/motion-graphics",
                        icon: React.createElement(Video, { size: 18 }),
                        details: [
                            "Animated Logos",
                            "Explainer Videos",
                            "Short-Form Content",
                            "Social Media Animations",
                            "Looping Animations",
                            "Sound Design",
                        ]
                    },
                ]
            },
            {
                title: "Development",
                href: "#",
                children: [
                    {
                        title: "Web Development",
                        href: "/services/web-dev",
                        icon: React.createElement(Code2, { size: 18 }),
                        details: [
                            "Custom Website",
                            "Next.js / React",
                            "E-Commerce ",
                            "CMS Integratio",
                            "API Development",
                            "Performance Optimization",
                        ]
                    },
                    {
                        title: "App Development",
                        href: "/services/app-dev",
                        icon: React.createElement(Smartphone, { size: 18 }),
                        details: [
                            "iOS & Android Apps",
                            "React Native / Expo",
                            "Cross-Platform Solutions",
                            "App Store Submission",
                            "Push Notifications",
                            "Offline Mode Support",
                        ]
                    },
                ]
            }
        ]
    },
    // {
    //     title: "Service",
    //     href: "#",
    //     type: "dropdown",
    //     children: [
    //         { title: "Blog", href: "/blog" },
    //         { title: "Case Studies", href: "/case-studies" },
    //         { title: "Documentation", href: "/docs" },
    //     ]
    // },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Pricing", href: "/pricing" },
];

export const pricingTiers: PricingTier[] = [
    {
        name: "Web Development",
        price: "Starting at $900",
        description: "High-performance, scalable websites built with modern tech.",
        features: [
            { name: "Clean & Scalable Code", price: 300 },
            { name: "Responsive & Mobile Friendly", price: 300 },
            { name: "Next.js / React Expertise", price: 300 },
            { name: "SEO Foundations", price: 200 },
            { name: "CMS Integration", price: 250 },
            { name: "Custom API Integration", price: 350 },
        ],
    },
    {
        name: "Graphics Design",
        price: "Starting at $300",
        description: "Visually stunning assets that capture your brand's essence.",
        features: [
            { name: "Social Media Graphics", price: 100 },
            { name: "Marketing Collaterals", price: 100 },
            { name: "Presentation Design", price: 100 },
            { name: "Unlimited Revisions", price: 80 },
            { name: "Brand Style Guide", price: 150 },
            { name: "Print-Ready Files", price: 120 },
        ],
        isPopular: true,
    },
    {
        name: "Web Design",
        price: "Starting at $600",
        description: "User-centric interfaces that provide exceptional digital experiences.",
        features: [
            { name: "UX/UI Design", price: 200 },
            { name: "Figma Source Files", price: 200 },
            { name: "Interactive Prototypes", price: 200 },
            { name: "Modern Aesthetics", price: 150 },
            { name: "Design System", price: 250 },
            { name: "A/B Test Designs", price: 180 },
        ],
    },
    {
        name: "App Development",
        price: "Starting at $900",
        description: "Native and cross-platform mobile apps built for scale.",
        features: [
            { name: "iOS & Android Support", price: 300 },
            { name: "React Native / Expo", price: 300 },
            { name: "Smooth Performance", price: 300 },
            { name: "Push Notifications", price: 200 },
            { name: "Offline Mode", price: 250 },
            { name: "App Store Submission", price: 150 },
        ],
    },
    {
        name: "Motion Graphics",
        price: "Starting at $450",
        description: "Dynamic animations that bring your brand identity to life.",
        features: [
            { name: "Animated Logos", price: 150 },
            { name: "Explainer Videos", price: 150 },
            { name: "Short-Form Content", price: 150 },
            { name: "High-Quality Rendering", price: 120 },
            { name: "Sound Design", price: 180 },
            { name: "Looping Animations", price: 130 },
        ],
    },
];

export const subscriptionTiers: PricingTier[] = [
    {
        name: "Web Development",
        price: "Starting at $119/mo",
        description: "Ongoing dev support and feature updates for your website.",
        features: [
            { name: "Monthly Code Updates", price: 49 },
            { name: "Bug Fixes & Maintenance", price: 39 },
            { name: "Performance Monitoring", price: 31 },
            { name: "Priority Support", price: 30 },
            { name: "Weekly Progress Reports", price: 25 },
            { name: "Dedicated Slack Channel", price: 20 },
        ],
    },
    {
        name: "Graphics Design",
        price: "Starting at $79/mo",
        description: "Monthly design assets to keep your brand fresh and active.",
        features: [
            { name: "Unlimited Design Requests", price: 35 },
            { name: "2-3 Day Delivery", price: 24 },
            { name: "Source Files Included", price: 20 },
            { name: "No Contract", price: 0 },
            { name: "Social Media Templates", price: 30 },
            { name: "Monthly Brand Refresh", price: 40 },
        ],
        isPopular: true,
    },
    {
        name: "Web Design",
        price: "Starting at $89/mo",
        description: "Continuous UI/UX improvements and landing page work.",
        features: [
            { name: "Monthly UI Updates", price: 35 },
            { name: "Figma Design Files", price: 29 },
            { name: "A/B Test Designs", price: 25 },
            { name: "Direct Slack Access", price: 20 },
            { name: "CRO Improvements", price: 40 },
            { name: "Landing Page Designs", price: 50 },
        ],
    },
    {
        name: "App Development",
        price: "Starting at $179/mo",
        description: "Dedicated monthly app development and maintenance sprints.",
        features: [
            { name: "Weekly Sprints", price: 69 },
            { name: "Bug Fixes & Patches", price: 59 },
            { name: "Feature Additions", price: 51 },
            { name: "Dedicated Developer", price: 50 },
            { name: "App Store Updates", price: 35 },
            { name: "Performance Dashboard", price: 30 },
        ],
    },
    {
        name: "Motion Graphics",
        price: "Starting at $89/mo",
        description: "Monthly animated content for social media and marketing.",
        features: [
            { name: "4 Animations / Month", price: 39 },
            { name: "Social Media Formats", price: 29 },
            { name: "Fast Turnaround", price: 21 },
            { name: "Unlimited Revisions", price: 25 },
            { name: "Sound Design Add-on", price: 35 },
            { name: "Brand Consistency Review", price: 20 },
        ],
    },
];


export const services: Service[] = [
    {
        title: "UI/UX Design",
        description: "Beautiful and functional interfaces for web and mobile.",
        slug: "ui-ux-design-services",
    },
    {
        title: "Graphic Design",
        description: "Social media, ads, and branding assets.",
        slug: "graphic-design-services",
    },
    {
        title: "Branding",
        description: "Logo, typography, and brand identity development.",
        slug: "branding-services",
    },
];

export const portfolioItems = [
    {
        title: "Brand Identity - Zeno",
        category: "Branding",
        image: "/images/work/examples-10.png",
    },
    {
        title: "Mobile App - Fitness Tracker",
        category: "UI/UX Design + Mobile App",
        image: "/images/work/examples-17.png",
    },
    {
        title: "E-Commerce Experience",
        category: "Website",
        image: "/images/work/examples-11.png",
    },
    {
        title: "Presentation Deck - Pitch",
        category: "Presentation Design",
        image: "/images/work/examples-5-1.png",
    },
    {
        title: "SaaS Dashboard Concept",
        category: "SAAS",
        image: "/images/work/examples-4-1.png",
    },
    {
        title: "Social Media Banner Set",
        category: "Social Media banners & Ad Creative",
        image: "/images/work/examples-3-1.png",
    },
    {
        title: "Company Quarterly Report",
        category: "Infographics",
        image: "/images/work/examples-12.png",
    },
    {
        title: "Modern Logo Collection",
        category: "Logo",
        image: "/images/work/examples-9-1.png",
    },
];

export const categories = [
    "All", "Branding", "Infographics", "Logo", "Presentation Design",
    "UI/UX Design + Mobile App", "Website", "SAAS",
    "Social Media banners & Ad Creative", "Gifs", "Printing", "Videos"
];

export const servicesCategories = [
    {
        title: "Graphic Design",
        slug: "graphic-design",
        image: "/images/services/service-card-2.jpg",
        color: "bg-[#1C1C1E]",
        textColor: "text-white",
        colSpan: 1,
        description: "Social media, ads, and branding assets."
    },
    {
        title: "Website Design",
        slug: "website-design",
        image: "/images/services/service-card-5.jpg",
        color: "bg-[#FFD600]",
        textColor: "text-black",
        colSpan: 1,
        description: "Beautiful and functional interfaces."
    },
    {
        title: "Motion Graphics",
        slug: "motion-graphics",
        image: "/images/services/service-card-12.jpg",
        color: "bg-[#1C1C1E]",
        textColor: "text-white",
        colSpan: 1,
        description: "Animated logos and videos."
    },
    {
        title: "Web Development",
        slug: "web-dev",
        image: "/images/services/service-card-6.jpg",
        color: "bg-[#F3F4F6]",
        textColor: "text-black",
        colSpan: 1,
        description: "Robust and scalable web solutions."
    },
    {
        title: "App Development",
        slug: "app-dev",
        image: "/images/services/service-card-7.jpg",
        color: "bg-[#1C1C1E]",
        textColor: "text-white",
        colSpan: 1,
        description: "Native and cross-platform mobile apps."
    },
    {
        title: "Branding",
        slug: "branding-services",
        image: "/images/work/examples-10.png",
        color: "bg-[#FFD600]",
        textColor: "text-black",
        colSpan: 1,
        description: "Logo, typography, and brand identity."
    },
];
