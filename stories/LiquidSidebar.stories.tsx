import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidSidebar from '../src/components/LiquidSidebar';

const meta: Meta<typeof LiquidSidebar> = {
  title: 'Components/Layout/LiquidSidebar',
  component: LiquidSidebar,
  decorators: [
    (Story) => (
      <AlgUIThemeProvider defaultTheme="system">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
          <Story />
        </div>
      </AlgUIThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
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
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sidebarContent = (
  <div className="p-6 space-y-4">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">LG</span>
      </div>
      <h2 className="text-xl font-bold">Liquid Glass</h2>
    </div>
    
    <nav className="space-y-2">
      <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
        <span>Dashboard</span>
      </a>
      <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
        <span>Settings</span>
      </a>
      <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>Profile</span>
      </a>
      <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>Analytics</span>
      </a>
    </nav>
    
    <div className="pt-6 border-t border-white/20">
      <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span>Logout</span>
      </a>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    children: sidebarContent,
    position: 'left',
    variant: 'clean',
    accent: 'blue',
  },
};

export const RightSidebar: Story = {
  args: {
    children: sidebarContent,
    position: 'right',
    variant: 'clean',
    accent: 'purple',
  },
};

export const TopSidebar: Story = {
  args: {
    children: (
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">LG</span>
          </div>
          <h2 className="text-xl font-bold">Liquid Glass</h2>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-blue-500 transition-colors">Dashboard</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Settings</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Profile</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Analytics</a>
        </nav>
      </div>
    ),
    position: 'top',
    variant: 'clean',
    accent: 'green',
  },
};

export const BottomSidebar: Story = {
  args: {
    children: (
      <div className="p-4 flex items-center justify-center space-x-8">
        <a href="#" className="flex flex-col items-center space-y-1 hover:text-blue-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          </svg>
          <span className="text-xs">Dashboard</span>
        </a>
        <a href="#" className="flex flex-col items-center space-y-1 hover:text-blue-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
          <span className="text-xs">Settings</span>
        </a>
        <a href="#" className="flex flex-col items-center space-y-1 hover:text-blue-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs">Profile</span>
        </a>
        <a href="#" className="flex flex-col items-center space-y-1 hover:text-blue-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-xs">Analytics</span>
        </a>
      </div>
    ),
    position: 'bottom',
    variant: 'clean',
    accent: 'orange',
  },
};

export const Interactive: Story = {
  render: () => {
    const [position, setPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('left');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');

    return (
      <div className="relative h-screen">
        <div className="absolute top-4 left-4 z-10 bg-white/80 p-4 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Position</label>
              <select 
                value={position} 
                onChange={(e) => setPosition(e.target.value as 'left' | 'right' | 'top' | 'bottom')}
                className="w-full p-2 border rounded"
              >
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
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
        </div>

        <LiquidSidebar
          position={position}
          variant={variant}
          accent={accent}
        >
          {position === 'left' || position === 'right' ? sidebarContent : (
            position === 'top' ? (
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LG</span>
                  </div>
                  <h2 className="text-xl font-bold">Liquid Glass</h2>
                </div>
                <nav className="flex space-x-6">
                  <a href="#" className="hover:text-blue-500 transition-colors">Dashboard</a>
                  <a href="#" className="hover:text-blue-500 transition-colors">Settings</a>
                  <a href="#" className="hover:text-blue-500 transition-colors">Profile</a>
                  <a href="#" className="hover:text-blue-500 transition-colors">Analytics</a>
                </nav>
              </div>
            ) : (
              <div className="p-4 flex items-center justify-center space-x-8">
                <a href="#" className="flex flex-col items-center space-y-1 hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                  <span className="text-xs">Dashboard</span>
                </a>
                <a href="#" className="flex flex-col items-center space-y-1 hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                  <span className="text-xs">Settings</span>
                </a>
                <a href="#" className="flex flex-col items-center space-y-1 hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs">Profile</span>
                </a>
                <a href="#" className="flex flex-col items-center space-y-1 hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-xs">Analytics</span>
                </a>
              </div>
            )
          )}
        </LiquidSidebar>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Main Content Area</h1>
          <p className="text-gray-600 dark:text-gray-300">
            This is the main content area. The sidebar is positioned at: <strong>{position}</strong>
          </p>
        </div>
      </div>
    );
  },
}; 