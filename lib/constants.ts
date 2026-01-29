import { NavItem, PricingTier, Service } from "@/types";

export const navItems: NavItem[] = [
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
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
