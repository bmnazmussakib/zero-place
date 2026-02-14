import { PricingTier } from "@/types";
import PremiumButton from "@/components/shared/PremiumButton";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
    tier: PricingTier;
    index: number;
}

const colors = [
    "bg-[#FF9666]", // Orange-ish
    "bg-[#D9FF00]", // Lime/Yellow
    "bg-[#1C1B29]", // Dark
    "bg-[#7C5CFF]", // Purple/Blue
];

export default function PricingCard({ tier, index }: PricingCardProps) {
    const bgColor = colors[index % colors.length];
    const isDark = bgColor === "bg-[#1C1B29]";

    return (
        <div className={cn(
            "group relative p-4 pb-12 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2",
            bgColor
        )}>
            <div className={cn(
                "h-full flex flex-col p-8 md:p-10 bg-white rounded-4xl border-4 border-black/5 shadow-xl transition-all duration-300",
                isDark && "shadow-white/5"
            )}>
                {tier.isPopular && (
                    <div className="absolute top-8 right-8 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
                        Most Popular
                    </div>
                )}

                <div className="mb-8">
                    <h3 className="text-3xl font-heading font-black mb-3 text-text-heading">{tier.name}</h3>
                    <p className="text-text-muted text-base leading-relaxed">{tier.description}</p>
                </div>

                <div className="mb-10 flex items-baseline gap-2">
                    <span className="text-5xl font-heading font-black text-text-heading">{tier.price}</span>
                    <span className="text-text-muted font-bold text-lg">/mo</span>
                </div>

                <div className="w-full h-px bg-border-subtle mb-10" />

                <ul className="space-y-5 mb-12 flex-1">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-4 text-base font-medium text-text-body leading-tight">
                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <svg
                                    className="w-3 h-3 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={4}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>

                <PremiumButton
                    href="/book-a-call"
                    className="w-full py-4 text-lg"
                    variant={tier.isPopular ? "primary" : "outline"}
                >
                    {tier.isPopular ? "Get Started Now" : "Choose Plan"}
                </PremiumButton>
            </div>
        </div>
    );
}
