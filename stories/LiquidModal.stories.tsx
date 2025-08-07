import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiquidModal from '../src/components/LiquidModal';
import LiquidButton from '../src/components/LiquidButton';

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

const LiquidModalDemo: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [variant, setVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');
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
              <option value="2xl">2XL</option>
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
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white mb-8">Glass Modal Demo</h1>
          
          <div className="space-y-4">
            <LiquidButton 
              variant="default" 
              size="lg"
              onClick={() => setModalOpen(true)}
            >
              Open Modal
            </LiquidButton>
            
            <p className="text-white/80 max-w-md mx-auto">
              Click the button above to open a beautiful glass modal with advanced morphism effects.
              The modal will appear with a backdrop blur and smooth animations.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <LiquidModal
          variant={variant}
          size={size}
        >
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to ALG UI
          </h2>
          <p className="text-white/80 mb-6">
            Experience the most advanced glass morphism effects in React.
            This modal demonstrates the beautiful liquid glass effects with:
          </p>
          
          <ul className="text-white/80 mb-6 space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
              Chromatic aberration effects
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
              Liquid distortion animations
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
              Backdrop blur integration
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
              Smooth transitions
            </li>
          </ul>
          
          <div className="flex justify-end space-x-3">
            <LiquidButton 
              variant="subtle" 
              onClick={() => setModalOpen(false)}
            >
              Close
            </LiquidButton>
            <LiquidButton onClick={() => alert('Action clicked!')}>
              Get Started
            </LiquidButton>
          </div>
        </div>
        </LiquidModal>
      )}
    </div>
  );
};

const meta: Meta = {
  title: 'Components/LiquidModal',
  component: LiquidModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced glass morphism modal component with backdrop blur and smooth animations. Perfect for dialogs and overlays!',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'intense', 'minimal'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    blur: {
      control: { type: 'range', min: 0, max: 10, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => <LiquidModalDemo />,
};

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="text-center space-y-6">
          <LiquidButton onClick={() => setIsOpen(true)}>
            Open Modal
          </LiquidButton>
          
          {isOpen && (
            <LiquidModal
              size="md"
            >
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">Default Modal</h2>
                <p className="text-white/80 mb-6">
                  This is the default modal variant with balanced glass morphism effects.
                </p>
                <div className="flex justify-end space-x-3">
                  <LiquidButton variant="subtle" onClick={() => setIsOpen(false)}>
                    Close
                  </LiquidButton>
                  <LiquidButton>Action</LiquidButton>
                </div>
              </div>
            </LiquidModal>
          )}
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="text-center space-y-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => (
              <LiquidButton 
                key={size}
                size="sm"
                variant={currentSize === size ? 'intense' : 'subtle'}
                onClick={() => {
                  setCurrentSize(size);
                  setIsOpen(true);
                }}
              >
                {size.toUpperCase()}
              </LiquidButton>
            ))}
          </div>
          
          {isOpen && (
            <LiquidModal
              size={currentSize}
            >
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">{currentSize.toUpperCase()} Modal</h2>
                <p className="text-white/80 mb-6">
                  This modal demonstrates the {currentSize} size variant.
                </p>
                <div className="flex justify-end space-x-3">
                  <LiquidButton variant="subtle" onClick={() => setIsOpen(false)}>
                    Close
                  </LiquidButton>
                  <LiquidButton>Action</LiquidButton>
                </div>
              </div>
            </LiquidModal>
          )}
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [currentVariant, setCurrentVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="text-center space-y-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {(['default', 'subtle', 'intense', 'minimal'] as const).map(variant => (
              <LiquidButton 
                key={variant}
                size="sm"
                variant={currentVariant === variant ? 'intense' : 'subtle'}
                onClick={() => {
                  setCurrentVariant(variant);
                  setIsOpen(true);
                }}
              >
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </LiquidButton>
            ))}
          </div>
          
          {isOpen && (
            <LiquidModal
              variant={currentVariant}
              size="md"
            >
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">{currentVariant.charAt(0).toUpperCase() + currentVariant.slice(1)} Modal</h2>
                <p className="text-white/80 mb-6">
                  This modal demonstrates the {currentVariant} variant with its unique glass morphism effects.
                </p>
                <div className="flex justify-end space-x-3">
                  <LiquidButton variant="subtle" onClick={() => setIsOpen(false)}>
                    Close
                  </LiquidButton>
                  <LiquidButton>Action</LiquidButton>
                </div>
              </div>
            </LiquidModal>
          )}
        </div>
      </div>
    );
  },
}; 
