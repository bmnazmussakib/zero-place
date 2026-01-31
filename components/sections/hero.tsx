import { Badge } from "@/components/ui/badge";
import { MoveRight, Play } from "lucide-react";
import Image from "next/image";
import PremiumButton from "../shared/PremiumButton";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            <div className="container relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col items-start gap-6">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                            The Best Design Agency
                        </Badge>
                        <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">
                            Design <span className="text-primary">Without</span> Limits
                        </h1>
                        <p className="max-w-[600px] text-lg text-text-body lg:text-xl">
                            We create premium digital experiences that help your business scale
                            and stand out in a crowded market.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <PremiumButton>
                                All Services
                            </PremiumButton>
                            <PremiumButton
                                variant="outline"
                                icon={<Play className="w-5 h-5 fill-current" />}
                            >
                                How it works
                            </PremiumButton>
                        </div>
                        <div className="flex items-center gap-4 mt-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm font-medium">
                                <span className="text-primary font-bold">2,500+</span> happy clients
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-brand bg-card border border-border-subtle">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-transparent" />
                        <img
                            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Design Showcase"
                        />
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </section>
    );
}
