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
  socialLinks: {
    platform: string;
    url: string;
  }[];
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
  socialLinks: [
    {
      platform: { type: String },
      url: { type: String }
    }
  ],
}, { timestamps: true });

export const SiteSetting: Model<ISiteSetting> = 
  mongoose.models.SiteSetting || mongoose.model<ISiteSetting>('SiteSetting', SiteSettingSchema);
