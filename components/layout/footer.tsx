import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t bg-footer-bg text-footer-text py-12">
            <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <Link href="/" className="font-bold text-xl text-white">
                        ZeroPlace
                    </Link>
                    <p className="text-sm">
                        © {new Date().getFullYear()} ZeroPlace Design Agency. All rights reserved.
                    </p>
                </div>
                <nav className="flex gap-6 text-sm">
                    <Link href="/services" className="hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="/works" className="hover:text-white transition-colors">
                        Works
                    </Link>
                    <Link href="/about" className="hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
