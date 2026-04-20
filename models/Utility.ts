import mongoose, { Schema, Document, Model } from 'mongoose';

// FAQ Model
export interface IFAQ extends Document {
  question: string;
  answer: string;
  order: number;
}
const FAQSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  order: { type: Number, default: 0 },
});
export const FAQ: Model<IFAQ> = mongoose.models.FAQ || mongoose.model<IFAQ>('FAQ', FAQSchema);

// Brand Model
export interface IBrand extends Document {
  name: string;
  logo: string;
}
const BrandSchema = new Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
});
export const Brand: Model<IBrand> = mongoose.models.Brand || mongoose.model<IBrand>('Brand', BrandSchema);

// WorkStep Model
export interface IWorkStep extends Document {
  title: string;
  description: string;
  icon: string;
  order: number;
}
const WorkStepSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  order: { type: Number, default: 0 },
});
export const WorkStep: Model<IWorkStep> = mongoose.models.WorkStep || mongoose.model<IWorkStep>('WorkStep', WorkStepSchema);
