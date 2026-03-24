import { NextResponse } from 'next/server';
import { servicesCategories } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json(servicesCategories);
}
