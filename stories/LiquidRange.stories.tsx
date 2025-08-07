import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidRange from '../src/components/LiquidRange';

const meta: Meta<typeof LiquidRange> = {
  title: 'Components/Input/LiquidRange',
  component: LiquidRange,
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
    showValue: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Range Slider',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    variant: 'clean',
    accent: 'blue',
    size: 'md',
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Range',
    value: 25,
    min: 0,
    max: 100,
    step: 5,
    variant: 'clean',
    accent: 'purple',
    size: 'sm',
    showValue: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Range',
    value: 75,
    min: 0,
    max: 100,
    step: 1,
    variant: 'clean',
    accent: 'green',
    size: 'lg',
    showValue: true,
  },
};

export const WithSteps: Story = {
  args: {
    label: 'Range with Steps',
    value: 60,
    min: 0,
    max: 100,
    step: 10,
    variant: 'clean',
    accent: 'red',
    size: 'md',
    showValue: true,
  },
};

export const CustomRange: Story = {
  args: {
    label: 'Custom Range (0-200)',
    value: 100,
    min: 0,
    max: 200,
    step: 5,
    variant: 'clean',
    accent: 'orange',
    size: 'md',
    showValue: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Range',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    variant: 'clean',
    accent: 'gray',
    size: 'md',
    showValue: true,
  },
};

export const NoValue: Story = {
  args: {
    label: 'Range without Value Display',
    value: 30,
    min: 0,
    max: 100,
    step: 1,
    variant: 'clean',
    accent: 'pink',
    size: 'md',
    showValue: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [showValue, setShowValue] = useState(true);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [step, setStep] = useState(1);

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
            <label className="block text-sm font-medium mb-2">Step</label>
            <select 
              value={step} 
              onChange={(e) => setStep(Number(e.target.value))}
              className="w-full p-2 border rounded"
            >
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Min Value</label>
            <input 
              type="number" 
              value={min} 
              onChange={(e) => setMin(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Max Value</label>
            <input 
              type="number" 
              value={max} 
              onChange={(e) => setMax(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                checked={showValue} 
                onChange={(e) => setShowValue(e.target.checked)}
                className="mr-2"
              />
              Show Value
            </label>
          </div>
        </div>

        <LiquidRange
          value={value}
          onChange={setValue}
          min={min}
          max={max}
          step={step}
          label="Interactive Range Slider"
          size={size}
          variant={variant}
          accent={accent}
          showValue={showValue}
        />

        <div className="p-4 bg-white/50 rounded-lg">
          <p className="text-sm font-medium">Current value: <span className="font-bold">{value}</span></p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Range: {min} - {max} (Step: {step})
          </p>
        </div>
      </div>
    );
  },
}; 