import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassSidebarProps } from './GlassSidebar.types';
import { combineClassNames } from '../../utils';

const GlassSidebar: React.FC<GlassSidebarProps> = ({ 
  children, 
  variant = "default",
  position = "left",
  className = "",
  ...props 
}) => {
  const positionClass = position === "left" ? "left-0" : "right-0";
  
  const sidebarClass = combineClassNames("h-full p-4", className);
  
  return (
    <div className={`fixed top-0 ${positionClass} h-full w-64 z-40`}>
      <LiquidGlass 
        variant={variant} 
        className={sidebarClass}
        {...props}
      >
        {children}
      </LiquidGlass>
    </div>
  );
};

export default GlassSidebar;