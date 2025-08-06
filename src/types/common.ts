import { ReactNode, CSSProperties } from 'react';

export type GlassVariant = 'default' | 'subtle' | 'intense' | 'minimal';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type BadgeColor = 'default' | 'success' | 'warning' | 'error' | 'info';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export type SidebarPosition = 'left' | 'right';

export interface BaseGlassProps {
  variant?: GlassVariant;
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
  
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string | number;
  label: string;
}