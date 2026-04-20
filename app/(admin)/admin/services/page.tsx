import connectDB from "@/lib/db";
import { ServiceCategory as CategoryModel } from "@/models/Service";
import Image from "next/image";
import { 
  Briefcase,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ServicesHeader from "./ServicesHeader";
import CategoryActions from "./CategoryActions";

async function getCategories() {
  await connectDB();
  const categories = await CategoryModel.find().sort({ order: 1 }).lean();
  return categories.map(cat => ({
    ...cat,
    _id: cat._id.toString()
  }));
}

export default async function AdminServicesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-10">
      <ServicesHeader />

      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-primary/5 bg-primary/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="relative flex-1 max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
              <input 
                type="text" 
                placeholder="Search categories..." 
                className="input input-sm h-10 w-full pl-10 rounded-sm bg-white border-primary/10 focus:border-primary focus:ring-0 transition-all text-sm"
              />
           </div>
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{categories.length} Total</span>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6 px-8">Preview</th>
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6">Category Info</th>
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6">Styling</th>
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat: any) => (
                <tr key={cat._id.toString()} className="group hover:bg-primary/5 transition-colors border-b border-primary/5">
                  <td className="px-6 py-4">
                    <div className="w-16 aspect-video rounded overflow-hidden relative border border-primary/10 shadow-sm transition-all group-hover:border-primary/20 bg-slate-50">
                      <Image 
                        src={cat.image} 
                        alt={cat.title} 
                        fill 
                        className="object-contain p-1"
                      />
                    </div>
                  </td>
                  <td className="py-4 min-w-[300px]">
                    <div className="space-y-1 pr-12">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 leading-tight hover:text-primary transition-colors">{cat.title}</h4>
                        <Link href={`/services/${cat.slug}`} target="_blank" className="text-slate-300 hover:text-primary transition-colors">
                            <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                      <p className="text-[10px] text-slate-400 font-mono tracking-tight">{cat.slug}</p>
                      <p className="text-sm text-slate-500 line-clamp-1 max-w-md">{cat.description}</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                       <div className={cn("w-5 h-5 rounded border border-primary/10", cat.color)} title={cat.color}></div>
                       <span className="text-[10px] font-bold text-slate-400 font-mono uppercase">{cat.textColor}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <CategoryActions category={cat} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {categories.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-slate-50 rounded border border-primary/10 flex items-center justify-center text-slate-300 mb-4">
              <Briefcase className="w-8 h-8" />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No service categories found</p>
          </div>
        )}
      </div>
    </div>
  );
}
