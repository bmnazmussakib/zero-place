import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISiteSetting extends Document {
  siteName: string;
  logoUrl: string;
  logoWhiteUrl: string;
  description: string;
  keywords: string;
  contactEmail: string;
  contactPhone: string;
  googleAnalyticsId: string;
  address: string;
  officeHours: string;
  footerDescription: string;
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  navItems: any[];
}

const SiteSettingSchema = new Schema({
  siteName: { type: String, default: 'Zero Place' },
  logoUrl: { type: String, default: '/images/zero-place-color-logo.svg' },
  logoWhiteUrl: { type: String, default: '/images/ZeroPlace White Color Logo.svg' },
  description: { type: String, default: 'Subscription-based design studio for modern brands.' },
  keywords: { type: String, default: 'design, studio, branding' },
  contactEmail: { type: String, default: 'hello@zeroplace.com' },
  contactPhone: { type: String, default: '+1 (888) 333-8181' },
  googleAnalyticsId: { type: String, default: '' },
  address: { type: String, default: '993 Renner Burg, West Road, MT 94251-030, USA.' },
  officeHours: { type: String, default: 'Mon-Fri 09am-06pm' },
  footerDescription: { type: String, default: 'Every great solution starts understanding the time into learn about. Unlimited design requests for modern brands.' },
  facebookUrl: { type: String, default: '#' },
  instagramUrl: { type: String, default: '#' },
  twitterUrl: { type: String, default: '#' },
  linkedinUrl: { type: String, default: '#' },
  navItems: { type: [Schema.Types.Mixed], default: [] },
}, { timestamps: true });

export const SiteSetting: Model<ISiteSetting> = 
  mongoose.models.SiteSetting || mongoose.model<ISiteSetting>('SiteSetting', SiteSettingSchema);
