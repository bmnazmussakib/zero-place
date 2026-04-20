import PricingHeader from "./PricingHeader";
import PricingActions from "./PricingActions";
import { getPricingPlans } from "@/lib/data-fetching";
import { DBPricingPlan } from "@/types";

export default async function AdminPricingPage() {
    const oneTimePlans = await getPricingPlans('one-time');
    const subscriptionPlans = await getPricingPlans('subscription');

    const renderPlanList = (plans: any[], title: string) => (
        <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-3">
                {title}
                <span className="flex items-center justify-center bg-primary/10 text-primary text-xs h-6 px-2 rounded-full font-bold">
                    {plans.length}
                </span>
            </h2>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="text-xs font-black uppercase tracking-widest text-slate-400 py-4">Order</th>
                                <th className="text-xs font-black uppercase tracking-widest text-slate-400 py-4">Plan Name</th>
                                <th className="text-xs font-black uppercase tracking-widest text-slate-400 py-4">Price Text</th>
                                <th className="text-xs font-black uppercase tracking-widest text-slate-400 py-4 text-center">Status</th>
                                <th className="text-xs font-black uppercase tracking-widest text-slate-400 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {plans.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-12 text-center text-slate-400 font-medium">
                                        No plans found. Create your first one above.
                                    </td>
                                </tr>
                            ) : (
                                plans.map((plan) => (
                                    <tr key={plan._id.toString()} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="py-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-100 text-slate-500 font-black text-xs">
                                                {plan.order}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900">{plan.name}</span>
                                                <span className="text-xs text-slate-400 font-medium truncate max-w-[200px]">
                                                    {plan.description}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 font-black text-primary text-sm">
                                            {plan.priceText}
                                        </td>
                                        <td className="py-4">
                                            <div className="flex justify-center">
                                                {plan.isPopular ? (
                                                    <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-md border border-amber-100">
                                                        Popular
                                                    </span>
                                                ) : (
                                                    <span className="px-2 py-1 bg-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-md">
                                                        Standard
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-4 text-right">
                                            <div className="flex justify-end pr-2">
                                                <PricingActions plan={JSON.parse(JSON.stringify(plan))} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto py-8">
            <PricingHeader />
            
            <div className="grid grid-cols-1 gap-12 mt-8">
                {renderPlanList(oneTimePlans, "One-Time Plans")}
                {renderPlanList(subscriptionPlans, "Subscription Plans")}
            </div>
        </div>
    );
}
