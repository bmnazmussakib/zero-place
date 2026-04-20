import connectDB from "@/lib/db";
import { Testimonial as TestimonialModel } from "@/models/Showcase";
import { 
  Star,
  Quote,
  MessageSquare
} from "lucide-react";
import Image from "next/image";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialActions from "./TestimonialActions";

async function getTestimonials() {
  await connectDB();
  const testimonials = await TestimonialModel.find().sort({ order: 1 }).lean();
  return testimonials.map(testimonial => ({
    ...testimonial,
    _id: testimonial._id.toString()
  }));
}

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="space-y-10">
      <TestimonialsHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial: any) => (
          <div key={testimonial._id.toString()} className="bg-white rounded-md border border-primary/10 p-6 flex flex-col group relative overflow-hidden transition-all hover:border-primary/20 hover:shadow-sm">
             {/* Decorative Quote Icon */}
             <div className="absolute top-4 right-6 text-primary/5">
                <Quote className="w-12 h-12 fill-current" />
             </div>

             <div className="relative flex-1">
                <div className="flex items-center gap-2 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 transition-colors">
                    "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                     <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/10 shadow-sm relative bg-slate-50">
                        <Image 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 leading-none mb-1">{testimonial.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                </div>
             </div>

             <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between">
                <div className="h-6 w-20 relative opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all bg-slate-50/50 p-1 rounded-md">
                    {testimonial.logo && (
                        <Image 
                            src={testimonial.logo} 
                            alt="brand logo"
                            fill
                            className="object-contain"
                        />
                    )}
                </div>
                <TestimonialActions testimonial={testimonial} />
             </div>
          </div>
        ))}
      </div>

      {testimonials.length === 0 && (
        <div className="bg-white rounded-md border border-primary/10 p-16 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-primary/5 rounded flex items-center justify-center text-slate-300 mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No testimonials added yet</p>
        </div>
      )}
    </div>
  );
}
