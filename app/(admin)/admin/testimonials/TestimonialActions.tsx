"use client";

import { useState } from "react";
import { Edit2, Trash2, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { updateTestimonial, deleteTestimonial } from "./actions";
import ConfirmModal from "@/components/admin/ConfirmModal";
import ImageUpload from "@/components/admin/ImageUpload";

export default function TestimonialActions({ testimonial }: { testimonial: any }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [avatar, setAvatar] = useState(testimonial.avatar);
  const [logo, setLogo] = useState(testimonial.logo);

  // Handle Edit
  async function handleEdit(formData: FormData) {
    setIsPending(true);
    formData.set("id", testimonial._id.toString());
    formData.set("avatar", avatar);
    formData.set("logo", logo);
    try {
      const result = await updateTestimonial(formData);
      if (result.success) {
        toast.success("Testimonial updated successfully");
        setIsEditOpen(false);
      } else {
        toast.error("Failed to update testimonial");
      }
    } catch (error: any) {
      toast.error("An error occurred while updating testimonial");
    } finally {
      setIsPending(false);
    }
  }

  // Handle Delete
  async function handleDelete() {
    setIsPending(true);
    const formData = new FormData();
    formData.set("id", testimonial._id.toString());
    try {
      const result = await deleteTestimonial(formData);
      if (result.success) {
        toast.success("Testimonial deleted successfully");
        setIsDeleteOpen(false);
      } else {
        toast.error("Failed to delete testimonial");
      }
    } catch (error: any) {
      toast.error("An error occurred while deleting testimonial");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <div className="flex items-center gap-1">
        <button 
           onClick={() => setIsEditOpen(true)}
           className="p-2 rounded-md text-slate-400 hover:text-primary hover:bg-primary/5 transition-all focus:outline-none"
           type="button"
        >
          <Edit2 className="w-4 h-4" />
        </button>
        <button 
           onClick={() => setIsDeleteOpen(true)}
           className="p-2 rounded-md text-rose-300 hover:text-rose-500 hover:bg-rose-50 transition-all focus:outline-none"
           type="button"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm text-left">
          <div className="bg-white rounded-md w-full max-w-lg shadow-2xl overflow-hidden border border-primary/10 scale-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-primary/5 flex items-center justify-between bg-primary/5">
              <h3 className="font-black font-heading text-slate-900 uppercase tracking-tight">Edit Feedback</h3>
              <button 
                onClick={() => setIsEditOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form action={handleEdit} className="p-6 space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Client Name</label>
                    <input 
                      name="name"
                      required
                      defaultValue={testimonial.name}
                      placeholder="e.g. John Doe"
                      className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Role / Company</label>
                    <input 
                      name="role"
                      required
                      defaultValue={testimonial.role}
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
                  defaultValue={testimonial.content}
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
                    label="Change Avatar"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Company Logo</label>
                  <ImageUpload 
                    value={logo}
                    onChange={(url) => setLogo(url)}
                    onRemove={() => setLogo("")}
                    label="Change Logo"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="btn btn-sm h-11 rounded-md bg-slate-100 border-none hover:bg-slate-200 text-slate-600 px-6 font-bold flex-1"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isPending}
                  className="btn btn-sm h-11 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold flex-[2] gap-2 shadow-lg shadow-primary/20"
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
        title="Delete Testimonial"
        message="Are you sure you want to delete this testimonial? This action cannot be undone."
      />
    </>
  );
}
