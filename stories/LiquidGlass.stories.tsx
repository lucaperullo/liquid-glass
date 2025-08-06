import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiquidGlass from '../src/components/LiquidGlass';

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

const LiquidGlassDemo: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [variant, setVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
  const [scale, setScale] = useState(20);
  const [radius, setRadius] = useState(12);
  const [blur, setBlur] = useState(1);
  const [refractionMode, setRefractionMode] = useState<'standard' | 'polar' | 'prominent' | 'shader'>('standard');
  const [displacementScale, setDisplacementScale] = useState(57);
  const [blurAmount, setBlurAmount] = useState(0.0);
  const [saturation, setSaturation] = useState(100);
  const [chromaticAberration, setChromaticAberration] = useState(5);
  const [elasticity, setElasticity] = useState(0.10);
  const [cornerRadius, setCornerRadius] = useState(52);
  const [overLight, setOverLight] = useState(false);

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
            <label className="text-white/80 text-xs block mb-1">Scale: {scale}</label>
            <input 
              type="range" 
              min="5" 
              max="50" 
              value={scale} 
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Radius: {radius}</label>
            <input 
              type="range" 
              min="0" 
              max="30" 
              value={radius} 
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full"
            />
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
          <div>
            <label className="text-white/80 text-xs block mb-1">Refraction Mode</label>
            <select 
              value={refractionMode} 
              onChange={(e) => setRefractionMode(e.target.value as any)}
              className="w-full px-2 py-1 text-sm bg-white/10 text-white rounded border border-white/20"
            >
              <option value="standard">Standard</option>
              <option value="polar">Polar</option>
              <option value="prominent">Prominent</option>
              <option value="shader">Shader (Experimental)</option>
            </select>
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Displacement Scale: {displacementScale}</label>
            <input 
              type="range" 
              min="0" 
              max="200" 
              value={displacementScale} 
              onChange={(e) => setDisplacementScale(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Blur Amount: {blurAmount}</label>
            <input 
              type="range" 
              min="0" 
              max="20" 
              step="0.1"
              value={blurAmount} 
              onChange={(e) => setBlurAmount(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Saturation: {saturation}%</label>
            <input 
              type="range" 
              min="0" 
              max="200" 
              value={saturation} 
              onChange={(e) => setSaturation(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Chromatic Aberration: {chromaticAberration}</label>
            <input 
              type="range" 
              min="0" 
              max="20" 
              value={chromaticAberration} 
              onChange={(e) => setChromaticAberration(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Elasticity: {elasticity}</label>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01"
              value={elasticity} 
              onChange={(e) => setElasticity(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-white/80 text-xs block mb-1">Corner Radius: {cornerRadius}px</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={cornerRadius} 
              onChange={(e) => setCornerRadius(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="overLight"
              checked={overLight}
              onChange={(e) => setOverLight(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="overLight" className="text-white/80 text-xs">Over Light</label>
          </div>
        </div>
      </div>

      {/* Draggable LiquidGlass components */}
      <DraggableComponent initialPosition={{ x: 100, y: 100 }}>
        <LiquidGlass 
          variant={variant}
          scale={scale}
          radius={radius}
          blur={blur}
          refractionMode={refractionMode}
          displacementScale={displacementScale}
          blurAmount={blurAmount}
          saturation={saturation}
          chromaticAberration={chromaticAberration}
          elasticity={elasticity}
          cornerRadius={cornerRadius}
          overLight={overLight}
          className="w-80"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">Liquid Glass Effect</h3>
            <p className="text-white/80 mb-4 text-sm">
              This component demonstrates the advanced chromatic aberration 
              and liquid distortion effects. Drag it around to see the effect!
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
        </LiquidGlass>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 500, y: 150 }}>
        <LiquidGlass 
          variant="intense"
          scale={30}
          radius={20}
          blur={2}
          className="w-72"
        >
          <div className="p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Intense Effect</h3>
            <p className="text-white/80 text-sm mb-3">
              Maximum chromatic aberration and distortion for dramatic effects.
            </p>
            <div className="text-xs text-white/60">
              Scale: 30 | Radius: 20
            </div>
          </div>
        </LiquidGlass>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 200, y: 400 }}>
        <LiquidGlass 
          variant="subtle"
          scale={10}
          radius={8}
          blur={0.5}
          className="w-64"
        >
          <div className="p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Subtle Effect</h3>
            <p className="text-white/80 text-sm mb-3">
              Gentle glass morphism for elegant interfaces.
            </p>
            <div className="text-xs text-white/60">
              Scale: 10 | Radius: 8
            </div>
          </div>
        </LiquidGlass>
      </DraggableComponent>

      <DraggableComponent initialPosition={{ x: 600, y: 450 }}>
        <LiquidGlass 
          variant="minimal"
          scale={5}
          radius={4}
          blur={0.2}
          className="w-56"
        >
          <div className="p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Minimal Effect</h3>
            <p className="text-white/80 text-sm mb-3">
              Barely noticeable for clean, modern designs.
            </p>
            <div className="text-xs text-white/60">
              Scale: 5 | Radius: 4
            </div>
          </div>
        </LiquidGlass>
      </DraggableComponent>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/LiquidGlass',
  component: LiquidGlass,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced liquid glass component with chromatic aberration and dynamic distortion effects. Drag components around to see the effects in action!',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'intense', 'minimal'],
    },
    scale: {
      control: { type: 'range', min: 5, max: 50, step: 1 },
    },
    radius: {
      control: { type: 'range', min: 0, max: 30, step: 1 },
    },
    blur: {
      control: { type: 'range', min: 0, max: 10, step: 0.1 },
    },
    refractionMode: {
      control: { type: 'select' },
      options: ['standard', 'polar', 'prominent', 'shader'],
    },
    displacementScale: {
      control: { type: 'range', min: 0, max: 200, step: 1 },
    },
    blurAmount: {
      control: { type: 'range', min: 0, max: 20, step: 0.1 },
    },
    saturation: {
      control: { type: 'range', min: 0, max: 200, step: 1 },
    },
    chromaticAberration: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    elasticity: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
    cornerRadius: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    overLight: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => <LiquidGlassDemo />,
};

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <LiquidGlass variant="default" className="w-80">
        <div className="p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Default Liquid Glass</h3>
          <p className="text-white/80 mb-4">
            This is the default variant with balanced chromatic aberration and distortion effects.
          </p>
          <button className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors">
            Get Started
          </button>
        </div>
      </LiquidGlass>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <LiquidGlass variant="default" className="w-48">
          <div className="p-4 text-white text-center">
            <h4 className="font-bold mb-2">Default</h4>
            <p className="text-white/80 text-sm">Balanced effects</p>
          </div>
        </LiquidGlass>
        <LiquidGlass variant="subtle" className="w-48">
          <div className="p-4 text-white text-center">
            <h4 className="font-bold mb-2">Subtle</h4>
            <p className="text-white/80 text-sm">Gentle morphism</p>
          </div>
        </LiquidGlass>
        <LiquidGlass variant="intense" className="w-48">
          <div className="p-4 text-white text-center">
            <h4 className="font-bold mb-2">Intense</h4>
            <p className="text-white/80 text-sm">Dramatic effects</p>
          </div>
        </LiquidGlass>
        <LiquidGlass variant="minimal" className="w-48">
          <div className="p-4 text-white text-center">
            <h4 className="font-bold mb-2">Minimal</h4>
            <p className="text-white/80 text-sm">Clean design</p>
          </div>
        </LiquidGlass>
      </div>
    </div>
  ),
};