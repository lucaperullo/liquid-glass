import { BaseGlassProps } from '../../types/common';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface LiquidRadioProps extends BaseGlassProps {
  options?: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'vertical' | 'horizontal';
  label?: string;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
} 