import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiquidButton from '../src/components/LiquidButton';

const meta: Meta<typeof LiquidButton> = {
  title: 'Components/LiquidButton',
  component: LiquidButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'intense', 'minimal'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    blur: {
      control: { type: 'range', min: 0, max: 10, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const backgrounds = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&h=900&fit=crop'
];

const BackgroundSelector: React.FC<{ currentBg: number; onBgChange: (index: number) => void }> = ({ currentBg, onBgChange }) => (
  <div className="fixed top-4 right-4 z-50 flex gap-2">
    {backgrounds.map((bg, index) => (
      <button
        key={index}
        onClick={() => onBgChange(index)}
        className={`w-8 h-8 rounded-full border-2 transition-all ${
          currentBg === index ? 'border-white scale-110' : 'border-white/50 hover:border-white/80'
        }`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    ))}
  </div>
);

export const Default: Story = {
  render: () => {
    const [currentBg, setCurrentBg] = useState(0);
    const [variant, setVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
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
              <label className="text-white/80 text-xs block mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as any)}
                className="w-full px-2 py-1 text-sm bg-white/10 text-white rounded border border-white/20"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
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

        {/* Demo */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-white mb-8">Liquid Button Demo</h1>
            <div className="space-y-4">
              <LiquidButton
                variant={variant}
                size={size}
                blur={blur}
                className="text-white font-medium"
              >
                Click Me
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [currentBg, setCurrentBg] = useState(0);

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

        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-white mb-8">Button Sizes</h1>
            <div className="space-y-4">
              <LiquidButton size="sm" className="text-white font-medium">
                Small Button
              </LiquidButton>
              <LiquidButton size="md" className="text-white font-medium">
                Medium Button
              </LiquidButton>
              <LiquidButton size="lg" className="text-white font-medium">
                Large Button
              </LiquidButton>
              <LiquidButton size="xl" className="text-white font-medium">
                Extra Large Button
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [currentBg, setCurrentBg] = useState(0);

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

        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-white mb-8">Button Variants</h1>
            <div className="space-y-4">
              <LiquidButton variant="default" className="text-white font-medium">
                Default Button
              </LiquidButton>
              <LiquidButton variant="subtle" className="text-white font-medium">
                Subtle Button
              </LiquidButton>
              <LiquidButton variant="intense" className="text-white font-medium">
                Intense Button
              </LiquidButton>
              <LiquidButton variant="minimal" className="text-white font-medium">
                Minimal Button
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    );
  },
};