import { BaseGlassProps } from '../../types/common';

export interface LiquidGlassProps extends BaseGlassProps {
  className?: string;
  style?: any;
  children?: any;
  [key: string]: any;
}