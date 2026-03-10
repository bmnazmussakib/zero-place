import React from 'react';
import { cn } from '@/lib/utils';

interface SectionBadgeProps {
    children: React.ReactNode;
    className?: string;
}

const SectionBadge = ({ children, className }: SectionBadgeProps) => {
    return (
        <span className={cn(
            "inline-flex items-center px-4 py-1.5 rounded-full",
            "bg-primary/10 border border-primary/20",
            "text-primary text-[9px] md:text-xs font-bold uppercase tracking-[0.2em]",
            "transition-all duration-300 hover:bg-primary/20  select-none",
            className
        )}>
            {children}
        </span>
    );
};

export default SectionBadge;
