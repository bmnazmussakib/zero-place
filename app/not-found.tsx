import Link from "next/link";
import SectionContainer from "@/components/shared/SectionContainer";
import PremiumButton from "@/components/shared/PremiumButton";

export default function NotFound() {
  return (
    <SectionContainer className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-9xl font-black text-[var(--primary-soft)] absolute -z-10 opacity-50">404</h1>
      <div className="space-y-6 relative">
        <h2 className="text-4xl font-bold">Page not found</h2>
        <p className="text-[var(--text-body)] max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="pt-4">
          <PremiumButton asChild>
            <Link href="/">Go back home</Link>
          </PremiumButton>
        </div>
      </div>
    </SectionContainer>
  );
}
