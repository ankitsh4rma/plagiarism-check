import React from 'react';
import { Hero } from './Hero';
import { FeatureGrid } from './FeatureGrid';

export function HomePage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <div className="mt-16">
          <FeatureGrid />
        </div>
      </div>
    </div>
  );
}