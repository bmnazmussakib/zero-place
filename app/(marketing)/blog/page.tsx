import SectionContainer from "@/components/shared/SectionContainer";
import Link from "next/link";

export default function BlogPage() {
  return (
    <SectionContainer>
      <h1 className="text-5xl font-bold mb-16">Design Journal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[1,2,3,4].map(i => (
          <Link key={i} href={`/blog/post-${i}`} className="group space-y-4">
             <div className="aspect-[16/9] bg-[var(--section)] rounded-2xl overflow-hidden group-hover:shadow-lg transition-all" />
             <div className="space-y-2">
                <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Design System</span>
                <h3 className="text-2xl font-bold group-hover:text-[var(--primary)] transition-colors">How we built a scalable design system for enterprise brands</h3>
                <p className="text-[var(--text-body)]">A deep dive into the process of creating a flexible and robust design language...</p>
             </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
