import SectionContainer from "@/components/shared/SectionContainer";
import { services } from "@/lib/constants";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <SectionContainer>
       <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold">What We Do</h1>
        <p className="text-xl text-[var(--text-body)]">Comprehensive design services tailored to your brand.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(service => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="p-8 bg-white rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--primary)] transition-all group shadow-sm">
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-[var(--text-body)] mb-6">{service.description}</p>
            <span className="text-[var(--primary)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" /></svg>
            </span>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
