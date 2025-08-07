import React, { useState, useEffect } from 'react';
import { LiquidRadioProps } from './LiquidRadio.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidRadio: React.FC<LiquidRadioProps> = ({
  options = [],
  value,
  onChange,
  disabled = false,
  size = 'md',
  variant = 'clean',
  accent = 'blue',
  layout = 'vertical',
  label,
  error,
  className = '',
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

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

  const layoutClasses = {
    vertical: 'flex flex-col space-y-3',
    horizontal: 'flex flex-row space-x-4'
  };

  const handleOptionChange = (optionValue: string) => {
    if (disabled) return;
    
    setSelectedValue(optionValue);
    onChange?.(optionValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent, optionValue: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOptionChange(optionValue);
    }
  };

  const radioClasses = `
    relative inline-flex items-center justify-center
    ${sizeClasses[size]}
    rounded-full cursor-pointer
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
    ${className}
  `.trim();

  const dotClasses = `
    absolute inset-0 flex items-center justify-center
    transition-all duration-200 ease-out
    ${selectedValue ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
  `.trim();

  return (
    <div className="w-full">
      {label && (
        <label className={`
          block ${labelSizeClasses[size]} font-medium mb-3
          ${disabled ? 'text-gray-400' : error ? 'text-red-500' : 'text-gray-900 dark:text-white'}
        `.trim()}>
          {label}
        </label>
      )}
      
      <div className={layoutClasses[layout]}>
        {options.map((option) => (
          <div
            key={option.value}
            className="flex items-center space-x-3"
            onClick={() => handleOptionChange(option.value)}
            onKeyDown={(e) => handleKeyDown(e, option.value)}
            role="radio"
            aria-checked={selectedValue === option.value}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
          >
            <div
              className={radioClasses}
              style={{
                background: `linear-gradient(135deg, 
                  ${themeColorsConfig.colors.glassBackground} 0%, 
                  ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${selectedValue === option.value 
                  ? themeColorsConfig.colors.accentPrimary 
                  : themeColorsConfig.colors.glassBorder}`
              }}
            >
              <div className={dotClasses}>
                {selectedValue === option.value && (
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: themeColorsConfig.colors.accentPrimary,
                      boxShadow: `0 0 4px ${themeColorsConfig.colors.accentPrimary}`
                    }}
                  />
                )}
              </div>
            </div>
            
            <span 
              className={`
                ${labelSizeClasses[size]} font-medium
                ${disabled ? 'text-gray-400' : 'text-gray-900 dark:text-white'}
                cursor-pointer select-none
              `.trim()}
            >
              {option.label}
            </span>
          </div>
        ))}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default LiquidRadio; 