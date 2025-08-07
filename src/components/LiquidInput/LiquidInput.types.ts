import { BaseGlassProps } from '../../types/common';

export interface LiquidInputProps extends BaseGlassProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}