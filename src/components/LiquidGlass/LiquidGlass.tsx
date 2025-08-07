import React, { useMemo, useEffect, useRef, useState, useId, useCallback } from 'react';
import { LiquidGlassProps } from './LiquidGlass.types';
import { getGlassConfig, generateDisplacementSVG, combineClassNames } from '../../utils';
import { DEFAULT_DIMENSIONS } from '../../utils/constants';
import SVGPreloader from './SVGPreloader';

const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  variant = "default",
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
  cornerRadius,
  overLight,
  className = "",
  style = {},
  ...props
}) => {
  const config = getGlassConfig(variant, {
    scale,
    radius,
    border,
    lightness,
    displace,
    alpha,
    blur,
    dispersion,
    frost,
    borderColor,
    refractionMode,
    displacementScale,
    blurAmount,
    saturation,
    chromaticAberration,
    elasticity,
    cornerRadius,
    overLight
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
  const effectiveBackdropBlur = backdropBlur + (effectiveBlur || 0);

  // Determine if effects should be visible
  const effectsReady = isLoaded && (svgLoaded || preloaderLoaded);

  // Fallback style for when effects are not loaded yet
  const fallbackStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: effectiveCornerRadius,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    background: `hsl(0 0% ${config.lightness}% / ${config.frost})`,
    backdropFilter: `blur(${effectiveBackdropBlur}px) saturate(${config.saturation / 100})`,
    pointerEvents: "none",
    opacity: effectsReady ? 1 : 0,
    transition: "opacity 0.3s ease-in-out"
  };

  const glassMorphismStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: effectiveCornerRadius,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    background: `hsl(0 0% ${config.lightness}% / ${config.frost})`,
    backdropFilter: `blur(${effectiveBackdropBlur}px) saturate(${config.saturation / 100}) url(#${filterId})`,
    pointerEvents: "none",
    opacity: effectsReady ? 1 : 0,
    transition: "opacity 0.3s ease-in-out"
  };

  const gradientBorderStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: effectiveCornerRadius,
    zIndex: 2,
    pointerEvents: "none",
    background: `linear-gradient(315deg, ${config.borderColor} 0%, rgba(120, 120, 120, 0) 30%, rgba(120, 120, 120, 0) 70%, ${config.borderColor} 100%) border-box`,
    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    border: `1px solid transparent`,
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.3s ease-in-out"
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    borderRadius: effectiveCornerRadius,
    overflow: "hidden",
    minHeight: "1px", // Ensure container has height even when empty
    ...style
  };

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
                  href={displacementDataUri}
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  result="map"
                />
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
              </filter>
            </defs>
          </svg>
        </div>
        <div style={gradientBorderStyle} />
        <div style={{ position: "relative", zIndex: 3 }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default LiquidGlass;