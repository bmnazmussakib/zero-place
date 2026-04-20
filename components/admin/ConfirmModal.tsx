"use client";

import { AlertTriangle } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  isPending?: boolean;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  isPending
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-md w-full max-w-sm shadow-2xl overflow-hidden border border-rose-100 scale-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-rose-50 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-rose-500" />
            </div>
            <div className="flex-1 min-w-0">
               <h3 className="text-base font-black font-heading text-slate-900 uppercase leading-none mb-2">{title}</h3>
               <p className="text-sm text-slate-500 font-medium leading-relaxed">{message}</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-3">
            <button 
                onClick={onClose}
                type="button"
                disabled={isPending}
                className="btn btn-sm h-10 rounded-sm bg-white border-slate-200 hover:bg-slate-100 text-slate-600 px-6 font-bold flex-1"
            >
                Cancel
            </button>
            <button 
                onClick={onConfirm}
                type="button"
                disabled={isPending}
                className="btn btn-sm h-10 rounded-sm bg-rose-500 border-none hover:bg-rose-600 text-white px-6 font-bold flex-1"
            >
                {isPending ? "Deleting..." : "Confirm Delete"}
            </button>
        </div>
      </div>
    </div>
  );
}
