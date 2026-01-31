import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import SectionContainer from "../shared/SectionContainer";

const works = [
    {
        title: "Brand Identity for Tech Startup",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
        className: "lg:col-span-2 lg:row-span-2",
    },
    {
        title: "E-commerce App Design",
        category: "UI/UX",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
        className: "lg:col-span-1 lg:row-span-1",
    },
    {
        title: "Corporate Website Redesign",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        className: "lg:col-span-1 lg:row-span-1",
    }
];

export function Works() {
    return (
        <>
            <SectionContainer>
                <div className="py-24">
                    <div className="container">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div className="max-w-2xl">
                                <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                                    Portfolio
                                </Badge>
                                <h2 className="text-3xl font-bold lg:text-4xl">
                                    Our <span className="text-primary">Creative</span> Masterpieces
                                </h2>
                            </div>
                            <Link
                                href="/works"
                                className="group flex items-center gap-2 text-primary font-bold hover:underline"
                            >
                                Explore Full Portfolio <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {works.map((work, index) => (
                                <div
                                    key={index}
                                    className={`group relative overflow-hidden rounded-3xl bg-muted aspect-square shadow-sm ${work.className}`}
                                >
                                    <img
                                        src={work.image}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        alt={work.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <Badge className="bg-primary/90 text-white border-none mb-3">
                                            {work.category}
                                        </Badge>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {work.title}
                                        </h3>
                                        <Link href={`/works/${index}`} className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                                            View Project Case Study
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
