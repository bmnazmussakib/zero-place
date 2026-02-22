"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import PremiumButton from '../shared/PremiumButton';
import {
    Bell,
    ArrowRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowUp,
    Apple,
    Play
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollToTop } from '../shared/ScrollToTop';
import * as motion from "motion/react-client";

export default function SiteFooter() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 120
            } as const
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const zoomIn = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            } as const
        }
    };

    return (
        <footer className="relative bg-[#0F0E21] text-zinc-400 pt-48 md:pt-64 pb-12 mt-32 md:mt-40">
            {/* Overlapping Subscription CTA */}
            <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={zoomIn}
                        className="bg-primary rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-primary/30 relative overflow-hidden group/cta"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-white/10 to-transparent pointer-events-none" />
                        <div className="absolute -bottom-1/2 -left-1/4 w-[60%] h-full bg-black/10 rounded-full blur-3xl pointer-events-none group-hover/cta:bg-black/20 transition-all duration-700" />

                        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left space-y-4">
                            <h2 className="text-5xl md:text-6xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight">
                                Don't Miss Out <br className="hidden md:block" /> the Future!
                            </h2>
                        </div>

                        <div className="w-full lg:w-5/12 space-y-8 relative z-10">
                            <form className="relative flex flex-col sm:flex-row items-center gap-2 p-1.5 sm:bg-slate-50 sm:rounded-full border border-white/10 focus-within:border-white/40 transition-all duration-300">
                                <input
                                    type="email"
                                    placeholder="Enter email here..."
                                    className="w-full sm:flex-1 bg-slate-50 sm:bg-transparent px-8 py-4 sm:py-3 rounded-full sm:rounded-none text-white placeholder:text-zinc-500 outline-none border border-white/10 sm:border-none"
                                    required
                                />
                                <PremiumButton
                                    type="submit"
                                    className="w-full sm:w-auto"
                                >
                                    Subscribe Now
                                </PremiumButton>
                            </form>

                            <div className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start">
                                <p className="text-white font-bold text-sm tracking-widest uppercase opacity-80">Follow us:</p>
                                <div className="flex items-center gap-4">
                                    {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.1, rotate: -6 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Link
                                                href="#"
                                                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 hover:bg-white hover:text-primary transition-all duration-500"
                                            >
                                                <Icon className="w-5 h-5" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>



            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8"
                >
                    {/* Brand Column */}
                    <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-10">
                        <Logo variant="white" />
                        <p className="max-w-xs text-base leading-relaxed text-zinc-400">
                            Every great solution starts understanding the time into learn about. Unlimited design requests for modern brands.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <motion.div whileHover={{ y: -4 }}>
                                <Link href="#" className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <Play className="w-6 h-6 text-white fill-current" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-black tracking-[0.15em] text-zinc-500 leading-none mb-1">Get it on</p>
                                        <p className="text-base font-bold text-white leading-tight">Google Play</p>
                                    </div>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -4 }}>
                                <Link href="#" className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <Apple className="w-6 h-6 text-white fill-current" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-black tracking-[0.15em] text-zinc-500 leading-none mb-1">Download on</p>
                                        <p className="text-base font-bold text-white leading-tight">App Store</p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-8 lg:ml-8">
                        <h4 className="text-white font-heading font-black text-xl tracking-tight">Services</h4>
                        <ul className="space-y-5">
                            {['Manage IT Service', 'Cloud Computing', 'Cyber Security', 'Software Develop', 'Change Manage', 'IT Consulting'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm font-medium hover:text-primary transition-all duration-300 flex items-center gap-3 group">
                                        <motion.span whileHover={{ x: 5 }}>
                                            {item}
                                        </motion.span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-8 lg:ml-8">
                        <h4 className="text-white font-heading font-black text-xl tracking-tight">Resources</h4>
                        <ul className="space-y-5">
                            {[
                                { name: 'Contact Us' },
                                { name: 'Privacy Policy' },
                                { name: 'Recognitions' },
                                { name: 'Careers', badge: 'NEW' },
                                { name: 'News' },
                                { name: 'Feedback' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href="#" className="text-sm font-medium hover:text-primary transition-all duration-300 flex items-center gap-3 group">
                                        <motion.span whileHover={{ x: 5 }} className="flex items-center">
                                            {item.name}
                                            {item.badge && (
                                                <span className="text-[10px] font-black px-2 py-0.5 bg-primary text-white rounded-md ml-1 shadow-lg shadow-primary/20">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </motion.span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info Column */}
                    <motion.div variants={fadeInUp} className="lg:col-span-4 lg:ml-auto space-y-8">
                        <h4 className="text-white font-heading font-black text-xl tracking-tight">Contact Info</h4>
                        <div className="space-y-8">
                            <motion.div whileHover={{ x: 5 }} className="flex gap-5 cursor-default group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-base leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                    993 Renner Burg, West Road, <br /> MT 94251-030, USA.
                                </p>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="flex gap-5 cursor-default group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                                    <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-primary transition-colors">P: +1 (009) 544-7818</p>
                                    <Link href="#" className="text-sm text-zinc-500 hover:text-primary transition-colors">E: support@tekmino.com</Link>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="flex gap-5 cursor-default group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                                    <Clock className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-base font-bold text-zinc-300 group-hover:text-zinc-100 transition-colors">Mon-Fri 09am-06pm</p>
                                    <p className="text-xs text-zinc-600 mt-1 uppercase font-bold tracking-widest">Support Hours</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative">
                    <p className="text-sm font-medium tracking-wide text-zinc-500">
                        Tekmino © {new Date().getFullYear()}. All right reserved.
                    </p>

                    <div className="flex items-center gap-10 text-sm font-medium">
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy & Policy</Link>
                        <span className="text-zinc-800 font-bold">•</span>
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">Terms & Condition</Link>
                    </div>

                    {/* Scroll to Top */}
                    {/* <div
                        className={cn(
                            "fixed bottom-10 right-10 z-50 flex flex-col items-center gap-3 transition-all duration-700 transform",
                            scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
                        )}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D9FF00] [writing-mode:vertical-rl] mb-4 drop-shadow-lg">
                            Scroll Top
                        </span>
                        <button
                            onClick={scrollToTop}
                            className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:bg-[#D9FF00] hover:text-black transition-all duration-500 active:scale-90 group border-4 border-black/20"
                        >
                            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1.5 transition-transform" strokeWidth={3} />
                        </button>
                    </div> */}
                    <ScrollToTop />
                </div>
            </div>

            {/* Background Grain Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </footer>
    );
}
