import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import { LiquidGlass, LiquidButton } from '../src';

const meta: Meta = {
  title: 'Test/Simple Test',
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

export const SimpleTest: Story = {
  render: () => (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Test Story</h1>
      <LiquidGlass variant="clean" accent="blue" className="p-4">
        <p>This is a test component</p>
      </LiquidGlass>
      <LiquidButton variant="clean" accent="green">
        Test Button
      </LiquidButton>
    </div>
  ),
}; 
