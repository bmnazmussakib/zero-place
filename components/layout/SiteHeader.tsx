"use client";

import Link from "next/link";
import { navItems } from "@/lib/constants";
import Logo from "@/components/shared/Logo";
import PremiumButton from "@/components/shared/PremiumButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export default function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isMenuBox, setIsMenuBox] = useState<boolean>(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Recursive component for mobile navigation items
    const MobileNavItem = ({ item }: { item: any }) => {
        if (item.children && item.children.length > 0) {
            return (
                <details className="group w-full">
                    <summary className="flex items-center justify-between py-4 px-4 text-lg font-bold text-text-heading hover:text-primary transition-all list-none cursor-pointer">
                        {item.title}
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-text-muted" />
                    </summary>
                    <div className="pl-6 space-y-1 mb-2 border-l-2 border-primary/10 ml-4 animate-in slide-in-from-left-2 duration-300">
                        {item.children.map((child: any) => (
                            <MobileNavItem key={child.title} item={child} />
                        ))}
                    </div>
                </details>
            );
        }

        return (
            <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center py-4 px-4 text-lg font-bold text-text-heading hover:text-primary transition-all"
            >
                {item.title}
            </Link>
        );
    };

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled || isMobileMenuOpen
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
            onMouseLeave={() => {
                setIsMenuBox(false);
                setHoveredItem(null);
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between relative">
                <div className="flex items-center">
                    <Logo />
                </div>

                <nav className="hidden md:flex items-stretch h-full">
                    <ul className="menu menu-horizontal p-0 gap-2 items-stretch text-text-body h-full">
                        {navItems.map((item) => (
                            <li
                                key={item.title}
                                className={cn(
                                    item.type === "megamenu" ? "static" : "relative",
                                    item.children && "dropdown flex",
                                    isMenuBox && hoveredItem === item.title && "dropdown-open"
                                )}
                                onMouseEnter={() => {
                                    setIsMenuBox(true);
                                    setHoveredItem(item.title);
                                }}
                            >
                                {item.children && item.children.length > 0 ? (
                                    <>
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="text-base font-bold text-text-body hover:text-primary transition-colors flex items-center gap-1 px-4 h-full"
                                        >
                                            {item.title}
                                        </div>
                                        <div
                                            tabIndex={0}
                                            className={cn(
                                                "dropdown-content z-10 p-6 bg-white/95 backdrop-blur-xl shadow-3xl rounded-2xl border border-primary/5 animate-in fade-in zoom-in-95 duration-200",
                                                "before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4 mt-0 ",
                                                item.type === "megamenu"
                                                    ? "absolute left-1/2 -translate-x-1/2 top-full w-[calc(100vw-4rem)] max-w-7xl"
                                                    : "absolute left-0 top-14 w-64"
                                            )}
                                        >
                                            {item.type === "megamenu" ? (
                                                <div className="grid grid-cols-4 gap-8">
                                                    {item.children.map((child: any) => (
                                                        <div key={child.title} className="space-y-4">
                                                            {/* <div className="px-4 py-2 bg-primary/5 rounded-xl">
                                                                <h4 className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                                                                    {child.title}
                                                                </h4>
                                                            </div> */}
                                                            <ul className="space-y-1">
                                                                {child.children?.map((sub: any) => (
                                                                    <li key={sub.title}>
                                                                        <Link
                                                                            href={sub.href}
                                                                            className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/5 transition-all group"
                                                                        >
                                                                            <span className="text-base font-bold text-text-heading group-hover:text-primary transition-colors">
                                                                                {sub.title}
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <ul className="space-y-1 p-0 m-0 w-full">
                                                    {item.children.map((child: any) => (
                                                        <li key={child.title}>
                                                            <Link
                                                                href={child.href}
                                                                className="text-base font-bold text-text-heading hover:text-primary p-3 flex rounded-md transition-all hover:bg-primary/5 "
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onMouseEnter={() => setHoveredItem(item.title)}
                                        className="text-base font-bold text-text-body hover:text-primary transition-colors px-4 flex items-center"
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4 self-center">
                    <PremiumButton href="/book-a-call" className="hidden sm:inline-flex">
                        Book a Call
                    </PremiumButton>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="p-2 md:hidden text-text-heading hover:bg-primary/5 rounded-xl transition-all"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={cn(
                "fixed inset-0 top-[73px] bg-background/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 overflow-y-auto h-[calc(100vh-73px)]",
                isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
            )}>
                <div className="flex flex-col p-6 space-y-2">
                    {navItems.map((item) => (
                        <MobileNavItem key={item.title} item={item} />
                    ))}
                    <div className="pt-8 px-4 pb-20">
                        <PremiumButton href="/book-a-call" className="w-full justify-center text-lg py-6">
                            Book a Call
                        </PremiumButton>
                    </div>
                </div>
            </div>
        </header>
    );
}
