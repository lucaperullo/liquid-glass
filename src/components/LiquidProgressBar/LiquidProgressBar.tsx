import React from 'react';
import { LiquidProgressBarProps } from './LiquidProgressBar.types';
import LiquidGlass from '../LiquidGlass';
import { getFunctionalGlassConfig } from '../../utils/helpers';

const LiquidProgressBar: React.FC<LiquidProgressBarProps> = ({
  progress,
  variant = "default",
  showLabel = true,
  className = "",
  style = {},
  // New functional props
  intensity,
  accentColor,
  tint,
  contrast,
  glow,
  highlight,
  ...props
}) => {
  // Use functional config for progress bars
  const glassConfig = getFunctionalGlassConfig('progress', {
    intensity: intensity || 80,
    accentColor,
    tint,
    contrast: contrast || 70,
    glow: glow !== undefined ? glow : true,
    highlight: highlight !== undefined ? highlight : true,
    ...props
  });

  const variantClasses = {
    default: "shadow-lg shadow-white/10",
    subtle: "shadow-md shadow-white/5",
    intense: "shadow-xl shadow-white/20",
    minimal: "shadow-sm shadow-white/5",
    clean: "shadow-xl shadow-white/15"
  };

  // Enhanced progress styling with accent color support
  const getProgressStyle = () => {
    const effectiveAccentColor = tint || accentColor;
    const progressIntensity = Math.min(100, Math.max(0, progress));
    
    if (effectiveAccentColor) {
      return {
        background: `linear-gradient(90deg, ${effectiveAccentColor}80, ${effectiveAccentColor}40)`,
        width: `${progressIntensity}%`,
        boxShadow: `0 0 10px ${effectiveAccentColor}40`
      };
    }
    
    return {
      background: `linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))`,
      width: `${progressIntensity}%`,
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
    };
  };

  const progressClass = `
    h-3 rounded-full transition-all duration-500 ease-out
    shadow-lg
    ${className}
  `.trim();

  const containerClass = `
    p-4 rounded-lg transition-all duration-300 ease-out
    hover:scale-[1.02]
    ${variantClasses[variant]}
  `.trim();

  return (
    <LiquidGlass
      {...glassConfig}
      className={containerClass}
      style={style}
    >
      {showLabel && (
        <div className="flex justify-between items-center mb-3 text-white">
          <span className="font-medium">Progress</span>
          <span className="font-semibold text-white/90">{Math.round(progress)}%</span>
        </div>
      )}
      <div className="w-full bg-white/10 rounded-full overflow-hidden shadow-inner">
        <div
          className={progressClass}
          style={getProgressStyle()}
        />
      </div>
    </LiquidGlass>
  );
};

export default LiquidProgressBar;