import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Stub implementation - In production, this would call an API
    const mockUser = {
      id: '1',
      email: email,
      name: email.split('@')[0],
      plan: 'Pro',
      joinDate: new Date().toISOString(),
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const signup = (name, email, password) => {
    // Stub implementation - In production, this would call an API
    const mockUser = {
      id: '1',
      email: email,
      name: name,
      plan: 'Starter',
      joinDate: new Date().toISOString(),
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const logout = () => {
    setUser(null);
    return Promise.resolve();
  };

  const isAuthenticated = user !== null;

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};