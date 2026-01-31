import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PremiumButton from "../shared/PremiumButton";

export function ContactCTA() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="relative overflow-hidden rounded-[3rem] bg-footer-bg p-12 lg:p-24 text-center">
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            Get Started
                        </Badge>
                        <h2 className="text-4xl font-bold text-white lg:text-6xl max-w-3xl">
                            Ready to create something <span className="text-primary italic font-serif">extraordinary?</span>
                        </h2>
                        <p className="text-footer-text text-lg lg:text-xl max-w-2xl">
                            Join 2,500+ businesses that already trust ZeroPlace for their premium design needs.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                            <PremiumButton asChild>
                                <Link href="/contact">
                                    Start Your Project
                                </Link>
                            </PremiumButton>
                            <PremiumButton
                                variant="outline"
                                className="text-white border-white/20"
                                asChild
                            >
                                <Link href="/about">
                                    Learn Our Process
                                </Link>
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
