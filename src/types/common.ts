import { ReactNode, CSSProperties } from 'react';
import { AlgUITheme } from './theme';

export type GlassVariant = 'default' | 'subtle' | 'intense' | 'minimal' | 'clean';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type BadgeColor = 'default' | 'success' | 'warning' | 'error' | 'info';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export type SidebarPosition = 'left' | 'right' | 'top' | 'bottom';

export interface BaseGlassProps {
  variant?: 'clean' | 'default' | 'subtle' | 'intense' | 'minimal';
  scale?: number;
  radius?: number;
  border?: number;
  lightness?: number;
  displace?: number;
  alpha?: number;
  blur?: number;
  dispersion?: number;
  frost?: number;
  borderColor?: string;
  backdropBlur?: number;
  
  // New refraction properties
  refractionMode?: 'standard' | 'polar' | 'prominent' | 'shader';
  displacementScale?: number;
  blurAmount?: number;
  saturation?: number;
  chromaticAberration?: number;
  elasticity?: number;
  cornerRadius?: number;
  overLight?: boolean;
  
  // New functional properties for better visibility
  intensity?: number; // 0-100: controls overall opacity and visibility
  accentColor?: string; // Color tint for the glass effect
  tint?: string; // Alternative accent color prop
  contrast?: number; // 0-100: controls border and shadow intensity
  glow?: boolean; // Adds subtle glow effect
  highlight?: boolean; // Adds highlight effect for interactive elements
  
  // Theme support
  theme?: any; // Override theme for this component
  
  accent?: string; // Tailwind color name for glass accent
  className?: string;
  style?: React.CSSProperties;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string | number;
  label: string;
}

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}