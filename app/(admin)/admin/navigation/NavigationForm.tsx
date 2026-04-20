"use client";

import { useState } from "react";
import { toast } from "sonner";
import { 
  Save, 
  Menu,
  Loader2
} from "lucide-react";
import NavEditor from "@/components/admin/NavEditor";
import { updateNavigation } from "./actions";

interface NavigationFormProps {
  initialData: any;
}

export default function NavigationForm({ initialData }: NavigationFormProps) {
  const [navItems, setNavItems] = useState(initialData.navItems || []);
  const [isPending, setIsPending] = useState(false);

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
    <form action={clientAction} className="space-y-8 pb-20">
      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
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

      <div className="fixed bottom-8 right-8 z-50">
        <button 
          type="submit" 
          disabled={isPending}
          className="btn btn-sm h-14 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-8 font-black gap-3 transition-all uppercase tracking-tighter shadow-xl shadow-primary/40 disabled:bg-slate-200"
        >
          {isPending ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Save className="w-5 h-5" />
          )}
          {isPending ? "Saving changes..." : "Save Navigation"}
        </button>
      </div>
    </form>
  );
}
