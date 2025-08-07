import { BaseGlassProps } from '../../types/common';

export interface LiquidDatePickerProps extends BaseGlassProps {
  value?: string;
  onChange?: (date: string) => void;
  minDate?: string;
  maxDate?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  format?: string;
  showTime?: boolean;
  label?: string;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
} 