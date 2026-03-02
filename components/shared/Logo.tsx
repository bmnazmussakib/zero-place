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
                src={isWhite ? "/images/ZeroPlace White Color Logo.svg" : "/images/zero-place-color-logo.svg"}
                alt="ZeroPlace"
                className="w-50"
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
