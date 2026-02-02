import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

// Assuming this is inside a client component ("use client")
export function ScrollToTop() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300); // show after ~300px scroll
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95 pointer-events-none"
      )}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className={cn(
          "group relative flex h-14 w-14 items-center justify-center rounded-full",
          "bg-primary text-white shadow-lg shadow-primary/30",
          "hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40",
          "active:scale-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
          "transition-all duration-300 border-2 border-black/10 dark:border-white/10"
        )}
      >
        <ArrowUp
          className="h-7 w-7 transition-transform duration-300 group-hover:-translate-y-1"
          strokeWidth={2.5}
        />

        {/* Optional subtle ring/pulse on hover */}
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>

      {/* Optional small tooltip/label – appears on hover (desktop) */}
      <span
        className={cn(
          "absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-900/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1",
          "pointer-events-none hidden md:block"
        )}
      >
        Back to top
      </span>
    </div>
  );
}