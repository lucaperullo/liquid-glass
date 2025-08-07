import React from 'react';
import { LiquidProgressBarProps } from './LiquidProgressBar.types';
import LiquidGlass from '../LiquidGlass';

const LiquidProgressBar: React.FC<LiquidProgressBarProps> = ({
  progress,
  variant = "default",
  showLabel = true,
  className = "",
  style = {},
  ...props
}) => {
  const progressClass = `h-2 rounded-full transition-all duration-300 ${className}`;
  const progressStyle = {
    width: `${Math.min(100, Math.max(0, progress))}%`
  };

  return (
    <LiquidGlass
      variant={variant}
      className="p-4"
      style={style}
      {...props}
    >
      {showLabel && (
        <div className="flex justify-between items-center mb-2 text-white text-sm">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
      )}
      <div className="w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className={`bg-white/30 ${progressClass}`}
          style={progressStyle}
        />
      </div>
    </LiquidGlass>
  );
};

export default LiquidProgressBar;