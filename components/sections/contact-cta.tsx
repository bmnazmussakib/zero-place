import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PremiumButton from "../shared/PremiumButton";
import SectionBadge from "../shared/SectionBadge";

export function ContactCTA() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="relative overflow-hidden rounded-[3rem] bg-footer-bg p-12 lg:p-24 text-center">
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <SectionBadge>
                            Get Started
                        </SectionBadge>
                        <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[0.9] tracking-tighter max-w-3xl">
                            Ready to create something <span className="text-primary italic font-serif">extraordinary?</span>
                        </h2>
                        <p className="text-footer-text text-lg lg:text-xl max-w-2xl">
                            Join 2,500+ businesses that already trust ZeroPlace for their premium design needs.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                            <PremiumButton href="/contact">
                                Start Your Project
                            </PremiumButton>
                            <PremiumButton
                                variant="outline"
                                className="text-white border-white/20"
                                href="/about"
                            >
                                Learn Our Process
                            </PremiumButton>
                        </div>
                    </div>

                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 z-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 z-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
                </div>
            </div>
        </section>
    );
}
