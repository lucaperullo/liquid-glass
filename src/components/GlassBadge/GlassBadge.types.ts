import { HTMLAttributes } from 'react';
import { BaseGlassProps, BadgeColor } from '../../types/common';

export interface GlassBadgeProps extends BaseGlassProps, Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  color?: BadgeColor;
}