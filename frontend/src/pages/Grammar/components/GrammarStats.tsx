import React from 'react';
import { Type, CheckCircle2 } from 'lucide-react';
import { MetricCard } from '../../Analyze/components/MetricCard';

interface Props {
  score: number;
  issuesCount: number;
}

export function GrammarStats({ score, issuesCount }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <MetricCard
        title="Grammar Score"
        value={`${score}/100`}
        icon={Type}
        className="bg-white"
      />
      <MetricCard
        title="Issues Found"
        value={issuesCount}
        icon={CheckCircle2}
        className="bg-white"
      />
    </div>
  );
}