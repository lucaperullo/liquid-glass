import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LiquidNavbar from '../src/components/LiquidNavbar';
import LiquidButton from '../src/components/LiquidButton';

const meta: Meta<typeof LiquidNavbar> = {
  title: 'Components/LiquidNavbar',
  component: LiquidNavbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Glass morphism navbar component with customizable variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'intense', 'minimal'],
      description: 'Visual variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <LiquidNavbar variant="default">
        <div className="flex items-center justify-between w-full">
          <div className="text-white font-bold text-xl">ALG UI</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Components</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Docs</a>
            <LiquidButton size="sm">Login</LiquidButton>
          </div>
        </div>
      </LiquidNavbar>
      
      <LiquidNavbar variant="subtle">
        <div className="flex items-center justify-between w-full">
          <div className="text-white font-bold text-xl">ALG UI</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Components</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Docs</a>
            <LiquidButton size="sm" variant="subtle">Login</LiquidButton>
          </div>
        </div>
      </LiquidNavbar>
      
      <LiquidNavbar variant="intense">
        <div className="flex items-center justify-between w-full">
          <div className="text-white font-bold text-xl">ALG UI</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Components</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Docs</a>
            <LiquidButton size="sm" variant="intense">Login</LiquidButton>
          </div>
        </div>
      </LiquidNavbar>
      
      <LiquidNavbar variant="minimal">
        <div className="flex items-center justify-between w-full">
          <div className="text-white font-bold text-xl">ALG UI</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Components</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Docs</a>
            <LiquidButton size="sm" variant="minimal">Login</LiquidButton>
          </div>
        </div>
      </LiquidNavbar>
    </div>
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <LiquidNavbar>
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-bold text-xl">ALG UI</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Components</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Documentation</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Support</a>
          <div className="flex items-center gap-3">
            <LiquidButton size="sm" variant="subtle">
              Sign Up
            </LiquidButton>
            <LiquidButton size="sm">
              Login
            </LiquidButton>
          </div>
        </div>
      </div>
    </LiquidNavbar>
  ),
};

export const WithLogo: Story = {
  render: () => (
    <LiquidNavbar>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-white font-bold text-lg">ALG UI</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Components</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Documentation</a>
          <LiquidButton size="sm">Get Started</LiquidButton>
        </div>
      </div>
    </LiquidNavbar>
  ),
};

export const Minimal: Story = {
  render: () => (
    <LiquidNavbar variant="minimal">
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-bold text-xl">ALG UI</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
          <LiquidButton size="sm" variant="minimal">Contact</LiquidButton>
        </div>
      </div>
    </LiquidNavbar>
  ),
};

export const Intense: Story = {
  render: () => (
    <LiquidNavbar variant="intense">
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-bold text-xl">ALG UI</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Support</a>
          <LiquidButton size="sm" variant="intense">Try Free</LiquidButton>
        </div>
      </div>
    </LiquidNavbar>
  ),
}; 