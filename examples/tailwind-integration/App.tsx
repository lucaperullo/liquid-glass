import React, { useState } from 'react';
import { 
  LiquidButton, 
  LiquidCard, 
  LiquidInput, 
  LiquidSelect, 
  LiquidTabs,
  LiquidGlass,
  getGlassColors,
  getTailwindColor,
  TAILWIND_COLORS
} from '../../src';

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedShade, setSelectedShade] = useState(500);
  const [isDark, setIsDark] = useState(false);

  const colorOptions = Object.keys(TAILWIND_COLORS).map(color => ({
    value: color,
    label: color.charAt(0).toUpperCase() + color.slice(1)
  }));

  const shadeOptions = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(shade => ({
    value: shade.toString(),
    label: shade.toString()
  }));

  const glassColors = getGlassColors(isDark, selectedColor);
  const selectedTailwindColor = getTailwindColor(selectedColor as any, selectedShade as any);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Liquid Glass UI - Tailwind Integration
        </h1>

        {/* Color Selection */}
        <LiquidCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Color Configuration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Color
              </label>
              <LiquidSelect
                value={selectedColor}
                onChange={setSelectedColor}
                options={colorOptions}
                placeholder="Select a color"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Shade
              </label>
              <LiquidSelect
                value={selectedShade.toString()}
                onChange={(value) => setSelectedShade(Number(value))}
                options={shadeOptions}
                placeholder="Select a shade"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Theme
              </label>
              <LiquidButton
                onClick={() => setIsDark(!isDark)}
                variant="clean"
                accent={selectedColor}
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </LiquidButton>
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
        </LiquidCard>

        {/* Component Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <LiquidCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Interactive Components
              </h3>
              
              <div className="space-y-4">
                <LiquidButton
                  variant="clean"
                  accent={selectedColor}
                  onClick={() => alert('Button clicked!')}
                >
                  Primary Button
                </LiquidButton>
                
                <LiquidInput
                  placeholder="Enter some text..."
                  variant="clean"
                  accent={selectedColor}
                />
                
                <LiquidSelect
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' }
                  ]}
                  placeholder="Select an option"
                  variant="clean"
                  accent={selectedColor}
                />
              </div>
            </LiquidCard>

            <LiquidCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Glass Effects
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: glassColors.glass }}>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Glass Background Effect
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border" style={{ borderColor: glassColors.border }}>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Glass Border Effect
                  </p>
                </div>
              </div>
            </LiquidCard>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <LiquidCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Tabs Example
              </h3>
              
              <LiquidTabs
                tabs={[
                  { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
                  { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
                  { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' }
                ]}
                variant="clean"
                accent={selectedColor}
              />
            </LiquidCard>

            <LiquidCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Custom Glass Container
              </h3>
              
              <LiquidGlass
                variant="clean"
                accent={selectedColor}
                className="p-6 rounded-lg"
              >
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Custom Glass Effect
                  </h4>
                  <p className="text-white/80">
                    This is a custom glass container with the selected accent color.
                  </p>
                </div>
              </LiquidGlass>
            </LiquidCard>
          </div>
        </div>

        {/* Color Palette */}
        <LiquidCard className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Available Colors
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {Object.keys(TAILWIND_COLORS).slice(0, 16).map(color => (
              <div key={color} className="text-center">
                <div 
                  className="w-12 h-12 rounded-lg mx-auto mb-2 cursor-pointer hover:scale-110 transition-transform"
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
        </LiquidCard>
      </div>
    </div>
  );
};

export default App; 