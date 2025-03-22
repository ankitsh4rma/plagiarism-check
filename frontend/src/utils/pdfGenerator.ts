import { jsPDF } from 'jspdf';
import { AnalysisReport } from '../types';

export const generatePDF = (report: AnalysisReport) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text('Research Paper Analysis Report', 20, 20);
  
  // Add metrics
  doc.setFontSize(12);
  doc.text(`Word Count: ${report.wordCount}`, 20, 40);
  doc.text(`Readability Score: ${report.readabilityScore}/100`, 20, 50);
  doc.text(`Plagiarism Score: ${report.plagiarismScore}%`, 20, 60);
  
  // Add citations
  doc.text('Citations:', 20, 80);
  report.citations.forEach((citation, index) => {
    doc.text(`${index + 1}. ${citation}`, 25, 90 + (index * 10));
  });
  
  // Add suggestions
  const suggestionsStartY = 90 + (report.citations.length * 10) + 20;
  doc.text('Improvement Suggestions:', 20, suggestionsStartY);
  report.suggestions.forEach((suggestion, index) => {
    doc.text(`• ${suggestion}`, 25, suggestionsStartY + 10 + (index * 10));
  });
  
  // Save the PDF
  doc.save('research-analysis-report.pdf');
};