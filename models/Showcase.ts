import mongoose, { Schema, Document, Model } from 'mongoose';

// PortfolioItem Model
export interface IPortfolioItem extends Document {
  title: string;
  category: string;
  image: string;
  order: number;
}
const PortfolioItemSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  order: { type: Number, default: 0 },
});
export const PortfolioItem: Model<IPortfolioItem> = mongoose.models.PortfolioItem || mongoose.model<IPortfolioItem>('PortfolioItem', PortfolioItemSchema);

// Testimonial Model
export interface ITestimonial extends Document {
  name: string;
  role: string;
  avatar: string;
  content: string;
  logo: string;
  order: number;
}
const TestimonialSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, required: true },
  content: { type: String, required: true },
  logo: { type: String, required: true },
  order: { type: Number, default: 0 },
});
export const Testimonial: Model<ITestimonial> = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
