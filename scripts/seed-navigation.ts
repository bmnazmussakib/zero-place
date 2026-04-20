import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import connectDB from '../lib/db';
import { SiteSetting } from '../models/SiteSetting';

// Simplified representation of the constants for seeding
const navItemsSeeding = [
    {
        title: "Services",
        href: "/services",
        type: "megamenu",
        children: [
            {
                title: "Design",
                href: "#",
                children: [
                    {
                        title: "UI/UX Design",
                        href: "/services/ui-ux-design",
                        icon: "Palette",
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
                        title: "Website Design",
                        href: "/services/website-design",
                        icon: "Globe",
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
                        title: "SaaS Design",
                        href: "/services/saas-design",
                        icon: "Code2",
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
                        title: "Brand Identity Design",
                        href: "/services/branding",
                        icon: "Palette",
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
                title: "Development",
                href: "#",
                children: [
                    {
                        title: "Website Development",
                        href: "/services/web-dev",
                        icon: "Code2",
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
                        title: "Mobile App Design",
                        href: "/services/app-dev",
                        icon: "Smartphone",
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
    { title: "Portfolio", href: "/portfolio", type: "link" },
    { title: "Pricing", href: "/pricing", type: "link" },
];

async function seedNavigation() {
  console.log('Connecting to MongoDB...');
  await connectDB();

  console.log('Updating site settings with dynamic navigation...');
  
  await SiteSetting.findOneAndUpdate(
    {},
    { $set: { navItems: navItemsSeeding } },
    { upsert: true }
  );

  console.log('Navigation seeding complete!');
  process.exit(0);
}

seedNavigation().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
