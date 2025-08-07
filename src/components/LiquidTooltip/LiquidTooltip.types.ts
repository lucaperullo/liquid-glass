import { BaseGlassProps } from '../../types/common';
import { TooltipPosition } from '../../types/common';

export interface LiquidTooltipProps extends BaseGlassProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  position?: TooltipPosition;
  className?: string;
  style?: React.CSSProperties;
}