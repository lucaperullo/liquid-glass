import { BaseGlassProps } from '../../types/common';
import { TooltipPosition } from '../../types/common';

export interface LiquidTooltipProps extends BaseGlassProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}