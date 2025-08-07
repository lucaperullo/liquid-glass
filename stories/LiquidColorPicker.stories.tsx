import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidColorPicker from '../src/components/LiquidColorPicker';

const meta: Meta<typeof LiquidColorPicker> = {
  title: 'Components/Input/LiquidColorPicker',
  component: LiquidColorPicker,
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
    showPreview: {
      control: { type: 'boolean' },
    },
    showHex: {
      control: { type: 'boolean' },
    },
    showRgb: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select Color',
    variant: 'clean',
    accent: 'blue',
    size: 'md',
    showPreview: true,
    showHex: true,
    showRgb: false,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Color Picker',
    variant: 'clean',
    accent: 'purple',
    size: 'sm',
    showPreview: true,
    showHex: true,
    showRgb: false,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Color Picker',
    variant: 'clean',
    accent: 'green',
    size: 'lg',
    showPreview: true,
    showHex: true,
    showRgb: false,
  },
};

export const WithRgb: Story = {
  args: {
    label: 'Color Picker with RGB',
    variant: 'clean',
    accent: 'red',
    size: 'md',
    showPreview: true,
    showHex: true,
    showRgb: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Color Picker',
    disabled: true,
    variant: 'clean',
    accent: 'gray',
    size: 'md',
    showPreview: true,
    showHex: true,
    showRgb: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState('#3B82F6');
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [showRgb, setShowRgb] = useState(false);

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
                checked={showRgb} 
                onChange={(e) => setShowRgb(e.target.checked)}
                className="mr-2"
              />
              Show RGB Values
            </label>
          </div>
        </div>

        <LiquidColorPicker
          value={selectedColor}
          onChange={setSelectedColor}
          label="Interactive Color Picker"
          size={size}
          variant={variant}
          accent={accent}
          showRgb={showRgb}
        />

        {selectedColor && (
          <div className="p-4 bg-white/50 rounded-lg">
            <p className="text-sm font-medium">Selected color: <span className="font-bold">{selectedColor}</span></p>
            <div 
              className="w-20 h-20 rounded-lg mt-2 border-2 border-gray-300"
              style={{ backgroundColor: selectedColor }}
            />
          </div>
        )}
      </div>
    );
  },
}; 