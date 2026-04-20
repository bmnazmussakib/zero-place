import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INavigationItem extends Document {
  id: string; // uuid from frontend
  title: string;
  href: string;
  icon?: string;
  type: 'dropdown' | 'megamenu' | 'link';
  details?: string[];
  parentId: string | null;
  order: number;
}

const NavigationItemSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  href: { type: String, required: true },
  icon: { type: String },
  type: { 
    type: String, 
    enum: ['dropdown', 'megamenu', 'link'], 
    default: 'link' 
  },
  details: { type: [String], default: [] },
  parentId: { type: String, default: null },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export const NavigationItem: Model<INavigationItem> = 
  mongoose.models.NavigationItem || mongoose.model<INavigationItem>('NavigationItem', NavigationItemSchema);
