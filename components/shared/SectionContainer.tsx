import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
    as?: "section" | "div" | "footer" | "header";
    id?: string;
}

export default function SectionContainer({
    children,
    className,
    as: Component = "section",
    ...props
}: SectionContainerProps) {
    return (
        <Component className={cn("max-w-[1480px] mx-auto", className)} {...props}>
            {children}
        </Component>
    );
}
