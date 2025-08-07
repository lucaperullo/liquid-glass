import React, { useState, useEffect } from 'react';
import { LiquidRangeProps } from './LiquidRange.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidRange: React.FC<LiquidRangeProps> = ({
  value = 50,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  size = 'md',
  variant = 'clean',
  accent = 'blue',
  disabled = false,
  showValue = true,
  label,
  className = '',
  ...props
}) => {
  const [localValue, setLocalValue] = useState(value);
  
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    const newValue = Number(event.target.value);
    setLocalValue(newValue);
    onChange?.(newValue);
  };

  const percentage = ((localValue - min) / (max - min)) * 100;

  const rangeClasses = `
    w-full appearance-none cursor-pointer
    ${sizeClasses[size]}
    rounded-lg
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

  return (
    <div className="w-full">
      {label && (
        <label className={`
          block ${labelSizeClasses[size]} font-medium mb-2
          ${disabled ? 'text-gray-400' : 'text-gray-900 dark:text-white'}
        `.trim()}>
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue}
          onChange={handleChange}
          disabled={disabled}
          className={rangeClasses}
          style={{
            background: `linear-gradient(to right, 
              ${themeColorsConfig.colors.accentPrimary} 0%, 
              ${themeColorsConfig.colors.accentPrimary} ${percentage}%, 
              ${themeColorsConfig.colors.glassBorder} ${percentage}%, 
              ${themeColorsConfig.colors.glassBorder} 100%)`,
            borderRadius: '0.5rem',
            outline: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none'
          }}
          {...props}
        />
        
        {/* Custom Thumb */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full pointer-events-none"
          style={{
            left: `${percentage}%`,
            background: `linear-gradient(135deg, 
              ${themeColorsConfig.colors.glassBackground} 0%, 
              ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
            backdropFilter: 'blur(10px)',
            border: `2px solid ${themeColorsConfig.colors.accentPrimary}`,
            boxShadow: `
              inset 0 1px 3px rgba(255, 255, 255, 0.1),
              0 2px 8px rgba(0, 0, 0, 0.1)
            `
          }}
        />
        
        {/* Value Display */}
        {showValue && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div
              className="px-2 py-1 rounded text-xs font-medium"
              style={{
                background: `linear-gradient(135deg, 
                  ${themeColorsConfig.colors.glassBackground} 0%, 
                  ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${themeColorsConfig.colors.glassBorder}`,
                color: themeColorsConfig.colors.textPrimary
              }}
            >
              {localValue}
            </div>
          </div>
        )}
      </div>
      
      {/* Min/Max Labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default LiquidRange; 