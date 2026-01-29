import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function PrimaryButton({
    children,
    href,
    onClick,
    className,
    type = "button",
}: PrimaryButtonProps) {
    const styles = cn(
        "inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-[var(--primary)] rounded-full hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)] shadow-md",
        className
    );

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles}>
            {children}
        </button>
    );
}
