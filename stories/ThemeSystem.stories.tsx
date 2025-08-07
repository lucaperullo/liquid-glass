import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider, AlgUIThemeSwitch, useAlgUITheme } from '../src';
import LiquidGlass from '../src/components/LiquidGlass';
import LiquidButton from '../src/components/LiquidButton';
import LiquidCard from '../src/components/LiquidCard';

const ThemeDemo: React.FC = () => {
  const { theme, systemTheme, isSystem, isDark, isLight } = useAlgUITheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">System Theme Detection</h1>
          <p className="text-white/80 text-lg">
            Watch the theme automatically adapt to your system preferences
          </p>
        </div>

        {/* Theme Controls */}
        <div className="flex justify-center">
          <AlgUIThemeSwitch size="lg" variant="clean" />
        </div>

        {/* Theme Info */}
        <LiquidCard variant="clean" className="p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Current Theme Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              <div>
                <h3 className="font-semibold mb-2">Selected Theme</h3>
                <p className="text-white/80">{theme}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">System Theme</h3>
                <p className="text-white/80">{systemTheme}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is System Mode</h3>
                <p className="text-white/80">{isSystem ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Effective Theme</h3>
                <p className="text-white/80">{isDark ? 'Dark' : 'Light'}</p>
              </div>
            </div>
          </div>
        </LiquidCard>

        {/* Component Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LiquidGlass variant="clean" className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Liquid Glass</h3>
              <p className="text-white/80">
                This component automatically adapts to the current theme.
              </p>
              <LiquidButton variant="clean" size="md">
                Interactive Button
              </LiquidButton>
            </div>
          </LiquidGlass>

          <LiquidCard variant="clean" className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Liquid Card</h3>
              <p className="text-white/80">
                All components respect the system theme when in system mode.
              </p>
              <div className="flex gap-2">
                <LiquidButton variant="clean" size="sm">Small</LiquidButton>
                <LiquidButton variant="clean" size="md">Medium</LiquidButton>
              </div>
            </div>
          </LiquidCard>
        </div>

        {/* Instructions */}
        <LiquidGlass variant="clean" className="p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">How to Test</h3>
            <div className="text-white/80 space-y-2">
              <p>1. <strong>System Mode</strong>: The theme will automatically follow your system preference</p>
              <p>2. <strong>Manual Mode</strong>: Click the theme switch to manually select Light or Dark</p>
              <p>3. <strong>System Change</strong>: Change your system theme and watch the app adapt automatically</p>
            </div>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Theme System/System Theme Detection',
  component: ThemeDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Demonstrates automatic system theme detection with manual override options.',
      },
    },
  },
  decorators: [
    (Story) => (
      <AlgUIThemeProvider defaultTheme="system">
        <Story />
      </AlgUIThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SystemThemeDemo: Story = {
  render: () => <ThemeDemo />,
}; 