import React from 'react';
import { LiquidSidebarProps } from './LiquidSidebar.types';
import LiquidGlass from '../LiquidGlass';

const LiquidSidebar: React.FC<LiquidSidebarProps> = ({
  children,
  variant = "default",
  position = "left",
  className = "",
  style = {},
  ...props
}) => {
  const sidebarClass = `h-full p-4 ${position === 'right' ? 'ml-auto' : ''} ${className}`;

  return (
    <LiquidGlass
      variant={variant}
      className={sidebarClass}
      style={style}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default LiquidSidebar;