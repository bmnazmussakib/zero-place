import SectionContainer from "@/components/shared/SectionContainer";

export default function PortfolioPage() {
  return (
    <SectionContainer>
       <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold text-foreground">Our Portfolio</h1>
        <p className="text-xl text-[var(--text-body)]">Explore some of our recent design work across various industries.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        {/* TODO: Add Portfolio Cards */}
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-[4/5] bg-white rounded-2xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] shadow-sm">
            Portfolio Item {i}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
