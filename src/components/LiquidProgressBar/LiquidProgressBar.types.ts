import { BaseGlassProps } from '../../types/common';

export interface LiquidProgressBarProps extends BaseGlassProps {
  progress: number;
  showLabel?: boolean;
  className?: string;
  style?: React.CSSProperties;
}