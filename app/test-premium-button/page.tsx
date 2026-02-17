"use client";

import React from 'react';
import PremiumButton from '@/components/shared/PremiumButton';
import SectionContainer from '@/components/shared/SectionContainer';

export default function TestPremiumButton() {
    return (
        <SectionContainer className="py-20 space-y-12">
            <div>
                <h2 className="text-2xl font-bold mb-4">Small</h2>
                <div className="flex gap-4 items-center">
                    <PremiumButton size="small">Primary</PremiumButton>
                    <PremiumButton size="small" variant="outline">Outline</PremiumButton>
                    <PremiumButton size="small" variant="dark">Dark</PremiumButton>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Medium (Default)</h2>
                <div className="flex gap-4 items-center">
                    <PremiumButton>Primary</PremiumButton>
                    <PremiumButton variant="outline">Outline</PremiumButton>
                    <PremiumButton variant="dark">Dark</PremiumButton>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Large</h2>
                <div className="flex gap-4 items-center">
                    <PremiumButton size="large">Primary</PremiumButton>
                    <PremiumButton size="large" variant="outline">Outline</PremiumButton>
                    <PremiumButton size="large" variant="dark">Dark</PremiumButton>
                </div>
            </div>
        </SectionContainer>
    );
}
