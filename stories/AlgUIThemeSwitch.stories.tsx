import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider, AlgUIThemeSwitch } from '../src';

const ThemeSwitchDemo = () => {
  return (
    <AlgUIThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              AlgUI Theme Select
            </h1>
            <p className="text-white/80 mb-8">
              Use the dropdown below to select between Light, Dark, and System themes
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Small Size</h3>
              <AlgUIThemeSwitch size="sm" variant="clean" />
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Medium Size (Default)</h3>
              <AlgUIThemeSwitch size="md" variant="clean" />
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Large Size</h3>
              <AlgUIThemeSwitch size="lg" variant="clean" />
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Without System Option</h3>
              <AlgUIThemeSwitch size="md" variant="clean" showSystem={false} />
            </div>
          </div>
        </div>
      </div>
    </AlgUIThemeProvider>
  );
};

const meta: Meta<typeof ThemeSwitchDemo> = {
  title: 'Theme System/AlgUIThemeSwitch',
  component: ThemeSwitchDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive theme select dropdown for choosing between Light, Dark, and System themes. Features smooth animations and accessibility support.',
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

export const Default: Story = {
  render: () => <ThemeSwitchDemo />,
};

export const SmallSize: Story = {
  render: () => (
    <AlgUIThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Small Theme Select</h2>
          <AlgUIThemeSwitch size="sm" variant="clean" />
        </div>
      </div>
    </AlgUIThemeProvider>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <AlgUIThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Large Theme Select</h2>
          <AlgUIThemeSwitch size="lg" variant="clean" />
        </div>
      </div>
    </AlgUIThemeProvider>
  ),
};

export const NoSystemOption: Story = {
  render: () => (
    <AlgUIThemeProvider defaultTheme="crystal-light">
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Theme Select (Light/Dark Only)</h2>
          <AlgUIThemeSwitch size="md" variant="clean" showSystem={false} />
        </div>
      </div>
    </AlgUIThemeProvider>
  ),
}; 