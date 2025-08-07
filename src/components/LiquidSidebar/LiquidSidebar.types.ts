import { BaseGlassProps } from '../../types/common';
import { SidebarPosition } from '../../types/common';

export interface LiquidSidebarProps extends BaseGlassProps {
  children?: React.ReactNode;
  position?: SidebarPosition;
  className?: string;
  style?: React.CSSProperties;
}