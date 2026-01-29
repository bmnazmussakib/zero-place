import SectionContainer from "@/components/shared/SectionContainer";

export default function BookCallPage() {
  return (
    <SectionContainer className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-bold mb-8 italic">Ready to start?</h1>
      <p className="text-xl text-[var(--text-body)] max-w-2xl mb-12">
        Schedule a discovery call with our team to discuss your project and how we can best support your vision.
      </p>
      <div className="w-full max-w-4xl aspect-[16/9] bg-white rounded-3xl border border-[var(--border-subtle)] shadow-xl flex items-center justify-center text-[var(--text-muted)]">
        [ Calendly / Booking Widget Placeholder ]
      </div>
    </SectionContainer>
  );
}
