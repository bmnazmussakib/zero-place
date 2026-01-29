import SectionContainer from "@/components/shared/SectionContainer";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return (
    <SectionContainer className="pt-24 pb-32">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-6xl font-black capitalize leading-none text-foreground">
          {params.slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-2xl text-[var(--text-body)] leading-relaxed">
          The best {params.slug.replace(/-/g, ' ')} for growth-focused agencies and startups. 
          Expect nothing but excellence.
        </p>
        <PrimaryButton href="/book-a-call" className="px-10 py-4 text-lg">
          Get Started with this Service
        </PrimaryButton>
      </div>
    </SectionContainer>
  );
}
