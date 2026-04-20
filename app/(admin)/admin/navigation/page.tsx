import connectDB from "@/lib/db";
import { NavigationItem } from "@/models/NavigationItem";
import { NavItem } from "@/types";
import NavigationForm from "./NavigationForm";

export default async function NavigationPage() {
  await connectDB();
  const items = await NavigationItem.find().sort({ order: 1 }).lean();
  
  // Reconstruct tree for the editor
  const buildTree = (parentId: string | null = null): NavItem[] => {
    return items
      .filter((item: any) => item.parentId === parentId)
      .map((item: any) => ({
        id: item.id,
        title: item.title,
        href: item.href,
        icon: item.icon,
        type: item.type,
        details: item.details,
        children: buildTree(item.id),
      }));
  };

  const navItems = buildTree(null);
  const initialData = { navItems };

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
