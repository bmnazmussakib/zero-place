import connectDB from '../lib/db';
import User from '../models/User';
import { FAQ, Brand, WorkStep } from '../models/Utility';
import { PortfolioItem, Testimonial } from '../models/Showcase';
import { ServiceCategory, ServiceItem, ServiceDetail } from '../models/Service';
import { faqs, brands, workSteps, portfolioItems, testimonials, servicesCategories, serviceItems as sItems, servicesDetails } from '../lib/constants';
import bcrypt from 'bcryptjs';

async function seed() {
  console.log('Connecting to MongoDB...');
  await connectDB();

  // 1. Create Admin User
  const adminEmail = 'admin@zeroplace.com';
  const existingAdmin = await User.findOne({ email: adminEmail });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      name: 'System Admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'admin',
    });
    console.log('Admin user created: admin@zeroplace.com / admin123');
  }

  // 2. Clear Existing Data (Optional - usually good for seeding)
  await FAQ.deleteMany({});
  await Brand.deleteMany({});
  await WorkStep.deleteMany({});
  await PortfolioItem.deleteMany({});
  await Testimonial.deleteMany({});
  await ServiceCategory.deleteMany({});
  await ServiceItem.deleteMany({});
  await ServiceDetail.deleteMany({});

  // 3. Seed Utility Data
  await FAQ.insertMany(faqs.map((f, i) => ({ ...f, order: i })));
  await Brand.insertMany(brands);
  await WorkStep.insertMany(workSteps.map((s, i) => ({ ...s, order: i })));

  // 4. Seed Showcase Data
  await PortfolioItem.insertMany(portfolioItems.map((p, i) => ({ ...p, order: i })));
  await Testimonial.insertMany(testimonials.map((t, i) => ({ ...t, order: i })));

  // 5. Seed Service Data
  await ServiceCategory.insertMany(servicesCategories.map((c, i) => ({ ...c, order: i })));
  await ServiceItem.insertMany(sItems.map((s, i) => ({ ...s, order: i })));
  
  const details = Object.values(servicesDetails);
  await ServiceDetail.insertMany(details);

  console.log('Seeding complete!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
