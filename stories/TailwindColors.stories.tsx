import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import { 
  getTailwindColor, 
  getGlassColors, 
  TAILWIND_COLORS 
} from '../src/utils/tailwindColors';

const meta: Meta = {
  title: 'Utilities/TailwindColors',
  decorators: [
    (Story) => (
      <AlgUIThemeProvider defaultTheme="system">
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
          <Story />
        </div>
      </AlgUIThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const TailwindColorsDemo: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedShade, setSelectedShade] = useState(500);
  const [isDark, setIsDark] = useState(false);

  const colorOptions = Object.keys(TAILWIND_COLORS).map(color => ({
    value: color,
    label: color.charAt(0).toUpperCase() + color.slice(1)
  }));

  const shadeOptions = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(shade => ({
    value: shade,
    label: shade.toString()
  }));

  const glassColors = getGlassColors(isDark, selectedColor);
  const selectedTailwindColor = getTailwindColor(selectedColor as any, selectedShade as any);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Tailwind Colors Integration
      </h1>

      {/* Color Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Color
          </label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {colorOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Shade
          </label>
          <select
            value={selectedShade}
            onChange={(e) => setSelectedShade(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            {shadeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Theme
          </label>
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      {/* Color Preview */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div 
            className="w-20 h-20 rounded-lg mx-auto mb-2 border-2 border-gray-300"
            style={{ backgroundColor: selectedTailwindColor }}
            title={`Selected: ${selectedTailwindColor}`}
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tailwind Color: {selectedTailwindColor}
          </p>
        </div>
        
        <div className="text-center">
          <div 
            className="w-20 h-20 rounded-lg mx-auto mb-2 border-2 border-gray-300"
            style={{ backgroundColor: glassColors.primary }}
            title={`Glass Primary: ${glassColors.primary}`}
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Glass Primary: {glassColors.primary}
          </p>
        </div>
      </div>

      {/* Glass Colors Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Glass Colors
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Primary:</span>
              <div 
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: glassColors.primary }}
                title={glassColors.primary}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Glass:</span>
              <div 
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: glassColors.glass }}
                title={glassColors.glass}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Border:</span>
              <div 
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: glassColors.border }}
                title={glassColors.border}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Highlight:</span>
              <div 
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: glassColors.highlight }}
                title={glassColors.highlight}
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-white/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Color Palette
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {Object.keys(TAILWIND_COLORS).slice(0, 16).map(color => (
              <div key={color} className="text-center">
                <div 
                  className="w-8 h-8 rounded mx-auto mb-1 cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: getTailwindColor(color as any, 500) }}
                  onClick={() => setSelectedColor(color)}
                  title={color}
                />
                <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                  {color}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <TailwindColorsDemo />
}; 