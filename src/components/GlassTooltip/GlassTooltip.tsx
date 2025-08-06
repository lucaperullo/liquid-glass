import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassTooltipProps } from './GlassTooltip.types';

const GlassTooltip: React.FC<GlassTooltipProps> = ({ 
  children, 
  content,
  position = "top",
  variant = "subtle",
  className = "",
  ...props 
}) => {
  return (
    <div className="relative group">
      {children}
      <div className={`absolute ${position === 'top' ? 'bottom-full mb-2' : position === 'bottom' ? 'top-full mt-2' : position === 'left' ? 'right-full mr-2' : 'left-full ml-2'} opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none`}>
        <LiquidGlass 
          variant={variant} 
          className={`px-3 py-2 text-sm text-white whitespace-nowrap rounded-lg shadow-lg ${className}`}
          {...props}
        >
          {content}
        </LiquidGlass>
      </div>
    </div>
  );
};

export default GlassTooltip;