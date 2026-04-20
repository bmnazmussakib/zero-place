"use client";

import { useState, useMemo, useEffect } from "react";
import { toast } from "sonner";
import { AlertCircle, Save, Globe, Search, Loader2 } from "lucide-react";
import ImageUpload from "@/components/admin/ImageUpload";
import { updateSettings } from "./actions";
import { cn } from "@/lib/utils";

interface SettingsFormProps {
  initialData: any;
}

export default function SettingsForm({ initialData }: SettingsFormProps) {
  const [formDataState, setFormDataState] = useState({
    siteName: initialData.siteName || "",
    logoUrl: initialData.logoUrl || "",
    logoWhiteUrl: initialData.logoWhiteUrl || "",
    googleAnalyticsId: initialData.googleAnalyticsId || "",
    description: initialData.description || "",
    keywords: initialData.keywords || ""
  });
  
  // Update state when initialData changes (after save/revalidation)
  useEffect(() => {
    setFormDataState({
      siteName: initialData.siteName || "",
      logoUrl: initialData.logoUrl || "",
      logoWhiteUrl: initialData.logoWhiteUrl || "",
      googleAnalyticsId: initialData.googleAnalyticsId || "",
      description: initialData.description || "",
      keywords: initialData.keywords || ""
    });
  }, [initialData]);

  const [isPending, setIsPending] = useState(false);

  const isDirty = useMemo(() => {
    return (
      formDataState.siteName !== (initialData.siteName || "") ||
      formDataState.logoUrl !== (initialData.logoUrl || "") ||
      formDataState.logoWhiteUrl !== (initialData.logoWhiteUrl || "") ||
      formDataState.googleAnalyticsId !== (initialData.googleAnalyticsId || "") ||
      formDataState.description !== (initialData.description || "") ||
      formDataState.keywords !== (initialData.keywords || "")
    );
  }, [formDataState, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  async function clientAction(formData: FormData) {
    setIsPending(true);
    
    // Add the controlled values to the FormData
    formData.set("logoUrl", formDataState.logoUrl);
    formData.set("logoWhiteUrl", formDataState.logoWhiteUrl);
    formData.set("siteName", formDataState.siteName);
    formData.set("googleAnalyticsId", formDataState.googleAnalyticsId);
    formData.set("description", formDataState.description);
    formData.set("keywords", formDataState.keywords);
    
    try {
      const result = await updateSettings(formData);
      if (result.success) {
        toast.success("Settings updated successfully");
      } else {
        toast.error("Failed to update settings");
      }
    } catch (error) {
      toast.error("An error occurred while saving settings");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form action={clientAction} className="relative space-y-8 pb-32">
      {/* Branding Section */}
      <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black font-heading text-slate-900 uppercase leading-none">General Branding</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Identity & Logos</p>
          </div>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Site Name</label>
            <input 
              name="siteName"
              value={formDataState.siteName}
              onChange={handleChange}
              placeholder="Zero Place"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-tight flex items-center justify-between">
                Site Logo (Color)
                <span className="text-[10px] font-normal text-slate-400 capitalize">Used on light backgrounds</span>
              </label>
              <ImageUpload 
                value={formDataState.logoUrl}
                onChange={(url) => setFormDataState(prev => ({ ...prev, logoUrl: url }))}
                onRemove={() => setFormDataState(prev => ({ ...prev, logoUrl: "" }))}
                label="Upload Main Logo"
              />
              <input type="hidden" name="logoUrl" value={formDataState.logoUrl} />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-tight flex items-center justify-between">
                Admin / White Logo
                <span className="text-[10px] font-normal text-slate-400 capitalize">Used on dark backgrounds</span>
              </label>
              <ImageUpload 
                value={formDataState.logoWhiteUrl}
                onChange={(url) => setFormDataState(prev => ({ ...prev, logoWhiteUrl: url }))}
                onRemove={() => setFormDataState(prev => ({ ...prev, logoWhiteUrl: "" }))}
                label="Upload Admin Logo"
              />
              <input type="hidden" name="logoWhiteUrl" value={formDataState.logoWhiteUrl} />
            </div>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black font-heading text-slate-900 uppercase leading-none">SEO Metadata</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Search Engine Optimization</p>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Google Analytics ID (G-XXXXXXX)</label>
            <input 
              name="googleAnalyticsId"
              value={formDataState.googleAnalyticsId}
              onChange={handleChange}
              placeholder="G-XXXXXXXXXX"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Default Meta Description</label>
            <textarea 
              name="description"
              value={formDataState.description}
              onChange={handleChange}
              rows={3}
              className="textarea textarea-sm w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm p-4 h-32" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Keywords (comma separated)</label>
            <input 
              name="keywords"
              value={formDataState.keywords}
              onChange={handleChange}
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
               <span className="text-[8px] font-medium text-white/40 uppercase tracking-widest mt-1">Branding & SEO options modified</span>
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
            {isPending ? "Saving..." : "Save branding & SEO"}
          </button>
        </div>
      </div>
    </form>
  );
}


