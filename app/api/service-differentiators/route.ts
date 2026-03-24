import { NextResponse } from 'next/server';
import { serviceDifferentiators } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json(serviceDifferentiators);
}
