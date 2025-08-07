import { BaseGlassProps } from '../../types/common';
import { AlgUITheme } from '../../types/theme';

export type GlassVariant = 'clean' | 'default' | 'subtle' | 'intense' | 'minimal';

export interface LiquidGlassProps extends BaseGlassProps {
  children?: React.ReactNode;
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
  
  // New functional properties for better visibility
  intensity?: number; // 0-100: controls overall opacity and visibility
  accentColor?: string; // Color tint for the glass effect
  tint?: string; // Alternative accent color prop
  contrast?: number; // 0-100: controls border and shadow intensity
  glow?: boolean; // Adds subtle glow effect
  highlight?: boolean; // Adds highlight effect for interactive elements
  
  // Theme support
  theme?: AlgUITheme; // Override theme for this component
  
  className?: string;
  style?: React.CSSProperties;
}