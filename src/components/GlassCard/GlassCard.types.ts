import { BaseGlassProps } from '../../types/common';

export interface GlassCardProps extends BaseGlassProps {
  hover?: boolean;
  className?: string;
  children?: any;
  [key: string]: any;
}