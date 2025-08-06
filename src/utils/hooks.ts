import { useState, useEffect, useCallback } from 'react';

export interface UseGlassLoadingState {
  isLoaded: boolean;
  svgLoaded: boolean;
  handleSvgLoad: () => void;
  shouldShowFallback: boolean;
}

export const useGlassLoading = (dimensions: { width: number; height: number }): UseGlassLoadingState => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [svgLoaded, setSvgLoaded] = useState(false);

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

  // Determine if we should show fallback
  const shouldShowFallback = !isLoaded || !svgLoaded;

  return {
    isLoaded,
    svgLoaded,
    handleSvgLoad,
    shouldShowFallback
  };
};

export const useGlassEffect = (config: any, dimensions: { width: number; height: number }) => {
  const { isLoaded, svgLoaded, handleSvgLoad, shouldShowFallback } = useGlassLoading(dimensions);

  const getOpacity = useCallback(() => {
    return isLoaded && svgLoaded ? 1 : 0;
  }, [isLoaded, svgLoaded]);

  const getTransition = useCallback(() => {
    return "opacity 0.3s ease-in-out";
  }, []);

  return {
    isLoaded,
    svgLoaded,
    handleSvgLoad,
    shouldShowFallback,
    getOpacity,
    getTransition
  };
}; 