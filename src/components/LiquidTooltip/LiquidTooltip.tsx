import React, { useState, useRef, useEffect } from 'react';
import { LiquidTooltipProps } from './LiquidTooltip.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidTooltip: React.FC<LiquidTooltipProps> = ({
  children,
  content,
  position = 'top',
  size = 'md',
  variant = 'clean',
  accent = 'blue',
  delay = 200,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-2',
    lg: 'text-base px-4 py-3'
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-white/20',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-white/20',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-l-white/20',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-r-white/20'
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isHovered && !disabled) {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isHovered, delay, disabled]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const tooltipClasses = `
    absolute z-50 pointer-events-none
    ${sizeClasses[size]}
    rounded-lg font-medium
    transition-all duration-200 ease-out
    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    ${positionClasses[position]}
    ${className}
  `.trim();

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      
      {/* Tooltip */}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={tooltipClasses}
          style={{
            background: `linear-gradient(135deg, 
              ${themeColorsConfig.colors.glassBackground} 0%, 
              ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
            backdropFilter: 'blur(15px)',
            border: `1px solid ${themeColorsConfig.colors.glassBorder}`,
            boxShadow: `
              inset 0 1px 3px rgba(255, 255, 255, 0.1),
              0 8px 32px rgba(0, 0, 0, 0.1)
            `,
            color: themeColorsConfig.colors.textPrimary
          }}
        >
          {content}
          
          {/* Arrow */}
          <div
            className={`absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]}`}
            style={{
              borderColor: 'transparent',
              [`border-${position === 'top' ? 'top' : position === 'bottom' ? 'bottom' : position === 'left' ? 'left' : 'right'}-color`]: themeColorsConfig.colors.glassBorder
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LiquidTooltip;