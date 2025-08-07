import React, { useState, useRef, useEffect } from 'react';
import { LiquidTextareaProps } from './LiquidTextarea.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidTextarea: React.FC<LiquidTextareaProps> = ({
  value = '',
  onChange,
  placeholder,
  disabled = false,
  size = 'md',
  variant = 'clean',
  accent = 'blue',
  rows = 4,
  maxLength,
  showCharacterCount = false,
  label,
  error,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-3',
    lg: 'text-lg px-4 py-3'
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      const textarea = event.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newValue = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
      textarea.value = newValue;
      textarea.selectionStart = textarea.selectionEnd = start + 1;
      onChange?.(newValue);
    }
  };

  const textareaClasses = `
    w-full resize-none
    ${sizeClasses[size]}
    rounded-lg font-medium
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
    ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}
    ${className}
  `.trim();

  const containerClasses = `
    relative
    ${error ? 'animate-shake' : ''}
  `.trim();

  return (
    <div className={containerClasses}>
      {label && (
        <label className={`
          block ${labelSizeClasses[size]} font-medium mb-2
          ${disabled ? 'text-gray-400' : error ? 'text-red-500' : 'text-gray-900 dark:text-white'}
        `.trim()}>
          {label}
        </label>
      )}
      
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={internalValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          className={textareaClasses}
          style={{
            background: `linear-gradient(135deg, 
              ${themeColorsConfig.colors.glassBackground} 0%, 
              ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${isFocused 
              ? themeColorsConfig.colors.accentPrimary 
              : error 
                ? themeColorsConfig.colors.accentError 
                : themeColorsConfig.colors.glassBorder}`,
            boxShadow: `
              inset 0 1px 3px rgba(255, 255, 255, 0.1),
              0 2px 4px rgba(0, 0, 0, 0.1)
            `,
            color: themeColorsConfig.colors.textPrimary,
            minHeight: `${rows * 1.5}rem`
          }}
          {...props}
        />
        
        {/* Character count */}
        {showCharacterCount && maxLength && (
          <div className="absolute bottom-2 right-2 text-xs text-gray-500">
            {internalValue.length}/{maxLength}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default LiquidTextarea; 