"use client";

import { useState } from "react";
import { Edit2, Trash2, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { updateWorkStep, deleteWorkStep } from "./actions";
import ConfirmModal from "@/components/admin/ConfirmModal";

export default function WorkStepActions({ step }: { step: any }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  // Handle Edit
  async function handleEdit(formData: FormData) {
    setIsPending(true);
    formData.set("id", step._id.toString());
    try {
      const result = await updateWorkStep(formData);
      if (result.success) {
        toast.success("Step updated successfully");
        setIsEditOpen(false);
      } else {
        toast.error("Failed to update step");
      }
    } catch (error: any) {
      toast.error("An error occurred while updating step");
    } finally {
      setIsPending(false);
    }
  }

  // Handle Delete
  async function handleDelete() {
    setIsPending(true);
    const formData = new FormData();
    formData.set("id", step._id.toString());
    try {
      const result = await deleteWorkStep(formData);
      if (result.success) {
        toast.success("Step deleted successfully");
        setIsDeleteOpen(false);
      } else {
        toast.error("Failed to delete step");
      }
    } catch (error: any) {
      toast.error("An error occurred while deleting step");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <button 
           onClick={() => setIsEditOpen(true)}
           className="p-2.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all focus:outline-none"
           type="button"
        >
          <Edit2 className="w-4 h-4" />
        </button>
        <button 
           onClick={() => setIsDeleteOpen(true)}
           className="p-2.5 rounded-md text-rose-300 hover:text-rose-500 hover:bg-rose-50 transition-all focus:outline-none"
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
              <h3 className="font-black font-heading text-slate-900 uppercase tracking-tight">Edit Work Step</h3>
              <button 
                onClick={() => setIsEditOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form action={handleEdit} className="p-6 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Step Title</label>
                <input 
                  name="title"
                  required
                  defaultValue={step.title}
                  className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Description</label>
                <textarea 
                  name="description"
                  required
                  rows={3}
                  defaultValue={step.description}
                  className="textarea textarea-sm w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm p-4 h-28" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Icon Name (Lucide)</label>
                <input 
                  name="icon"
                  defaultValue={step.icon}
                  className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                />
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
        title="Delete Work Step"
        message="Are you sure you want to delete this work step? This action cannot be undone."
      />
    </>
  );
}
