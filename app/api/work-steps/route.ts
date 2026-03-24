import { NextResponse } from 'next/server';
import { workSteps } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json(workSteps);
}
