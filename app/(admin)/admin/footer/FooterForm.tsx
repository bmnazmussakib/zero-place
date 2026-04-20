"use client";

import { useState } from "react";
import { toast } from "sonner";
import { 
  Save, 
  Globe,
  Mail,
  Phone,
  Loader2
} from "lucide-react";
import { updateFooter } from "./actions";

interface FooterFormProps {
  initialData: any;
}

export default function FooterForm({ initialData }: FooterFormProps) {
  const [isPending, setIsPending] = useState(false);

  async function clientAction(formData: FormData) {
    setIsPending(true);
    
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
    <form action={clientAction} className="space-y-8 pb-20">
      {/* Footer Section */}
      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
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
              defaultValue={initialData.footerDescription}
              rows={3}
              className="textarea textarea-sm w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm p-4 h-32" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Office Address</label>
              <input 
                name="address"
                defaultValue={initialData.address}
                className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Office Hours</label>
              <input 
                name="officeHours"
                defaultValue={initialData.officeHours}
                placeholder="Mon-Fri 09am-06pm"
                className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
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
                defaultValue={initialData.contactEmail}
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
                defaultValue={initialData.contactPhone}
                className="input input-sm h-11 w-full rounded-md pl-10 bg-white border-primary/10 focus:border-primary transition-all text-sm" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/5 flex items-center gap-4 bg-primary/5">
          <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
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
              defaultValue={initialData.facebookUrl}
              placeholder="#"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Instagram URL</label>
            <input 
              name="instagramUrl"
              defaultValue={initialData.instagramUrl}
              placeholder="#"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Twitter URL</label>
            <input 
              name="twitterUrl"
              defaultValue={initialData.twitterUrl}
              placeholder="#"
              className="input input-sm h-11 w-full rounded-md bg-white border-primary/10 focus:border-primary transition-all text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">LinkedIn URL</label>
            <input 
              name="linkedinUrl"
              defaultValue={initialData.linkedinUrl}
              placeholder="#"
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
          {isPending ? "Saving changes..." : "Save Footer Settings"}
        </button>
      </div>
    </form>
  );
}
