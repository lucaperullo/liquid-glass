import { CSSProperties, ReactNode } from 'react';

export type ThemeSwitchSize = 'sm' | 'md' | 'lg';

export interface AlgUIThemeSwitchProps {
  size?: ThemeSwitchSize;
  showLabel?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: any;
} 