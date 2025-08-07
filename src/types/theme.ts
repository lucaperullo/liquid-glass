export type AlgUITheme = 'crystal-light' | 'plasma-dark' | 'system';

export interface ThemeColors {
  // Background colors
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  
  // Glass colors
  glassBackground: string;
  glassBorder: string;
  glassShadow: string;
  glassHighlight: string;
  
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;
  
  // Accent colors
  accentPrimary: string;
  accentSecondary: string;
  accentTertiary: string;
  accentSuccess: string;
  accentWarning: string;
  accentError: string;
  accentInfo: string;
  
  // Interactive colors
  interactiveHover: string;
  interactiveActive: string;
  interactiveFocus: string;
  
  // Border colors
  borderPrimary: string;
  borderSecondary: string;
  borderAccent: string;
  
  // Shadow colors
  shadowPrimary: string;
  shadowSecondary: string;
  shadowAccent: string;
  
  // Overlay colors
  overlayPrimary: string;
  overlaySecondary: string;
  overlayAccent: string;
}

export interface ThemeConfig {
  name: AlgUITheme;
  colors: ThemeColors;
  glass: {
    blur: number;
    saturation: number;
    lightness: number;
    alpha: number;
    frost: number;
    borderOpacity: number;
  };
  effects: {
    glowIntensity: number;
    highlightIntensity: number;
    shadowIntensity: number;
    transitionDuration: string;
  };
}

export interface AlgUIThemeContextType {
  theme: AlgUITheme;
  setTheme: (theme: AlgUITheme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
  colors: ThemeColors;
  config: ThemeConfig;
  systemTheme: 'crystal-light' | 'plasma-dark';
  isSystem: boolean;
} 