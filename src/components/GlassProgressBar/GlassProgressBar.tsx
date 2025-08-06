import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassProgressBarProps } from './GlassProgressBar.types';
import { combineClassNames } from '../../utils';

const GlassProgressBar: React.FC<GlassProgressBarProps> = ({ 
  value = 0, 
  max = 100, 
  variant = "default",
  showLabel = true,
  className = "",
  ...props 
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const containerClass = combineClassNames("w-full", className);
  
  return (
    <div className={containerClass}>
      {showLabel && (
        <div className="flex justify-between text-white text-sm mb-2">
          <span>Progress</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <LiquidGlass 
        variant={variant} 
        className="h-3" 
        {...props}
      >
        <div 
          className="h-full bg-white/30 rounded transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </LiquidGlass>
    </div>
  );
};

export default GlassProgressBar;