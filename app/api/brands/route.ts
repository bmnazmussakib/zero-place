import { NextResponse } from 'next/server';
import { brands } from '@/lib/constants';

export async function GET() {
    return NextResponse.json(brands);
}
