"use client";

import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import { CreditCard, Zap, CheckCircle, Clock, Users, UserCheck } from 'lucide-react';

const benefits = [
    {
        icon: <CreditCard className="w-8 h-8 text-[#6c46fd]" />,
        iconBg: "bg-[#6c46fd]/10",
        title: "Fixed monthly rate",
        description: "No hidden costs. Pay the same price every month."
    },
    {
        icon: <Zap className="w-8 h-8 text-[#6c46fd]" />,
        iconBg: "bg-[#6c46fd]/10",
        title: "Unlimited requests",
        description: "Don't limit your creativity. Request as many designs as you need."
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-[#6c46fd]" />,
        iconBg: "bg-[#6c46fd]/10",
        title: "Unlimited revisions",
        description: "Request changes without limits. We iterate until you say it's perfect."
    },
    {
        icon: <Clock className="w-8 h-8 text-[#6c46fd]" />,
        iconBg: "bg-[#6c46fd]/10",
        title: "Same-day delivery",
        description: "Receive your designs on the same day with our higher-tier package."
    },
    {
        icon: <Users className="w-8 h-8 text-[#6c46fd]" />,
        iconBg: "bg-[#6c46fd]/10",
        title: "Professional designers",
        description: "Work with experienced designers who bring creativity and precision to every project."
    },
    {
        icon: <UserCheck className="w-8 h-8 text-[#6c46fd]" />,
        iconBg: "bg-[#6c46fd]/10",
        title: "Designer match",
        description: "Each request goes to the most qualified designer for the job."
    }
];

export default function ServiceBenefits() {
    return (
        <section className="bg-white py-20 md:py-28">
            <SectionContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-[#6c46fd]/5 hover:shadow-[#6c46fd]/10 hover:border-[#6c46fd]/20 transition-all duration-300 flex flex-col items-start gap-5 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${benefit.iconBg} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#0f0e21] mb-3 group-hover:text-[#6c46fd] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
