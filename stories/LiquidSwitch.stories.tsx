import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidSwitch from '../src/components/LiquidSwitch';

const meta: Meta<typeof LiquidSwitch> = {
  title: 'Components/Input/LiquidSwitch',
  component: LiquidSwitch,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    label: 'Enable notifications',
    size: 'md',
    variant: 'clean',
    accent: 'blue',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Dark mode enabled',
    size: 'md',
    variant: 'clean',
    accent: 'purple',
  },
};

export const Small: Story = {
  args: {
    checked: false,
    label: 'Auto-save',
    size: 'sm',
    variant: 'clean',
    accent: 'green',
  },
};

export const Large: Story = {
  args: {
    checked: true,
    label: 'Advanced features',
    size: 'lg',
    variant: 'clean',
    accent: 'orange',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    label: 'Premium feature',
    size: 'md',
    variant: 'clean',
    accent: 'red',
    disabled: true,
  },
};

export const WithDescription: Story = {
  args: {
    checked: true,
    label: 'Enable analytics',
    size: 'md',
    variant: 'clean',
    accent: 'cyan',
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [disabled, setDisabled] = useState(false);

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
                checked={disabled} 
                onChange={(e) => setDisabled(e.target.checked)}
                className="mr-2"
              />
              Disabled
            </label>
          </div>
        </div>

        <LiquidSwitch
          checked={checked}
          onChange={setChecked}
          label="Interactive Switch"
          size={size}
          variant={variant}
          accent={accent}
          disabled={disabled}
        />

        <div className="p-4 bg-white/50 rounded-lg">
          <p className="text-sm font-medium">Switch is: <span className="font-bold">{checked ? 'ON' : 'OFF'}</span></p>
        </div>
      </div>
    );
  },
}; 