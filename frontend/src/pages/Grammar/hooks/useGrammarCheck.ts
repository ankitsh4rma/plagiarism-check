import { useState } from 'react';
import { GrammarIssue } from '../../../types';

export function useGrammarCheck() {
  const [grammarScore, setGrammarScore] = useState<number | null>(null);
  const [issues, setIssues] = useState<GrammarIssue[]>([]);

  const checkGrammar = (text: string) => {
    // Simulated grammar check result
    setGrammarScore(92);
    setIssues([
      {
        text: "its important to note",
        explanation: "Missing apostrophe in contraction",
        suggestion: "it's important to note",
        type: "grammar",
        severity: "high"
      },
      {
        text: "the data show that",
        explanation: "Subject-verb agreement issue",
        suggestion: "the data shows that",
        type: "grammar",
        severity: "medium"
      },
      {
        text: "however the results",
        explanation: "Missing comma after introductory word",
        suggestion: "however, the results",
        type: "punctuation",
        severity: "low"
      }
    ]);
  };

  return { grammarScore, issues, checkGrammar };
}