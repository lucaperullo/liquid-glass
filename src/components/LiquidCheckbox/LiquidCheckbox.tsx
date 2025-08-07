import React, { useState, useEffect } from 'react';
import { LiquidCheckboxProps } from './LiquidCheckbox.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidCheckbox: React.FC<LiquidCheckboxProps> = ({
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

  const checkboxClasses = `
    relative inline-flex items-center justify-center
    ${sizeClasses[size]}
    rounded cursor-pointer
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
    ${className}
  `.trim();

  const checkmarkClasses = `
    absolute inset-0 flex items-center justify-center
    transition-all duration-300 ease-out
    ${isChecked ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
  `.trim();

  return (
    <div className="flex items-center gap-3">
      <div
        className={checkboxClasses}
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
        role="checkbox"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        <div className={checkmarkClasses}>
          {isChecked && (
            <svg
              className="w-full h-full text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{
                filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))'
              }}
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
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

export default LiquidCheckbox; 