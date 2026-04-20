import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { SiteSetting } from '@/models/SiteSetting';

export async function GET() {
  try {
    await connectDB();
    const settings = await SiteSetting.findOne();
    if (!settings) {
      return NextResponse.json({
        siteName: 'Zero Place',
        logoUrl: '/images/zero-place-color-logo.svg',
        logoWhiteUrl: '/images/ZeroPlace White Color Logo.svg',
        description: 'Subscription-based design studio for modern brands.',
        keywords: 'design, studio, branding',
        contactEmail: 'hello@zeroplace.com',
        contactPhone: '+1 (888) 333-8181',
        googleAnalyticsId: '',
        address: '993 Renner Burg, West Road, MT 94251-030, USA.',
        officeHours: 'Mon-Fri 09am-06pm',
        footerDescription: 'Every great solution starts understanding the time into learn about. Unlimited design requests for modern brands.',
        facebookUrl: '#',
        instagramUrl: '#',
        twitterUrl: '#',
        linkedinUrl: '#'
      });
    }
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}
