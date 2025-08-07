import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiquidBadge from '../src/components/LiquidBadge';

// Background images for testing
const backgrounds = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1600&h=900&fit=crop'
];

// Background selector
const BackgroundSelector: React.FC<{
  currentBg: number;
  onBgChange: (index: number) => void;
}> = ({ currentBg, onBgChange }) => (
  <div className="fixed top-4 right-4 z-50 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
    <h3 className="text-white font-bold mb-3 text-sm">Background</h3>
    <div className="flex gap-2">
      {backgrounds.map((bg, index) => (
        <button
          key={index}
          onClick={() => onBgChange(index)}
          className={`w-12 h-8 rounded border-2 transition-all duration-200 ${
            currentBg === index 
              ? 'border-white scale-110' 
              : 'border-white/30 hover:border-white/60'
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}
    </div>
  </div>
);

const LiquidBadgeDemo: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [variant, setVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
  const [color, setColor] = useState<'default' | 'success' | 'warning' | 'error' | 'info'>('default');
  const [blur, setBlur] = useState(1);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <BackgroundSelector currentBg={currentBg} onBgChange={setCurrentBg} />
      
      {/* Controls */}
      <div className="fixed top-4 left-4 z-50 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <h3 className="text-white font-bold mb-3 text-sm">Controls</h3>
        <div className="space-y-3">
          <div>
            <label className="text-white/80 text-xs block mb-1">Variant</label>
            <select 
              value={variant} 
              onChange={(e) => setVariant(e.target.value as any)}
              className="w-full px-2 py-1 text-sm bg-white/10 text-white rounded border border-white/20"
            >
              <option value="default">Default</option>
              <option value="subtle">Subtle</option>
              <option value="intense">Intense</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Color</label>
            <select 
              value={color} 
              onChange={(e) => setColor(e.target.value as any)}
              className="w-full px-2 py-1 text-sm bg-white/10 text-white rounded border border-white/20"
            >
              <option value="default">Default</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              <option value="info">Info</option>
            </select>
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Blur: {blur}</label>
            <input 
              type="range" 
              min="0" 
              max="10" 
              step="0.1"
              value={blur} 
              onChange={(e) => setBlur(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="max-w-4xl w-full space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Glass Badge Demo</h1>
            <p className="text-white/80">
              Beautiful glass morphism badges with advanced effects
            </p>
          </div>

          {/* Interactive Badge */}
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-white">Interactive Badge</h2>
            <LiquidBadge 
              variant={variant}
              color={color}
              blur={blur}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)} Badge
            </LiquidBadge>
          </div>

          {/* Color Variants */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white text-center">Color Variants</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <LiquidBadge color="default">Default</LiquidBadge>
              <LiquidBadge color="success">Success</LiquidBadge>
              <LiquidBadge color="warning">Warning</LiquidBadge>
              <LiquidBadge color="error">Error</LiquidBadge>
              <LiquidBadge color="info">Info</LiquidBadge>
            </div>
          </div>

          {/* Glass Variants */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white text-center">Glass Variants</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <LiquidBadge variant="default" color="success">Default</LiquidBadge>
              <LiquidBadge variant="subtle" color="success">Subtle</LiquidBadge>
              <LiquidBadge variant="intense" color="success">Intense</LiquidBadge>
              <LiquidBadge variant="minimal" color="success">Minimal</LiquidBadge>
            </div>
          </div>

          {/* Usage Examples */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white text-center">Usage Examples</h2>
            
            {/* Status Badges */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-center">Status Indicators</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <LiquidBadge color="success">Online</LiquidBadge>
                <LiquidBadge color="warning">Pending</LiquidBadge>
                <LiquidBadge color="error">Offline</LiquidBadge>
                <LiquidBadge color="info">Maintenance</LiquidBadge>
              </div>
            </div>

            {/* Category Badges */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-center">Categories</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <LiquidBadge color="default">Technology</LiquidBadge>
                <LiquidBadge color="success">Design</LiquidBadge>
                <LiquidBadge color="warning">Development</LiquidBadge>
                <LiquidBadge color="error">Bug</LiquidBadge>
                <LiquidBadge color="info">Feature</LiquidBadge>
              </div>
            </div>

            {/* Notification Badges */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-center">Notifications</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <LiquidBadge color="error">3</LiquidBadge>
                <LiquidBadge color="warning">12</LiquidBadge>
                <LiquidBadge color="success">New</LiquidBadge>
                <LiquidBadge color="info">Updated</LiquidBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/LiquidBadge',
  component: LiquidBadge,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced glass morphism badge component with beautiful effects and color variants. Perfect for status indicators and labels!',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'intense', 'minimal'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    blur: {
      control: { type: 'range', min: 0, max: 10, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => <LiquidBadgeDemo />,
};

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-white mb-2">Default Badge</h2>
        <p className="text-white/80 text-sm">Standard glass morphism badge</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <LiquidBadge>Default</LiquidBadge>
          <LiquidBadge color="success">Success</LiquidBadge>
          <LiquidBadge color="warning">Warning</LiquidBadge>
          <LiquidBadge color="error">Error</LiquidBadge>
        </div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-white mb-2">Badge Colors</h2>
        <p className="text-white/80 text-sm">Different color variants</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <LiquidBadge color="default">Default</LiquidBadge>
          <LiquidBadge color="success">Success</LiquidBadge>
          <LiquidBadge color="warning">Warning</LiquidBadge>
          <LiquidBadge color="error">Error</LiquidBadge>
          <LiquidBadge color="info">Info</LiquidBadge>
        </div>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-white mb-2">Badge Variants</h2>
        <p className="text-white/80 text-sm">Different glass morphism variants</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <LiquidBadge variant="default" color="success">Default</LiquidBadge>
          <LiquidBadge variant="subtle" color="success">Subtle</LiquidBadge>
          <LiquidBadge variant="intense" color="success">Intense</LiquidBadge>
          <LiquidBadge variant="minimal" color="success">Minimal</LiquidBadge>
        </div>
      </div>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-white mb-2">Status Indicators</h2>
        <p className="text-white/80 text-sm">Common status badge usage</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <LiquidBadge color="success">Online</LiquidBadge>
          <LiquidBadge color="warning">Pending</LiquidBadge>
          <LiquidBadge color="error">Offline</LiquidBadge>
          <LiquidBadge color="info">Maintenance</LiquidBadge>
          <LiquidBadge color="default">Unknown</LiquidBadge>
        </div>
      </div>
    </div>
  ),
}; 