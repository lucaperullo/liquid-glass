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
  const variantClasses = {
    default: "shadow-xl shadow-white/10",
    subtle: "shadow-lg shadow-white/5",
    intense: "shadow-2xl shadow-white/20",
    minimal: "shadow-md shadow-white/5",
    clean: "shadow-xl shadow-white/15"
  };

  const positionClasses = {
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
    top: "top-0 left-0 right-0 w-full",
    bottom: "bottom-0 left-0 right-0 w-full"
  };

  const sidebarClass = `
    p-6 rounded-lg
    transition-all duration-300 ease-out
    hover:scale-[1.01]
    ${positionClasses[position]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

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