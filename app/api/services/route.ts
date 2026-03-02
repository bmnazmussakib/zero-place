import { NextResponse } from 'next/server';
import { serviceItems } from '@/lib/constants';

export async function GET() {
    return NextResponse.json(serviceItems);
}
