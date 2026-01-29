"use client";

import Link from "next/link";
import { navItems } from "@/lib/constants";
import Logo from "@/components/shared/Logo";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                <Logo />

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-[var(--text-body)] hover:text-[var(--primary)] transition-colors"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <PrimaryButton href="/book-a-call" className="hidden sm:inline-flex">
                        Book a Call
                    </PrimaryButton>
                    {/* Mobile Nav would go here if using Sheet */}
                </div>
            </div>
        </header>
    );
}
