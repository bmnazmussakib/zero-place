import mongoose, { Schema, Document, Model } from 'mongoose';

// ServiceCategory (Main Grid items)
export interface IServiceCategory extends Document {
  title: string;
  slug: string;
  image: string;
  color: string;
  textColor: string;
  colSpan: number;
  description: string;
  order: number;
}
const ServiceCategorySchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  color: { type: String, required: true },
  textColor: { type: String, required: true },
  colSpan: { type: Number, default: 1 },
  description: { type: String, required: true },
  order: { type: Number, default: 0 },
});
export const ServiceCategory: Model<IServiceCategory> = mongoose.models.ServiceCategory || mongoose.model<IServiceCategory>('ServiceCategory', ServiceCategorySchema);

// ServiceItem (Preview items)
export interface IServiceItem extends Document {
  title: string;
  description: string;
  image: string;
  icon: string;
  imageIcon: string;
  slug: string;
  order: number;
}
const ServiceItemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  icon: { type: String, required: true },
  imageIcon: { type: String, required: true },
  slug: { type: String, required: true },
  order: { type: Number, default: 0 },
});
export const ServiceItem: Model<IServiceItem> = mongoose.models.ServiceItem || mongoose.model<IServiceItem>('ServiceItem', ServiceItemSchema);

// ServiceDetail (Deep Dive pages)
export interface IServiceDetail extends Document {
  slug: string;
  hero: {
    title: string;
    description: string;
    breadcrumb: string;
  };
  why: {
    title: string;
    description: string;
    stats: Array<{
      value: string;
      label: string;
      description: string;
      isHighlighted?: boolean;
    }>;
  };
  pricing: {
    title: string;
    description: string;
    planData: Map<string, {
      price: string;
      discountLabel?: string;
      features: string[];
    }>;
  };
  benefits: {
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}
const ServiceDetailSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  hero: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    breadcrumb: { type: String, required: true },
  },
  why: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    stats: [{
      value: String,
      label: String,
      description: String,
      isHighlighted: Boolean,
    }],
  },
  pricing: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    planData: {
      type: Map,
      of: {
        price: String,
        discountLabel: String,
        features: [String],
      },
    },
  },
  benefits: {
    items: [{
      icon: String,
      title: String,
      description: String,
    }],
  },
});
export const ServiceDetail: Model<IServiceDetail> = mongoose.models.ServiceDetail || mongoose.model<IServiceDetail>('ServiceDetail', ServiceDetailSchema);
