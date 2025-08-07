import { BaseGlassProps } from '../../types/common';
import { ButtonSize } from '../../types/common';

export interface LiquidButtonProps extends BaseGlassProps {
  children?: React.ReactNode;
  size?: ButtonSize;
  className?: string;
  style?: React.CSSProperties;
}