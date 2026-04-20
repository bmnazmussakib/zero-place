import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import connectDB from '../lib/db';
import { SiteSetting } from '../models/SiteSetting';
import { NavItem } from '../types';

function addIds(items: any[]): NavItem[] {
  return items.map(item => ({
    ...item,
    id: item.id || crypto.randomUUID(),
    children: item.children ? addIds(item.children) : []
  }));
}

async function migrateNavIds() {
  console.log('Connecting to MongoDB...');
  await connectDB();

  const settings = await SiteSetting.findOne();
  if (!settings || !settings.navItems) {
    console.log('No navigation items found to migrate.');
    process.exit(0);
  }

  console.log('Migrating navigation items with IDs...');
  const updatedNavItems = addIds(settings.navItems);
  
  await SiteSetting.findOneAndUpdate(
    {},
    { $set: { navItems: updatedNavItems } }
  );

  console.log('Migration complete!');
  process.exit(0);
}

migrateNavIds().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
