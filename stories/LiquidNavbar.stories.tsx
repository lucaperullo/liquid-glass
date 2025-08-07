import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidNavbar from '../src/components/LiquidNavbar';

const meta: Meta<typeof LiquidNavbar> = {
  title: 'Components/Navigation/LiquidNavbar',
  component: LiquidNavbar,
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
    children: (
      <div className="flex items-center justify-between w-full">
        <div className="text-xl font-bold text-white">Liquid Glass</div>
        <nav className="flex space-x-6">
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">About</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Services</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Contact</a>
        </nav>
      </div>
    ),
    variant: 'clean',
    accent: 'blue',
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <div className="flex items-center justify-between w-full">
        <div className="text-xl font-bold text-white">With Actions</div>
        <nav className="flex space-x-6">
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">About</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Services</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    ),
    variant: 'clean',
    accent: 'red',
  },
};

export const Interactive: Story = {
  render: () => {
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');

    return (
      <div className="space-y-6 max-w-4xl">
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

        <LiquidNavbar
          variant={variant}
          accent={accent}
        >
          <div className="flex items-center justify-between w-full">
            <div className="text-xl font-bold text-white">Interactive Navbar</div>
            <nav className="flex space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">About</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">Services</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">Contact</a>
            </nav>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </LiquidNavbar>
      </div>
    );
  },
}; 