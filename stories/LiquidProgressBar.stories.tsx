import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidProgressBar from '../src/components/LiquidProgressBar';

const meta: Meta<typeof LiquidProgressBar> = {
  title: 'Components/Feedback/LiquidProgressBar',
  component: LiquidProgressBar,
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
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['clean', 'default', 'subtle', 'intense', 'minimal'],
    },
    accent: {
      control: { type: 'select' },
      options: ['blue', 'purple', 'green', 'red', 'orange', 'pink', 'cyan', 'yellow', 'indigo', 'teal', 'emerald', 'violet', 'fuchsia', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone'],
    },
    showLabel: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    variant: 'clean',
    accent: 'blue',
    showLabel: true,
  },
};

export const Small: Story = {
  args: {
    progress: 25,
    variant: 'clean',
    accent: 'purple',
    showLabel: true,
  },
};

export const Large: Story = {
  args: {
    progress: 75,
    variant: 'clean',
    accent: 'green',
    showLabel: true,
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
    variant: 'clean',
    accent: 'green',
    showLabel: true,
  },
};

export const NoLabel: Story = {
  args: {
    progress: 60,
    variant: 'clean',
    accent: 'red',
    showLabel: false,
  },
};

export const NotAnimated: Story = {
  args: {
    progress: 40,
    variant: 'clean',
    accent: 'orange',
    showLabel: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = useState(50);
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [showLabel, setShowLabel] = useState(true);

    return (
      <div className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Progress (%)</label>
            <input 
              type="range" 
              value={progress} 
              onChange={(e) => setProgress(Number(e.target.value))}
              min="0"
              max="100"
              className="w-full"
            />
            <span className="text-sm text-gray-600">{progress}%</span>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Variant</label>
            <select 
              value={variant} 
              onChange={(e) => setVariant(e.target.value as 'clean' | 'default' | 'subtle' | 'intense' | 'minimal')}
              className="w-full p-2 border rounded"
            >
              <option value="clean">Clean</option>
              <option value="default">Default</option>
              <option value="subtle">Subtle</option>
              <option value="intense">Intense</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Accent Color</label>
            <select 
              value={accent} 
              onChange={(e) => setAccent(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
              <option value="cyan">Cyan</option>
              <option value="yellow">Yellow</option>
              <option value="indigo">Indigo</option>
              <option value="teal">Teal</option>
              <option value="emerald">Emerald</option>
              <option value="violet">Violet</option>
              <option value="fuchsia">Fuchsia</option>
              <option value="rose">Rose</option>
            </select>
          </div>
          <div>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                checked={showLabel} 
                onChange={(e) => setShowLabel(e.target.checked)}
                className="mr-2"
              />
              Show Label
            </label>
          </div>
        </div>

        <LiquidProgressBar
          progress={progress}
          showLabel={showLabel}
          variant={variant}
          accent={accent}
        />

        <div className="p-4 bg-white/50 rounded-lg">
          <p className="text-sm font-medium">Current progress: <span className="font-bold">{progress}%</span></p>
        </div>
      </div>
    );
  },
}; 
