import React, { useState } from 'react';
import {
  AlgUIThemeProvider,
  useAlgUITheme,
  AlgUIThemeSwitch,
  LiquidGlass,
  LiquidButton,
  LiquidCard,
  LiquidProgressBar,
  LiquidSlider,
  LiquidInput,
  LiquidBadge,
  LiquidRange
} from '../../src';

const ThemeDemoContent: React.FC = () => {
  const { theme, isLight, isDark, colors } = useAlgUITheme();
  const [progress, setProgress] = useState(65);
  const [sliderValue, setSliderValue] = useState(50);
  const [inputValue, setInputValue] = useState('');

  return (
    <div 
      className="min-h-screen p-8 transition-all duration-500"
      style={{ background: colors.background }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with Theme Switch */}
        <LiquidCard className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                algUI - Dual Theme System
              </h1>
              <p className="text-lg" style={{ color: colors.textSecondary }}>
                Current theme: <span className="font-semibold">{theme}</span>
              </p>
            </div>
            <AlgUIThemeSwitch size="lg" />
          </div>
        </LiquidCard>

        {/* Theme Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LiquidCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.textPrimary }}>
              Crystal Light Theme
            </h2>
            <p className="mb-4" style={{ color: colors.textSecondary }}>
              Clean, minimal glass effects with transparent and refined aesthetics.
            </p>
            <ul className="space-y-2" style={{ color: colors.textTertiary }}>
              <li>• Transparent and refined glass effects</li>
              <li>• Clean and minimal design</li>
              <li>• Professional color palette</li>
              <li>• Subtle borders and shadows</li>
            </ul>
          </LiquidCard>

          <LiquidCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.textPrimary }}>
              Plasma Dark Theme
            </h2>
            <p className="mb-4" style={{ color: colors.textSecondary }}>
              Sophisticated dark glass effects with elegant color contrasts.
            </p>
            <ul className="space-y-2" style={{ color: colors.textTertiary }}>
              <li>• Dark and elegant glass effects</li>
              <li>• High contrast readability</li>
              <li>• Sophisticated color palette</li>
              <li>• Defined borders and shadows</li>
            </ul>
          </LiquidCard>
        </div>

        {/* Interactive Components */}
        <LiquidCard className="p-6">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
            Interactive Components
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Progress Bar */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: colors.textSecondary }}>
                Progress Bar
              </h3>
              <LiquidProgressBar 
                progress={progress}
                intensity={80}
                accentColor={colors.accentPrimary}
                contrast={70}
                glow={true}
                highlight={true}
              />
            </div>

            {/* Slider */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: colors.textSecondary }}>
                Slider Control
              </h3>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Theme Intensity
                    </label>
                    <LiquidRange
                      value={sliderValue}
                      onChange={setSliderValue}
                      accent="purple"
                      size="md"
                    />
                  </div>
            </div>
          </div>

          {/* Input */}
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: colors.textSecondary }}>
              Input Field
            </h3>
            <LiquidInput
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              placeholder="Type something..."
              accentColor={colors.accentTertiary}
              intensity={80}
              contrast={75}
              glow={true}
              highlight={true}
            />
          </div>
        </LiquidCard>

        {/* Buttons */}
        <LiquidCard className="p-6">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
            Buttons
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <LiquidButton 
              accentColor={colors.accentPrimary}
              intensity={75}
              contrast={70}
              glow={true}
              highlight={true}
            >
              Primary
            </LiquidButton>
            
            <LiquidButton 
              accentColor={colors.accentSuccess}
              intensity={75}
              contrast={70}
              glow={true}
              highlight={true}
            >
              Success
            </LiquidButton>
            
            <LiquidButton 
              accentColor={colors.accentWarning}
              intensity={75}
              contrast={70}
              glow={true}
              highlight={true}
            >
              Warning
            </LiquidButton>
            
            <LiquidButton 
              accentColor={colors.accentError}
              intensity={75}
              contrast={70}
              glow={true}
              highlight={true}
            >
              Error
            </LiquidButton>
          </div>
        </LiquidCard>

        {/* Badges */}
        <LiquidCard className="p-6">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
            Badges
          </h2>
          
          <div className="flex flex-wrap gap-4">
            <LiquidBadge 
              color="default"
              intensity={75}
              accentColor={colors.accentPrimary}
              contrast={70}
              glow={true}
            >
              Default
            </LiquidBadge>
            
            <LiquidBadge 
              color="success"
              intensity={75}
              accentColor={colors.accentSuccess}
              contrast={70}
              glow={true}
            >
              Success
            </LiquidBadge>
            
            <LiquidBadge 
              color="warning"
              intensity={75}
              accentColor={colors.accentWarning}
              contrast={70}
              glow={true}
            >
              Warning
            </LiquidBadge>
            
            <LiquidBadge 
              color="error"
              intensity={75}
              accentColor={colors.accentError}
              contrast={70}
              glow={true}
            >
              Error
            </LiquidBadge>
            
            <LiquidBadge 
              color="info"
              intensity={75}
              accentColor={colors.accentInfo}
              contrast={70}
              glow={true}
            >
              Info
            </LiquidBadge>
          </div>
        </LiquidCard>

        {/* Color Palette */}
        <LiquidCard className="p-6">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
            Theme Colors
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-lg mx-auto mb-2"
                style={{ backgroundColor: colors.accentPrimary }}
              />
              <p className="text-sm" style={{ color: colors.textSecondary }}>Primary</p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-lg mx-auto mb-2"
                style={{ backgroundColor: colors.accentSecondary }}
              />
              <p className="text-sm" style={{ color: colors.textSecondary }}>Secondary</p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-lg mx-auto mb-2"
                style={{ backgroundColor: colors.accentSuccess }}
              />
              <p className="text-sm" style={{ color: colors.textSecondary }}>Success</p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-lg mx-auto mb-2"
                style={{ backgroundColor: colors.accentError }}
              />
              <p className="text-sm" style={{ color: colors.textSecondary }}>Error</p>
            </div>
          </div>
        </LiquidCard>

        {/* Theme Stats */}
        <LiquidCard className="p-6">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
            Theme Statistics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
              <p className="text-2xl font-bold" style={{ color: colors.textPrimary }}>
                {isLight ? 'Crystal' : 'Plasma'}
              </p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>Theme Mode</p>
            </div>
            
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
              <p className="text-2xl font-bold" style={{ color: colors.textPrimary }}>
                {isLight ? 'Light' : 'Dark'}
              </p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>Color Scheme</p>
            </div>
            
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
              <p className="text-2xl font-bold" style={{ color: colors.textPrimary }}>
                {isLight ? 'Subtle' : 'Bold'}
              </p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>Glass Effect</p>
            </div>
          </div>
        </LiquidCard>
      </div>
    </div>
  );
};

const ThemeDemo: React.FC = () => {
  return (
    <AlgUIThemeProvider defaultTheme="crystal-light">
      <ThemeDemoContent />
    </AlgUIThemeProvider>
  );
};

export default ThemeDemo; 