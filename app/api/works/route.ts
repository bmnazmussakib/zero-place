import { NextResponse } from 'next/server';
import { portfolioItems } from '@/lib/constants';

export async function GET() {
    return NextResponse.json(portfolioItems);
}
