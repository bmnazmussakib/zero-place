"use client";

import { useState } from "react";
import { Plus, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import ImageUpload from "@/components/admin/ImageUpload";
import { createServiceCategory } from "./actions";

const COLORS = [
  { name: "Blue", bg: "bg-blue-600", text: "text-white" },
  { name: "Indigo", bg: "bg-indigo-600", text: "text-white" },
  { name: "Slate", bg: "bg-slate-900", text: "text-white" },
  { name: "Rose", bg: "bg-rose-500", text: "text-white" },
  { name: "Emerald", bg: "bg-emerald-500", text: "text-white" },
  { name: "Violet", bg: "bg-violet-600", text: "text-white" },
];

export default function ServicesHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [image, setImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  async function handleSubmit(formData: FormData) {
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    setIsPending(true);
    formData.set("image", image);
    formData.set("color", selectedColor.bg);
    formData.set("textColor", selectedColor.text);

    try {
      const result = await createServiceCategory(formData);
      if (result.success) {
        toast.success("Category added successfully");
        setIsOpen(false);
        setImage("");
        const form = document.getElementById("add-category-form") as HTMLFormElement;
        form?.reset();
      } else {
        toast.error("Failed to add category");
      }
    } catch (error: any) {
      toast.error("An error occurred while adding category");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black font-heading text-slate-900 tracking-tight mb-1 uppercase leading-none">Service Categories</h1>
          <p className="text-sm text-slate-500 font-medium">Manage the main service groups displayed on your site.</p>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="btn btn-sm h-11 rounded-sm bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold gap-2 transition-all uppercase tracking-tighter shadow-md shadow-primary/20"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-md w-full max-w-lg shadow-2xl overflow-hidden border border-primary/10">
            <div className="p-6 border-b border-primary/5 flex items-center justify-between bg-primary/5">
              <h3 className="font-black font-heading text-slate-900 uppercase tracking-tight">Add New Category</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form id="add-category-form" action={handleSubmit} className="p-6 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Category Title</label>
                <input 
                  name="title"
                  required
                  placeholder="e.g. Branding & Identity"
                  className="input input-sm h-11 w-full rounded-sm bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Description</label>
                <textarea 
                  name="description"
                  required
                  rows={2}
                  placeholder="Short summary of the service"
                  className="textarea textarea-sm w-full rounded-sm bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm p-4 h-24" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Span Size</label>
                    <select name="colSpan" className="select select-sm h-11 w-full rounded-sm bg-slate-50 border-primary/10 focus:border-primary text-sm">
                        <option value="1">Small (1 Column)</option>
                        <option value="2">Large (2 Columns)</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Theme Color</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                        {COLORS.map((c) => (
                            <button
                                key={c.name}
                                type="button"
                                onClick={() => setSelectedColor(c)}
                                className={`w-6 h-6 rounded-full border-2 transition-all ${c.bg} ${selectedColor.name === c.name ? "border-primary scale-110 shadow-sm" : "border-transparent opacity-60 hover:opacity-100"}`}
                                title={c.name}
                            />
                        ))}
                    </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Category Image (Transparent PNG recommended)</label>
                <ImageUpload 
                  value={image}
                  onChange={(url) => setImage(url)}
                  onRemove={() => setImage("")}
                  label="Choose Image"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
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
                  {isPending ? "Adding Category..." : "Add Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
