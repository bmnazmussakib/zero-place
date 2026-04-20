'use client'

import { useState } from 'react';
import { Edit2, Trash2, X, Plus, Save } from 'lucide-react';
import { updatePricingPlan, deletePricingPlan } from './actions';
import { toast } from 'sonner';
import { DBPricingPlan } from '@/types';

interface Feature {
    name: string;
    price: number;
}

export default function PricingActions({ plan }: { plan: DBPricingPlan }) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [features, setFeatures] = useState<Feature[]>(plan.features);

    const addFeature = () => setFeatures([...features, { name: '', price: 0 }]);
    const removeFeature = (index: number) => setFeatures(features.filter((_, i) => i !== index));
    const updateFeature = (index: number, field: keyof Feature, value: string | number) => {
        const newFeatures = [...features];
        newFeatures[index] = { ...newFeatures[index], [field]: value };
        setFeatures(newFeatures);
    };

    async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        formData.append('features', JSON.stringify(features.filter(f => f.name.trim() !== '')));

        const result = await updatePricingPlan(plan._id, formData);

        if (result.success) {
            toast.success("Pricing plan updated successfully");
            setIsEditOpen(false);
        } else {
            toast.error(result.error || "Failed to update pricing plan");
        }
        setIsLoading(false);
    }

    async function handleDelete() {
        setIsLoading(true);
        const result = await deletePricingPlan(plan._id);
        if (result.success) {
            toast.success("Pricing plan deleted successfully");
            setIsDeleteOpen(false);
        } else {
            toast.error(result.error || "Failed to delete pricing plan");
        }
        setIsLoading(false);
    }

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setIsEditOpen(true)}
                className="p-2 rounded-md text-slate-400 hover:text-primary hover:bg-primary/5 transition-all focus:outline-none"
            >
                <Edit2 size={18} />
            </button>
            <button
                onClick={() => setIsDeleteOpen(true)}
                className="p-2 rounded-md text-rose-300 hover:text-rose-500 hover:bg-rose-50 transition-all focus:outline-none"
            >
                <Trash2 size={18} />
            </button>

            {/* Edit Modal */}
            {isEditOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsEditOpen(false)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Edit Pricing Plan</h2>
                            <button onClick={() => setIsEditOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleUpdate} className="overflow-y-auto flex-1 p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Plan Name</label>
                                    <input
                                        name="name"
                                        required
                                        defaultValue={plan.name}
                                        className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Price Display Text</label>
                                    <input
                                        name="priceText"
                                        required
                                        defaultValue={plan.priceText}
                                        className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Description</label>
                                <textarea
                                    name="description"
                                    required
                                    defaultValue={plan.description}
                                    className="textarea textarea-sm w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm p-4 h-24 font-medium"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Type</label>
                                    <select
                                        name="type"
                                        defaultValue={plan.type}
                                        className="select select-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                    >
                                        <option value="one-time">One-Time</option>
                                        <option value="subscription">Subscription</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Popular Plan?</label>
                                    <select
                                        name="isPopular"
                                        defaultValue={plan.isPopular.toString()}
                                        className="select select-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                    >
                                        <option value="false">No</option>
                                        <option value="true">Yes</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Display Order</label>
                                    <input
                                        type="number"
                                        name="order"
                                        defaultValue={plan.order}
                                        className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Features</label>
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="text-xs font-black text-primary hover:underline uppercase tracking-widest"
                                    >
                                        + Add Feature
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex gap-3 items-start">
                                            <div className="flex-1">
                                                <input
                                                    placeholder="Feature name"
                                                    value={feature.name}
                                                    onChange={(e) => updateFeature(index, 'name', e.target.value)}
                                                    className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                                />
                                            </div>
                                            <div className="w-32">
                                                <input
                                                    type="number"
                                                    placeholder="Price"
                                                    value={feature.price}
                                                    onChange={(e) => updateFeature(index, 'price', parseInt(e.target.value) || 0)}
                                                    className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFeature(index)}
                                                className="p-3 text-rose-300 hover:text-rose-500 transition-colors"
                                                disabled={features.length === 1}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsEditOpen(false)}
                                    className="btn btn-sm h-11 rounded-md bg-slate-100 border-none hover:bg-slate-200 text-slate-600 px-6 font-bold flex-1"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn btn-sm h-11 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold flex-[2] gap-2 shadow-lg shadow-primary/20"
                                >
                                    {isLoading ? <span className="loading loading-spinner loading-xs"></span> : <Save size={18} />}
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {isDeleteOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsDeleteOpen(false)} />
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center">
                        <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-500">
                            <Trash2 size={32} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">Delete Plan?</h3>
                        <p className="text-slate-500 font-medium mb-8">
                            Are you sure you want to delete <span className="font-bold text-slate-900">&quot;{plan.name}&quot;</span>? This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setIsDeleteOpen(false)}
                                className="btn btn-sm h-12 rounded-md bg-slate-100 border-none hover:bg-slate-200 text-slate-600 px-6 font-bold flex-1"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={isLoading}
                                className="btn btn-sm h-12 rounded-md bg-rose-500 border-none hover:bg-rose-600 text-white px-6 font-bold flex-1 shadow-lg shadow-rose-200"
                            >
                                {isLoading ? <span className="loading loading-spinner loading-xs"></span> : "Yes, Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
