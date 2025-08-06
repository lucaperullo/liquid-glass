import { HTMLAttributes } from 'react';
import { BaseGlassProps, SidebarPosition } from '../../types/common';

export interface GlassSidebarProps extends BaseGlassProps, Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  position?: SidebarPosition;
}