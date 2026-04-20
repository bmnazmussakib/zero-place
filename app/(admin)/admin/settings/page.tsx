import connectDB from "@/lib/db";
import { SiteSetting } from "@/models/SiteSetting";
import SettingsForm from "./SettingsForm";

async function getSettings() {
  await connectDB();
  let settings = await SiteSetting.findOne();
  if (!settings) {
    settings = await SiteSetting.create({});
  }
  return JSON.parse(JSON.stringify(settings));
}

export default async function AdminSettingsPage() {
  const settings = await getSettings();

  return (
    <div className="max-w-5xl space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-black font-heading text-slate-900 tracking-tight mb-1 uppercase leading-none">Site Settings</h1>
          <p className="text-sm text-slate-500 font-medium">Configure your global site preferences, branding, and SEO metadata.</p>
        </div>
      </div>

      <SettingsForm initialData={settings} />
    </div>
  );
}
