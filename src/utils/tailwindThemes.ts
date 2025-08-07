import { ThemeConfig } from '../types/theme';

// Tailwind CSS Color Palette Integration
// Following Tailwind's color system and best practices

// Base Tailwind colors for consistent theming
const TAILWIND_COLORS = {
  // Slate (neutral)
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  // Blue (primary accent)
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  // Indigo (secondary accent)
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  // Purple (tertiary accent)
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },
  // Success colors
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
  },
  // Warning colors
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  // Error colors
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  // Info colors
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344',
  },
} as const;

// Helper function to create rgba colors from Tailwind colors
const createRGBA = (color: string, alpha: number): string => {
  // Convert hex to rgb and add alpha
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Helper function to create glass colors
const createGlassColor = (baseColor: string, alpha: number): string => {
  return createRGBA(baseColor, alpha);
};

// Light Theme - Crystal Light (Tailwind-inspired)
export const CRYSTAL_LIGHT_THEME: ThemeConfig = {
  name: 'crystal-light',
  colors: {
    // Background colors - Using Tailwind slate palette
    background: `linear-gradient(135deg, ${TAILWIND_COLORS.slate[50]} 0%, ${TAILWIND_COLORS.slate[100]} 50%, ${TAILWIND_COLORS.slate[200]} 100%)`,
    backgroundSecondary: createGlassColor(TAILWIND_COLORS.slate[50], 0.8),
    backgroundTertiary: createGlassColor(TAILWIND_COLORS.slate[100], 0.9),
    
    // Glass colors - Clean and transparent
    glassBackground: createGlassColor(TAILWIND_COLORS.slate[50], 0.15),
    glassBorder: createGlassColor(TAILWIND_COLORS.slate[200], 0.25),
    glassShadow: createGlassColor(TAILWIND_COLORS.slate[900], 0.05),
    glassHighlight: createGlassColor(TAILWIND_COLORS.slate[50], 0.4),
    
    // Text colors - Using Tailwind slate for consistency
    textPrimary: TAILWIND_COLORS.slate[800],
    textSecondary: TAILWIND_COLORS.slate[600],
    textTertiary: TAILWIND_COLORS.slate[500],
    textInverse: TAILWIND_COLORS.slate[50],
    
    // Accent colors - Using Tailwind's semantic color palette
    accentPrimary: TAILWIND_COLORS.blue[500],      // Blue-500
    accentSecondary: TAILWIND_COLORS.indigo[500],  // Indigo-500
    accentTertiary: TAILWIND_COLORS.purple[500],   // Purple-500
    accentSuccess: TAILWIND_COLORS.emerald[500],   // Emerald-500
    accentWarning: TAILWIND_COLORS.amber[500],     // Amber-500
    accentError: TAILWIND_COLORS.red[500],         // Red-500
    accentInfo: TAILWIND_COLORS.cyan[500],         // Cyan-500
    
    // Interactive colors - Using primary accent with transparency
    interactiveHover: createGlassColor(TAILWIND_COLORS.blue[500], 0.1),
    interactiveActive: createGlassColor(TAILWIND_COLORS.blue[500], 0.2),
    interactiveFocus: createGlassColor(TAILWIND_COLORS.blue[500], 0.15),
    
    // Border colors - Using Tailwind slate with transparency
    borderPrimary: createGlassColor(TAILWIND_COLORS.slate[300], 0.6),
    borderSecondary: createGlassColor(TAILWIND_COLORS.slate[200], 0.8),
    borderAccent: createGlassColor(TAILWIND_COLORS.blue[500], 0.3),
    
    // Shadow colors - Subtle and professional
    shadowPrimary: createGlassColor(TAILWIND_COLORS.slate[900], 0.08),
    shadowSecondary: createGlassColor(TAILWIND_COLORS.slate[900], 0.04),
    shadowAccent: createGlassColor(TAILWIND_COLORS.blue[500], 0.15),
    
    // Overlay colors - Clean and minimal
    overlayPrimary: createGlassColor(TAILWIND_COLORS.slate[50], 0.9),
    overlaySecondary: createGlassColor(TAILWIND_COLORS.slate[100], 0.95),
    overlayAccent: createGlassColor(TAILWIND_COLORS.blue[500], 0.1),
  },
  glass: {
    blur: 8,
    saturation: 110,
    lightness: 95,
    alpha: 0.08,
    frost: 0.12,
    borderOpacity: 0.25,
  },
  effects: {
    glowIntensity: 0.3,
    highlightIntensity: 0.4,
    shadowIntensity: 0.6,
    transitionDuration: '0.3s',
  },
};

// Dark Theme - Plasma Dark (Tailwind-inspired)
export const PLASMA_DARK_THEME: ThemeConfig = {
  name: 'plasma-dark',
  colors: {
    // Background colors - Using Tailwind slate dark palette
    background: `linear-gradient(135deg, ${TAILWIND_COLORS.slate[900]} 0%, ${TAILWIND_COLORS.slate[800]} 50%, ${TAILWIND_COLORS.slate[700]} 100%)`,
    backgroundSecondary: createGlassColor(TAILWIND_COLORS.slate[900], 0.8),
    backgroundTertiary: createGlassColor(TAILWIND_COLORS.slate[800], 0.9),
    
    // Glass colors - Dark and elegant
    glassBackground: createGlassColor(TAILWIND_COLORS.slate[800], 0.2),
    glassBorder: createGlassColor(TAILWIND_COLORS.slate[700], 0.4),
    glassShadow: createGlassColor(TAILWIND_COLORS.slate[950], 0.3),
    glassHighlight: createGlassColor(TAILWIND_COLORS.slate[400], 0.2),
    
    // Text colors - High contrast and readable
    textPrimary: TAILWIND_COLORS.slate[100],
    textSecondary: TAILWIND_COLORS.slate[300],
    textTertiary: TAILWIND_COLORS.slate[400],
    textInverse: TAILWIND_COLORS.slate[900],
    
    // Accent colors - Using Tailwind's semantic color palette (lighter variants for dark mode)
    accentPrimary: TAILWIND_COLORS.blue[400],      // Blue-400 (lighter for dark mode)
    accentSecondary: TAILWIND_COLORS.indigo[400],  // Indigo-400
    accentTertiary: TAILWIND_COLORS.purple[400],   // Purple-400
    accentSuccess: TAILWIND_COLORS.emerald[400],   // Emerald-400
    accentWarning: TAILWIND_COLORS.amber[400],     // Amber-400
    accentError: TAILWIND_COLORS.red[400],         // Red-400
    accentInfo: TAILWIND_COLORS.cyan[400],         // Cyan-400
    
    // Interactive colors - Using primary accent with transparency
    interactiveHover: createGlassColor(TAILWIND_COLORS.blue[400], 0.15),
    interactiveActive: createGlassColor(TAILWIND_COLORS.blue[400], 0.25),
    interactiveFocus: createGlassColor(TAILWIND_COLORS.blue[400], 0.2),
    
    // Border colors - Using Tailwind slate with transparency
    borderPrimary: createGlassColor(TAILWIND_COLORS.slate[700], 0.6),
    borderSecondary: createGlassColor(TAILWIND_COLORS.slate[600], 0.8),
    borderAccent: createGlassColor(TAILWIND_COLORS.blue[400], 0.4),
    
    // Shadow colors - Deep and professional
    shadowPrimary: createGlassColor(TAILWIND_COLORS.slate[950], 0.4),
    shadowSecondary: createGlassColor(TAILWIND_COLORS.slate[950], 0.2),
    shadowAccent: createGlassColor(TAILWIND_COLORS.blue[400], 0.25),
    
    // Overlay colors - Dark and sophisticated
    overlayPrimary: createGlassColor(TAILWIND_COLORS.slate[900], 0.9),
    overlaySecondary: createGlassColor(TAILWIND_COLORS.slate[800], 0.95),
    overlayAccent: createGlassColor(TAILWIND_COLORS.blue[400], 0.15),
  },
  glass: {
    blur: 12,
    saturation: 120,
    lightness: 20,
    alpha: 0.15,
    frost: 0.18,
    borderOpacity: 0.4,
  },
  effects: {
    glowIntensity: 0.5,
    highlightIntensity: 0.6,
    shadowIntensity: 0.8,
    transitionDuration: '0.3s',
  },
};

// Theme configuration map
export const THEME_CONFIGS: Record<'crystal-light' | 'plasma-dark', ThemeConfig> = {
  'crystal-light': CRYSTAL_LIGHT_THEME,
  'plasma-dark': PLASMA_DARK_THEME,
};

// Get theme configuration
export const getThemeConfig = (theme: 'crystal-light' | 'plasma-dark'): ThemeConfig => {
  return THEME_CONFIGS[theme];
};

// Export Tailwind colors for use in components
export { TAILWIND_COLORS }; 