import mongoose from 'mongoose';
import { FAQ } from '../models/Utility';

async function testConnection() {
    console.log('URI:', process.env.MONGODB_URI);
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log('Connected to:', mongoose.connection.name);
        const count = await FAQ.countDocuments();
        console.log('FAQ Count:', count);
        const faqs = await FAQ.find().limit(1);
        console.log('Sample FAQ:', faqs);
    } catch (err) {
        console.error('Connection error:', err);
    } finally {
        await mongoose.disconnect();
    }
}

testConnection();
