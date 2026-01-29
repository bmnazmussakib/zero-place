import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
    as?: "section" | "div" | "footer" | "header";
}

export default function SectionContainer({
    children,
    className,
    as: Component = "section",
}: SectionContainerProps) {
    return (
        <Component className={cn("max-w-[1480px] mx-auto px-6 lg:px-8 py-16", className)}>
            {children}
        </Component>
    );
}
