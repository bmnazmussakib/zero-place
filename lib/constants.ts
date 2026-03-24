import { NavItem, PricingTier, Service, ServiceItem, ServiceDetail } from "@/types";
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
                        title: "UI/UX Design",
                        href: "/services/ui-ux-design",
                        icon: React.createElement(Palette, { size: 18 }),
                        details: [
                            "User Research",
                            "Persona Mapping",
                            "Wireframing",
                            "Interactive Prototyping",
                            "Visual Design",
                            "Usability Testing",
                        ]
                    },
                    {
                        title: "Website Design",
                        href: "/services/website-design",
                        icon: React.createElement(Globe, { size: 18 }),
                        details: [
                            "Landing Page Design",
                            "Responsive Layouts",
                            "E-Commerce UI",
                            "Blog & Content Design",
                            "Design Systems",
                            "Conversion Optimization",
                        ]
                    },
                    {
                        title: "SaaS Design",
                        href: "/services/saas-design",
                        icon: React.createElement(Code2, { size: 18 }),
                        details: [
                            "Dashboard Design",
                            "Complex Workflows",
                            "Data Visualization",
                            "Product Strategy",
                            "UX Audit",
                            "Design Handoffs",
                        ]
                    },
                    {
                        title: "Brand Identity Design",
                        href: "/services/branding",
                        icon: React.createElement(Palette, { size: 18 }),
                        details: [
                            "Logo Design",
                            "Typography & Color",
                            "Brand Guidelines",
                            "Marketing Assets",
                            "Stationery Design",
                            "Brand Messaging",
                        ]
                    },
                ]
            },
            {
                title: "Development",
                href: "#",
                children: [
                    {
                        title: "Website Development",
                        href: "/services/web-dev",
                        icon: React.createElement(Code2, { size: 18 }),
                        details: [
                            "Next.js / React Development",
                            "E-Commerce Solutions",
                            "CMS Integrations",
                            "Performance Optimization",
                            "SEO Foundations",
                            "Secure Deployments",
                        ]
                    },
                    {
                        title: "Mobile App Design",
                        href: "/services/app-dev",
                        icon: React.createElement(Smartphone, { size: 18 }),
                        details: [
                            "iOS & Android Apps",
                            "Cross-Platform Dev",
                            "App Store Optimization",
                            "Push Notifications",
                            "Offline Support",
                            "Mobile Strategy",
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
        title: "UI/UX Design",
        slug: "ui-ux-design",
        image: "/images/services/service-card-2.jpg",
        color: "bg-[#1C1C1E]",
        textColor: "text-white",
        colSpan: 1,
        description: "We make user interfaces that actually make sense."
    },
    {
        title: "Website Design",
        slug: "website-design",
        image: "/images/services/service-card-5.jpg",
        color: "bg-[#FFD600]",
        textColor: "text-black",
        colSpan: 1,
        description: "Websites that don't just look good but actually do something."
    },
    {
        title: "SaaS & Software Design",
        slug: "saas-design",
        image: "/images/services/service-card-12.jpg",
        color: "bg-[#1C1C1E]",
        textColor: "text-white",
        colSpan: 1,
        description: "We design software that actually makes sense."
    },
    {
        title: "Website Development",
        slug: "web-dev",
        image: "/images/services/service-card-6.jpg",
        color: "bg-[#F3F4F6]",
        textColor: "text-black",
        colSpan: 1,
        description: "Websites that won't break when you need them most."
    },
    {
        title: "Mobile App Design",
        slug: "app-dev",
        image: "/images/services/service-card-7.jpg",
        color: "bg-[#1C1C1E]",
        textColor: "text-white",
        colSpan: 1,
        description: "Apps people actually want to use."
    },
    {
        title: "Brand Identity Design",
        slug: "branding",
        image: "/images/work/examples-10.png",
        color: "bg-[#FFD600]",
        textColor: "text-black",
        colSpan: 1,
        description: "Your brand should say something worth hearing."
    },
];

export const servicesDetails: Record<string, ServiceDetail> = {
    "ui-ux-design": {
        slug: "ui-ux-design",
        hero: {
            title: "Exploring UI/UX Design",
            description: "We make user interfaces that actually make sense. Real people, real needs, no frustrating experiences.",
            breadcrumb: "UI/UX Design Services"
        },
        why: {
            title: "User-centric design that drives engagement",
            description: "Our UI/UX design process is rooted in empathy and data. We build products that people love to use, ensuring your business stays ahead of the competition.",
            stats: [
                { value: "98%", label: "Satisfaction", description: "From our clients' users" },
                { value: "40%", label: "Better", description: "Retention rates", isHighlighted: true }
            ]
        },
        pricing: {
            title: "UI/UX Design",
            description: "Get world-class product design for your startup or enterprise. Our plan includes:",
            planData: {
                "1month": {
                    price: "$1999",
                    features: ["User Research", "Wireframing", "Interactive Prototypes", "Design System", "Visual Testing", "Source Files Access"]
                },
                "3months": {
                    price: "$1799",
                    discountLabel: "10% off",
                    features: ["User Research", "Wireframing", "Interactive Prototypes", "Design System", "Visual Testing", "Source Files Access"]
                },
                "6months": {
                    price: "$1599",
                    discountLabel: "20% off",
                    features: ["User Research", "Wireframing", "Interactive Prototypes", "Design System", "Visual Testing", "Source Files Access"]
                }
            }
        },
        benefits: {
            items: [
                { icon: "LayoutDashboard", title: "Smart Dashboards", description: "Interfaces optimized for complex data management." },
                { icon: "Zap", title: "Rapid Iterations", description: "We move fast from idea to high-fidelity prototype." },
                { icon: "CheckCircle", title: "Quality Focus", description: "Every pixel is scrutinized for perfection." },
                { icon: "Users", title: "Collaboration", description: "Direct access to our design team via Slack." },
                { icon: "Smartphone", title: "Multi-device", description: "Seamless experience across web and mobile." },
                { icon: "Clock", title: "Reliability", description: "Consistent delivery of high-quality assets." }
            ]
        }
    },
    "website-design": {
        slug: "website-design",
        hero: {
            title: "Website Design",
            description: "Websites that don't just look good but actually do something for your business. More clicks, more stays, more customers.",
            breadcrumb: "Website Design Services"
        },
        why: {
            title: "Websites that convert and grow",
            description: "We blend aesthetics with performance to create websites that are easy to manage and built to convert visitors into loyal customers.",
            stats: [
                { value: "500+", label: "Websites", description: "Launched successfully" },
                { value: "45%", label: "Avg. Growth", description: "In user conversion", isHighlighted: true }
            ]
        },
        pricing: {
            title: "Website Design",
            description: "Modern website design for high-growth companies. Our plan includes:",
            planData: {
                "1month": {
                    price: "$1499",
                    features: ["UI/UX Design", "Responsive Layouts", "SEO Foundation", "Figma Design Files", "Design System", "A/B Testing Support"]
                },
                "3months": {
                    price: "$1349",
                    discountLabel: "10% off",
                    features: ["UI/UX Design", "Responsive Layouts", "SEO Foundation", "Figma Design Files", "Design System", "A/B Testing Support"]
                },
                "6months": {
                    price: "$1199",
                    discountLabel: "20% off",
                    features: ["UI/UX Design", "Responsive Layouts", "SEO Foundation", "Figma Design Files", "Design System", "A/B Testing Support"]
                }
            }
        },
        benefits: {
            items: [
                { icon: "Globe", title: "Global standards", description: "We follow industry best practices for global reach." },
                { icon: "Smartphone", title: "Mobile first", description: "Designs that look great on any device." },
                { icon: "Zap", title: "Fast delivery", description: "Quick iterations and rapid prototyping." },
                { icon: "Search", title: "SEO optimized", description: "Foundational SEO built into every design." },
                { icon: "ShieldCheck", title: "High security", description: "Clean architectures that prioritize safety." },
                { icon: "LifeBuoy", title: "24/7 Support", description: "We are always here to help you." }
            ]
        }
    },
    "saas-design": {
        slug: "saas-design",
        hero: {
            title: "SaaS & Software Design",
            description: "We design software that actually makes sense. Real people, real needs, no frustrating experiences.",
            breadcrumb: "SaaS Design Services"
        },
        why: {
            title: "Expertise in complex product design",
            description: "Our team specializes in designing complex B2B and B2C SaaS platforms, ensuring clarity and efficiency for your users.",
            stats: [
                { value: "100+", label: "Product Launches", description: "Across various industries" },
                { value: "60%", label: "Reduction", description: "In user onboarding time", isHighlighted: true }
            ]
        },
        pricing: {
            title: "SaaS Design",
            description: "End-to-end product design for software companies. Our plan includes:",
            planData: {
                "1month": {
                    price: "$2499",
                    features: ["Product Strategy", "User Journey Mapping", "Complex UI Design", "Prototyping", "UX Audit", "Design Handoff"]
                },
                "3months": {
                    price: "$2249",
                    discountLabel: "10% off",
                    features: ["Product Strategy", "User Journey Mapping", "Complex UI Design", "Prototyping", "UX Audit", "Design Handoff"]
                },
                "6months": {
                    price: "$1999",
                    discountLabel: "20% off",
                    features: ["Product Strategy", "User Journey Mapping", "Complex UI Design", "Prototyping", "UX Audit", "Design Handoff"]
                }
            }
        },
        benefits: {
            items: [
                { icon: "Package", title: "Modular units", description: "Flexible design systems that scale." },
                { icon: "Zap", title: "Lean processing", description: "No bloat. Only what works for your product." },
                { icon: "Code", title: "Dev synergy", description: "Close collaboration with your engineering team." },
                { icon: "Layers", title: "Design systems", description: "Centralized assets for brand consistency." },
                { icon: "Activity", title: "Metric driven", description: "Decisions backed by user behavior data." },
                { icon: "Lock", title: "Secure flows", description: "Security-conscious user flow design." }
            ]
        }
    },
    "branding": {
        slug: "branding",
        hero: {
            title: "Brand Identity Design",
            description: "Your brand should say something worth hearing. We help you find your voice and make it stick.",
            breadcrumb: "Branding Services"
        },
        why: {
            title: "Identity that resonates",
            description: "We don't just design logos; we create comprehensive brand identities that tell your story and connect with your audience on a deeper level.",
            stats: [
                { value: "200+", label: "Brand Identities", description: "Created from scratch" },
                { value: "100%", label: "Original", description: "Hand-crafted designs only", isHighlighted: true }
            ]
        },
        pricing: {
            title: "Branding",
            description: "Premium brand identity packages for modern businesses. Our plan includes:",
            planData: {
                "1month": {
                    price: "$1799",
                    features: ["Logo Design", "Style Guide", "Typography", "Color System", "Marketing Assets", "Brand Messaging"]
                },
                "3months": {
                    price: "$1619",
                    discountLabel: "10% off",
                    features: ["Logo Design", "Style Guide", "Typography", "Color System", "Marketing Assets", "Brand Messaging"]
                },
                "6months": {
                    price: "$1439",
                    discountLabel: "20% off",
                    features: ["Logo Design", "Style Guide", "Typography", "Color System", "Marketing Assets", "Brand Messaging"]
                }
            }
        },
        benefits: {
            items: [
                { icon: "Brush", title: "Creative artistry", description: "Unique visual concepts that stand out." },
                { icon: "Target", title: "Strategic focus", description: "Designed with your market in mind." },
                { icon: "BookOpen", title: "Style guidelines", description: "Consistency across all touchpoints." },
                { icon: "Award", title: "Premium quality", description: "World-class design for elite brands." },
                { icon: "Smile", title: "Emotional bond", description: "Designs that build trust with customers." },
                { icon: "Repeat", title: "No limits", description: "Iteration until your voice is heard." }
            ]
        }
    },
    "web-dev": {
        slug: "web-dev",
        hero: {
            title: "Website Development",
            description: "Websites that won't break when you need them most. Fast, reliable, and ready to grow when you do.",
            breadcrumb: "Web Development Services"
        },
        why: {
            title: "Technical excellence for your business",
            description: "Our development team uses modern stacks like Next.js and React to build websites that are fast, secure, and SEO-ready.",
            stats: [
                { value: "99.9%", label: "Uptime", description: "For our deployed projects" },
                { value: "100+", label: "SaaS Apps", description: "Successfully delivered", isHighlighted: true }
            ]
        },
        pricing: {
            title: "Web Development",
            description: "Full-stack web development for the modern web. Our plan includes:",
            planData: {
                "1month": {
                    price: "$2999",
                    features: ["Next.js/React Dev", "CMS Integration", "API Development", "Database Setup", "SEO Optimization", "Cloud Deployment"]
                },
                "3months": {
                    price: "$2699",
                    discountLabel: "10% off",
                    features: ["Next.js/React Dev", "CMS Integration", "API Development", "Database Setup", "SEO Optimization", "Cloud Deployment"]
                },
                "6months": {
                    price: "$2399",
                    discountLabel: "20% off",
                    features: ["Next.js/React Dev", "CMS Integration", "API Development", "Database Setup", "SEO Optimization", "Cloud Deployment"]
                }
            }
        },
        benefits: {
            items: [
                { icon: "Code2", title: "Clean code", description: "Maintainable and well-documented codebase." },
                { icon: "Cpu", title: "Performance", description: "Optimized for speed and lighthouse scores." },
                { icon: "Lock", title: "Security first", description: "Latest protocols and secure pipelines." },
                { icon: "Layers", title: "Scalable tech", description: "Stacks that grow with your user base." },
                { icon: "GitBranch", title: "Full transparency", description: "Real-time updates via Git workflows." },
                { icon: "Terminal", title: "DevOps", description: "Automated CI/CD and monitoring." }
            ]
        }
    },
    "app-dev": {
        slug: "app-dev",
        hero: {
            title: "Mobile App Design",
            description: "Apps people actually want to use. Clean, smart designs that work how people expect them to work.",
            breadcrumb: "App Design Services"
        },
        why: {
            title: "Innovative mobile experiences",
            description: "We build intuitive, high-performance mobile applications for iOS and Android, focusing on seamless user journeys and robust functionality.",
            stats: [
                { value: "50+", label: "Store Apps", description: "Successfully launched" },
                { value: "4.9★", label: "Rating", description: "Average user review", isHighlighted: true }
            ]
        },
        pricing: {
            title: "Mobile App Design",
            description: "End-to-end mobile design and development. Our plan includes:",
            planData: {
                "1month": {
                    price: "$3499",
                    features: ["iOS & Android Dev", "UI/UX App Design", "Backend API Sync", "Push Notifs Setup", "App Store Submission", "Maintenance"]
                },
                "3months": {
                    price: "$3149",
                    discountLabel: "10% off",
                    features: ["iOS & Android Dev", "UI/UX App Design", "Backend API Sync", "Push Notifs Setup", "App Store Submission", "Maintenance"]
                },
                "6months": {
                    price: "$2799",
                    discountLabel: "20% off",
                    features: ["iOS & Android Dev", "UI/UX App Design", "Backend API Sync", "Push Notifs Setup", "App Store Submission", "Maintenance"]
                }
            }
        },
        benefits: {
            items: [
                { icon: "Smartphone", title: "Smooth performance", description: "Native speed and fluid animations." },
                { icon: "Cloud", title: "Cloud sync", description: "Reliable data persistence across devices." },
                { icon: "Bell", title: "Engagement", description: "Strategic push alerts that bring users back." },
                { icon: "Shield", title: "Privacy focus", description: "Encrypted storage and secure auth." },
                { icon: "Layout", title: "Adapative design", description: "Perfect display on every screen size." },
                { icon: "Activity", title: "Monitoring", description: "Real-time logs and error tracking." }
            ]
        }
    }
};
