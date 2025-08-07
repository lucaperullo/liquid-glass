import { BaseGlassProps } from '../../types/common';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface LiquidAlertProps extends BaseGlassProps {
  children?: React.ReactNode;
  type?: AlertType;
  title?: string;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'clean' | 'default' | 'subtle' | 'intense' | 'minimal';
  className?: string;
  style?: React.CSSProperties;
} 