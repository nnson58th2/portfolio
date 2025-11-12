'use client';

import { createContext } from 'react';
import { ThemeType } from '@/types';

export const CurrentThemeContext = createContext<{
  currentTheme: ThemeType;
} | null>(null);

export const CurrentThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentTheme = {
    primary: 'from-orange-500 to-red-600',
    secondary: 'from-yellow-400 to-orange-500',
    accent: 'from-red-400 to-pink-500',
  };
  return (
    <CurrentThemeContext.Provider value={{ currentTheme }}>
      {children}
    </CurrentThemeContext.Provider>
  );
};
