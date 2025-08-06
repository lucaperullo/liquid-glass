import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlassButton from '../src/components/GlassButton';

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
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 200;
    
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

const GlassButtonDemo: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [variant, setVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [disabled, setDisabled] = useState(false);
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
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="disabled"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="disabled" className="text-white/80 text-xs">Disabled</label>
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

      {/* Draggable GlassButton components */}
      <DraggableComponent initialPosition={{ x: 100, y: 100 }}>
        <GlassButton 
          variant={variant}
          size={size}
          disabled={disabled}
          blur={blur}
          onClick={() => alert('Button clicked!')}
        >
          Primary Action
        </GlassButton>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 400, y: 100 }}>
        <GlassButton 
          variant="subtle"
          size="md"
          blur={0.5}
          onClick={() => alert('Secondary clicked!')}
        >
          Secondary
        </GlassButton>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 100, y: 250 }}>
        <GlassButton 
          variant="intense"
          size="lg"
          blur={2}
          onClick={() => alert('Intense clicked!')}
        >
          Intense Effect
        </GlassButton>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 400, y: 250 }}>
        <GlassButton 
          variant="minimal"
          size="sm"
          onClick={() => alert('Minimal clicked!')}
        >
          Minimal
        </GlassButton>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 250, y: 400 }}>
        <div className="flex flex-col gap-3">
          <GlassButton 
            variant="default"
            size="sm"
            onClick={() => alert('Small clicked!')}
          >
            Small
          </GlassButton>
          <GlassButton 
            variant="default"
            size="md"
            onClick={() => alert('Medium clicked!')}
          >
            Medium
          </GlassButton>
          <GlassButton 
            variant="default"
            size="lg"
            onClick={() => alert('Large clicked!')}
          >
            Large
          </GlassButton>
          <GlassButton 
            variant="default"
            size="xl"
            onClick={() => alert('XL clicked!')}
          >
            Extra Large
          </GlassButton>
        </div>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 600, y: 400 }}>
        <div className="flex flex-col gap-3">
          <GlassButton 
            variant="default"
            size="md"
            disabled={true}
          >
            Disabled Button
          </GlassButton>
          <GlassButton 
            variant="subtle"
            size="md"
            disabled={true}
          >
            Disabled Subtle
          </GlassButton>
        </div>
      </DraggableComponent>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/GlassButton',
  component: GlassButton,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced glass morphism button component with multiple variants and sizes. Drag buttons around to see the effects in action!',
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
      options: ['sm', 'md', 'lg', 'xl'],
    },
    disabled: {
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
  render: () => <GlassButtonDemo />,
};

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="space-y-4">
        <GlassButton variant="default" size="md">
          Default Button
        </GlassButton>
        <GlassButton variant="subtle" size="md">
          Subtle Button
        </GlassButton>
        <GlassButton variant="intense" size="md">
          Intense Button
        </GlassButton>
        <GlassButton variant="minimal" size="md">
          Minimal Button
        </GlassButton>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="flex flex-col gap-4">
        <GlassButton variant="default" size="sm">Small</GlassButton>
        <GlassButton variant="default" size="md">Medium</GlassButton>
        <GlassButton variant="default" size="lg">Large</GlassButton>
        <GlassButton variant="default" size="xl">Extra Large</GlassButton>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="grid grid-cols-2 gap-4">
        <GlassButton variant="default" size="md">Default</GlassButton>
        <GlassButton variant="subtle" size="md">Subtle</GlassButton>
        <GlassButton variant="intense" size="md">Intense</GlassButton>
        <GlassButton variant="minimal" size="md">Minimal</GlassButton>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="space-y-4">
        <GlassButton variant="default" size="md">Normal</GlassButton>
        <GlassButton variant="default" size="md" disabled>Disabled</GlassButton>
        <GlassButton variant="subtle" size="md">Subtle Normal</GlassButton>
        <GlassButton variant="subtle" size="md" disabled>Subtle Disabled</GlassButton>
      </div>
    </div>
  ),
};