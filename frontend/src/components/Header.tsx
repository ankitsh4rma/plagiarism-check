import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, FileCheck, FileText, Type } from 'lucide-react';
import { AuthButton } from './AuthButton';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8" />
              <span className="text-xl font-bold">ScholarScribe</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/analyze" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-700">
              <Search className="h-5 w-5" />
              <span>Analyze Paper</span>
            </Link>
            <Link to="/grammar" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-700">
              <Type className="h-5 w-5" />
              <span>Grammar Check</span>
            </Link>
            <Link to="/plagiarism" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-700">
              <FileCheck className="h-5 w-5" />
              <span>Check Plagiarism</span>
            </Link>
            <Link to="/citations" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-700">
              <FileText className="h-5 w-5" />
              <span>Generate Citations</span>
            </Link>
            <AuthButton />
          </div>
        </div>
      </nav>
    </header>
  );
}