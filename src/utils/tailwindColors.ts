// Tailwind CSS Color Utilities
// Provides easy access to Tailwind colors with proper TypeScript support

import { TAILWIND_COLORS } from './tailwindThemes';

export type TailwindColorName = keyof typeof TAILWIND_COLORS;
export type TailwindColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

// Enhanced color system with light/dark mode adaptation
export const getTailwindColor = (color: TailwindColorName, shade: TailwindColorShade): string => {
  return TAILWIND_COLORS[color][shade];
};

// Get color with automatic light/dark mode adaptation
export const getAdaptiveColor = (color: TailwindColorName, shade: TailwindColorShade, isDark: boolean): string => {
  const baseColor = TAILWIND_COLORS[color][shade];
  
  if (isDark) {
    // For dark mode, we might want to adjust the shade
    const darkShade = Math.min(shade + 200, 950) as TailwindColorShade;
    return TAILWIND_COLORS[color][darkShade];
  }
  
  return baseColor;
};

// Semantic color mappings with light/dark adaptation
export const SEMANTIC_COLORS = {
  primary: 'blue',
  secondary: 'gray',
  success: 'green',
  warning: 'yellow',
  error: 'red',
  info: 'cyan',
  purple: 'purple',
  pink: 'pink',
  indigo: 'indigo',
  teal: 'teal',
  orange: 'orange',
  amber: 'amber',
  emerald: 'emerald',
  violet: 'violet',
  fuchsia: 'fuchsia',
  rose: 'rose',
  slate: 'slate',
  zinc: 'zinc',
  neutral: 'neutral',
  stone: 'stone',
  red: 'red',
  green: 'green',
  blue: 'blue',
  yellow: 'yellow',
  cyan: 'cyan',
  magenta: 'fuchsia',
  lime: 'lime',
  sky: 'sky',
  blueGray: 'slate',
  coolGray: 'gray',
  trueGray: 'gray',
  warmGray: 'stone',
} as const;

export const getSemanticColor = (semanticName: keyof typeof SEMANTIC_COLORS, isDark: boolean, shade: TailwindColorShade = 500): string => {
  const colorName = SEMANTIC_COLORS[semanticName] as TailwindColorName;
  return getAdaptiveColor(colorName, shade, isDark);
};

// Create RGBA color with alpha
export const createRGBA = (color: string, alpha: number): string => {
  // Convert hex to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Create glass color with transparency
export const createGlassColor = (baseColor: string, alpha: number): string => {
  return createRGBA(baseColor, alpha);
};

// Predefined glass color combinations
export const GLASS_COLORS = {
  blue: {
    light: '#3B82F6',
    dark: '#60A5FA',
    glass: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.3)'
  },
  purple: {
    light: '#8B5CF6',
    dark: '#A78BFA',
    glass: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.3)'
  },
  green: {
    light: '#10B981',
    dark: '#34D399',
    glass: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.3)'
  },
  red: {
    light: '#EF4444',
    dark: '#F87171',
    glass: 'rgba(239, 68, 68, 0.1)',
    border: 'rgba(239, 68, 68, 0.3)'
  },
  orange: {
    light: '#F97316',
    dark: '#FB923C',
    glass: 'rgba(249, 115, 22, 0.1)',
    border: 'rgba(249, 115, 22, 0.3)'
  },
  pink: {
    light: '#EC4899',
    dark: '#F472B6',
    glass: 'rgba(236, 72, 153, 0.1)',
    border: 'rgba(236, 72, 153, 0.3)'
  },
  cyan: {
    light: '#06B6D4',
    dark: '#22D3EE',
    glass: 'rgba(6, 182, 212, 0.1)',
    border: 'rgba(6, 182, 212, 0.3)'
  },
  yellow: {
    light: '#F59E0B',
    dark: '#FBBF24',
    glass: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.3)'
  },
  indigo: {
    light: '#6366F1',
    dark: '#818CF8',
    glass: 'rgba(99, 102, 241, 0.1)',
    border: 'rgba(99, 102, 241, 0.3)'
  },
  teal: {
    light: '#14B8A6',
    dark: '#2DD4BF',
    glass: 'rgba(20, 184, 166, 0.1)',
    border: 'rgba(20, 184, 166, 0.3)'
  },
  emerald: {
    light: '#059669',
    dark: '#10B981',
    glass: 'rgba(5, 150, 105, 0.1)',
    border: 'rgba(5, 150, 105, 0.3)'
  },
  violet: {
    light: '#7C3AED',
    dark: '#A78BFA',
    glass: 'rgba(124, 58, 237, 0.1)',
    border: 'rgba(124, 58, 237, 0.3)'
  },
  fuchsia: {
    light: '#D946EF',
    dark: '#E879F9',
    glass: 'rgba(217, 70, 239, 0.1)',
    border: 'rgba(217, 70, 239, 0.3)'
  },
  rose: {
    light: '#F43F5E',
    dark: '#FB7185',
    glass: 'rgba(244, 63, 94, 0.1)',
    border: 'rgba(244, 63, 94, 0.3)'
  },
  slate: {
    light: '#64748B',
    dark: '#94A3B8',
    glass: 'rgba(100, 116, 139, 0.1)',
    border: 'rgba(100, 116, 139, 0.3)'
  },
  gray: {
    light: '#6B7280',
    dark: '#9CA3AF',
    glass: 'rgba(107, 114, 128, 0.1)',
    border: 'rgba(107, 114, 128, 0.3)'
  },
  zinc: {
    light: '#71717A',
    dark: '#A1A1AA',
    glass: 'rgba(113, 113, 122, 0.1)',
    border: 'rgba(113, 113, 122, 0.3)'
  },
  neutral: {
    light: '#737373',
    dark: '#A3A3A3',
    glass: 'rgba(115, 115, 115, 0.1)',
    border: 'rgba(115, 115, 115, 0.3)'
  },
  stone: {
    light: '#78716C',
    dark: '#A8A29E',
    glass: 'rgba(120, 113, 108, 0.1)',
    border: 'rgba(120, 113, 108, 0.3)'
  }
} as const;

// Get glass colors based on theme and accent
export const getGlassColors = (isDark: boolean, accent: string = 'blue') => {
  const colorKey = accent as keyof typeof GLASS_COLORS;
  const colorConfig = GLASS_COLORS[colorKey] || GLASS_COLORS.blue;
  
  return {
    primary: isDark ? colorConfig.dark : colorConfig.light,
    glass: colorConfig.glass,
    border: colorConfig.border,
    highlight: isDark ? createRGBA(colorConfig.dark, 0.2) : createRGBA(colorConfig.light, 0.2)
  };
};

// Export all Tailwind colors
export { TAILWIND_COLORS }; 