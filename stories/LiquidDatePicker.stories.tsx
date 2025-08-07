import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidDatePicker from '../src/components/LiquidDatePicker';

const meta: Meta<typeof LiquidDatePicker> = {
  title: 'Components/Input/LiquidDatePicker',
  component: LiquidDatePicker,
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['clean', 'default', 'subtle', 'intense', 'minimal'],
    },
    accent: {
      control: { type: 'select' },
      options: ['blue', 'purple', 'green', 'red', 'orange', 'pink', 'cyan', 'yellow', 'indigo', 'teal', 'emerald', 'violet', 'fuchsia', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showTime: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select Date',
    variant: 'clean',
    accent: 'blue',
    size: 'md',
    placeholder: 'Choose a date...',
    showTime: false,
  },
};

export const WithTime: Story = {
  args: {
    label: 'Select Date & Time',
    variant: 'clean',
    accent: 'purple',
    size: 'md',
    placeholder: 'Choose date and time...',
    showTime: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Date Picker',
    variant: 'clean',
    accent: 'green',
    size: 'sm',
    placeholder: 'Select date...',
    showTime: false,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Date Picker',
    variant: 'clean',
    accent: 'red',
    size: 'lg',
    placeholder: 'Select date...',
    showTime: false,
  },
};

export const WithConstraints: Story = {
  args: {
    label: 'Date with Constraints',
    variant: 'clean',
    accent: 'orange',
    size: 'md',
    placeholder: 'Select date...',
    minDate: '2024-01-01',
    maxDate: '2024-12-31',
    showTime: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date Picker',
    disabled: true,
    variant: 'clean',
    accent: 'gray',
    size: 'md',
    placeholder: 'Select date...',
    showTime: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [showTime, setShowTime] = useState(false);

    return (
      <div className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <select 
              value={size} 
              onChange={(e) => setSize(e.target.value as 'sm' | 'md' | 'lg')}
              className="w-full p-2 border rounded"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
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
                checked={showTime} 
                onChange={(e) => setShowTime(e.target.checked)}
                className="mr-2"
              />
              Show Time
            </label>
          </div>
        </div>

        <LiquidDatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          label="Interactive Date Picker"
          size={size}
          variant={variant}
          accent={accent}
          showTime={showTime}
        />

        {selectedDate && (
          <div className="p-4 bg-white/50 rounded-lg">
            <p className="text-sm font-medium">Selected date: <span className="font-bold">{selectedDate}</span></p>
          </div>
        )}
      </div>
    );
  },
}; 