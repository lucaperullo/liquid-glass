import React, { useState, useEffect } from 'react';
import { LiquidSwitchProps } from './LiquidSwitch.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidSwitch: React.FC<LiquidSwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  variant = 'clean',
  label,
  className = '',
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const sizeClasses = {
    sm: 'w-10 h-6',
    md: 'w-12 h-7',
    lg: 'w-14 h-8'
  };

  const thumbSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const handleToggle = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  const switchClasses = `
    relative inline-flex items-center
    ${sizeClasses[size]}
    rounded-full cursor-pointer
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
    ${className}
  `.trim();

  const thumbClasses = `
    ${thumbSizeClasses[size]}
    bg-white rounded-full
    shadow-lg transform transition-all duration-300 ease-out
    ${isChecked ? 'translate-x-full' : 'translate-x-0'}
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
  `.trim();

  const trackClasses = `
    absolute inset-0 rounded-full
    transition-all duration-300 ease-out
    ${isChecked 
      ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
      : 'bg-gray-300 dark:bg-gray-600'
    }
  `.trim();

  return (
    <div className="flex items-center gap-3">
      <div
        className={switchClasses}
        style={{
          background: `linear-gradient(135deg, 
            ${themeColorsConfig.colors.glassBackground} 0%, 
            ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${themeColorsConfig.colors.glassBorder}`,
          boxShadow: `
            inset 0 1px 3px rgba(255, 255, 255, 0.1),
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.08)
          `
        }}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="switch"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        <div className={trackClasses} />
        <div 
          className={thumbClasses}
          style={{
            boxShadow: `
              0 2px 4px rgba(0, 0, 0, 0.1),
              0 1px 2px rgba(0, 0, 0, 0.06)
            `
          }}
        />
      </div>
      
      {label && (
        <span 
          className={`
            ${labelSizeClasses[size]} font-medium
            ${disabled ? 'text-gray-400' : 'text-gray-900 dark:text-white'}
            cursor-pointer select-none
          `.trim()}
          onClick={handleToggle}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default LiquidSwitch; 