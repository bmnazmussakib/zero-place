import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Slot, Slottable } from "@radix-ui/react-slot";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'dark';
    icon?: React.ReactNode;
    asChild?: boolean;
}

const PremiumButton = ({
    children,
    variant = 'primary',
    icon = <ArrowUpRight className="w-5 h-5" />,
    className,
    asChild = false,
    ...props
}: PremiumButtonProps) => {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            className={cn(
                "group relative inline-flex items-center justify-between rounded-full py-2.5 pl-8 pr-2.5 font-heading font-bold transition-all duration-500 overflow-hidden",
                variant === 'primary' && "bg-primary text-white",
                variant === 'outline' && "bg-transparent border-2 border-primary text-primary hover:text-white",
                variant === 'dark' && "bg-footer-bg text-white",
                className
            )}
            {...(props as any)}
        >
            <span className="flex items-center justify-between pointer-events-none">
                {/* Background Expanding Shape */}
                <div className={cn(
                    "absolute right-1.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full transition-all duration-500 ease-out z-0 group-hover:w-[calc(100%-12px)] group-hover:h-[calc(100%-12px)]",
                    variant === 'primary' && "bg-white/20",
                    variant === 'outline' && "bg-primary font-heading",
                    variant === 'dark' && "bg-primary"
                )} />

                {/* Content Container */}
                <span className="flex items-center justify-between w-full relative z-10">
                    <span className="mr-4 tracking-tight">
                        <Slottable>{children}</Slottable>
                    </span>

                    {/* Icon Circle */}
                    <div className={cn(
                        "w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm flex-none",
                        variant === 'primary' && "bg-white text-primary",
                        variant === 'outline' && "bg-primary text-white group-hover:bg-white group-hover:text-primary",
                        variant === 'dark' && "bg-primary text-white"
                    )}>
                        <div className="transition-transform duration-500 group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            {icon}
                        </div>
                    </div>
                </span>
            </span>
        </Comp>
    );
};

export default PremiumButton;
