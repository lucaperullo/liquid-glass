import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassCardProps } from './GlassCard.types';
import { combineClassNames } from '../../utils';

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  variant = "default", 
  hover = false,
  className = "",
  ...props 
}) => {
  const hoverClass = hover ? "hover:scale-[1.02] transition-transform duration-300" : "";
  
  const cardClass = combineClassNames(
    "p-6",
    hoverClass,
    className
  );

  return (
    <LiquidGlass 
      variant={variant} 
      className={cardClass}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default GlassCard;