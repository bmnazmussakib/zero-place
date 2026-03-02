import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        message: "Hello from the Zero Place API!",
        status: "success",
        timestamp: new Date().toISOString(),
        features: [
            "Next.js App Router API Routes",
            "JSON Responses",
            "Dynamic data handling"
        ]
    });
}
