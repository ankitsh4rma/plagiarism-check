import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  className?: string;
}

export function MetricCard({ title, value, icon: Icon, className = '' }: MetricCardProps) {
  return (
    <div className={`p-4 bg-gray-50 rounded-lg ${className}`}>
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <div className="flex items-center space-x-2">
        {Icon && <Icon className="h-5 w-5" />}
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}