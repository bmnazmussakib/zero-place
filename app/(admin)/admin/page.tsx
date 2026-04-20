import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  HelpCircle,
  TrendingUp,
  ArrowUpRight,
  Plus
} from "lucide-react";
import connectDB from "@/lib/db";
import { FAQ, Brand, WorkStep } from "@/models/Utility";
import { PortfolioItem, Testimonial } from "@/models/Showcase";
import { ServiceCategory } from "@/models/Service";

async function getStats() {
  await connectDB();
  const [services, faqs, works, testimonials] = await Promise.all([
    ServiceCategory.countDocuments(),
    FAQ.countDocuments(),
    PortfolioItem.countDocuments(),
    Testimonial.countDocuments(),
  ]);

  return [
    { name: "Services", count: services, icon: Briefcase, color: "bg-blue-500", trend: "+2 this month" },
    { name: "Projects", count: works, icon: TrendingUp, color: "bg-[#6c46fd]", trend: "+5 this month" },
    { name: "Testimonials", count: testimonials, icon: MessageSquare, color: "bg-emerald-500", trend: "100% positive" },
    { name: "FAQ Items", count: faqs, icon: HelpCircle, color: "bg-amber-500", trend: "Updated recently" },
  ];
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black font-heading text-slate-900 tracking-tight mb-1 uppercase leading-none">Dashboard</h1>
          <p className="text-sm text-slate-500 font-medium">Welcome back to Zero Place Admin.</p>
        </div>
        <button className="btn btn-sm h-11 rounded-sm bg-primary border-none hover:bg-primary-hover text-white px-6 font-bold gap-2 transition-all shadow-md shadow-primary/20">
          <Plus className="w-4 h-4" />
          Quick Action
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-md border border-primary/10 hover:border-primary/20 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.color} rounded flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3" />
                {stat.trend.split(' ')[0]}
              </div>
            </div>
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1 leading-none">{stat.name}</h3>
            <p className="text-2xl font-black font-heading text-slate-900 tracking-tight leading-none">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Charts / Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <div className="lg:col-span-2 bg-white p-6 rounded-md border border-primary/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black font-heading text-slate-900 uppercase leading-none tracking-tight">Overview</h3>
            <select className="select select-sm select-ghost font-bold text-slate-500 rounded focus:bg-primary/5 transition-colors">
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-64 bg-primary/5 rounded border border-dashed border-primary/20 flex items-center justify-center">
             <p className="text-slate-400 text-[10px] font-bold font-heading uppercase tracking-widest">Traffic visualization coming soon</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md border border-primary/10 flex flex-col">
          <h3 className="text-lg font-black font-heading text-slate-900 mb-6 uppercase leading-none tracking-tight">Recent Updates</h3>
          <div className="space-y-4 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="w-10 h-10 rounded bg-primary/5 border border-primary/10 flex items-center justify-center flex-none text-primary/40">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">Service category "{['UI/UX', 'Development', 'Branding', 'SAAS'][i-1]}" updated</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Updated 2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-sm btn-ghost w-full rounded-sm mt-6 text-slate-500 font-bold hover:bg-primary/5 transition-colors">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
