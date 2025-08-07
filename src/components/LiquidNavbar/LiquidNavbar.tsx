import React from 'react';
import { LiquidNavbarProps } from './LiquidNavbar.types';
import LiquidGlass from '../LiquidGlass';

const LiquidNavbar: React.FC<LiquidNavbarProps> = ({
  children,
  variant = "default",
  className = "",
  style = {},
  ...props
}) => {
  const navbarClass = `flex items-center justify-between p-4 ${className}`;

  return (
    <LiquidGlass
      variant={variant}
      className={navbarClass}
      style={style}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default LiquidNavbar;