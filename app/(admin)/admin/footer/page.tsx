import connectDB from "@/lib/db";
import { SiteSetting } from "@/models/SiteSetting";
import FooterForm from "./FooterForm";

export default async function FooterPage() {
  await connectDB();
  const settings = await SiteSetting.findOne();
  
  const initialData = settings ? JSON.parse(JSON.stringify(settings)) : {};

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black font-heading text-slate-900 uppercase tracking-tight">Footer Management</h2>
          <p className="text-sm text-slate-500 font-medium">Configure your site's footer content and social media links.</p>
        </div>
      </div>

      <FooterForm initialData={initialData} />
    </div>
  );
}
