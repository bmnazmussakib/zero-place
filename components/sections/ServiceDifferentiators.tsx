"use client";

import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import SectionBadge from '../shared/SectionBadge';
import {
    Infinity,
    RefreshCcw,
    FolderOpen,
    FileCode2,
    Users,
    Trello,
    DollarSign,
    XCircle,
    GraduationCap,
    Briefcase
} from 'lucide-react';

const features = [
    {
        icon: <Infinity className="w-5 h-5 text-[#6c46fd]" />,
        text: "Unlimited requests"
    },
    {
        icon: <Users className="w-5 h-5 text-[#6c46fd]" />,
        text: "Real-time collaboration"
    },
    {
        icon: <RefreshCcw className="w-5 h-5 text-[#6c46fd]" />,
        text: "Unlimited revisions"
    },
    {
        icon: <Trello className="w-5 h-5 text-[#6c46fd]" />,
        text: "Trello Project Management"
    },
    {
        icon: <FolderOpen className="w-5 h-5 text-[#6c46fd]" />,
        text: "Unlimited brand profiles"
    },
    {
        icon: <DollarSign className="w-5 h-5 text-[#6c46fd]" />,
        text: "7-day money-back guarantee"
    },
    {
        icon: <FileCode2 className="w-5 h-5 text-[#6c46fd]" />,
        text: "Native source files"
    },
    {
        icon: <XCircle className="w-5 h-5 text-[#6c46fd]" />,
        text: "Cancel anytime"
    },
    {
        icon: <Briefcase className="w-5 h-5 text-[#6c46fd]" />,
        text: "Art Director"
    },
    {
        icon: <GraduationCap className="w-5 h-5 text-[#6c46fd]" />,
        text: "Middle+/Senior Designer"
    },
    {
        icon: <Users className="w-5 h-5 text-[#6c46fd]" />,
        text: "Project Manager"
    }
];

export default function ServiceDifferentiators() {
    return (
        <SectionContainer className="py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left Column: Heading & Description */}
                <div className="max-w-xl">
                    <SectionBadge className="mb-6">
                        SEE HOW WE COMPARE
                    </SectionBadge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#0f0e21] mb-6 leading-tight">
                        What Makes Us Different?
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We will take care of all your creative needs. No inefficient freelancers. No lengthy hiring procedures. No contracts. Just your work getting done!
                    </p>
                </div>

                {/* Right Column: Feature List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                            <div className="shrink-0 mt-0.5 p-2 rounded-lg bg-[#6c46fd]/5 text-[#6c46fd] transition-colors group-hover:bg-[#6c46fd]/10">
                                {feature.icon}
                            </div>
                            <span className="text-gray-700 text-lg font-medium group-hover:text-[#6c46fd] transition-colors">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </SectionContainer>
    );
}
