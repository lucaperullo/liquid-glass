import { BaseGlassProps } from '../../types/common';

export interface LiquidColorPickerProps extends BaseGlassProps {
  value?: string;
  onChange?: (color: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showPreview?: boolean;
  showHex?: boolean;
  showRgb?: boolean;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
} 