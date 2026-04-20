import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import connectDB from '../lib/db';
import { SiteSetting } from '../models/SiteSetting';
import { NavigationItem } from '../models/NavigationItem';
import { NavItem } from '../types';

async function migrate() {
  console.log('Connecting to MongoDB...');
  await connectDB();

  const settings = await SiteSetting.findOne() as any;
  if (!settings || !settings.navItems || settings.navItems.length === 0) {
    console.log('No navigation items found in SiteSetting to migrate.');
    process.exit(0);
  }

  console.log('Starting migration to separate NavigationItem documents...');

  // Helper to flat insert items
  async function processItems(items: NavItem[], parentId: string | null = null) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log(`Processing: ${item.title}`);
        
        await NavigationItem.findOneAndUpdate(
            { id: item.id },
            {
                id: item.id,
                title: item.title,
                href: item.href,
                icon: item.icon,
                type: item.type,
                details: item.details,
                parentId: parentId,
                order: i
            },
            { upsert: true }
        );

        if (item.children && item.children.length > 0) {
            await processItems(item.children, item.id);
        }
    }
  }

  await processItems(settings.navItems);

  console.log('Migration to NavigationItem collection complete!');
  
  // Note: We'll leave SiteSetting.navItems as is for now as a backup, 
  // but we can clear it once we confirm the API works.
  
  process.exit(0);
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
