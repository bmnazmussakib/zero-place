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
    Play,
    ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollToTop } from '../shared/ScrollToTop';
import * as motion from "motion/react-client";
import SectionContainer from '../shared/SectionContainer';

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
        <footer className="relative bg-[#0F0E21] text-zinc-400 pt-40 md:pt-44 lg:pt-44 pb-12 mt-32 md:mt-40">
            {/* Overlapping Subscription CTA */}
            <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-20">
                <SectionContainer className="">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={zoomIn}
                        className="bg-primary md:rounded-[3rem] rounded-3xl p-8 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between lg:gap-10 gap-6 shadow-2xl shadow-primary/30 relative overflow-hidden group/cta"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-white/10 to-transparent pointer-events-none" />
                        <div className="absolute -bottom-1/2 -left-1/4 w-[60%] h-full bg-black/10 rounded-full blur-3xl pointer-events-none group-hover/cta:bg-black/20 transition-all duration-700" />

                        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight">
                                Don't Miss Out <br className="hidden md:block" /> the Future!
                            </h2>
                        </div>

                        <div className="w-full lg:w-5/12 lg:space-y-8 space-y-4 relative z-10">
                            <form className="relative flex flex-row items-center gap-2 p-1.5 bg-slate-50 rounded-full border border-white/10 focus-within:border-white/40 transition-all duration-300">
                                <input
                                    type="email"
                                    placeholder="Enter email here..."
                                    className="w-full flex-1 bg-transparent px-4 sm:px-8 md:py-3 rounded-none text-zinc-900 placeholder:text-zinc-500 outline-none border-none"
                                    required
                                />
                                <div className="hidden md:block">
                                    <PremiumButton
                                        type="submit"
                                        className="whitespace-nowrap sm:w-auto"
                                    >
                                        Subscribe Now
                                    </PremiumButton>
                                </div>

                                <button type="submit" className='md:hidden cursor-pointer lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center'>
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </form>

                            <div className="flex flex-col md:flex-row items-center lg:gap-6 gap-2 justify-center lg:justify-start">
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
                                                className="lg:w-11 lg:h-11 w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 hover:bg-white hover:text-primary transition-all duration-500"
                                            >
                                                <Icon className="lg:w-5 lg:h-5 w-4 h-5  " />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </SectionContainer>
            </div>

            <SectionContainer className="py-6 md:py-16 lg:py-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8"
                >
                    {/* Brand Column */}
                    <motion.div variants={fadeInUp} className="lg:col-span-4 lg:space-y-10 md:space-y-6 space-y-4">
                        <Logo variant="white" />
                        <p className="max-w-xs text-base leading-relaxed text-zinc-400 ">
                            Every great solution starts understanding the time into learn about. Unlimited design requests for modern brands.
                        </p>
                        <div className="hidden md:flex flex-wrap gap-5">
                            <motion.div whileHover={{ y: -4 }}>
                                <Link href="#" className="flex items-center gap-4 px-4 py-2 md:px-6 md:py-3 bg-white/5 border border-white/10 lg:rounded-2xl rounded-sm hover:bg-white/10 transition-colors duration-300">
                                    {/* <Play className="w-6 h-6 text-white fill-current" /> */}
                                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M5.4 21c-.17.003-.34-.026-.5-.086l8.054-8.057l2.666 2.669l-9.255 5.2A1.998 1.998 0 0 1 5.4 21Zm-1.164-.665a1.9 1.9 0 0 1-.236-.97V4.66a2.13 2.13 0 0 1 .1-.658l8.233 8.235l-8.1 8.1l.003-.002Zm12.179-5.258l-2.841-2.839l3.133-3.132l2.783 1.563c.534.24.892.755.928 1.339a1.574 1.574 0 0 1-.929 1.34l-3.074 1.729Zm-3.461-3.463l-8.34-8.339c.229-.17.506-.26.791-.261c.336.012.664.107.955.277l9.551 5.368l-2.956 2.955h-.001Z" /></svg>
                                    <div className="text-left">
                                        <p className="md:text-[10px] text-[8px] uppercase font-black tracking-[0.15em] text-zinc-500 leading-none mb-1">Comming Soon</p>
                                        <p className="text-base font-bold text-white leading-tight">Google Play</p>
                                    </div>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -4 }}>
                                <Link href="#" className="flex items-center gap-4 px-4 py-2 md:px-6 md:py-3 bg-white/5 border border-white/10 lg:rounded-2xl rounded-sm hover:bg-white/10 transition-colors duration-300">
                                    {/* <Apple className="w-6 h-6 text-white fill-current" /> */}
                                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 17a1 1 0 0 1 0-2h10.5c1 0 2 2 1.5 2H3Zm14 0a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4ZM12.633 3.501a1 1 0 0 1 1.734.998L7.46 16.495a1 1 0 0 1-1.734-.997L12.633 3.5ZM4 18.5c.5-1 3.5-2 2.5-.28A852.88 852.88 0 0 1 4.867 21a1 1 0 0 1-1.734-.998L4 18.5ZM9.133 4.499a1 1 0 1 1 1.734-.998L12.61 6.53a1 1 0 1 1-1.733.998L9.133 4.499ZM13 11.5c-.898-1.5 0-4.5.716-3.004L20.366 20a1 1 0 0 1-1.733.998L13 11.5Z" /></svg>
                                    <div className="text-left">
                                        <p className="md:text-[10px] text-[8px] uppercase font-black tracking-[0.15em] text-zinc-500 leading-none mb-1">Comming Soon</p>
                                        <p className="text-base font-bold text-white leading-tight">App Store</p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    <motion.div variants={fadeInUp} className="lg:col-span-2 lg:space-y-8 space-y-4 lg:ml-8">
                        <h4 className="text-white font-heading font-black text-xl tracking-tight">Services</h4>
                        <ul className="md:space-y-5 space-y-3">
                            {['Graphics Design', 'Web Design', 'Motion Graphics', 'Web Development', 'App Development'].map((item) => (
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

                    <motion.div variants={fadeInUp} className="lg:col-span-2 lg:space-y-8 space-y-4 lg:ml-8">
                        <h4 className="text-white font-heading font-black text-xl tracking-tight">Resources</h4>
                        <ul className="md:space-y-5 space-y-3">
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
                    <motion.div variants={fadeInUp} className="lg:col-span-4 lg:ml-auto lg:space-y-8 space-y-4">
                        <h4 className="text-white font-heading font-black text-xl tracking-tight">Contact Info</h4>
                        <div className="lg:space-y-8 space-y-4">
                            <motion.div whileHover={{ x: 5 }} className="flex gap-5 cursor-default group">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 lg:rounded-2xl rounded-md bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                                    <MapPin className="lg:w-5 lg:h-5 w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <p className="md:text-base text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                    993 Renner Burg, West Road, <br /> MT 94251-030, USA.
                                </p>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="flex gap-5 cursor-default group">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 lg:rounded-2xl rounded-md bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                                    <Phone className="lg:w-5 lg:h-5 w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="md:text-lg text-sm font-bold text-white tracking-tight mb-1 group-hover:text-primary transition-colors">P: +1 (009) 544-7818</p>
                                    <Link href="#" className="text-sm text-zinc-500 hover:text-primary transition-colors">E: support@tekmino.com</Link>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="flex gap-5 cursor-default group">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 lg:rounded-2xl rounded-md bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                                    <Clock className="lg:w-5 lg:h-5 w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="md:text-base text-sm font-bold text-zinc-300 group-hover:text-zinc-100 transition-colors">Mon-Fri 09am-06pm</p>
                                    <p className="text-xs text-zinc-600 mt-1 uppercase font-bold tracking-widest">Support Hours</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp} className='mt-8'>
                    <div className="md:hidden flex flex-wrap gap-5">
                        <motion.div whileHover={{ y: -4 }}>
                            <Link href="#" className="w-44 flex items-center gap-4 px-4 py-2 md:px-6 md:py-3 bg-white/5 border border-white/10 lg:rounded-2xl rounded-sm hover:bg-white/10 transition-colors duration-300">
                                {/* <Play className="w-6 h-6 text-white fill-current" /> */}
                                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M5.4 21c-.17.003-.34-.026-.5-.086l8.054-8.057l2.666 2.669l-9.255 5.2A1.998 1.998 0 0 1 5.4 21Zm-1.164-.665a1.9 1.9 0 0 1-.236-.97V4.66a2.13 2.13 0 0 1 .1-.658l8.233 8.235l-8.1 8.1l.003-.002Zm12.179-5.258l-2.841-2.839l3.133-3.132l2.783 1.563c.534.24.892.755.928 1.339a1.574 1.574 0 0 1-.929 1.34l-3.074 1.729Zm-3.461-3.463l-8.34-8.339c.229-.17.506-.26.791-.261c.336.012.664.107.955.277l9.551 5.368l-2.956 2.955h-.001Z" /></svg>
                                <div className="text-left">
                                    <p className="md:text-[10px] text-[8px] uppercase font-black tracking-[0.15em] text-zinc-500 leading-none mb-1">Comming Soon</p>
                                    <p className="text-base font-bold text-white leading-tight">Google Play</p>
                                </div>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: -4 }}>
                            <Link href="#" className="w-44 flex items-center gap-4 px-4 py-2 md:px-6 md:py-3 bg-white/5 border border-white/10 lg:rounded-2xl rounded-sm hover:bg-white/10 transition-colors duration-300">
                                {/* <Apple className="w-6 h-6 text-white fill-current" /> */}
                                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 17a1 1 0 0 1 0-2h10.5c1 0 2 2 1.5 2H3Zm14 0a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4ZM12.633 3.501a1 1 0 0 1 1.734.998L7.46 16.495a1 1 0 0 1-1.734-.997L12.633 3.5ZM4 18.5c.5-1 3.5-2 2.5-.28A852.88 852.88 0 0 1 4.867 21a1 1 0 0 1-1.734-.998L4 18.5ZM9.133 4.499a1 1 0 1 1 1.734-.998L12.61 6.53a1 1 0 1 1-1.733.998L9.133 4.499ZM13 11.5c-.898-1.5 0-4.5.716-3.004L20.366 20a1 1 0 0 1-1.733.998L13 11.5Z" /></svg>
                                <div className="text-left">
                                    <p className="md:text-[10px] text-[8px] uppercase font-black tracking-[0.15em] text-zinc-500 leading-none mb-1">Comming Soon</p>
                                    <p className="text-base font-bold text-white leading-tight">App Store</p>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </SectionContainer>

            {/* Bottom Bar */}
            <SectionContainer className='border-t border-white/5 '>
                <div className="lg:pt-10 pt-4 flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4 relative">
                    <p className="md:text-sm text-xs font-medium tracking-wide text-zinc-500">
                        Xeroplace © {new Date().getFullYear()}. All right reserved.
                    </p>

                    <div className="flex items-center md:gap-10 gap-4 text-sm font-medium">
                        <Link href="#" className="md:text-sm text-xs text-zinc-500 hover:text-white transition-colors">Privacy & Policy</Link>
                        <span className="text-zinc-800 font-bold">•</span>
                        <Link href="#" className="md:text-sm text-xs text-zinc-500 hover:text-white transition-colors">Terms & Condition</Link>
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
            </SectionContainer>


            {/* Background Grain Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </footer>
    );
}
