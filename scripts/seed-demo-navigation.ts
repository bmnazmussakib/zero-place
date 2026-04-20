import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import connectDB from '../lib/db';
import { SiteSetting } from '../models/SiteSetting';
import { NavItem } from '../types';

const demoNavItems: NavItem[] = [
    {
        id: "1", // Manual IDs for consistency in this script, or use crypto.randomUUID()
        title: "Services",
        href: "/services",
        type: "megamenu",
        children: [
            {
                id: "1-1",
                title: "Design",
                href: "#",
                type: "link",
                children: [
                    {
                        id: "1-1-1",
                        title: "UI/UX Design",
                        href: "/services/ui-ux-design",
                        icon: "Palette",
                        type: "link",
                        details: [
                            "User Research",
                            "Persona Mapping",
                            "Wireframing",
                            "Interactive Prototyping",
                            "Visual Design",
                            "Usability Testing",
                        ]
                    },
                    {
                        id: "1-1-2",
                        title: "Website Design",
                        href: "/services/website-design",
                        icon: "Globe",
                        type: "link",
                        details: [
                            "Landing Page Design",
                            "Responsive Layouts",
                            "E-Commerce UI",
                            "Blog & Content Design",
                            "Design Systems",
                            "Conversion Optimization",
                        ]
                    },
                    {
                        id: "1-1-3",
                        title: "SaaS Design",
                        href: "/services/saas-design",
                        icon: "Code2",
                        type: "link",
                        details: [
                            "Dashboard Design",
                            "Complex Workflows",
                            "Data Visualization",
                            "Product Strategy",
                            "UX Audit",
                            "Design Handoffs",
                        ]
                    },
                    {
                        id: "1-1-4",
                        title: "Brand Identity Design",
                        href: "/services/branding",
                        icon: "Palette",
                        type: "link",
                        details: [
                            "Logo Design",
                            "Typography & Color",
                            "Brand Guidelines",
                            "Marketing Assets",
                            "Stationery Design",
                            "Brand Messaging",
                        ]
                    },
                ]
            },
            {
                id: "1-2",
                title: "Development",
                href: "#",
                type: "link",
                children: [
                    {
                        id: "1-2-1",
                        title: "Website Development",
                        href: "/services/web-dev",
                        icon: "Code2",
                        type: "link",
                        details: [
                            "Next.js / React Development",
                            "E-Commerce Solutions",
                            "CMS Integrations",
                            "Performance Optimization",
                            "SEO Foundations",
                            "Secure Deployments",
                        ]
                    },
                    {
                        id: "1-2-2",
                        title: "Mobile App Design",
                        href: "/services/app-dev",
                        icon: "Smartphone",
                        type: "link",
                        details: [
                            "iOS & Android Apps",
                            "Cross-Platform Dev",
                            "App Store Optimization",
                            "Push Notifications",
                            "Offline Support",
                            "Mobile Strategy",
                        ]
                    },
                ]
            }
        ]
    },
    { id: "2", title: "Portfolio", href: "/portfolio", type: "link" },
    { id: "3", title: "Pricing", href: "/pricing", type: "link" },
];

// Helper to ensure all demo items have IDs if I missed any
function ensureIds(items: any[]): NavItem[] {
    return items.map(item => ({
        ...item,
        id: item.id || crypto.randomUUID(),
        children: item.children ? ensureIds(item.children) : []
    }));
}

async function seedDemoNavigation() {
  console.log('Connecting to MongoDB...');
  await connectDB();

  console.log('Updating site settings with fresh demo navigation items...');
  const updatedItems = ensureIds(demoNavItems);
  
  await SiteSetting.findOneAndUpdate(
    {},
    { $set: { navItems: updatedItems } },
    { upsert: true }
  );

  console.log('Demo Navigation seeding complete!');
  process.exit(0);
}

seedDemoNavigation().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
