import { HTMLAttributes } from 'react';
import { BaseGlassProps, StatItem } from '../../types/common';

export interface GlassStatsProps extends BaseGlassProps, Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  stats?: StatItem[];
}