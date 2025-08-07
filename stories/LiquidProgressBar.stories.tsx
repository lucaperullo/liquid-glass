import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiquidProgressBar from '../src/components/LiquidProgressBar';

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

const LiquidProgressBarDemo: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [variant, setVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
  const [showLabel, setShowLabel] = useState(true);
  const [progress1, setProgress1] = useState(25);
  const [progress2, setProgress2] = useState(50);
  const [progress3, setProgress3] = useState(75);
  const [autoProgress, setAutoProgress] = useState(0);
  const [blur, setBlur] = useState(1);

  // Auto progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

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
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="showLabel"
              checked={showLabel}
              onChange={(e) => setShowLabel(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="showLabel" className="text-white/80 text-xs">Show Label</label>
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
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Glass Progress Bar Demo</h1>
            <p className="text-white/80">
              Beautiful glass morphism progress bars with advanced effects
            </p>
          </div>

          {/* Static Progress Bars */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Progress 1: {progress1}%</label>
              <input 
                type="range" 
                min="0" 
                
                value={progress1} 
                onChange={(e) => setProgress1(Number(e.target.value))}
                className="w-full"
              />
              <LiquidProgressBar 
                progress={progress1} 
                showLabel={showLabel}
                variant={variant}
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Progress 2: {progress2}%</label>
              <input 
                type="range" 
                min="0" 
                
                value={progress2} 
                onChange={(e) => setProgress2(Number(e.target.value))}
                className="w-full"
              />
              <LiquidProgressBar 
                progress={progress2} 
                showLabel={showLabel}
                variant={variant}
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Progress 3: {progress3}%</label>
              <input 
                type="range" 
                min="0" 
                
                value={progress3} 
                onChange={(e) => setProgress3(Number(e.target.value))}
                className="w-full"
              />
              <LiquidProgressBar 
                progress={progress3} 
               
                showLabel={showLabel}
                variant={variant}
               
              />
            </div>
          </div>

          {/* Auto Progress */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Auto Progress: {autoProgress}%</label>
            <LiquidProgressBar 
              progress={autoProgress} 
             
              showLabel={showLabel}
              variant={variant}
             
            />
          </div>

          {/* Different Variants */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">All Variants</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-white/80 text-sm">Default</label>
                <LiquidProgressBar progress={75} showLabel={false} variant="default" />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 text-sm">Subtle</label>
                <LiquidProgressBar progress={75} showLabel={false} variant="subtle" />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 text-sm">Intense</label>
                <LiquidProgressBar progress={75} showLabel={false} variant="intense" />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 text-sm">Minimal</label>
                <LiquidProgressBar progress={75} showLabel={false} variant="minimal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/LiquidProgressBar',
  component: LiquidProgressBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced glass morphism progress bar component with beautiful effects and smooth animations. Perfect for loading states and progress indicators!',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'intense', 'minimal'],
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    blur: {
      control: { type: 'range', min: 0, max: 10, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => <LiquidProgressBarDemo />,
};

export const Default: Story = {
  render: () => {
    const [progress, setProgress] = useState(65);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-80 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Default Progress Bar</h2>
            <p className="text-white/80 text-sm">Standard glass morphism progress bar</p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Progress: {progress}%</label>
              <input 
                type="range" 
                min="0" 
                
                value={progress} 
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <LiquidProgressBar 
              progress={progress} 
             
              showLabel={true}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-80 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Progress Bar Variants</h2>
            <p className="text-white/80 text-sm">Different glass morphism variants</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Default</label>
              <LiquidProgressBar progress={75} showLabel={false} variant="default" />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Subtle</label>
              <LiquidProgressBar progress={75} showLabel={false} variant="subtle" />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Intense</label>
              <LiquidProgressBar progress={75} showLabel={false} variant="intense" />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Minimal</label>
              <LiquidProgressBar progress={75} showLabel={false} variant="minimal" />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const ProgressLevels: Story = {
  render: () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-80 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Progress Levels</h2>
            <p className="text-white/80 text-sm">Different progress levels</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Low Progress</label>
              <LiquidProgressBar progress={25} showLabel={true} />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Medium Progress</label>
              <LiquidProgressBar progress={50} showLabel={true} />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">High Progress</label>
              <LiquidProgressBar progress={75} showLabel={true} />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Complete</label>
              <LiquidProgressBar progress={100} showLabel={true} />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const AutoProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-80 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Auto Progress</h2>
            <p className="text-white/80 text-sm">Automatically animating progress bar</p>
          </div>
          
          <div className="space-y-4">
            <LiquidProgressBar 
              progress={progress} 
             
              showLabel={true}
            />
            
            <div className="text-center">
              <p className="text-white/60 text-sm">Progress: {progress}%</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
}; 
