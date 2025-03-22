import React from 'react';
import { AnalyzeForm } from '../../components/AnalyzeForm';
import { AnalysisReport } from '../../components/AnalysisReport';
import { useAnalysis } from './hooks/useAnalysis';

export function AnalyzePage() {
  const { report, analyzeSubmission } = useAnalysis();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Analyze Your Research Paper</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <AnalyzeForm onSubmit={analyzeSubmission} />
        </div>
        
        {report && (
          <div>
            <AnalysisReport report={report} />
          </div>
        )}
      </div>
    </div>
  );
}