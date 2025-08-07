import React, { useState, useEffect, useRef } from 'react';
import { LiquidSliderProps } from './LiquidSlider.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidSlider: React.FC<LiquidSliderProps> = ({
  items = [],
  mode = 'carousel',
  autoPlay = false,
  autoPlayInterval = 3000,
  showArrows = true,
  showDots = true,
  showThumbnails = false,
  size = 'md',
  variant = 'clean',
  accent = 'blue',
  disabled = false,
  className = '',
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  const sizeClasses = {
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80'
  };

  useEffect(() => {
    if (!autoPlay || disabled) return;

    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isPlaying, items.length, disabled]);

  const goToSlide = (index: number) => {
    if (disabled) return;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    if (disabled) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    if (disabled) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const toggleAutoPlay = () => {
    if (disabled) return;
    setIsPlaying(!isPlaying);
  };

  const handleDotClick = (index: number) => {
    goToSlide(index);
  };

  const handleThumbnailClick = (index: number) => {
    goToSlide(index);
  };

  const sliderClasses = `
    relative w-full overflow-hidden rounded-lg
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

  const arrowClasses = `
    absolute top-1/2 transform -translate-y-1/2 z-10
    p-2 rounded-full transition-all duration-200
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}
    ${showArrows ? 'opacity-100' : 'opacity-0'}
  `.trim();

  if (items.length === 0) {
    return (
      <div className={sliderClasses}>
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No items to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Main Slider */}
      <div
        ref={sliderRef}
        className={sliderClasses}
        style={{
          background: `linear-gradient(135deg, 
            ${themeColorsConfig.colors.glassBackground} 0%, 
            ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
          backdropFilter: 'blur(15px)',
          border: `1px solid ${themeColorsConfig.colors.glassBorder}`,
          boxShadow: `
            inset 0 1px 3px rgba(255, 255, 255, 0.1),
            0 4px 16px rgba(0, 0, 0, 0.1)
          `
        }}
        {...props}
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${items.length * 100}%`
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              style={{ width: `${100 / items.length}%` }}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              {item.overlay && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.overlay.title}</h3>
                    <p className="text-lg">{item.overlay.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`${arrowClasses} left-4`}
          style={{
            background: `linear-gradient(135deg, 
              ${themeColorsConfig.colors.glassBackground} 0%, 
              ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${themeColorsConfig.colors.glassBorder}`
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className={`${arrowClasses} right-4`}
          style={{
            background: `linear-gradient(135deg, 
              ${themeColorsConfig.colors.glassBackground} 0%, 
              ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${themeColorsConfig.colors.glassBorder}`
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Auto Play Toggle */}
        {autoPlay && (
          <button
            onClick={toggleAutoPlay}
            className="absolute top-4 right-4 p-2 rounded-full z-10"
            style={{
              background: `linear-gradient(135deg, 
                ${themeColorsConfig.colors.glassBackground} 0%, 
                ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${themeColorsConfig.colors.glassBorder}`
            }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isPlaying ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Dots Navigation */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}

      {/* Thumbnails */}
      {showThumbnails && items.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex
                  ? 'ring-2 ring-white scale-110'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-600">{item.title}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Slide Counter */}
      <div className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
};

export default LiquidSlider; 