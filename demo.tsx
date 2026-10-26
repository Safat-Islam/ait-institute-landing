import React from 'react';
import { StackedCards } from '@/components/ui/glass-cards';
import Pricing from '@/components/ui/pricing-component';

export default function DemoOne() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      <StackedCards />
      <Pricing />
    </main>
  );
}
