import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AlgUIThemeContextType, AlgUITheme } from '../types/theme';
import { getThemeConfig } from '../utils/themes';

const AlgUIThemeContext = createContext<AlgUIThemeContextType | undefined>(undefined);

interface AlgUIThemeProviderProps {
  children: ReactNode;
  defaultTheme?: AlgUITheme;
  storageKey?: string;
}

// Helper function to detect system theme
const getSystemTheme = (): 'crystal-light' | 'plasma-dark' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'plasma-dark' : 'crystal-light';
  }
  return 'crystal-light';
};

// Helper function to get effective theme
const getEffectiveTheme = (theme: AlgUITheme): 'crystal-light' | 'plasma-dark' => {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
};

export const AlgUIThemeProvider: React.FC<AlgUIThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  storageKey = 'algui-theme'
}) => {
  const [theme, setThemeState] = useState<AlgUITheme>(() => {
    // Try to get theme from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored && (stored === 'crystal-light' || stored === 'plasma-dark' || stored === 'system')) {
        return stored as AlgUITheme;
      }
    }
    return defaultTheme;
  });

  const [systemTheme, setSystemTheme] = useState<'crystal-light' | 'plasma-dark'>(getSystemTheme);
  const effectiveTheme = getEffectiveTheme(theme);
  const config = getThemeConfig(effectiveTheme);

  const setTheme = (newTheme: AlgUITheme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newTheme);
    }
  };

  const toggleTheme = () => {
    if (theme === 'system') {
      // If system, toggle to the opposite of current system theme
      setTheme(systemTheme === 'crystal-light' ? 'plasma-dark' : 'crystal-light');
    } else {
      // If explicit theme, toggle between light and dark
      setTheme(theme === 'crystal-light' ? 'plasma-dark' : 'crystal-light');
    }
  };

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? 'plasma-dark' : 'crystal-light';
      setSystemTheme(newSystemTheme);
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply CSS variables
    Object.entries(config.colors).forEach(([key, value]) => {
      root.style.setProperty(`--algui-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });

    // Apply theme class
    root.classList.remove('algui-crystal-light', 'algui-plasma-dark');
    root.classList.add(`algui-${effectiveTheme}`);

    // Apply theme attributes
    root.setAttribute('data-theme', effectiveTheme);
    root.setAttribute('data-algui-theme', effectiveTheme);
    root.setAttribute('data-algui-system-theme', systemTheme);

  }, [effectiveTheme, config, systemTheme]);

  const contextValue: AlgUIThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
    isDark: effectiveTheme === 'plasma-dark',
    isLight: effectiveTheme === 'crystal-light',
    colors: config.colors,
    config,
    systemTheme,
    isSystem: theme === 'system'
  };

  return (
    <AlgUIThemeContext.Provider value={contextValue}>
      {children}
    </AlgUIThemeContext.Provider>
  );
};

export const useAlgUITheme = (): AlgUIThemeContextType => {
  const context = useContext(AlgUIThemeContext);
  if (context === undefined) {
    throw new Error('useAlgUITheme must be used within an AlgUIThemeProvider');
  }
  return context;
}; 