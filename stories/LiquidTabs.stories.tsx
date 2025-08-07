import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LiquidTabs from '../src/components/LiquidTabs';
import LiquidButton from '../src/components/LiquidButton';
import LiquidCard from '../src/components/LiquidCard';
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

const LiquidTabsDemo: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Project Overview</h3>
          <p className="text-white/80">
            Welcome to the Liquid Glass UI library! This is a comprehensive collection of 
            glass morphism components with advanced liquid distortion effects.
          </p>
          <div className="flex flex-wrap gap-2">
            <LiquidBadge color="success">React</LiquidBadge>
            <LiquidBadge color="info">TypeScript</LiquidBadge>
            <LiquidBadge color="warning">Glass Morphism</LiquidBadge>
            <LiquidBadge color="error">Advanced Effects</LiquidBadge>
          </div>
        </div>
      )
    },
    {
      id: 'components',
      label: 'Components',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Available Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LiquidCard variant="subtle" className="p-4">
              <h4 className="font-bold text-white mb-2">LiquidButton</h4>
              <p className="text-white/80 text-sm">Interactive buttons with glass effects</p>
            </LiquidCard>
            <LiquidCard variant="subtle" className="p-4">
              <h4 className="font-bold text-white mb-2">LiquidCard</h4>
              <p className="text-white/80 text-sm">Content containers with hover effects</p>
            </LiquidCard>
            <LiquidCard variant="subtle" className="p-4">
              <h4 className="font-bold text-white mb-2">LiquidModal</h4>
              <p className="text-white/80 text-sm">Modal dialogs with backdrop blur</p>
            </LiquidCard>
            <LiquidCard variant="subtle" className="p-4">
              <h4 className="font-bold text-white mb-2">LiquidTabs</h4>
              <p className="text-white/80 text-sm">Tab navigation with glass effects</p>
            </LiquidCard>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      label: 'Features',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Advanced Features</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white">Chromatic Aberration Effects</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white">Liquid Distortion Animations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-white">Real-time Interactive Controls</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-white">Multiple Visual Variants</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="text-white/80 text-sm block mb-2">Blur Amount</label>
              <input 
                type="range" 
                min="0" 
                max="20" 
                defaultValue="10"
                className="w-full"
              />
            </div>
            <div>
              <label className="text-white/80 text-sm block mb-2">Saturation</label>
              <input 
                type="range" 
                min="0" 
                max="200" 
                defaultValue="100"
                className="w-full"
              />
            </div>
            <div>
              <label className="text-white/80 text-sm block mb-2">Chromatic Aberration</label>
              <input 
                type="range" 
                min="0" 
                max="20" 
                defaultValue="5"
                className="w-full"
              />
            </div>
            <LiquidButton size="sm">Save Settings</LiquidButton>
          </div>
        </div>
      )
    },
    {
      id: 'disabled',
      label: 'Disabled',
      disabled: true,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Disabled Tab</h3>
          <p className="text-white/80">This tab is disabled and cannot be accessed.</p>
        </div>
      )
    }
  ];

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
            <label className="text-white/80 text-xs block mb-1">Orientation</label>
            <select 
              value={orientation} 
              onChange={(e) => setOrientation(e.target.value as any)}
              className="w-full px-2 py-1 text-sm bg-white/10 text-white rounded border border-white/20"
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
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
            </select>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Liquid Tabs Demo</h1>
            <p className="text-white/80">
              Beautiful glass morphism tabs with advanced effects and smooth transitions
            </p>
          </div>

          <LiquidTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant={variant}
            orientation={orientation}
            size={size}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/LiquidTabs',
  component: LiquidTabs,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced glass morphism tabs component with smooth transitions and interactive effects. Perfect for navigation and content organization!',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['clean', 'default', 'subtle', 'intense', 'minimal'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => <LiquidTabsDemo />,
};

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    
    const tabs = [
      {
        id: 'tab1',
        label: 'Overview',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Overview</h3>
            <p className="text-white/80">
              This is the overview tab content with glass morphism effects.
            </p>
          </div>
        )
      },
      {
        id: 'tab2',
        label: 'Details',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Details</h3>
            <p className="text-white/80">
              Detailed information with beautiful glass effects.
            </p>
          </div>
        )
      },
      {
        id: 'tab3',
        label: 'Settings',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Settings</h3>
            <p className="text-white/80">
              Configuration options with interactive controls.
            </p>
          </div>
        )
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Default Tabs</h2>
            <p className="text-white/80 text-sm">Standard horizontal tabs with glass effects</p>
          </div>
          
          <LiquidTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const tabs = [
      {
        id: 'overview',
        label: 'Overview',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Project Overview</h3>
            <p className="text-white/80">
              Welcome to the Liquid Glass UI library! This is a comprehensive collection of 
              glass morphism components with advanced liquid distortion effects.
            </p>
          </div>
        )
      },
      {
        id: 'components',
        label: 'Components',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Available Components</h3>
            <div className="grid grid-cols-2 gap-4">
              <LiquidCard variant="subtle" className="p-4">
                <h4 className="font-bold text-white mb-2">LiquidButton</h4>
                <p className="text-white/80 text-sm">Interactive buttons</p>
              </LiquidCard>
              <LiquidCard variant="subtle" className="p-4">
                <h4 className="font-bold text-white mb-2">LiquidCard</h4>
                <p className="text-white/80 text-sm">Content containers</p>
              </LiquidCard>
            </div>
          </div>
        )
      },
      {
        id: 'features',
        label: 'Features',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Advanced Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white">Chromatic Aberration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white">Liquid Distortion</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-white">Interactive Controls</span>
              </div>
            </div>
          </div>
        )
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Vertical Tabs</h2>
            <p className="text-white/80 text-sm">Vertical orientation with glass morphism effects</p>
          </div>
          
          <LiquidTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            orientation="vertical"
            className="h-96"
          />
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('default');
    
    const tabs = [
      {
        id: 'default',
        label: 'Default',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Default Variant</h3>
            <p className="text-white/80">
              Standard glass morphism effects with balanced transparency and blur.
            </p>
          </div>
        )
      },
      {
        id: 'subtle',
        label: 'Subtle',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Subtle Variant</h3>
            <p className="text-white/80">
              Minimal glass effects for a more understated appearance.
            </p>
          </div>
        )
      },
      {
        id: 'intense',
        label: 'Intense',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Intense Variant</h3>
            <p className="text-white/80">
              Strong glass effects with maximum transparency and distortion.
            </p>
          </div>
        )
      },
      {
        id: 'minimal',
        label: 'Minimal',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Minimal Variant</h3>
            <p className="text-white/80">
              Clean and simple glass effects for a modern look.
            </p>
          </div>
        )
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Tab Variants</h2>
            <p className="text-white/80 text-sm">Different glass morphism variants</p>
          </div>
          
          <LiquidTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="default"
          />
          
          <LiquidTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="subtle"
          />
          
          <LiquidTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="intense"
          />
          
          <LiquidTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="minimal"
          />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('small');
    
    const tabs = [
      {
        id: 'small',
        label: 'Small',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Small Size</h3>
            <p className="text-white/80">
              Compact tabs with minimal padding and smaller text.
            </p>
          </div>
        )
      },
      {
        id: 'medium',
        label: 'Medium',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Medium Size</h3>
            <p className="text-white/80">
              Standard size tabs with balanced padding and text.
            </p>
          </div>
        )
      },
      {
        id: 'large',
        label: 'Large',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Large Size</h3>
            <p className="text-white/80">
              Large tabs with generous padding and bigger text.
            </p>
          </div>
        )
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Tab Sizes</h2>
            <p className="text-white/80 text-sm">Different size variants</p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Small</h3>
            <LiquidTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              size="sm"
            />
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Medium</h3>
            <LiquidTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              size="md"
            />
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Large</h3>
            <LiquidTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              size="lg"
            />
          </div>
        </div>
      </div>
    );
  },
}; 

