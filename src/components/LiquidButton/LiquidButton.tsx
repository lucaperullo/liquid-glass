import React from 'react';
import { LiquidButtonProps } from './LiquidButton.types';
import LiquidGlass from '../LiquidGlass';

const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  onClick,
  className = "",
  style = {},
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };

  const buttonClass = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${sizeClasses[size]} ${className}`;

  return (
    <LiquidGlass
      variant={variant}
      className={buttonClass}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default LiquidButton;