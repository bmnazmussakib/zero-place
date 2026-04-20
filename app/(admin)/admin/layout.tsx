"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { 
  LayoutDashboard, 
  Settings, 
  HelpCircle, 
  Briefcase, 
  MessageSquare, 
  LogOut, 
  Menu, 
  X,
  CreditCard,
  Image as ImageIcon,
  CheckCircle,
  Shapes
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Services", href: "/admin/services", icon: Briefcase },
  { name: "Portfolio", href: "/admin/portfolio", icon: ImageIcon },
  { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { name: "Pricing", href: "/admin/pricing", icon: CreditCard },
  { name: "Brands", href: "/admin/brands", icon: Shapes },
  { name: "Work Steps", href: "/admin/work-steps", icon: CheckCircle },
  { name: "Navigation", href: "/admin/navigation", icon: Menu },
  { name: "Footer", href: "/admin/footer", icon: CreditCard },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const res = await fetch("/api/settings");
      if (res.ok) {
        const data = await res.json();
        setSettings(data);
      }
    };
    fetchSettings();
  }, []);

  // Don't show sidebar on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:sticky top-0 h-screen z-50 w-64 bg-white border-r border-primary/10 transform transition-transform duration-300 lg:translate-x-0 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex-1 overflow-y-auto p-6">
          <Link href="/" className="flex items-center gap-2 mb-8 group">
            <img src="/images/zero-place-color-logo.svg" alt="Zero Place" className="h-12 object-contain" />
          </Link>

          <nav className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Menu</p>
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-semibold transition-all group",
                    isActive 
                      ? "bg-primary text-white shadow shadow-primary/20" 
                      : "text-slate-600 hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-slate-400 group-hover:text-primary/60")} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-primary/5 bg-white">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center font-bold text-slate-600 text-xs">
              {session?.user?.name?.[0] || "A"}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold text-slate-900 truncate">{session?.user?.name || "Admin"}</p>
              <p className="text-[10px] text-slate-500 truncate">{session?.user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-3 px-4 py-2 rounded-md text-xs font-bold text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-colors w-full"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-primary/5">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-primary/10 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-30">
          <button 
            className="p-2 -ml-2 rounded-md lg:hidden hover:bg-slate-100 transition-colors"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <Link href="/admin/settings" className="p-2 rounded-md text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                <Settings className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
