import { BaseGlassProps } from '../../types/common';

export interface LiquidCheckboxProps extends BaseGlassProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
} 