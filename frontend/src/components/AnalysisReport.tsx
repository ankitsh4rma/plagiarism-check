import React from 'react';
import { Download, AlertCircle, CheckCircle } from 'lucide-react';
import { AnalysisReport as AnalysisReportType } from '../types';
import { generatePDF } from '../utils/pdfGenerator';

interface Props {
  report: AnalysisReportType;
}

export function AnalysisReport({ report }: Props) {
  const handleDownload = () => {
    generatePDF(report);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Analysis Report</h2>
        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Download className="h-5 w-5" />
          <span>Download PDF</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-700">Word Count</h3>
            <p className="text-2xl font-bold">{report.wordCount}</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-700">Readability Score</h3>
            <p className="text-2xl font-bold">{report.readabilityScore}/100</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-700">Plagiarism Check</h3>
            <div className="flex items-center space-x-2">
              {report.plagiarismScore < 20 ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )}
              <p className="text-2xl font-bold">{report.plagiarismScore}% Similar</p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-700">Citations Found</h3>
            <p className="text-2xl font-bold">{report.citations.length}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-gray-700 mb-4">Improvement Suggestions</h3>
        <ul className="space-y-2">
          {report.suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <span>{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}