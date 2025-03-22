import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function AuthButton() {
  const { isAuthenticated, user, signOut } = useAuth();

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-white">{user.name}</span>
        <button
          onClick={signOut}
          className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-700"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </button>
      </div>
    );
  }

  return (
    <Link
      to="/signin"
      className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-700"
    >
      <LogIn className="h-5 w-5" />
      <span>Sign In</span>
    </Link>
  );
}