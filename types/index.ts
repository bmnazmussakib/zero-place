export interface NavItem {
    title: string;
    href: string;
    icon?: React.ReactNode;
    children?: NavItem[];
    type?: 'dropdown' | 'megamenu' | 'link';
    details?: string[];
}

export interface PricingFeature {
    name: string;
    price: number;
}

export interface PricingTier {
    name: string;
    price: string; // display label (e.g. "Starting at")
    description: string;
    features: PricingFeature[];
    isPopular?: boolean;
}

export interface Service {
    title: string;
    description: string;
    slug: string;
}
