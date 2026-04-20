'use client'

import { useState } from 'react';
import { Plus, X, Trash2, Check } from 'lucide-react';
import { createPricingPlan } from './actions';
import { toast } from 'sonner';

interface Feature {
    name: string;
    price: number;
}

export default function PricingHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [features, setFeatures] = useState<Feature[]>([{ name: '', price: 0 }]);

    const addFeature = () => setFeatures([...features, { name: '', price: 0 }]);
    const removeFeature = (index: number) => setFeatures(features.filter((_, i) => i !== index));
    const updateFeature = (index: number, field: keyof Feature, value: string | number) => {
        const newFeatures = [...features];
        newFeatures[index] = { ...newFeatures[index], [field]: value };
        setFeatures(newFeatures);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        formData.append('features', JSON.stringify(features.filter(f => f.name.trim() !== '')));

        const result = await createPricingPlan(formData);

        if (result.success) {
            toast.success("Pricing plan created successfully");
            setIsOpen(false);
            setFeatures([{ name: '', price: 0 }]);
            (e.target as HTMLFormElement).reset();
        } else {
            toast.error(result.error || "Failed to create pricing plan");
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Pricing Plans</h1>
                <p className="text-slate-500 font-medium">Manage your one-time and subscription plans.</p>
            </div>

            <button
                onClick={() => setIsOpen(true)}
                className="btn btn-sm h-11 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold gap-2 transition-all uppercase tracking-tighter shadow-md shadow-primary/20"
            >
                <Plus size={18} />
                Add New Plan
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Add New Pricing Plan</h2>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Plan Name</label>
                                    <input
                                        name="name"
                                        required
                                        placeholder="e.g. Web Development"
                                        className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Price Display Text</label>
                                    <input
                                        name="priceText"
                                        required
                                        placeholder="e.g. Starting at $900"
                                        className="input input-sm h-11 w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Description</label>
                                <textarea
                                    name="description"
                                    required
                                    placeholder="Brief plan description..."
                                    className="textarea textarea-sm w-full rounded-md bg-slate-50 border-primary/10 focus:border-primary transition-all text-sm p-4 h-24 font-medium"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Type</label>
                                    <select
                                        name="type"
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
                                        defaultValue="0"
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
                                    onClick={() => setIsOpen(false)}
                                    className="btn btn-sm h-11 rounded-md bg-slate-100 border-none hover:bg-slate-200 text-slate-600 px-6 font-bold flex-1"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn btn-sm h-11 rounded-md bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold flex-[2] gap-2 shadow-lg shadow-primary/20"
                                >
                                    {isLoading ? <span className="loading loading-spinner loading-xs"></span> : <Plus size={18} />}
                                    Create Plan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
