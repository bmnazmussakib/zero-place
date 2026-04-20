import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import connectDB from '../lib/db';
import { SiteSetting } from '../models/SiteSetting';

async function updateSettingsFooter() {
  console.log('Connecting to MongoDB...');
  await connectDB();

  console.log('Updating site settings with footer defaults...');
  
  const defaults = {
    address: '993 Renner Burg, West Road, MT 94251-030, USA.',
    officeHours: 'Mon-Fri 09am-06pm',
    footerDescription: 'Every great solution starts understanding the time into learn about. Unlimited design requests for modern brands.',
    facebookUrl: '#',
    instagramUrl: '#',
    twitterUrl: '#',
    linkedinUrl: '#'
  };

  const result = await SiteSetting.findOneAndUpdate(
    {},
    { $set: defaults },
    { upsert: true, new: true }
  );

  console.log('Settings updated:', result);
  console.log('Update complete!');
  process.exit(0);
}

updateSettingsFooter().catch((err) => {
  console.error('Update failed:', err);
  process.exit(1);
});
