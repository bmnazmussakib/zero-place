"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { navItems } from "@/lib/constants";
import Logo from "@/components/shared/Logo";
import PremiumButton from "@/components/shared/PremiumButton";
import { useEffect, useState, Suspense, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import SectionContainer from "../shared/SectionContainer";

function SearchParamsWrapper({ onPathnameChange }: { onPathnameChange: () => void }) {
    const searchParams = useSearchParams();

    useEffect(() => {
        onPathnameChange();
    }, [searchParams, onPathnameChange]);

    return null;
}

export default function SiteHeader() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isMenuBox, setIsMenuBox] = useState<boolean>(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [hoveredService, setHoveredService] = useState<any>(null);

    const handleClose = useCallback(() => {
        setIsMenuBox(false);
        setHoveredItem(null);
        setIsMobileMenuOpen(false);
        // Ensure focus is removed from any active element (like dropdowns)
        if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }, []);

    useEffect(() => {
        handleClose();
    }, [pathname, handleClose]);

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
                className="flex items-center gap-3 py-4 px-4 text-lg font-bold text-text-heading hover:text-primary transition-all group"
            >
                {item.icon && (
                    <span className="shrink-0 text-text-muted group-hover:text-primary transition-colors">
                        {item.icon}
                    </span>
                )}
                {item.title}
            </Link>
        );
    };

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300 border-b border-border",
                isScrolled || isMobileMenuOpen
                    ? "bg-background/80 backdrop-blur-md py-2 shadow-sm"
                    : "bg-transparent py-2"
            )}
            onMouseLeave={() => {
                setIsMenuBox(false);
                setHoveredItem(null);
            }}
        >
            <SectionContainer>
                <div className="flex items-center md:justify-between justify-center relative">
                    <Suspense fallback={null}>
                        <SearchParamsWrapper onPathnameChange={handleClose} />
                    </Suspense>
                    <div className="flex items-center ">
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
                                        if (item.type === "megamenu" && item.children?.[0]?.children?.[0]) {
                                            setHoveredService(item.children[0].children[0]);
                                        }
                                    }}
                                >
                                    {item.children && item.children.length > 0 ? (
                                        <>
                                            <Link href={item?.href} className="hover:bg-transparent active:bg-transparent">
                                                <div
                                                    tabIndex={0}
                                                    role="button"
                                                    className="group text-base font-bold text-text-body hover:text-primary  transition-colors flex items-center gap-1 px-4 h-full"
                                                >
                                                    <span className="relative overflow-hidden h-[26px] flex items-center">
                                                        <span
                                                            className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-[26px]"
                                                            style={{ textShadow: '0 26px 0 currentColor' }}
                                                        >
                                                            {item.title}
                                                        </span>
                                                    </span>
                                                </div>
                                            </Link>
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
                                                    <div className="grid grid-cols-[250px_minmax(300px,_1fr)_100px] gap-8">
                                                        {item.children.map((child: any) => (
                                                            <div key={child.title} className="space-y-4">
                                                                {/* <div className="px-4 py-2 bg-primary/5 rounded-xl">
                                                                <h4 className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                                                                    {child.title}
                                                                </h4>
                                                            </div> */}
                                                                <ul className="space-y-1 pl-0 before:hidden">
                                                                    {child.children?.map((sub: any) => (
                                                                        <li key={sub.title}>
                                                                            <Link
                                                                                href={sub.href}
                                                                                onMouseEnter={() => setHoveredService(sub)}
                                                                                className={cn(
                                                                                    "flex items-center gap-3 p-3 rounded-xl transition-all group",
                                                                                    hoveredService?.title === sub.title ? "bg-primary/10" : "hover:bg-primary/5"
                                                                                )}
                                                                            >
                                                                                {sub.icon && (
                                                                                    <span className={cn(
                                                                                        "shrink-0 transition-colors",
                                                                                        hoveredService?.title === sub.title ? "text-primary" : "text-text-muted group-hover:text-primary"
                                                                                    )}>
                                                                                        {sub.icon}
                                                                                    </span>
                                                                                )}
                                                                                {/* <span className="relative overflow-hidden h-[26px] flex items-center">
                                                                                    <span
                                                                                        className={cn(
                                                                                            "text-base font-bold flex flex-col transition-all duration-500 ease-in-out",
                                                                                            hoveredService?.title === sub.title ? "text-primary translate-y-0" : "text-text-heading group-hover:text-primary group-hover:-translate-y-[26px]"
                                                                                        )}
                                                                                        style={hoveredService?.title === sub.title ? {} : { textShadow: '0 26px 0 currentColor' }}
                                                                                    >
                                                                                        {sub.title}
                                                                                    </span>
                                                                                </span> */}
                                                                                <span className="relative overflow-hidden h-[26px] flex items-center">
                                                                                    <span
                                                                                        className="text-base font-bold flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-[26px]"
                                                                                        style={{ textShadow: '0 26px 0 currentColor' }}
                                                                                    >
                                                                                        {sub.title}
                                                                                    </span>
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
                                                                    <span className="relative overflow-hidden h-[26px] flex items-center">
                                                                        <span
                                                                            className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-[26px]"
                                                                            style={{ textShadow: '0 26px 0 currentColor' }}
                                                                        >
                                                                            {child.title}
                                                                        </span>
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1 h-6 bg-primary rounded-full" />
                                                        <h4 className="text-sm font-black text-text-heading uppercase tracking-[0.2em]">
                                                            {hoveredService?.title || "Service"} Details List
                                                        </h4>
                                                    </div>
                                                    <ul className="grid grid-cols-2 gap-y-3 gap-x-8 before:hidden pl-0 ml-0">
                                                        {hoveredService?.details?.map((detail: string, idx: number) => (
                                                            <>
                                                                {/* <li key={idx} className="flex items-start gap-2 text-sm text-text-body font-medium group/detail">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/detail:bg-primary transition-colors" />
                                                                    {detail}
                                                                </li> */}
                                                                <div
                                                                    tabIndex={0}
                                                                    role="button"
                                                                    className="group text-base font-semibold text-text-body hover:text-primary transition-colors flex items-center gap-1 px-4 h-full"
                                                                >
                                                                    <span className="relative overflow-hidden h-[26px] flex items-center">
                                                                        <span
                                                                            className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-[26px]"
                                                                            style={{ textShadow: '0 26px 0 currentColor' }}
                                                                        >
                                                                            {detail}
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </>
                                                        )) || (
                                                                <li className="text-text-muted italic">Hover over a service to see details</li>
                                                            )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onMouseEnter={() => setHoveredItem(item.title)}
                                            className="group text-base font-bold text-text-body hover:text-primary transition-colors px-4 flex items-center hover:bg-transparent active:bg-transparen"
                                        >
                                            <span className="relative overflow-hidden h-[26px] flex items-center">
                                                <span
                                                    className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-[26px]"
                                                    style={{ textShadow: '0 26px 0 currentColor' }}
                                                >
                                                    {item.title}
                                                </span>
                                            </span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4 self-center">
                        <div className="hidden md:inline-flex">
                            <PremiumButton href="/book-a-call" >
                                Book a Call
                            </PremiumButton>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="p-2 flex hidden text-text-heading hover:bg-primary/5 rounded-xl transition-all"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </SectionContainer>

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
                        <PremiumButton
                            href="/book-a-call"
                            className="w-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book a Call
                        </PremiumButton>
                    </div>
                </div>
            </div>
        </header>
    );
}