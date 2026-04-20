"use client";

import { useState } from "react";
import { Edit2, Trash2, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { updateBrand, deleteBrand } from "./actions";
import ConfirmModal from "@/components/admin/ConfirmModal";
import ImageUpload from "@/components/admin/ImageUpload";

export default function BrandActions({ brand }: { brand: any }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [logo, setLogo] = useState(brand.logo);

  // Handle Edit
  async function handleEdit(formData: FormData) {
    setIsPending(true);
    formData.set("id", brand._id.toString());
    formData.set("logo", logo);
    try {
      const result = await updateBrand(formData);
      if (result.success) {
        toast.success("Brand updated successfully");
        setIsEditOpen(false);
      } else {
        toast.error("Failed to update brand");
      }
    } catch (error: any) {
      toast.error("An error occurred while updating brand");
    } finally {
      setIsPending(false);
    }
  }

  // Handle Delete
  async function handleDelete() {
    setIsPending(true);
    const formData = new FormData();
    formData.set("id", brand._id.toString());
    try {
      const result = await deleteBrand(formData);
      if (result.success) {
        toast.success("Brand deleted successfully");
        setIsDeleteOpen(false);
      } else {
        toast.error("Failed to delete brand");
      }
    } catch (error: any) {
      toast.error("An error occurred while deleting brand");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
        <button 
           onClick={() => setIsEditOpen(true)}
           className="p-1.5 rounded-sm bg-white text-slate-400 hover:text-primary transition-all shadow-sm focus:outline-none"
           type="button"
        >
          <Edit2 className="w-3 h-3" />
        </button>
        <button 
           onClick={() => setIsDeleteOpen(true)}
           className="p-1.5 rounded-sm bg-rose-50 text-rose-300 hover:text-rose-500 transition-all shadow-sm focus:outline-none"
           type="button"
        >
          <Trash2 className="w-3 h-3" />
        </button>
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm text-left">
          <div className="bg-white rounded-md w-full max-w-lg shadow-2xl overflow-hidden border border-primary/10 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-primary/5 flex items-center justify-between bg-primary/5">
              <h3 className="font-black font-heading text-slate-900 uppercase tracking-tight">Edit Brand</h3>
              <button 
                onClick={() => setIsEditOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form action={handleEdit} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Brand Name</label>
                <input 
                  name="name"
                  required
                  defaultValue={brand.name}
                  placeholder="e.g. Google"
                  className="input input-sm h-11 w-full rounded-sm bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Brand Logo</label>
                <ImageUpload 
                  value={logo}
                  onChange={(url) => setLogo(url)}
                  onRemove={() => setLogo("")}
                  label="Change Logo"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="btn btn-sm h-11 rounded-sm bg-slate-100 border-none hover:bg-slate-200 text-slate-600 px-6 font-bold flex-1"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isPending}
                  className="btn btn-sm h-11 rounded-sm bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold flex-[2] gap-2 shadow-lg shadow-primary/20"
                >
                  {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isPending ? "Updating..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      <ConfirmModal 
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDelete}
        isPending={isPending}
        title="Delete Brand"
        message="Are you sure you want to delete this brand logo? This action cannot be undone."
      />
    </>
  );
}
