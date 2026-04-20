import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
    className,
    variant = "color",
    logoUrl,
    logoWhiteUrl,
    siteName = "ZeroPlace"
}: {
    className?: string;
    variant?: "white" | "color";
    logoUrl?: string;
    logoWhiteUrl?: string;
    siteName?: string;
}) {
    const isWhite = variant === "white";
    const displayLogo = isWhite 
        ? (logoWhiteUrl || "/images/ZeroPlace White Color Logo.svg")
        : (logoUrl || "/images/zero-place-color-logo.svg");

    return (
        <Link href="/" className={cn("flex items-center gap-2 group", className)}>
            <img
                src={displayLogo}
                alt={siteName}
                className="w-44 md:w-50"
            />
            {/* <span className={cn(
                "text-3xl font-black tracking-tight font-heading",
                isWhite ? "text-white" : "text-text-heading"
            )}>
                Zero
                <span className="font-normal" >place</span>
            </span> */}
            {/* <img src="/images/zero-place-color-logo.svg" alt="" /> */}
        </Link>
    );
}
