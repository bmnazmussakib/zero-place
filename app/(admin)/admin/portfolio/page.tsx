import connectDB from "@/lib/db";
import { PortfolioItem as PortfolioModel } from "@/models/Showcase";
import Image from "next/image";
import { 
  ImageIcon,
  Tag
} from "lucide-react";
import PortfolioHeader from "./PortfolioHeader";
import ProjectActions from "./ProjectActions";

async function getPortfolio() {
  await connectDB();
  const items = await PortfolioModel.find().sort({ order: 1 }).lean();
  return items.map(item => ({
    ...item,
    _id: item._id.toString()
  }));
}

export default async function AdminPortfolioPage() {
  const items = await getPortfolio();

  return (
    <div className="space-y-10">
      <PortfolioHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {items.map((item: any) => (
          <div key={item._id.toString()} className="bg-white rounded-md border border-primary/10 overflow-hidden group hover:border-primary/20 transition-all hover:shadow-sm flex flex-col">
             <div className="aspect-video relative overflow-hidden bg-primary/5">
                <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <ProjectActions project={item} />
                </div>
             </div>
             
             <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 rounded bg-primary/5 border border-primary/10 text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                            <Tag className="w-2.5 h-2.5" />
                            {item.category}
                        </div>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight transition-colors line-clamp-1">{item.title}</h4>
                </div>
             </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="bg-white rounded-md border border-primary/10 p-16 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 bg-primary/5 rounded-md flex items-center justify-center text-slate-300 mb-4">
            <ImageIcon className="w-5 h-5" />
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No portfolio items found</p>
        </div>
      )}
    </div>
  );
}
