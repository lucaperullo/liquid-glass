import { BaseGlassProps } from '../../types/common';

export interface LiquidProgressBarProps extends BaseGlassProps {
  progress: number;
  showLabel?: boolean;
  className?: string;
  style?: React.CSSProperties;
  // New functional properties
  intensity?: number;
  accentColor?: string;
  tint?: string;
  contrast?: number;
  glow?: boolean;
  highlight?: boolean;
}