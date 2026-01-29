import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            {/* <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-black text-xl leading-none">P</span>
            </div> */}
            <img src="/images/logo.png" alt="" className="w-10" />
            <span className="text-xl font-bold text-[var(--text-heading)] tracking-tight">
                Zero<span className="text-[var(--primary)]">Place</span>
            </span>
        </Link>
    );
}
