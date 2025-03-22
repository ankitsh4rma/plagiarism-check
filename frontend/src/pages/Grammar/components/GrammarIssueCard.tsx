import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { GrammarIssue } from '../../../types';
import { clsx } from 'clsx';

interface Props {
  issue: GrammarIssue;
}

export function GrammarIssueCard({ issue }: Props) {
  const severityIcon = {
    low: Info,
    medium: AlertCircle,
    high: AlertTriangle
  };

  const severityColor = {
    low: 'text-blue-500',
    medium: 'text-yellow-500',
    high: 'text-red-500'
  };

  const Icon = severityIcon[issue.severity];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-start space-x-3">
        <Icon className={clsx('h-5 w-5 mt-1', severityColor[issue.severity])} />
        <div className="flex-1">
          <div className="font-medium text-gray-900">{issue.text}</div>
          <p className="mt-1 text-sm text-gray-600">{issue.explanation}</p>
          <div className="mt-2 text-sm text-green-600">
            Suggestion: {issue.suggestion}
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-xs text-gray-500">{issue.type}</span>
            <span className="text-xs text-gray-500">•</span>
            <span className={clsx('text-xs capitalize', severityColor[issue.severity])}>
              {issue.severity} severity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}