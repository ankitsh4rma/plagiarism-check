import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { AnalyzePage } from '../pages/Analyze';
import { GrammarPage } from '../pages/Grammar';
import { SignInPage } from '../pages/SignIn';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/analyze" element={<AnalyzePage />} />
      <Route path="/grammar" element={<GrammarPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}