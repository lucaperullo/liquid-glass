import { BaseGlassProps } from '../../types/common';
import { ModalSize } from '../../types/common';

export interface LiquidModalProps extends BaseGlassProps {
  children?: React.ReactNode;
  size?: ModalSize;
  className?: string;
  style?: React.CSSProperties;
}