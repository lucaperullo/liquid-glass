import { BaseGlassProps, ButtonSize } from '../../types/common';

export interface GlassButtonProps extends BaseGlassProps {
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: any) => void;
  className?: string;
  children?: any;
  [key: string]: any;
}