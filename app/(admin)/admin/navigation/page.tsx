import connectDB from "@/lib/db";
import { SiteSetting } from "@/models/SiteSetting";
import NavigationForm from "./NavigationForm";

export default async function NavigationPage() {
  await connectDB();
  const settings = await SiteSetting.findOne();
  
  const initialData = settings ? JSON.parse(JSON.stringify(settings)) : { navItems: [] };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black font-heading text-slate-900 uppercase tracking-tight">Navigation Management</h2>
          <p className="text-sm text-slate-500 font-medium">Configure your site's header menus and links.</p>
        </div>
      </div>

      <NavigationForm initialData={initialData} />
    </div>
  );
}
