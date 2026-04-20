"use client";

import { useState } from "react";
import { Plus, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import ImageUpload from "@/components/admin/ImageUpload";
import { createPortfolioItem } from "./actions";

export default function PortfolioHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [image, setImage] = useState("");

  async function handleSubmit(formData: FormData) {
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    setIsPending(true);
    formData.set("image", image);

    try {
      const result = await createPortfolioItem(formData);
      if (result.success) {
        toast.success("Project added successfully");
        setIsOpen(false);
        setImage("");
        const form = document.getElementById("add-project-form") as HTMLFormElement;
        form?.reset();
      } else {
        toast.error("Failed to add project");
      }
    } catch (error: any) {
      toast.error("An error occurred while adding project");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black font-heading text-slate-900 tracking-tight mb-1 uppercase leading-none">Portfolio</h1>
          <p className="text-sm text-slate-500 font-medium">Showcase your best projects and design work.</p>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="btn btn-sm h-11 rounded-sm bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold gap-2 transition-all uppercase tracking-tighter shadow-md shadow-primary/20"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-md w-full max-w-lg shadow-2xl overflow-hidden border border-primary/10">
            <div className="p-6 border-b border-primary/5 flex items-center justify-between bg-primary/5">
              <h3 className="font-black font-heading text-slate-900 uppercase tracking-tight">Add New Project</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form id="add-project-form" action={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Project Title</label>
                <input 
                  name="title"
                  required
                  placeholder="e.g. Modern Mobile App"
                  className="input input-sm h-11 w-full rounded-sm bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Category</label>
                <input 
                  name="category"
                  required
                  placeholder="e.g. UI/UX Design"
                  className="input input-sm h-11 w-full rounded-sm bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Project Image</label>
                <ImageUpload 
                  value={image}
                  onChange={(url) => setImage(url)}
                  onRemove={() => setImage("")}
                  label="Choose Image"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-sm h-11 rounded-sm bg-slate-100 border-none hover:bg-slate-200 text-slate-600 px-6 font-bold flex-1"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isPending}
                  className="btn btn-sm h-11 rounded-sm bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold flex-[2] gap-2"
                >
                  {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isPending ? "Adding Project..." : "Add Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
