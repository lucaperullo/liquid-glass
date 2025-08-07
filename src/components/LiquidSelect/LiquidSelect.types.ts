import { BaseGlassProps } from '../../types/common';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface LiquidSelectProps extends BaseGlassProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
} 