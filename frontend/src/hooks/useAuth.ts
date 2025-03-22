import { useState } from 'react';
import { SignInCredentials, User } from '../types/auth';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (credentials: SignInCredentials) => {
    // Simulated authentication
    if (credentials.email && credentials.password) {
      setIsAuthenticated(true);
      setUser({
        id: '1',
        email: credentials.email,
        name: credentials.email.split('@')[0]
      });
      return true;
    }
    return false;
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    signIn,
    signOut
  };
}