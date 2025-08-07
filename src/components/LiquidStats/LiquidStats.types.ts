import { BaseGlassProps } from '../../types/common';
import { StatItem } from '../../types/common';

export interface LiquidStatsProps extends BaseGlassProps {
  items?: StatItem[];
  className?: string;
  style?: React.CSSProperties;
}