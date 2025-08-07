import { BaseGlassProps } from '../../types/common';

export interface LiquidTextareaProps extends BaseGlassProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  rows?: number;
  maxLength?: number;
  showCharacterCount?: boolean;
  label?: string;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
} 