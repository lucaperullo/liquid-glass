import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiquidCard from '../src/components/LiquidCard';

const meta: Meta<typeof LiquidCard> = {
  title: 'Components/LiquidCard',
  component: LiquidCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['clean', 'default', 'subtle', 'intense', 'minimal'],
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
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
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
                <option value="clean">Clean</option>
                <option value="default">Default</option>
                <option value="subtle">Subtle</option>
                <option value="intense">Intense</option>
                <option value="minimal">Minimal</option>
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
        <div className="flex items-center justify-center min-h-screen p-8">
          <div className="max-w-md w-full">
            <LiquidCard
              variant={variant}
              blur={blur}
              className="text-white"
            >
              <h2 className="text-2xl font-bold mb-4">Liquid Card</h2>
              <p className="text-white/80 mb-4">
                This is a beautiful liquid glass card component with advanced morphism effects.
                The card adapts to different backgrounds and provides an elegant user experience.
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors">
                  Learn More
                </button>
                <button className="px-4 py-2 bg-white/10 text-white/80 rounded hover:bg-white/20 transition-colors">
                  Documentation
                </button>
              </div>
            </LiquidCard>
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

        <div className="flex items-center justify-center min-h-screen p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <LiquidCard variant="default" className="text-white">
              <h3 className="text-xl font-bold mb-3">Default Card</h3>
              <p className="text-white/80">Standard glass morphism effect with balanced blur and transparency.</p>
            </LiquidCard>
            
            <LiquidCard variant="subtle" className="text-white">
              <h3 className="text-xl font-bold mb-3">Subtle Card</h3>
              <p className="text-white/80">Minimal glass effect for a clean, understated appearance.</p>
            </LiquidCard>
            
            <LiquidCard variant="intense" className="text-white">
              <h3 className="text-xl font-bold mb-3">Intense Card</h3>
              <p className="text-white/80">Strong glass morphism with enhanced blur and chromatic aberration.</p>
            </LiquidCard>
            
            <LiquidCard variant="minimal" className="text-white">
              <h3 className="text-xl font-bold mb-3">Minimal Card</h3>
              <p className="text-white/80">Ultra-clean design with minimal effects for maximum readability.</p>
            </LiquidCard>
          </div>
        </div>
      </div>
    );
  },
}; 