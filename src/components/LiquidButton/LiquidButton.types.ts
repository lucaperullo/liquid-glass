import { BaseGlassProps } from '../../types/common';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface LiquidButtonProps extends BaseGlassProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  className?: string;
  style?: React.CSSProperties;
}