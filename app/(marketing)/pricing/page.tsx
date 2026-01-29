import SectionContainer from "@/components/shared/SectionContainer";
import PricingCard from "@/components/cards/PricingCard";
import { pricingTiers } from "@/lib/constants";

export default function PricingPage() {
  return (
    <SectionContainer>
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold">Transparent Pricing</h1>
        <p className="text-xl text-[var(--text-body)]">No hidden fees, no surprises. Simple subscription design.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </SectionContainer>
  );
}
