import { BaseGlassProps } from '../../types/common';
import { BadgeColor } from '../../types/common';

export interface LiquidBadgeProps extends BaseGlassProps {
  children?: React.ReactNode;
  color?: BadgeColor;
  className?: string;
  style?: React.CSSProperties;
}