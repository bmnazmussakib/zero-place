export interface NavItem {
    title: string;
    href: string;
}

export interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export interface Service {
    title: string;
    description: string;
    slug: string;
}
