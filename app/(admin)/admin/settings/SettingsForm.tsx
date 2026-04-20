"use client";

import { useState } from "react";
import { toast } from "sonner";
import { 
  Save, 
  Globe, 
  Search, 
  Loader2
} from "lucide-react";
import ImageUpload from "@/components/admin/ImageUpload";
import { updateSettings } from "./actions";

interface SettingsFormProps {
  initialData: any;
}

export default function SettingsForm({ initialData }: SettingsFormProps) {
  const [logoUrl, setLogoUrl] = useState(initialData.logoUrl || "");
  const [logoWhiteUrl, setLogoWhiteUrl] = useState(initialData.logoWhiteUrl || "");
  const [isPending, setIsPending] = useState(false);

  async function clientAction(formData: FormData) {
    setIsPending(true);
    
    // Add the Cloudinary URLs to the FormData
    formData.set("logoUrl", logoUrl);
    formData.set("logoWhiteUrl", logoWhiteUrl);
    
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
    <form action={clientAction} className="space-y-8 pb-20">
      {/* Branding Section */}
      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
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
              defaultValue={initialData.siteName}
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
                value={logoUrl}
                onChange={(url) => setLogoUrl(url)}
                onRemove={() => setLogoUrl("")}
                label="Upload Main Logo"
              />
              <input type="hidden" name="logoUrl" value={logoUrl} />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-tight flex items-center justify-between">
                Admin / White Logo
                <span className="text-[10px] font-normal text-slate-400 capitalize">Used on dark backgrounds</span>
              </label>
              <ImageUpload 
                value={logoWhiteUrl}
                onChange={(url) => setLogoWhiteUrl(url)}
                onRemove={() => setLogoWhiteUrl("")}
                label="Upload Admin Logo"
              />
              <input type="hidden" name="logoWhiteUrl" value={logoWhiteUrl} />
            </div>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
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
              defaultValue={initialData.googleAnalyticsId}
              placeholder="G-XXXXXXXXXX"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Default Meta Description</label>
            <textarea 
              name="description"
              defaultValue={initialData.description}
              rows={3}
              className="textarea textarea-sm w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm p-4 h-32" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Keywords (comma separated)</label>
            <input 
              name="keywords"
              defaultValue={initialData.keywords}
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
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
          {isPending ? "Saving..." : "Save Branding & SEO"}
        </button>
      </div>
    </form>
  );
}
