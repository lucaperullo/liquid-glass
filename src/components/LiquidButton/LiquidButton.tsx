import React from 'react';
import { LiquidButtonProps } from './LiquidButton.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';
import { getFunctionalGlassConfig } from '../../utils/helpers';

const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  onClick,
  className = "",
  style = {},
  // New functional props
  intensity,
  accentColor,
  tint,
  contrast,
  glow,
  highlight,
  accent = 'blue',
  ...props
}) => {
  // Use functional config for buttons
  const glassConfig = getFunctionalGlassConfig('interactive', {
    intensity: intensity || 75,
    accentColor: accentColor || `var(--${accent}-500)`,
    tint,
    contrast: contrast || 65,
    glow: glow !== undefined ? glow : true,
    highlight: highlight !== undefined ? highlight : true,
    ...props
  });

  const sizeClasses = {
    sm: "px-4 py-2.5 text-sm font-semibold",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold",
    xl: "px-10 py-5 text-xl font-bold"
  };

  // Enhanced variant classes with accent color support
  const getVariantClasses = () => {
    const effectiveAccentColor = tint || accentColor;
    
    if (effectiveAccentColor) {
      return {
        default: `
          text-white/95 hover:text-white
          shadow-xl shadow-${effectiveAccentColor}/15 hover:shadow-2xl hover:shadow-${effectiveAccentColor}/25
          bg-gradient-to-r from-${effectiveAccentColor}/20 via-${effectiveAccentColor}/25 to-${effectiveAccentColor}/20
          hover:from-${effectiveAccentColor}/30 hover:via-${effectiveAccentColor}/35 hover:to-${effectiveAccentColor}/30
          border border-${effectiveAccentColor}/20 hover:border-${effectiveAccentColor}/30
        `,
        subtle: `
          text-white/85 hover:text-white/95
          shadow-lg shadow-${effectiveAccentColor}/10 hover:shadow-xl hover:shadow-${effectiveAccentColor}/15
          bg-gradient-to-r from-${effectiveAccentColor}/15 via-${effectiveAccentColor}/20 to-${effectiveAccentColor}/15
          hover:from-${effectiveAccentColor}/25 hover:via-${effectiveAccentColor}/30 hover:to-${effectiveAccentColor}/25
          border border-${effectiveAccentColor}/15 hover:border-${effectiveAccentColor}/25
        `,
        intense: `
          text-white
          shadow-2xl shadow-${effectiveAccentColor}/25 hover:shadow-3xl hover:shadow-${effectiveAccentColor}/35
          bg-gradient-to-r from-${effectiveAccentColor}/30 via-${effectiveAccentColor}/40 to-${effectiveAccentColor}/30
          hover:from-${effectiveAccentColor}/40 hover:via-${effectiveAccentColor}/50 hover:to-${effectiveAccentColor}/40
          border border-${effectiveAccentColor}/30 hover:border-${effectiveAccentColor}/40
        `,
        minimal: `
          text-white/75 hover:text-white/90
          shadow-md shadow-${effectiveAccentColor}/5 hover:shadow-lg hover:shadow-${effectiveAccentColor}/10
          bg-gradient-to-r from-${effectiveAccentColor}/10 via-${effectiveAccentColor}/15 to-${effectiveAccentColor}/10
          hover:from-${effectiveAccentColor}/20 hover:via-${effectiveAccentColor}/25 hover:to-${effectiveAccentColor}/20
          border border-${effectiveAccentColor}/10 hover:border-${effectiveAccentColor}/20
        `,
        clean: `
          text-white/95 hover:text-white
          shadow-xl shadow-${effectiveAccentColor}/20 hover:shadow-2xl hover:shadow-${effectiveAccentColor}/30
          bg-gradient-to-r from-${effectiveAccentColor}/25 via-${effectiveAccentColor}/30 to-${effectiveAccentColor}/25
          hover:from-${effectiveAccentColor}/35 hover:via-${effectiveAccentColor}/40 hover:to-${effectiveAccentColor}/35
          border border-${effectiveAccentColor}/25 hover:border-${effectiveAccentColor}/35
        `
      };
    }
    
    return {
      default: `
        text-white/95 hover:text-white
        shadow-xl shadow-white/15 hover:shadow-2xl hover:shadow-white/25
        bg-gradient-to-r from-white/20 via-white/25 to-white/20
        hover:from-white/30 hover:via-white/35 hover:to-white/30
        border border-white/20 hover:border-white/30
      `,
      subtle: `
        text-white/85 hover:text-white/95
        shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/15
        bg-gradient-to-r from-white/15 via-white/20 to-white/15
        hover:from-white/25 hover:via-white/30 hover:to-white/25
        border border-white/15 hover:border-white/25
      `,
      intense: `
        text-white
        shadow-2xl shadow-white/25 hover:shadow-3xl hover:shadow-white/35
        bg-gradient-to-r from-white/30 via-white/40 to-white/30
        hover:from-white/40 hover:via-white/50 hover:to-white/40
        border border-white/30 hover:border-white/40
      `,
      minimal: `
        text-white/75 hover:text-white/90
        shadow-md shadow-white/5 hover:shadow-lg hover:shadow-white/10
        bg-gradient-to-r from-white/10 via-white/15 to-white/10
        hover:from-white/20 hover:via-white/25 hover:to-white/20
        border border-white/10 hover:border-white/20
      `,
      clean: `
        text-white/95 hover:text-white
        shadow-xl shadow-white/20 hover:shadow-2xl hover:shadow-white/30
        bg-gradient-to-r from-white/25 via-white/30 to-white/25
        hover:from-white/35 hover:via-white/40 hover:to-white/35
        border border-white/25 hover:border-white/35
      `
    };
  };

  const variantClasses = getVariantClasses();

  const buttonClass = `
    inline-flex items-center justify-center gap-3
    rounded-xl transition-all duration-300 ease-out
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    relative overflow-hidden group
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClass}
      style={{
        ...glassConfig,
        ...style
      }}
      onClick={onClick}
      {...props}
    >
      {/* Enhanced shimmer effect with accent color */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-${tint || accentColor || 'white'}/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out`}
        style={{
          background: `linear-gradient(90deg, transparent, ${tint || accentColor || 'rgba(255, 255, 255, 0.1)'}, transparent)`
        }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default LiquidButton;