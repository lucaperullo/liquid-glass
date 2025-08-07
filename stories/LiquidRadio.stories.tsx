import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidRadio from '../src/components/LiquidRadio';

const meta: Meta<typeof LiquidRadio> = {
  title: 'Components/Input/LiquidRadio',
  component: LiquidRadio,
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
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    value: 'option1',
    label: 'Select an option',
    variant: 'clean',
    size: 'md',
    layout: 'vertical',
  },
};

export const Horizontal: Story = {
  args: {
    options: defaultOptions,
    value: 'option2',
    label: 'Select an option',
    variant: 'clean',
    size: 'md',
    layout: 'horizontal',
  },
};

export const Small: Story = {
  args: {
    options: defaultOptions,
    value: 'option1',
    label: 'Small Radio Group',
    variant: 'clean',
    size: 'sm',
    layout: 'vertical',
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    value: 'option1',
    label: 'Large Radio Group',
    variant: 'clean',
    size: 'lg',
    layout: 'vertical',
  },
};

export const WithError: Story = {
  args: {
    options: defaultOptions,
    value: 'option1',
    label: 'Select an option',
    error: 'Please select an option',
    variant: 'clean',
    size: 'md',
    layout: 'vertical',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    value: 'option1',
    label: 'Disabled Radio Group',
    disabled: true,
    variant: 'clean',
    size: 'md',
    layout: 'vertical',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [layout, setLayout] = useState<'vertical' | 'horizontal'>('vertical');

    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ];

    return (
      <div className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-3 gap-4">
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
          <div>
            <label className="block text-sm font-medium mb-2">Layout</label>
            <select 
              value={layout} 
              onChange={(e) => setLayout(e.target.value as 'vertical' | 'horizontal')}
              className="w-full p-2 border rounded"
            >
              <option value="vertical">Vertical</option>
              <option value="horizontal">Horizontal</option>
            </select>
          </div>
        </div>

        <LiquidRadio
          options={options}
          value={value}
          onChange={setValue}
          label="Interactive Radio Group"
          size={size}
          variant={variant}
          layout={layout}
        />

        <div className="p-4 bg-white/50 rounded-lg">
          <p className="text-sm font-medium">Selected value: <span className="font-bold">{value}</span></p>
        </div>
      </div>
    );
  },
}; 