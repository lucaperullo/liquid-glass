import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidTextarea from '../src/components/LiquidTextarea';

const meta: Meta<typeof LiquidTextarea> = {
  title: 'Components/Input/LiquidTextarea',
  component: LiquidTextarea,
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
    disabled: {
      control: { type: 'boolean' },
    },
    showCharacterCount: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description here...',
    rows: 4,
    maxLength: 500,
    showCharacterCount: true,
    variant: 'clean',
    size: 'md',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Bio',
    value: 'This is a sample textarea with some content. It demonstrates how the component looks with pre-filled text.',
    rows: 6,
    maxLength: 1000,
    showCharacterCount: true,
    variant: 'clean',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    label: 'Short Note',
    placeholder: 'Write a short note...',
    rows: 3,
    size: 'sm',
    variant: 'clean',
  },
};

export const Large: Story = {
  args: {
    label: 'Long Description',
    placeholder: 'Write a detailed description...',
    rows: 8,
    size: 'lg',
    variant: 'clean',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email...',
    error: 'Please enter a valid email address',
    variant: 'clean',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read Only',
    value: 'This textarea is disabled and cannot be edited.',
    disabled: true,
    variant: 'clean',
    size: 'md',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [showCharacterCount, setShowCharacterCount] = useState(true);

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
        
        <div>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={showCharacterCount} 
              onChange={(e) => setShowCharacterCount(e.target.checked)}
              className="mr-2"
            />
            Show Character Count
          </label>
        </div>

        <LiquidTextarea
          label="Interactive Textarea"
          value={value}
          onChange={setValue}
          placeholder="Type something here..."
          rows={6}
          maxLength={500}
          showCharacterCount={showCharacterCount}
          size={size}
          variant={variant}
        />
      </div>
    );
  },
}; 