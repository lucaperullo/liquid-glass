import { BaseGlassProps } from '../../types/common';

export interface LiquidCardProps extends BaseGlassProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}