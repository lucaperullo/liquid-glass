import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassButtonProps } from './GlassButton.types';
import { BUTTON_SIZE_CLASSES } from '../../utils/constants';
import { combineClassNames } from '../../utils';

const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  variant = "default", 
  size = "md", 
  onClick, 
  disabled = false,
  className = "",
  ...props 
}) => {
  const sizeClass = BUTTON_SIZE_CLASSES[size];
  
  const baseClass = combineClassNames(
    sizeClass,
    "font-semibold text-white cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95",
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  return (
    <LiquidGlass 
      variant={variant} 
      className={baseClass}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default GlassButton;