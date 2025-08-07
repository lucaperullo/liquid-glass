import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider, useAlgUITheme } from '../src';

const HookDemoComponent = () => {
  const { 
    theme, 
    setTheme, 
    toggleTheme, 
    isLight, 
    isDark, 
    colors 
  } = useAlgUITheme();

  return (
    <div 
      className="min-h-screen p-8 transition-all duration-500"
      style={{ background: colors.background }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            useAlgUITheme Hook Demo
          </h1>
          <p className="text-lg" style={{ color: colors.textSecondary }}>
            Explore the theme system programmatically
          </p>
        </div>

        {/* Theme Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.textPrimary }}>
              Current Theme
            </h2>
            <div className="space-y-3" style={{ color: colors.textSecondary }}>
              <p><strong>Theme:</strong> {theme}</p>
              <p><strong>Mode:</strong> {isLight ? 'Light' : 'Dark'}</p>
              <p><strong>Is Light:</strong> {isLight ? 'Yes' : 'No'}</p>
              <p><strong>Is Dark:</strong> {isDark ? 'Yes' : 'No'}</p>
            </div>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.textPrimary }}>
              Theme Actions
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => setTheme('crystal-light')}
                className="w-full px-4 py-2 rounded transition-colors"
                style={{ 
                  backgroundColor: colors.accentPrimary,
                  color: colors.textInverse
                }}
              >
                Set Crystal Light
              </button>
              <button
                onClick={() => setTheme('plasma-dark')}
                className="w-full px-4 py-2 rounded transition-colors"
                style={{ 
                  backgroundColor: colors.accentSecondary,
                  color: colors.textInverse
                }}
              >
                Set Plasma Dark
              </button>
              <button
                onClick={toggleTheme}
                className="w-full px-4 py-2 rounded transition-colors"
                style={{ 
                  backgroundColor: colors.accentTertiary,
                  color: colors.textInverse
                }}
              >
                Toggle Theme
              </button>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
            Theme Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-lg mx-auto mb-2 border-2"
                style={{ 
                  backgroundColor: colors.accentPrimary,
                  borderColor: colors.borderPrimary
                }}
              />
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Primary</p>
              <p className="text-xs" style={{ color: colors.textSecondary }}>{colors.accentPrimary}</p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-lg mx-auto mb-2 border-2"
                style={{ 
                  backgroundColor: colors.accentSecondary,
                  borderColor: colors.borderPrimary
                }}
              />
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Secondary</p>
              <p className="text-xs" style={{ color: colors.textSecondary }}>{colors.accentSecondary}</p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-lg mx-auto mb-2 border-2"
                style={{ 
                  backgroundColor: colors.accentSuccess,
                  borderColor: colors.borderPrimary
                }}
              />
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Success</p>
              <p className="text-xs" style={{ color: colors.textSecondary }}>{colors.accentSuccess}</p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-lg mx-auto mb-2 border-2"
                style={{ 
                  backgroundColor: colors.accentError,
                  borderColor: colors.borderPrimary
                }}
              />
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Error</p>
              <p className="text-xs" style={{ color: colors.textSecondary }}>{colors.accentError}</p>
            </div>
          </div>
        </div>

        {/* Text Colors */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
            Text Colors
          </h2>
          <div className="space-y-3">
            <p className="text-lg" style={{ color: colors.textPrimary }}>
              Primary Text Color - This is the main text color
            </p>
            <p className="text-base" style={{ color: colors.textSecondary }}>
              Secondary Text Color - This is used for less important text
            </p>
            <p className="text-sm" style={{ color: colors.textTertiary }}>
              Tertiary Text Color - This is used for subtle text elements
            </p>
            <p className="text-base" style={{ color: colors.textInverse }}>
              Inverse Text Color - This is used on dark backgrounds
            </p>
          </div>
        </div>

        {/* Background Colors */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
            Background Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg" style={{ backgroundColor: colors.background }}>
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Main Background</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Secondary Background</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: colors.backgroundTertiary }}>
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Tertiary Background</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof HookDemoComponent> = {
  title: 'Theme System/useAlgUITheme Hook',
  component: HookDemoComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Demonstration of the useAlgUITheme hook for programmatic theme control. Shows all available properties and methods.',
      },
    },
  },
  decorators: [
    (Story) => (
      <AlgUIThemeProvider defaultTheme="crystal-light">
        <Story />
      </AlgUIThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <HookDemoComponent />,
};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <AlgUIThemeProvider defaultTheme="plasma-dark">
        <Story />
      </AlgUIThemeProvider>
    ),
  ],
  render: () => <HookDemoComponent />,
}; 