import { ReactNode, HTMLAttributes } from 'react';
import { BaseGlassProps, NavLink } from '../../types/common';

export interface GlassNavbarProps extends BaseGlassProps, Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  logo?: ReactNode;
  links?: NavLink[];
  actions?: ReactNode;
}