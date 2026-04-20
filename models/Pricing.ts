import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPricingPlan extends Document {
  name: string;
  priceText: string;
  description: string;
  type: 'one-time' | 'subscription';
  isPopular: boolean;
  order: number;
  features: {
    name: string;
    price: number;
  }[];
}

const PricingPlanSchema = new Schema({
  name: { type: String, required: true },
  priceText: { type: String, required: true },
  description: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['one-time', 'subscription'], 
    required: true,
    default: 'one-time'
  },
  isPopular: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  features: [{
    name: { type: String, required: true },
    price: { type: Number, required: true }
  }]
}, { timestamps: true });

export const PricingPlan: Model<IPricingPlan> = mongoose.models.PricingPlan || mongoose.model<IPricingPlan>('PricingPlan', PricingPlanSchema);
