import React, { useMemo, useEffect, useRef, useState, useId, useCallback } from 'react';
import { LiquidGlassProps } from './LiquidGlass.types';
import { getGlassConfig, generateDisplacementSVG, combineClassNames } from '../../utils';
import { DEFAULT_DIMENSIONS } from '../../utils/constants';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';
import { getGlassColors } from '../../utils/tailwindColors';
import SVGPreloader from './SVGPreloader';

const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  variant = "clean",
  scale,
  radius = 12,
  border,
  lightness,
  displace,
  alpha,
  blur,
  dispersion,
  frost,
  borderColor,
  backdropBlur = 3,
  refractionMode,
  displacementScale,
  blurAmount,
  saturation,
  chromaticAberration,
  elasticity,
  cornerRadius = 10,
  overLight,
  // New functional properties
  intensity,
  accentColor,
  tint,
  contrast,
  glow,
  highlight,
  // Theme support
  theme: componentTheme,
  accent = 'blue',
  className = "",
  style = {},
  ...props
}) => {
  // Try to get theme context, but don't fail if not available
  let themeContext = null;
  try {
    themeContext = useAlgUITheme();
  } catch (error) {
    // Provider not available, use defaults
    console.warn('AlgUIThemeProvider not found, using default theme values');
  }

  const globalTheme = themeContext?.theme || 'crystal-light';
  const themeColors = themeContext?.colors || getThemeConfig('crystal-light').colors;
  const themeConfig = themeContext?.config || getThemeConfig('crystal-light');
  const effectiveTheme = componentTheme || (themeContext?.isSystem ? themeContext.systemTheme : globalTheme);
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');
  const isDark = effectiveTheme === 'plasma-dark';

  // Get glass colors based on accent
  const glassColors = getGlassColors(isDark, accent);

  const config = getGlassConfig(variant, {
    scale,
    radius,
    border,
    lightness: lightness ?? themeColorsConfig.glass.lightness,
    displace,
    alpha: alpha ?? themeColorsConfig.glass.alpha,
    blur: blur ?? themeColorsConfig.glass.blur,
    dispersion,
    frost: frost ?? themeColorsConfig.glass.frost,
    borderColor: borderColor ?? glassColors.border,
    refractionMode,
    displacementScale,
    blurAmount,
    saturation: saturation ?? themeColorsConfig.glass.saturation,
    chromaticAberration,
    elasticity,
    cornerRadius,
    overLight,
    // New functional properties
    intensity,
    accentColor: accentColor || glassColors.primary,
    tint,
    contrast,
    glow,
    highlight
  });

  // Ensure cornerRadius is properly applied
  const effectiveCornerRadius = cornerRadius !== undefined ? cornerRadius : config.cornerRadius || config.radius;

  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState(DEFAULT_DIMENSIONS);
  const [isLoaded, setIsLoaded] = useState(false);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [preloaderLoaded, setPreloaderLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      setDimensions({ width, height });
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);
    
    return () => resizeObserver.disconnect();
  }, []);

  const displacementDataUri = useMemo(() => {
    // Create a config with the effective corner radius
    const configWithCornerRadius = {
      ...config,
      cornerRadius: effectiveCornerRadius
    };
    return generateDisplacementSVG(dimensions.width, dimensions.height, configWithCornerRadius);
  }, [dimensions, config, effectiveCornerRadius]);

  // Set loaded state when dimensions are valid
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setIsLoaded(true);
    }
  }, [dimensions]);

  // Handle SVG load
  const handleSvgLoad = useCallback(() => {
    setSvgLoaded(true);
  }, []);

  // Handle preloader load
  const handlePreloaderLoad = useCallback(() => {
    setPreloaderLoaded(true);
  }, []);

  const uniqueFilterId = useId();
  const filterId = `liquid-glass-filter-${uniqueFilterId}`;

  // Calculate effective blur based on blurAmount and blur properties
  const effectiveBlur = config.blurAmount !== undefined ? config.blurAmount : config.blur;
  const effectiveBackdropBlur = Math.max(0, backdropBlur + (effectiveBlur || 0));

  // Calculate intensity-based opacity
  const intensityOpacity = config.intensity ? config.intensity / 100 : 1;
  
  // Calculate contrast-based border and shadow intensity
  const contrastMultiplier = config.contrast ? config.contrast / 100 : 1;
  
  // Determine accent color (tint takes precedence over accentColor)
  const effectiveAccentColor = config.tint || config.accentColor;

  // Determine if effects should be visible
  const effectsReady = isLoaded && (svgLoaded || preloaderLoaded);

  // Enhanced background with theme and accent color support
  const getBackgroundStyle = () => {
    let background = `hsl(0 0% ${config.lightness}% / ${config.frost * intensityOpacity})`;
    
    if (effectiveAccentColor) {
      // Create a tinted background by mixing the accent color
      background = `linear-gradient(135deg, ${effectiveAccentColor}20, hsl(0 0% ${config.lightness}% / ${config.frost * intensityOpacity}))`;
    }
    
    return background;
  };

  // Enhanced border with theme and contrast support
  const getBorderStyle = () => {
    const baseBorderColor = config.borderColor;
    const enhancedBorderColor = effectiveAccentColor 
      ? `${effectiveAccentColor}${Math.round(contrastMultiplier * 255).toString(16).padStart(2, '0')}`
      : baseBorderColor;
    
    return `linear-gradient(315deg, ${enhancedBorderColor} 0%, rgba(120, 120, 120, 0) 30%, rgba(120, 120, 120, 0) 70%, ${enhancedBorderColor} 100%) border-box`;
  };

  // Fallback style for when effects are not loaded yet - ALWAYS VISIBLE
  const fallbackStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: effectiveCornerRadius,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    background: getBackgroundStyle(),
    backdropFilter: `blur(${effectiveBackdropBlur}px) saturate(${config.saturation / 100})`,
    pointerEvents: "none",
    opacity: intensityOpacity,
    transition: themeConfig.effects.transitionDuration,
    // Enhanced effects
    ...(config.glow && {
      boxShadow: `0 0 ${20 * contrastMultiplier}px ${effectiveAccentColor || themeColors.shadowAccent}`
    }),
    ...(config.highlight && {
      boxShadow: `inset 0 1px 0 ${themeColors.glassHighlight}, inset 0 -1px 0 ${themeColors.glassShadow}`
    })
  };

  const glassMorphismStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: effectiveCornerRadius,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    background: getBackgroundStyle(),
    backdropFilter: `blur(${effectiveBackdropBlur}px) saturate(${config.saturation / 100}) url(#${filterId})`,
    pointerEvents: "none",
    opacity: effectsReady ? intensityOpacity : 0,
    transition: themeConfig.effects.transitionDuration,
    // Enhanced effects
    ...(config.glow && {
      boxShadow: `0 0 ${20 * contrastMultiplier}px ${effectiveAccentColor || themeColors.shadowAccent}`
    }),
    ...(config.highlight && {
      boxShadow: `inset 0 1px 0 ${themeColors.glassHighlight}, inset 0 -1px 0 ${themeColors.glassShadow}`
    })
  };

  const gradientBorderStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: effectiveCornerRadius,
    zIndex: 2,
    pointerEvents: "none",
    background: getBorderStyle(),
    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    border: `1px solid transparent`,
    opacity: isLoaded ? contrastMultiplier : 0,
    transition: themeConfig.effects.transitionDuration
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    borderRadius: effectiveCornerRadius,
    overflow: "hidden",
    minHeight: "1px", // Ensure container has height even when empty
    ...style
  };

  // Generate clean displacement map for 'clean' variant
  const cleanDisplacementDataUri = useMemo(() => {
    if (variant !== 'clean') return null;
    
    const { width, height } = dimensions;
    const newwidth = width / 2;
    const newheight = height / 2;
    const border = Math.min(newwidth, newheight) * (config.border * 0.5);
    const effectiveRadius = Math.min(config.radius || 50, width / 2, height / 2);
    
    const svgContent = `
      <svg viewBox="0 0 ${newwidth} ${newheight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${newwidth}" height="${newheight}" fill="black"/>
        <rect x="0" y="0" width="${newwidth}" height="${newheight}" rx="${effectiveRadius}" fill="url(#red)" />
        <rect x="0" y="0" width="${newwidth}" height="${newheight}" rx="${effectiveRadius}" fill="url(#blue)" style="mix-blend-mode: difference" />
        <rect x="${border}" y="${border}" width="${newwidth - border * 2}" height="${newheight - border * 2}" rx="${effectiveRadius}" fill="hsl(0 0% ${config.lightness}% / ${config.alpha})" style="filter:blur(${config.blur}px)" />
      </svg>
    `;
    
    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  }, [dimensions, config, variant]);

  return (
    <>
      {/* SVG Preloader */}
      {isLoaded && (
        <SVGPreloader
          displacementDataUri={displacementDataUri}
          filterId={filterId}
          onLoad={handlePreloaderLoad}
        />
      )}
      
      <div
        ref={containerRef}
        className={className}
        style={containerStyle}
        {...props}
      >
        {/* Fallback glass effect without SVG filter */}
        <div style={fallbackStyle} />
        
        {/* Full glass effect with SVG filter */}
        <div style={glassMorphismStyle}>
          <svg 
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0
            }}
            xmlns="http://www.w3.org/2000/svg"
            onLoad={handleSvgLoad}
          >
            <defs>
              <filter 
                id={filterId}
                colorInterpolationFilters="sRGB"
              >
                <feImage 
                  href={variant === 'clean' ? cleanDisplacementDataUri || displacementDataUri : displacementDataUri}
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  result="map"
                />
                {variant === 'clean' ? (
                  // Clean filter with RGB channel separation
                  <>
                    <feDisplacementMap 
                      in="SourceGraphic"
                      in2="map"
                      scale={config.scale + config.dispersion}
                      xChannelSelector="R"
                      yChannelSelector="B"
                      result="dispRed"
                    />
                    <feColorMatrix 
                      in="dispRed"
                      type="matrix"
                      values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                      result="red"
                    />
                    <feDisplacementMap 
                      in="SourceGraphic"
                      in2="map"
                      scale={config.scale + config.dispersion}
                      xChannelSelector="R"
                      yChannelSelector="B"
                      result="dispGreen"
                    />
                    <feColorMatrix 
                      in="dispGreen"
                      type="matrix"
                      values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
                      result="green"
                    />
                    <feDisplacementMap 
                      in="SourceGraphic"
                      in2="map"
                      scale={config.scale + config.dispersion}
                      xChannelSelector="R"
                      yChannelSelector="B"
                      result="dispBlue"
                    />
                    <feColorMatrix 
                      in="dispBlue"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
                      result="blue"
                    />
                    <feBlend 
                      in="red"
                      in2="green"
                      mode="screen"
                      result="rg"
                    />
                    <feBlend 
                      in="rg"
                      in2="blue"
                      mode="screen"
                      result="output"
                    />
                    <feGaussianBlur 
                      in="output"
                      stdDeviation={config.displace}
                    />
                  </>
                ) : (
                  // Standard filter
                  <>
                    <feDisplacementMap 
                      in="SourceGraphic"
                      in2="map"
                      scale={config.scale + config.dispersion + (config.displacementScale || 0)}
                      xChannelSelector={config.x}
                      yChannelSelector={config.y}
                      result="dispRed"
                    />
                    <feColorMatrix 
                      in="dispRed"
                      type="matrix"
                      values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                      result="red"
                    />
                    <feDisplacementMap 
                      in="SourceGraphic"
                      in2="map"
                      scale={config.scale + config.dispersion + (config.displacementScale || 0)}
                      xChannelSelector={config.x}
                      yChannelSelector={config.y}
                      result="dispGreen"
                    />
                    <feColorMatrix 
                      in="dispGreen"
                      type="matrix"
                      values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
                      result="green"
                    />
                    <feDisplacementMap 
                      in="SourceGraphic"
                      in2="map"
                      scale={config.scale + config.dispersion + (config.displacementScale || 0)}
                      xChannelSelector={config.x}
                      yChannelSelector={config.y}
                      result="dispBlue"
                    />
                    <feColorMatrix 
                      in="dispBlue"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
                      result="blue"
                    />
                    <feBlend 
                      in="red"
                      in2="green"
                      mode="screen"
                      result="rg"
                    />
                    <feBlend 
                      in="rg"
                      in2="blue"
                      mode="screen"
                      result="output"
                    />
                    <feGaussianBlur 
                      in="output"
                      stdDeviation={config.displace}
                    />
                  </>
                )}
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Gradient border */}
        <div style={gradientBorderStyle} />
        
        {/* Content */}
        {children && (
          <div style={{ position: "relative", zIndex: 3 }}>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default LiquidGlass;