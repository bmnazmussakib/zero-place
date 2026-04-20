import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { NavigationItem } from '@/models/NavigationItem';
import { NavItem } from '@/types';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDB();
    const items = await NavigationItem.find().sort({ order: 1 }).lean();
    
    // Build tree
    const buildTree = (parentId: string | null = null): NavItem[] => {
      return items
        .filter((item: any) => item.parentId === parentId)
        .map((item: any) => ({
          id: item.id,
          title: item.title,
          href: item.href,
          icon: item.icon,
          type: item.type,
          details: item.details,
          children: buildTree(item.id),
        }));
    };

    const navTree = buildTree(null);
    return NextResponse.json(navTree);
  } catch (error) {
    console.error('Failed to fetch navigation:', error);
    return NextResponse.json({ error: 'Failed to fetch navigation' }, { status: 500 });
  }
}
