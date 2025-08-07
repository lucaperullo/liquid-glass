import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidTooltip from '../src/components/LiquidTooltip';

const meta: Meta<typeof LiquidTooltip> = {
  title: 'Components/Feedback/LiquidTooltip',
  component: LiquidTooltip,
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
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
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
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
    size: 'md',
    variant: 'clean',
    accent: 'blue',
    delay: 200,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Hover me
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    size: 'md',
    variant: 'clean',
    accent: 'blue',
    delay: 200,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Top Tooltip
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    size: 'md',
    variant: 'clean',
    accent: 'purple',
    delay: 200,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay}>
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
          Bottom Tooltip
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    size: 'md',
    variant: 'clean',
    accent: 'green',
    delay: 200,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay}>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
          Left Tooltip
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    size: 'md',
    variant: 'clean',
    accent: 'red',
    delay: 200,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay}>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
          Right Tooltip
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const Small: Story = {
  args: {
    content: 'Small tooltip',
    position: 'top',
    size: 'sm',
    variant: 'clean',
    accent: 'orange',
    delay: 200,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay}>
        <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
          Small Tooltip
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const Large: Story = {
  args: {
    content: 'Large tooltip with more content',
    position: 'top',
    size: 'lg',
    variant: 'clean',
    accent: 'pink',
    delay: 200,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay}>
        <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
          Large Tooltip
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const LongDelay: Story = {
  args: {
    content: 'Tooltip with long delay',
    position: 'top',
    size: 'md',
    variant: 'clean',
    accent: 'cyan',
    delay: 1000,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay}>
        <button className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors">
          Long Delay
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    position: 'top',
    size: 'md',
    variant: 'clean',
    accent: 'gray',
    delay: 200,
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center justify-center h-64">
      <LiquidTooltip content={args.content} position={args.position} size={args.size} variant={args.variant} accent={args.accent} delay={args.delay} disabled={args.disabled}>
        <button className="px-4 py-2 bg-gray-500 text-white rounded cursor-not-allowed">
          Disabled Tooltip
        </button>
      </LiquidTooltip>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [delay, setDelay] = useState(200);
    const [content, setContent] = useState('Interactive tooltip content');

    return (
      <div className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Position</label>
            <select 
              value={position} 
              onChange={(e) => setPosition(e.target.value as 'top' | 'bottom' | 'left' | 'right')}
              className="w-full p-2 border rounded"
            >
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
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
        </div>
        
        <div className="grid grid-cols-2 gap-4">
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
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Delay (ms)</label>
            <input 
              type="number" 
              value={delay} 
              onChange={(e) => setDelay(Number(e.target.value))}
              min="0"
              max="2000"
              step="100"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <input 
              type="text" 
              value={content} 
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex items-center justify-center h-64">
          <LiquidTooltip
            content={content}
            position={position}
            size={size}
            variant={variant}
            accent={accent}
            delay={delay}
          >
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Interactive Tooltip
            </button>
          </LiquidTooltip>
        </div>
      </div>
    );
  },
}; 