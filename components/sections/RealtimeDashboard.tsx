"use client";

import React from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionBadge from "@/components/shared/SectionBadge";
import {
    LayoutDashboard,
    Trophy,
    Ship,
    Search,
    Bell,
    Coins,
    ArrowRightLeft,
    Package,
    Users,
    Instagram,
    Facebook,
    Twitter,
    MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function RealtimeDashboard() {
    return (
        <section className="py-24 overflow-hidden bg-background relative">
            {/* Background patterns could go here */}

            <SectionContainer className="relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <SectionBadge>Take Control in Real Time</SectionBadge>
                    <h2 className="text-5xl md:text-6xl font-heading font-black text-text-heading leading-[0.9] tracking-tighter max-w-3xl mx-auto">
                        Real-Time Dashboard
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Top Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto relative z-20">
                        <div className="bg-white p-8 rounded-3xl border-2 border-primary shadow-[0_0_30px_rgba(190,242,100,0.2)] text-center space-y-2">
                            <span className="text-6xl font-black text-text-heading">50%</span>
                            <p className="text-text-muted font-medium italic">Transaction cost savings</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border-2 border-primary shadow-[0_0_30px_rgba(190,242,100,0.2)] text-center space-y-2">
                            <span className="text-6xl font-black text-text-heading">25%</span>
                            <p className="text-text-muted font-medium italic">Higher conversion rate</p>
                        </div>
                    </div>

                    {/* Floating Social Elements - Left */}
                    <div className="absolute top-40 -left-12 lg:-left-24 hidden md:block space-y-16 z-10">
                        <div className="relative group animate-float">
                            <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-border-subtle text-text-heading">
                                <span className="font-bold text-xl">S</span>
                            </div>
                        </div>
                        <div className="relative group animate-float [animation-delay:1s] translate-x-12">
                            <div className="absolute -top-10 -left-20 bg-white/90 backdrop-blur-sm border border-border-subtle px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap text-[10px] font-medium scale-0 group-hover:scale-100 transition-transform origin-bottom-right">
                                We mentioned your business on X
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-border-subtle text-text-heading">
                                <Twitter size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Floating Social Elements - Right */}
                    <div className="absolute top-40 -right-12 lg:-right-24 hidden md:block space-y-16 z-10 text-right">
                        <div className="relative group animate-float [animation-delay:0.5s]">
                            <div className="absolute -top-10 -right-20 bg-white/90 backdrop-blur-sm border border-border-subtle px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap text-[10px] font-medium scale-0 group-hover:scale-100 transition-transform origin-bottom-left">
                                We mentioned your business on facebook
                            </div>
                            <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-border-subtle text-text-heading ml-auto">
                                <Facebook size={24} />
                            </div>
                        </div>
                        <div className="relative group animate-float [animation-delay:1.5s] -translate-x-12">
                            <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-border-subtle text-text-heading ml-auto">
                                <Instagram size={18} />
                            </div>
                        </div>
                    </div>

                    {/* SVG Connector Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 5 }}>
                        <path d="M 80 350 Q 80 450 200 650" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-text-muted/20" />
                        <path d="M 920 350 Q 920 450 800 650" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-text-muted/20" />
                    </svg>

                    {/* Dashboard Mockup Image */}
                    <div className="w-full    overflow-hidden transform hover:scale-[1.01] transition-transform duration-500 relative z-10">
                        <img
                            src="/images/mockups/control-plan.png"
                            alt="Dashboard Mockup"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </SectionContainer>

            {/* Background soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[#BEF264]/5 rounded-full blur-[150px] -z-10" />
        </section>
    );
}

