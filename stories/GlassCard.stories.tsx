import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlassCard from '../src/components/GlassCard';

// Background images for testing
const backgrounds = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1600&h=900&fit=crop'
];

// Improved draggable component
const DraggableComponent: React.FC<{
  children: React.ReactNode;
  className?: string;
  initialPosition?: { x: number; y: number };
}> = ({ children, className = '', initialPosition = { x: 100, y: 100 } }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - 400;
    const maxY = window.innerHeight - 300;
    
    setPosition({
      x: Math.max(20, Math.min(newX, maxX)),
      y: Math.max(20, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div
      className={`absolute cursor-move select-none ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 1000 : 1,
        userSelect: isDragging ? 'none' : 'auto'
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

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

const GlassCardDemo: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [variant, setVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
  const [hover, setHover] = useState(true);
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
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="hover"
              checked={hover}
              onChange={(e) => setHover(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="hover" className="text-white/80 text-xs">Hover Effect</label>
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

      {/* Draggable GlassCard components */}
      <DraggableComponent initialPosition={{ x: 100, y: 100 }}>
        <GlassCard 
          variant={variant}
          hover={hover}
          blur={blur}
          className="w-80"
        >
          <div>
            <h3 className="text-xl font-bold mb-3">Welcome Card</h3>
            <p className="text-white/80 mb-4 text-sm">
              This is a glass card with beautiful morphism effects. 
              Drag it around to see the liquid glass in action!
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-white/20 text-white text-sm rounded hover:bg-white/30 transition-colors">
                Learn More
              </button>
              <button className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded hover:bg-white/20 transition-colors">
                Documentation
              </button>
            </div>
          </div>
        </GlassCard>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 500, y: 100 }}>
        <GlassCard 
          variant="intense"
          hover={hover}
          blur={blur}
          className="w-72"
        >
          <div>
            <h3 className="text-lg font-bold mb-2">Intense Card</h3>
            <p className="text-white/80 text-sm mb-3">
              Maximum glass morphism effects for dramatic visual impact.
            </p>
            <div className="text-xs text-white/60">
              Variant: Intense
            </div>
          </div>
        </GlassCard>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 100, y: 350 }}>
        <GlassCard 
          variant="subtle"
          hover={hover}
          blur={blur}
          className="w-64"
        >
          <div>
            <h3 className="text-lg font-bold mb-2">Subtle Card</h3>
            <p className="text-white/80 text-sm mb-3">
              Gentle glass morphism for elegant interfaces.
            </p>
            <div className="text-xs text-white/60">
              Variant: Subtle
            </div>
          </div>
        </GlassCard>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 500, y: 350 }}>
        <GlassCard 
          variant="minimal"
          hover={hover}
          blur={blur}
          className="w-56"
        >
          <div>
            <h3 className="text-lg font-bold mb-2">Minimal Card</h3>
            <p className="text-white/80 text-sm mb-3">
              Barely noticeable for clean, modern designs.
            </p>
            <div className="text-xs text-white/60">
              Variant: Minimal
            </div>
          </div>
        </GlassCard>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 300, y: 500 }}>
        <GlassCard 
          variant="default"
          hover={hover}
          blur={blur}
          className="w-96"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Feature Card</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">42K</div>
                <div className="text-white/60 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">99.9%</div>
                <div className="text-white/60 text-sm">Uptime</div>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Advanced glass morphism effects with real-time statistics display.
            </p>
          </div>
        </GlassCard>
      </DraggableComponent>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/GlassCard',
  component: GlassCard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced glass morphism card component with multiple variants and hover effects. Drag cards around to see the effects in action!',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'intense', 'minimal'],
    },
    hover: {
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
  render: () => <GlassCardDemo />,
};

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="space-y-6">
        <GlassCard variant="default" className="w-80">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-3">Default Card</h3>
            <p className="text-white/80 mb-4">
              This is the default variant with balanced glass morphism effects.
            </p>
            <button className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors">
              Get Started
            </button>
          </div>
        </GlassCard>
        <GlassCard variant="subtle" className="w-80">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-3">Subtle Card</h3>
            <p className="text-white/80 mb-4">
              Gentle glass morphism for elegant interfaces.
            </p>
            <button className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors">
              Learn More
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="grid grid-cols-2 gap-6">
        <GlassCard variant="default" className="w-64">
          <div className="text-white text-center">
            <h4 className="font-bold mb-2">Default</h4>
            <p className="text-white/80 text-sm">Balanced effects</p>
          </div>
        </GlassCard>
        <GlassCard variant="subtle" className="w-64">
          <div className="text-white text-center">
            <h4 className="font-bold mb-2">Subtle</h4>
            <p className="text-white/80 text-sm">Gentle morphism</p>
          </div>
        </GlassCard>
        <GlassCard variant="intense" className="w-64">
          <div className="text-white text-center">
            <h4 className="font-bold mb-2">Intense</h4>
            <p className="text-white/80 text-sm">Dramatic effects</p>
          </div>
        </GlassCard>
        <GlassCard variant="minimal" className="w-64">
          <div className="text-white text-center">
            <h4 className="font-bold mb-2">Minimal</h4>
            <p className="text-white/80 text-sm">Clean design</p>
          </div>
        </GlassCard>
      </div>
    </div>
  ),
};

export const WithHover: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="space-y-6">
        <GlassCard variant="default" hover={true} className="w-80">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-3">Hover Effect</h3>
            <p className="text-white/80 mb-4">
              This card has hover effects enabled. Try hovering over it!
            </p>
            <button className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors">
              Interactive
            </button>
          </div>
        </GlassCard>
        <GlassCard variant="intense" hover={true} className="w-80">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-3">Intense Hover</h3>
            <p className="text-white/80 mb-4">
              Intense variant with hover effects for maximum impact.
            </p>
            <button className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors">
              Dramatic
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  ),
}; 