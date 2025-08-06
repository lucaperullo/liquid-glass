import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassBadgeProps } from './GlassBadge.types';
import { BADGE_COLOR_CLASSES } from '../../utils/constants';
import { combineClassNames } from '../../utils';

const GlassBadge: React.FC<GlassBadgeProps> = ({ 
  children, 
  variant = "subtle",
  color = "default",
  className = "",
  ...props 
}) => {
  const colorClass = BADGE_COLOR_CLASSES[color];
  
  const badgeClass = combineClassNames(
    "inline-block px-3 py-1 text-sm font-medium",
    colorClass,
    className
  );

  return (
    <LiquidGlass 
      variant={variant} 
      className={badgeClass}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default GlassBadge;