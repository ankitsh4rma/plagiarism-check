export interface ResearchPaper {
  title: string;
  abstract: string;
  authors: string[];
  keywords: string[];
  citations: number;
  year: number;
}

export interface AnalysisReport {
  wordCount: number;
  readabilityScore: number;
  plagiarismScore: number;
  grammarScore: number;
  grammarIssues: GrammarIssue[];
  citations: string[];
  suggestions: string[];
}

export interface GrammarIssue {
  text: string;
  explanation: string;
  suggestion: string;
  type: 'spelling' | 'grammar' | 'punctuation' | 'style';
  severity: 'low' | 'medium' | 'high';
}