import React, { useState, useEffect } from 'react';
import { LiquidColorPickerProps } from './LiquidColorPicker.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';
import { TAILWIND_COLORS } from '../../utils/tailwindColors';

const LiquidColorPicker: React.FC<LiquidColorPickerProps> = ({
  value = '#3B82F6',
  onChange,
  disabled = false,
  size = 'md',
  variant = 'clean',
  accent = 'blue',
  showPreview = true,
  showHex = true,
  showRgb = false,
  label,
  className = '',
  ...props
}) => {
  const [selectedColor, setSelectedColor] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [customHex, setCustomHex] = useState(value);
  
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  useEffect(() => {
    setSelectedColor(value);
    setCustomHex(value);
  }, [value]);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const handleColorSelect = (color: string) => {
    if (disabled) return;
    
    setSelectedColor(color);
    setCustomHex(color);
    onChange?.(color);
    setIsOpen(false);
  };

  const handleHexChange = (hex: string) => {
    if (disabled) return;
    
    // Validate hex color
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexRegex.test(hex)) {
      setSelectedColor(hex);
      setCustomHex(hex);
      onChange?.(hex);
    } else {
      setCustomHex(hex);
    }
  };

  const handleHexBlur = () => {
    // Try to fix invalid hex
    let hex = customHex;
    if (!hex.startsWith('#')) {
      hex = '#' + hex;
    }
    if (hex.length === 4) {
      hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    if (hex.length === 7) {
      handleColorSelect(hex);
    }
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(selectedColor);

  const colorOptions = Object.entries(TAILWIND_COLORS).map(([colorName, shades]) => ({
    name: colorName,
    primary: shades[500],
    light: shades[300],
    dark: shades[700]
  }));

  const pickerClasses = `
    relative inline-flex items-center justify-center
    ${sizeClasses[size]}
    rounded-lg cursor-pointer
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
    ${className}
  `.trim();

  return (
    <div className="w-full">
      {label && (
        <label className={`
          block ${labelSizeClasses[size]} font-medium mb-2
          ${disabled ? 'text-gray-400' : 'text-gray-900 dark:text-white'}
        `.trim()}>
          {label}
        </label>
      )}
      
      <div className="relative">
        {/* Color Preview Button */}
        <button
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={pickerClasses}
          style={{
            background: `linear-gradient(135deg, 
              ${themeColorsConfig.colors.glassBackground} 0%, 
              ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${themeColorsConfig.colors.glassBorder}`
          }}
          {...props}
        >
          <div
            className="w-6 h-6 rounded border-2 border-white shadow-sm"
            style={{ backgroundColor: selectedColor }}
          />
        </button>

        {/* Color Picker Dropdown */}
        {isOpen && !disabled && (
          <div
            className="absolute top-full left-0 mt-2 z-50 w-80 p-4 rounded-lg shadow-xl"
            style={{
              background: `linear-gradient(135deg, 
                ${themeColorsConfig.colors.glassBackground} 0%, 
                ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
              backdropFilter: 'blur(15px)',
              border: `1px solid ${themeColorsConfig.colors.glassBorder}`,
              boxShadow: `
                inset 0 1px 3px rgba(255, 255, 255, 0.1),
                0 8px 32px rgba(0, 0, 0, 0.1)
              `
            }}
          >
            {/* Custom Hex Input */}
            {showHex && (
              <div className="mb-4">
                <label className="block text-xs font-medium mb-2 text-white">
                  Hex Color
                </label>
                <input
                  type="text"
                  value={customHex}
                  onChange={(e) => handleHexChange(e.target.value)}
                  onBlur={handleHexBlur}
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="#3B82F6"
                  maxLength={7}
                />
              </div>
            )}

            {/* RGB Display */}
            {showRgb && rgb && (
              <div className="mb-4">
                <label className="block text-xs font-medium mb-2 text-white">
                  RGB Values
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="text-xs text-white/60">R</div>
                    <div className="text-sm font-mono text-white">{rgb.r}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-white/60">G</div>
                    <div className="text-sm font-mono text-white">{rgb.g}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-white/60">B</div>
                    <div className="text-sm font-mono text-white">{rgb.b}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Color Preview */}
            {showPreview && (
              <div className="mb-4">
                <label className="block text-xs font-medium mb-2 text-white">
                  Preview
                </label>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded border-2 border-white shadow-sm"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <div className="flex-1">
                    <div className="text-sm font-mono text-white">{selectedColor}</div>
                    {rgb && (
                      <div className="text-xs text-white/60">
                        rgb({rgb.r}, {rgb.g}, {rgb.b})
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Color Palette */}
            <div>
              <label className="block text-xs font-medium mb-2 text-white">
                Color Palette
              </label>
              <div className="grid grid-cols-8 gap-2 max-h-48 overflow-y-auto">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorSelect(color.primary)}
                    className="w-8 h-8 rounded border-2 border-white/20 hover:border-white/40 transition-colors"
                    style={{ backgroundColor: color.primary }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Popular Colors */}
            <div className="mt-4">
              <label className="block text-xs font-medium mb-2 text-white">
                Popular Colors
              </label>
              <div className="grid grid-cols-6 gap-2">
                {[
                  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
                  '#FFA500', '#800080', '#008000', '#FFC0CB', '#A52A2A', '#000000'
                ].map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorSelect(color)}
                    className="w-6 h-6 rounded border border-white/20 hover:border-white/40 transition-colors"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiquidColorPicker; 