import { BaseGlassProps } from '../../types/common';

export interface LiquidFileUploadProps extends BaseGlassProps {
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  showPreview?: boolean;
  label?: string;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
} 