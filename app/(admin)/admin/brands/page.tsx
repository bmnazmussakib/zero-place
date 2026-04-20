import connectDB from "@/lib/db";
import { Brand as BrandModel } from "@/models/Utility";
import Image from "next/image";
import { 
  Shapes
} from "lucide-react";
import BrandsHeader from "./BrandsHeader";
import BrandActions from "./BrandActions";

async function getBrands() {
  await connectDB();
  const brands = await BrandModel.find().lean();
  return brands.map(brand => ({
    ...brand,
    _id: brand._id.toString()
  }));
}

export default async function AdminBrandsPage() {
  const brands = await getBrands();

  return (
    <div className="space-y-10">
      <BrandsHeader />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
        {brands.map((brand: any) => (
          <div key={brand._id.toString()} className="bg-white rounded-md border border-primary/10 p-2 flex flex-col items-center justify-center group relative hover:border-primary/20 transition-all hover:shadow-sm">
             <div className="w-full aspect-square relative mb-1.5 opacity-70 group-hover:opacity-100 transition-opacity p-2">
                <Image 
                    src={brand.logo} 
                    alt={brand.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
             </div>
             <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-tighter truncate w-full text-center">{brand.name}</h4>

             <BrandActions brand={brand} />
          </div>
        ))}
      </div>

      {brands.length === 0 && (
        <div className="bg-white rounded-md border border-primary/10 p-16 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 bg-primary/5 rounded-md flex items-center justify-center text-slate-300 mb-4">
            <Shapes className="w-5 h-5" />
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No brands found</p>
        </div>
      )}
    </div>
  );
}
