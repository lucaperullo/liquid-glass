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
  const variantClasses = {
    default: "shadow-xl shadow-white/10",
    subtle: "shadow-lg shadow-white/5",
    intense: "shadow-2xl shadow-white/20",
    minimal: "shadow-md shadow-white/5",
    clean: "shadow-xl shadow-white/15"
  };

  const navbarClass = `
    flex items-center justify-between p-6 rounded-lg
    transition-all duration-300 ease-out
    hover:scale-[1.01]
    ${variantClasses[variant]}
    ${className}
  `.trim();

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