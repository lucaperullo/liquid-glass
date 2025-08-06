import { HTMLAttributes } from 'react';
import { BaseGlassProps } from '../../types/common';

export interface GlassProgressBarProps extends BaseGlassProps, Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  value?: number;
  max?: number;
  showLabel?: boolean;
}