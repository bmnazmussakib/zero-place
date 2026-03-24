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

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: string;
    imageIcon: string;
}

export interface ServiceDetail {
    slug: string;
    hero: {
        title: string;
        description: string;
        breadcrumb: string;
    };
    why: {
        title: string;
        description: string;
        stats: {
            value: string;
            label: string;
            description: string;
            isHighlighted?: boolean;
        }[];
    };
    pricing: {
        title: string;
        description: string;
        planData: Record<string, {
            price: string;
            discountLabel?: string;
            features: string[];
        }>;
    };
    benefits: {
        items: {
            icon: string; // Lucide icon name
            title: string;
            description: string;
        }[];
    };
}
