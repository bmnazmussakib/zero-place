import { NextResponse } from 'next/server';
import { servicesDetails } from '@/lib/constants';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const service = servicesDetails[slug];

    if (!service) {
        return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json(service);
}
