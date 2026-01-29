import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="font-bold text-xl tracking-tight text-primary">
                        ZeroPlace
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/services" className="transition-colors hover:text-primary">
                            Services
                        </Link>
                        <Link href="/works" className="transition-colors hover:text-primary">
                            Our Works
                        </Link>
                        <Link href="/about" className="transition-colors hover:text-primary">
                            About
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden md:flex">
                        Sign In
                    </Button>
                    <Button asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
