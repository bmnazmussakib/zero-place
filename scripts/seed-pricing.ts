import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import connectDB from '../lib/db';
import { PricingPlan } from '../models/Pricing';
import { pricingTiers, subscriptionTiers } from '../lib/constants';

async function seedPricing() {
  console.log('Connecting to MongoDB...');
  await connectDB();

  console.log('Clearing existing pricing plans...');
  await PricingPlan.deleteMany({});

  console.log('Seeding one-time pricing plans...');
  const oneTimePlans = pricingTiers.map((tier, index) => ({
    name: tier.name,
    priceText: tier.price,
    description: tier.description,
    type: 'one-time',
    isPopular: tier.isPopular || false,
    order: index,
    features: tier.features
  }));
  await PricingPlan.insertMany(oneTimePlans);

  console.log('Seeding subscription pricing plans...');
  const subPlans = subscriptionTiers.map((tier, index) => ({
    name: tier.name,
    priceText: tier.price,
    description: tier.description,
    type: 'subscription',
    isPopular: tier.isPopular || false,
    order: index,
    features: tier.features
  }));
  await PricingPlan.insertMany(subPlans);

  console.log('Pricing seeding complete!');
  process.exit(0);
}

seedPricing().catch((err) => {
  console.error('Seeding pricing failed:', err);
  process.exit(1);
});
