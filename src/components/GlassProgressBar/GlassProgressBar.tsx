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
  
  const containerClass = combineClassNames("w-full text-white", className);
  
  return (
    <div className={containerClass}>
      {showLabel && (
        <div className="flex justify-between text-white/80 text-sm mb-2 font-medium">
          <span>Progress</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <LiquidGlass 
        variant={variant} 
        className="h-2 rounded-full overflow-hidden" 
        {...props}
      >
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </LiquidGlass>
    </div>
  );
};

export default GlassProgressBar;