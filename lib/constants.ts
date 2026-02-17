import { NavItem, PricingTier, Service } from "@/types";
import {
    Palette,
    Globe,
    Video,
    Code2,
    Smartphone
} from "lucide-react";
import React from 'react';

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
                    { title: "Graphic Design", href: "/services/graphic-design", icon: React.createElement(Palette, { size: 18 }) },
                    { title: "Website Design", href: "/services/website-design", icon: React.createElement(Globe, { size: 18 }) },
                    { title: "Motion Graphics", href: "/services/motion-graphics", icon: React.createElement(Video, { size: 18 }) },
                ]
            },
            {
                title: "Development",
                href: "#",
                children: [
                    { title: "Web Development", href: "/services/web-dev", icon: React.createElement(Code2, { size: 18 }) },
                    { title: "App Development", href: "/services/app-dev", icon: React.createElement(Smartphone, { size: 18 }) },
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
        name: "Starter",
        price: "$999",
        description: "Perfect for startups needing quick design fixes.",
        features: ["One request at a time", "Average 2-3 day delivery", "Unlimited revisions"],
    },
    {
        name: "Growth",
        price: "$1899",
        description: "Best for scaling businesses with regular design needs.",
        features: ["Two requests at a time", "Priority support", "Native source files", "Direct slack communication"],
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "$3499",
        description: "Complete design solution for larger organizations.",
        features: ["Four requests at a time", "Dedicated account manager", "Custom design systems", "Unlimited brands"],
    },
];

export const subscriptionTiers: PricingTier[] = [
    {
        name: "Starter",
        price: "$49",
        description: "Basic features for individuals and small teams.",
        features: ["Unlimited requests", "Average 3-4 day delivery", "Standard support", "No contract"],
    },
    {
        name: "Growth",
        price: "$99",
        description: "Advanced features for growing businesses.",
        features: ["Priority requests", "Average 1-2 day delivery", "Priority support", "Source files included"],
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "$199",
        description: "Full potential for large scale organizations.",
        features: ["Direct slack access", "Dedicated designer", "Fastest delivery", "Custom onboarding"],
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
