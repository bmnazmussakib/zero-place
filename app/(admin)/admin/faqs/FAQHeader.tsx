"use client";

import { useState } from "react";
import { Plus, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { createFAQ } from "./actions";

export default function FAQHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);

    try {
      const result = await createFAQ(formData);
      if (result.success) {
        toast.success("FAQ added successfully");
        setIsOpen(false);
        const form = document.getElementById("add-faq-form") as HTMLFormElement;
        form?.reset();
      } else {
        toast.error("Failed to add FAQ");
      }
    } catch (error: any) {
      toast.error("An error occurred while adding FAQ");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black font-heading text-slate-900 tracking-tight mb-1 uppercase leading-none">Manage FAQs</h1>
          <p className="text-sm text-slate-500 font-medium">Edit and organize your frequently asked questions.</p>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="btn btn-sm h-11 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold gap-2 transition-all uppercase tracking-tighter shadow-md shadow-primary/20"
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-md w-full max-w-lg shadow-2xl overflow-hidden border border-primary/10 scale-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-primary/5 flex items-center justify-between bg-primary/5">
              <h3 className="font-black font-heading text-slate-900 uppercase tracking-tight">Add New FAQ</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form id="add-faq-form" action={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Question</label>
                <input 
                  name="question"
                  required
                  placeholder="e.g. How does the subscription work?"
                  className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-tight">Answer</label>
                <textarea 
                  name="answer"
                  required
                  rows={4}
                  placeholder="Provide a detailed answer..."
                  className="textarea textarea-sm w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm p-4 h-32" 
                />
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
                  className="btn btn-sm h-11 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold flex-[2] gap-2 shadow-lg shadow-primary/20"
                >
                  {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isPending ? "Adding FAQ..." : "Add FAQ"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
