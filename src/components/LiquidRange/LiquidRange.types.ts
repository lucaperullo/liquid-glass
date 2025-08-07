import { BaseGlassProps } from '../../types/common';

export interface LiquidRangeProps extends BaseGlassProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  label?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
} 