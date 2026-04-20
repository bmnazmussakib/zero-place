import connectDB from "@/lib/db";
import { FAQ as FAQModel } from "@/models/Utility";
import { 
  Search, 
  GripVertical,
  HelpCircle
} from "lucide-react";
import FAQHeader from "./FAQHeader";
import FAQActions from "./FAQActions";

async function getFAQs() {
  await connectDB();
  const faqs = await FAQModel.find().sort({ order: 1 }).lean();
  return faqs.map(faq => ({
    ...faq,
    _id: faq._id.toString()
  }));
}

export default async function AdminFAQsPage() {
  const faqs = await getFAQs();

  return (
    <div className="space-y-10">
      <FAQHeader />

      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        {/* Table Header / Toolbar */}
        <div className="p-4 border-b border-primary/5 bg-primary/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="relative flex-1 max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
              <input 
                type="text" 
                placeholder="Search questions..." 
                className="input input-sm h-10 w-full pl-10 rounded-sm bg-white border-primary/10 focus:border-primary focus:ring-0 transition-all text-sm"
              />
           </div>
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{faqs.length} Total</span>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6 px-8">Order</th>
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6">Question & Answer</th>
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq: any, index: number) => (
                <tr key={faq._id.toString()} className="group hover:bg-primary/5 transition-colors border-b border-primary/5">
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <GripVertical className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab hover:text-slate-500" />
                      <span className="text-slate-400 font-bold font-heading text-xs">{index + 1}</span>
                    </div>
                  </td>
                  <td className="py-6 min-w-[400px]">
                    <div className="space-y-1 pr-12">
                      <h4 className="font-bold text-slate-900 leading-tight transition-colors">{faq.question}</h4>
                      <p className="text-sm text-slate-500 line-clamp-2 max-w-2xl leading-relaxed">{faq.answer}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <FAQActions faq={faq} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {faqs.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-slate-50 rounded border border-primary/10 flex items-center justify-center text-slate-300 mb-4">
              <HelpCircle className="w-8 h-8" />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No FAQs found yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
