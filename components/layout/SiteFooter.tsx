import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { navItems } from "@/lib/constants";

export default function SiteFooter() {
    return (
        <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-16 border-t border-[var(--footer-border)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Logo />
                        <p className="max-w-sm text-sm leading-relaxed opacity-80">
                            Unlimited design requests for a flat monthly fee. Scaling your brand
                            has never been this easy or elegant.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 italic">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-white transition-colors">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 italic">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-[var(--footer-border)] flex flex-col sm:flex-row justify-between items-center bg-transparent">
                    <p className="text-xs opacity-60">
                        © {new Date().getFullYear()} Purple Design Agency. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        {/* Social Icons Placeholder */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
