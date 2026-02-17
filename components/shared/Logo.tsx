import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
    className,
    variant = "color"
}: {
    className?: string;
    variant?: "white" | "color";
}) {
    const isWhite = variant === "white";

    return (
        <Link href="/" className={cn("flex items-center gap-2 group", className)}>
            <img
                src={isWhite ? "/images/logo-white.png" : "/images/logo.png"}
                alt="ZeroPlace"
                className="w-8"
            />
            <span className={cn(
                "text-2xl font-black tracking-tight font-heading",
                isWhite ? "text-white" : "text-text-heading"
            )}>
                Zero
                <span className="font-normal" >place</span>
            </span>
            {/* <img src="/images/zero-place-color-logo.svg" alt="" /> */}
        </Link>
    );
}
