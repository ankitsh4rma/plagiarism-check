import React from 'react';
import { GraduationCap, BookOpen, FileSearch, Users, Type } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: GraduationCap,
    title: 'Paper Analysis',
    description: 'Get detailed analysis of your research papers with AI-powered insights.',
  },
  {
    icon: Type,
    title: 'Grammar Check',
    description: 'Ensure your writing is clear and error-free with advanced grammar checking.',
  },
  {
    icon: FileSearch,
    title: 'Plagiarism Check',
    description: 'Ensure originality with our comprehensive plagiarism detection system.',
  },
  {
    icon: BookOpen,
    title: 'Citation Generator',
    description: 'Generate citations in multiple formats with just a few clicks.',
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}