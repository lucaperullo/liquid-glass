import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidStats from '../src/components/LiquidStats';

const meta: Meta<typeof LiquidStats> = {
  title: 'Components/Feedback/LiquidStats',
  component: LiquidStats,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { value: '1,234', label: 'Total Users' },
      { value: '567', label: 'Active Users' },
      { value: '89%', label: 'Conversion Rate' },
    ],
    variant: 'clean',
    accent: 'blue',
  },
};

export const SingleStat: Story = {
  args: {
    items: [
      { value: '2,847', label: 'Revenue' },
    ],
    variant: 'clean',
    accent: 'green',
  },
};

export const MultipleStats: Story = {
  args: {
    items: [
      { value: '12.5K', label: 'Page Views' },
      { value: '3.2K', label: 'Unique Visitors' },
      { value: '2.1K', label: 'Bounce Rate' },
      { value: '45.2%', label: 'Conversion' },
    ],
    variant: 'clean',
    accent: 'purple',
  },
};

export const FinancialStats: Story = {
  args: {
    items: [
      { value: '$12,847', label: 'Revenue' },
      { value: '$8,234', label: 'Expenses' },
      { value: '$4,613', label: 'Profit' },
      { value: '36%', label: 'Margin' },
    ],
    variant: 'clean',
    accent: 'green',
  },
};

export const PerformanceStats: Story = {
  args: {
    items: [
      { value: '99.9%', label: 'Uptime' },
      { value: '245ms', label: 'Response Time' },
      { value: '1.2M', label: 'Requests/min' },
    ],
    variant: 'clean',
    accent: 'cyan',
  },
};

export const Interactive: Story = {
  render: () => {
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [stats, setStats] = useState([
      { value: '1,234', label: 'Total Users' },
      { value: '567', label: 'Active Users' },
      { value: '89%', label: 'Conversion Rate' },
    ]);

    const addStat = () => {
      setStats([...stats, { value: 'New', label: 'Stat' }]);
    };

    const removeStat = () => {
      if (stats.length > 1) {
        setStats(stats.slice(0, -1));
      }
    };

    return (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-4">
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
          
          <div className="flex space-x-2">
            <button 
              onClick={addStat}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Stat
            </button>
            <button 
              onClick={removeStat}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove Stat
            </button>
          </div>
        </div>

        <LiquidStats
          items={stats}
          variant={variant}
          accent={accent}
        />

        <div className="p-4 bg-white/50 rounded-lg">
          <p className="text-sm font-medium">Current stats: <span className="font-bold">{stats.length}</span> items</p>
        </div>
      </div>
    );
  },
}; 