"use client";

import { useState, useMemo, useEffect } from "react";
import { toast } from "sonner";
import { AlertCircle, Save, Menu, Loader2 } from "lucide-react";
import NavEditor from "@/components/admin/NavEditor";
import { updateNavigation } from "./actions";
import { cn } from "@/lib/utils";

interface NavigationFormProps {
  initialData: any;
}

export default function NavigationForm({ initialData }: NavigationFormProps) {
  const [navItems, setNavItems] = useState(initialData.navItems || []);

  // Update state when initialData changes (after successful save and revalidation)
  useEffect(() => {
    setNavItems(initialData.navItems || []);
  }, [initialData.navItems]);

  const [isPending, setIsPending] = useState(false);

  // Robust comparison to check if navigation has changed
  const isDirty = useMemo(() => {
    const normalize = (items: any[]) => JSON.stringify(items, (key, value) => {
      if (key === 'depth' || key === 'index' || key === 'parentId') return undefined; // Internal editor fields
      if (value === null || value === undefined || (Array.isArray(value) && value.length === 0)) {
        if (key === 'children') return []; // Ensure children is always an array for comparison
        return undefined;
      }
      return value;
    });

    return normalize(navItems) !== normalize(initialData.navItems || []);
  }, [navItems, initialData.navItems]);

  async function clientAction(formData: FormData) {
    setIsPending(true);
    
    // Add NavItems to the FormData
    formData.set("navItems", JSON.stringify(navItems));
    
    try {
      const result = await updateNavigation(formData);
      if (result.success) {
        toast.success("Navigation updated successfully");
      } else {
        toast.error("Failed to update navigation");
      }
    } catch (error) {
      toast.error("An error occurred while saving navigation");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form action={clientAction} className="relative space-y-8 pb-32">
      <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Menu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black font-heading text-slate-900 uppercase leading-none">Header Navigation</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Manage Menu Structure</p>
          </div>
        </div>
        <div className="p-6">
          <NavEditor items={navItems} onChange={setNavItems} />
          <input type="hidden" name="navItems" value={JSON.stringify(navItems)} />
        </div>
      </div>

      {/* Pro-Action Dock */}
      <div className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform",
        isDirty || isPending 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-20 opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[320px]">
          <div className="flex items-center gap-3 pl-2">
            <div className="relative">
              <AlertCircle className="w-4 h-4 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full" />
            </div>
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-white/90 uppercase tracking-tight leading-none">Unsaved Changes</span>
               <span className="text-[8px] font-medium text-white/40 uppercase tracking-widest mt-1">Navigation structure modified</span>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <button 
            type="submit" 
            disabled={!isDirty || isPending}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-[11px] font-black uppercase tracking-tighter transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isPending ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
            )}
            {isPending ? "Syncing..." : "Update Navigation"}
          </button>
        </div>
      </div>
    </form>
  );
}


