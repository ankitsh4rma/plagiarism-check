import React from 'react';
import { useGrammarCheck } from './hooks/useGrammarCheck';
import { GrammarStats } from './components/GrammarStats';
import { GrammarIssueCard } from './components/GrammarIssueCard';
import { AnalyzeForm } from '../../components/AnalyzeForm';

export function GrammarPage() {
  const { grammarScore, issues, checkGrammar } = useGrammarCheck();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Grammar Check</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <AnalyzeForm onSubmit={({ content }) => checkGrammar(content)} />
        </div>
        
        {grammarScore !== null && (
          <div className="space-y-6">
            <GrammarStats score={grammarScore} issuesCount={issues.length} />
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Detected Issues</h2>
              {issues.map((issue, index) => (
                <GrammarIssueCard key={index} issue={issue} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}