import { HTMLAttributes } from 'react';
import { BaseGlassProps, ModalSize } from '../../types/common';

export interface GlassModalProps extends BaseGlassProps, Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
}