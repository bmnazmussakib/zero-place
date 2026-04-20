"use client";

import { useState, useMemo, useEffect } from "react";
import { toast } from "sonner";
import { 
  AlertCircle,
  Save, 
  Globe,
  Mail,
  Phone,
  Loader2
} from "lucide-react";
import { updateFooter } from "./actions";
import { cn } from "@/lib/utils";

interface FooterFormProps {
  initialData: any;
}

export default function FooterForm({ initialData }: FooterFormProps) {
  const [formDataState, setFormDataState] = useState({
    footerDescription: initialData.footerDescription || "",
    address: initialData.address || "",
    officeHours: initialData.officeHours || "",
    contactEmail: initialData.contactEmail || "",
    contactPhone: initialData.contactPhone || "",
    facebookUrl: initialData.facebookUrl || "",
    instagramUrl: initialData.instagramUrl || "",
    twitterUrl: initialData.twitterUrl || "",
    linkedinUrl: initialData.linkedinUrl || ""
  });
  
  // Reset state when initialData changes (after save)
  useEffect(() => {
    setFormDataState({
      footerDescription: initialData.footerDescription || "",
      address: initialData.address || "",
      officeHours: initialData.officeHours || "",
      contactEmail: initialData.contactEmail || "",
      contactPhone: initialData.contactPhone || "",
      facebookUrl: initialData.facebookUrl || "",
      instagramUrl: initialData.instagramUrl || "",
      twitterUrl: initialData.twitterUrl || "",
      linkedinUrl: initialData.linkedinUrl || ""
    });
  }, [initialData]);

  const [isPending, setIsPending] = useState(false);

  const isDirty = useMemo(() => {
    return (
      formDataState.footerDescription !== (initialData.footerDescription || "") ||
      formDataState.address !== (initialData.address || "") ||
      formDataState.officeHours !== (initialData.officeHours || "") ||
      formDataState.contactEmail !== (initialData.contactEmail || "") ||
      formDataState.contactPhone !== (initialData.contactPhone || "") ||
      formDataState.facebookUrl !== (initialData.facebookUrl || "") ||
      formDataState.instagramUrl !== (initialData.instagramUrl || "") ||
      formDataState.twitterUrl !== (initialData.twitterUrl || "") ||
      formDataState.linkedinUrl !== (initialData.linkedinUrl || "")
    );
  }, [formDataState, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  async function clientAction(formData: FormData) {
    setIsPending(true);
    
    // Add controlled values to the FormData
    Object.entries(formDataState).forEach(([key, value]) => {
      formData.set(key, value);
    });
    
    try {
      const result = await updateFooter(formData);
      if (result.success) {
        toast.success("Footer settings updated successfully");
      } else {
        toast.error("Failed to update footer settings");
      }
    } catch (error) {
      toast.error("An error occurred while saving footer settings");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form action={clientAction} className="relative space-y-8 pb-32">
      {/* Footer Section */}
      <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black font-heading text-slate-900 uppercase leading-none">Footer Information</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Footer Content & Info</p>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Footer Description</label>
            <textarea 
              name="footerDescription"
              value={formDataState.footerDescription}
              onChange={handleChange}
              rows={3}
              className="textarea textarea-sm w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm p-4 h-32" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Office Address</label>
              <input 
                name="address"
                value={formDataState.address}
                onChange={handleChange}
                className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Office Hours</label>
              <input 
                name="officeHours"
                value={formDataState.officeHours}
                onChange={handleChange}
                placeholder="Mon-Fri 09am-06pm"
                className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black font-heading text-slate-900 uppercase leading-none">Contact Information</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Company Details</p>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Contact Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                name="contactEmail"
                value={formDataState.contactEmail}
                onChange={handleChange}
                className="input input-sm h-11 w-full rounded-md pl-10 bg-white border-primary/10 focus:border-primary transition-all text-sm" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Contact Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                name="contactPhone"
                value={formDataState.contactPhone}
                onChange={handleChange}
                className="input input-sm h-11 w-full rounded-md pl-10 bg-white border-primary/10 focus:border-primary transition-all text-sm" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black font-heading text-slate-900 uppercase leading-none">Social Media Links</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Platform URLs</p>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Facebook URL</label>
            <input 
              name="facebookUrl"
              value={formDataState.facebookUrl}
              onChange={handleChange}
              placeholder="#"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Instagram URL</label>
            <input 
              name="instagramUrl"
              value={formDataState.instagramUrl}
              onChange={handleChange}
              placeholder="#"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Twitter URL</label>
            <input 
              name="twitterUrl"
              value={formDataState.twitterUrl}
              onChange={handleChange}
              placeholder="#"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">LinkedIn URL</label>
            <input 
              name="linkedinUrl"
              value={formDataState.linkedinUrl}
              onChange={handleChange}
              placeholder="#"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
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
               <span className="text-[8px] font-medium text-white/40 uppercase tracking-widest mt-1">Footer information modified</span>
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
            {isPending ? "Syncing..." : "Update Footer Settings"}
          </button>
        </div>
      </div>
    </form>
  );
}