export const LiquidAnimation: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    
    const tabs = [
      {
        id: 'home',
        label: '🏠 Home',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Welcome Home</h3>
            <p className="text-white/80">
              Experience the smooth liquid sliding animation as you navigate between tabs.
              Watch the active tab (a LiquidGlass component) slide smoothly to each position
              with beautiful glass morphism effects.
            </p>
            <div className="flex flex-wrap gap-2">
              <LiquidBadge color="success">Sliding Active Tab</LiquidBadge>
              <LiquidBadge color="info">LiquidGlass Animation</LiquidBadge>
              <LiquidBadge color="warning">Glass Morphism</LiquidBadge>
              <LiquidBadge color="error">Smooth Transitions</LiquidBadge>
            </div>
          </div>
        )
      },
      {
        id: 'features',
        label: '✨ Features',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Advanced Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white">Sliding LiquidGlass Active Tab (300ms)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-white">Real-time Position Calculation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-white">Fixed Border Radius</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white">Smooth Cubic Bezier Easing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-white">Glass Morphism Effects</span>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'settings',
        label: '⚙️ Settings',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Configuration</h3>
            <p className="text-white/80">
              The active tab is now a LiquidGlass component that slides smoothly between positions.
              Notice how the glass morphism effect moves with the active tab, creating a beautiful
              liquid animation effect.
            </p>
            <div className="flex gap-3">
              <LiquidButton size="sm" variant="intense">
                Apply Settings
              </LiquidButton>
              <LiquidButton size="sm" variant="subtle">
                Reset
              </LiquidButton>
            </div>
          </div>
        )
      },
      {
        id: 'design',
        label: '🎨 Design',
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Design Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LiquidCard variant="subtle" className="p-4">
                <h4 className="font-bold text-white mb-2">Sliding Active Tab</h4>
                <p className="text-white/80 text-sm">Active tab is a LiquidGlass that slides smoothly</p>
              </LiquidCard>
              <LiquidCard variant="subtle" className="p-4">
                <h4 className="font-bold text-white mb-2">Fixed Border Radius</h4>
                <p className="text-white/80 text-sm">Explicit rounded class to fix border radius</p>
              </LiquidCard>
              <LiquidCard variant="subtle" className="p-4">
                <h4 className="font-bold text-white mb-2">Smooth Animation</h4>
                <p className="text-white/80 text-sm">300ms with cubic-bezier easing for fluid movement</p>
              </LiquidCard>
              <LiquidCard variant="subtle" className="p-4">
                <h4 className="font-bold text-white mb-2">Glass Effects</h4>
                <p className="text-white/80 text-sm">Beautiful glass morphism on the sliding active tab</p>
              </LiquidCard>
            </div>
          </div>
        )
      },
      {
        id: 'disabled',
        label: '🚫 Disabled',
        disabled: true,
        content: (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Disabled Tab</h3>
            <p className="text-white/80">This tab is disabled and cannot be accessed.</p>
          </div>
        )
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Sliding LiquidGlass Active Tab</h2>
            <p className="text-white/80 text-sm">Click different tabs to see the LiquidGlass active tab slide smoothly</p>
          </div>
          
          <LiquidTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="intense"
            size="lg"
            className="w-full"
          />
        </div>
      </div>
    );
  },
}; 