import { PricingTier } from "@/types";
import PremiumButton from "@/components/shared/PremiumButton";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
    tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col p-8 bg-white rounded-3xl transition-all duration-300 border h-full",
                tier.isPopular
                    ? "border-[var(--primary)] shadow-2xl scale-105 z-10"
                    : "border-[var(--border-subtle)] hover:border-[var(--primary)]/50 shadow-lg"
            )}
        >
            {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-[var(--text-muted)] text-sm">{tier.description}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-[var(--text-muted)]">/mo</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[var(--text-body)]">
                        <svg
                            className="w-5 h-5 text-[var(--primary)] shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <PremiumButton
                asChild
                className="w-full"
                variant={tier.isPopular ? "primary" : "outline"}
            >
                <Link href="/book-a-call">
                    Get Started
                </Link>
            </PremiumButton>
        </div>
    );
}
