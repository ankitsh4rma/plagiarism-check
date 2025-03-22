import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SuggestionListProps {
  suggestions: string[];
}

export function SuggestionList({ suggestions }: SuggestionListProps) {
  return (
    <div className="mt-8">
      <h3 className="font-semibold text-gray-700 mb-4">Improvement Suggestions</h3>
      <ul className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <span>{suggestion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}