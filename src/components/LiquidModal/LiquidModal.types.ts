import { BaseGlassProps } from '../../types/common';
import { ModalSize } from '../../types/common';

export interface LiquidModalProps extends BaseGlassProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  size?: ModalSize | 'full';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  style?: React.CSSProperties;
}