export interface NavItem {
    title: string;
    href: string;
    children?: NavItem[];
    type?: 'dropdown' | 'megamenu' | 'link';
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
