"use client";

import { useState } from "react";
import { Plus, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import ImageUpload from "@/components/admin/ImageUpload";
import { createTestimonial } from "./actions";

export default function TestimonialsHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [logo, setLogo] = useState("");

  async function handleSubmit(formData: FormData) {
    if (!avatar) {
      toast.error("Please upload an avatar");
      return;
    }

    setIsPending(true);
    formData.set("avatar", avatar);
    formData.set("logo", logo);

    try {
      const result = await createTestimonial(formData);
      if (result.success) {
        toast.success("Testimonial added successfully");
        setIsOpen(false);
        setAvatar("");
        setLogo("");
        const form = document.getElementById("add-testimonial-form") as HTMLFormElement;
        form?.reset();
      } else {
        toast.error("Failed to add testimonial");
      }
    } catch (error: any) {
      toast.error("An error occurred while adding testimonial");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black font-heading text-slate-900 tracking-tight mb-1 uppercase leading-none">Testimonials</h1>
          <p className="text-sm text-slate-500 font-medium">Manage client stories and success feedback.</p>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="btn btn-sm h-11 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold gap-2 transition-all uppercase tracking-tighter shadow-md shadow-primary/20"
        >
          <Plus className="w-4 h-4" />
          Add Feedback
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-md w-full max-w-lg shadow-2xl overflow-hidden border border-primary/10">
            <div className="p-6 border-b border-primary/5 flex items-center justify-between bg-primary/5">
              <h3 className="font-black font-heading text-slate-900 uppercase tracking-tight">Add New Feedback</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form id="add-testimonial-form" action={handleSubmit} className="p-6 space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Client Name</label>
                    <input 
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Role / Company</label>
                    <input 
                      name="role"
                      required
                      placeholder="e.g. CEO at TechFlow"
                      className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                    />
                  </div>
               </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Feedback Content</label>
                <textarea 
                  name="content"
                  required
                  rows={3}
                  placeholder="What they said about us..."
                  className="textarea textarea-sm w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm p-4 h-24" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Client Avatar</label>
                  <ImageUpload 
                    value={avatar}
                    onChange={(url) => setAvatar(url)}
                    onRemove={() => setAvatar("")}
                    label="Choose Avatar"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Company Logo</label>
                  <ImageUpload 
                    value={logo}
                    onChange={(url) => setLogo(url)}
                    onRemove={() => setLogo("")}
                    label="Choose Logo"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-sm h-11 rounded-md bg-slate-100 border-none hover:bg-slate-200 text-slate-600 px-6 font-bold flex-1"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isPending}
                  className="btn btn-sm h-11 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold flex-[2] gap-2"
                >
                  {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isPending ? "Adding Testimonial..." : "Add Feedback"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
