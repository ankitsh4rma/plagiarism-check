import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}