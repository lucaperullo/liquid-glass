import { ReactNode, HTMLAttributes } from 'react';
import { BaseGlassProps, TooltipPosition } from '../../types/common';

export interface GlassTooltipProps extends BaseGlassProps, Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'content'> {
  content: ReactNode;
  position?: TooltipPosition;
}