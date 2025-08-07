import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import all components
import LiquidGlass from '../src/components/LiquidGlass';
import LiquidButton from '../src/components/LiquidButton';
import LiquidCard from '../src/components/LiquidCard';
import LiquidNavbar from '../src/components/LiquidNavbar';
import LiquidModal from '../src/components/LiquidModal';
import LiquidSidebar from '../src/components/LiquidSidebar';
import LiquidInput from '../src/components/LiquidInput';
import LiquidProgressBar from '../src/components/LiquidProgressBar';
import LiquidBadge from '../src/components/LiquidBadge';
import LiquidTooltip from '../src/components/LiquidTooltip';
import LiquidStats from '../src/components/LiquidStats';

// Background images for showcase
const backgrounds = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1600&h=900&fit=crop'
];

// Component selector
const ComponentSelector: React.FC<{
  currentComponent: string;
  onComponentChange: (component: string) => void;
}> = ({ currentComponent, onComponentChange }) => {
  const components = [
    { id: 'liquid-glass', name: 'Liquid Glass', icon: '🔮' },
    { id: 'glass-button', name: 'Glass Button', icon: '🔘' },
    { id: 'glass-card', name: 'Glass Card', icon: '📄' },
    { id: 'glass-navbar', name: 'Glass Navbar', icon: '🧭' },
    { id: 'glass-input', name: 'Glass Input', icon: '📝' },
    { id: 'glass-progress', name: 'Glass Progress', icon: '📊' },
    { id: 'glass-badge', name: 'Glass Badge', icon: '🏷️' },
    { id: 'glass-stats', name: 'Glass Stats', icon: '📈' },
    { id: 'glass-modal', name: 'Glass Modal', icon: '🪟' },
    { id: 'glass-tooltip', name: 'Glass Tooltip', icon: '💡' }
  ];

  return (
    <div className="fixed top-4 left-4 z-50 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
      <h3 className="text-white font-bold mb-3 text-sm">Component</h3>
      <select 
        value={currentComponent}
        onChange={(e) => onComponentChange(e.target.value)}
        className="w-full px-3 py-2 text-sm bg-white/10 text-white rounded border border-white/20"
      >
        {components.map(comp => (
          <option key={comp.id} value={comp.id}>
            {comp.icon} {comp.name}
          </option>
        ))}
      </select>
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

const ShowcaseStory: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [currentComponent, setCurrentComponent] = useState('liquid-glass');
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [progress, setProgress] = useState(65);

  const stats = [
    { value: "42K", label: "Active Users" },
    { value: "1.2K", label: "Projects" },
    { value: "99.9%", label: "Uptime" },
    { value: "$2.4M", label: "Revenue" }
  ];

  const renderComponent = () => {
    switch (currentComponent) {
      case 'liquid-glass':
        return (
          <div className="space-y-6">
            <LiquidGlass variant="default" className="w-80">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Liquid Glass Effect</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Advanced chromatic aberration and liquid distortion effects.
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
            
            <div className="grid grid-cols-2 gap-4">
              <LiquidGlass variant="subtle" className="w-64">
                <div className="p-4 text-white text-center">
                  <h4 className="font-bold mb-2">Subtle</h4>
                  <p className="text-white/80 text-sm">Gentle morphism</p>
                </div>
              </LiquidGlass>
              <LiquidGlass variant="intense" className="w-64">
                <div className="p-4 text-white text-center">
                  <h4 className="font-bold mb-2">Intense</h4>
                  <p className="text-white/80 text-sm">Dramatic effects</p>
                </div>
              </LiquidGlass>
            </div>
          </div>
        );

      case 'glass-button':
        return (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <LiquidButton variant="default" size="md">Default</LiquidButton>
              <LiquidButton variant="subtle" size="md">Subtle</LiquidButton>
              <LiquidButton variant="intense" size="md">Intense</LiquidButton>
              <LiquidButton variant="minimal" size="md">Minimal</LiquidButton>
            </div>
            
            <div className="flex flex-col gap-3">
              <LiquidButton variant="default" size="sm">Small</LiquidButton>
              <LiquidButton variant="default" size="md">Medium</LiquidButton>
              <LiquidButton variant="default" size="lg">Large</LiquidButton>
              <LiquidButton variant="default" size="xl">Extra Large</LiquidButton>
            </div>
            
            <div className="flex gap-4">
              <LiquidButton variant="default" size="md">Normal</LiquidButton>
              <LiquidButton variant="default" size="md" disabled>Disabled</LiquidButton>
            </div>
          </div>
        );

      case 'glass-card':
        return (
          <div className="space-y-6">
            <LiquidCard variant="default" className="w-80">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-3">Welcome Card</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Beautiful glass morphism effects with elegant styling.
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
            </LiquidCard>
            
            <div className="grid grid-cols-2 gap-4">
              <LiquidCard variant="subtle" className="w-64">
                <div className="text-white text-center">
                  <h4 className="font-bold mb-2">Subtle</h4>
                  <p className="text-white/80 text-sm">Gentle morphism</p>
                </div>
              </LiquidCard>
              <LiquidCard variant="intense" className="w-64">
                <div className="text-white text-center">
                  <h4 className="font-bold mb-2">Intense</h4>
                  <p className="text-white/80 text-sm">Dramatic effects</p>
                </div>
              </LiquidCard>
            </div>
          </div>
        );

      case 'glass-navbar':
        return (
          <div className="w-full">
            <LiquidNavbar
              logo="ALG UI"
              links={[
                { label: "Home", href: "#" },
                { label: "Components", href: "#" },
                { label: "Docs", href: "#" }
              ]}
              actions={
                <LiquidButton size="sm" onClick={() => setModalOpen(true)}>
                  Login
                </LiquidButton>
              }
            />
          </div>
        );

      case 'glass-input':
        return (
          <div className="space-y-4 w-80">
            <LiquidInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LiquidInput
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LiquidProgressBar progress={progress} showLabel={true} />
          </div>
        );

      case 'glass-progress':
        return (
          <div className="space-y-6 w-80">
            <div>
              <h3 className="text-white font-bold mb-2">Progress Examples</h3>
              <LiquidProgressBar progress={25} showLabel={true} />
            </div>
            <div>
              <LiquidProgressBar progress={50} showLabel={true} />
            </div>
            <div>
              <LiquidProgressBar progress={75} showLabel={true} />
            </div>
            <div>
              <LiquidProgressBar progress={100} showLabel={true} />
            </div>
          </div>
        );

      case 'glass-badge':
        return (
          <div className="space-y-4">
            <div className="flex gap-2">
              <LiquidBadge color="default">Default</LiquidBadge>
              <LiquidBadge color="success">Success</LiquidBadge>
              <LiquidBadge color="warning">Warning</LiquidBadge>
              <LiquidBadge color="error">Error</LiquidBadge>
              <LiquidBadge color="info">Info</LiquidBadge>
            </div>
            
            <div className="flex gap-2">
              <LiquidBadge variant="subtle" color="default">Subtle</LiquidBadge>
              <LiquidBadge variant="intense" color="success">Intense</LiquidBadge>
              <LiquidBadge variant="minimal" color="warning">Minimal</LiquidBadge>
            </div>
          </div>
        );

      case 'glass-stats':
        return (
          <div className="w-96">
            <LiquidStats stats={stats} />
          </div>
        );

      case 'glass-modal':
        return (
          <div className="space-y-4">
            <LiquidButton onClick={() => setModalOpen(true)}>
              Open Modal
            </LiquidButton>
            
            <LiquidModal
              
              onClose={() => setModalOpen(false)}
              size="md"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Welcome to ALG UI
              </h2>
              <p className="text-white/80 mb-6">
                Experience the most advanced glass morphism effects in React.
                All components are fully customizable and accessible.
              </p>
              <div className="flex justify-end space-x-3">
                <LiquidButton 
                  variant="subtle" 
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </LiquidButton>
                <LiquidButton onClick={action('modal-action')}>
                  Get Started
                </LiquidButton>
              </div>
            </LiquidModal>
          </div>
        );

      case 'glass-tooltip':
        return (
          <div className="space-y-4">
            <LiquidTooltip content="This is a tooltip! Hover to see the effect.">
              <LiquidButton variant="minimal">Hover Me</LiquidButton>
            </LiquidTooltip>
            
            <LiquidTooltip content="Tooltip on the right" position="right">
              <LiquidButton variant="subtle">Right Tooltip</LiquidButton>
            </LiquidTooltip>
            
            <LiquidTooltip content="Tooltip on the bottom" position="bottom">
              <LiquidButton variant="intense">Bottom Tooltip</LiquidButton>
            </LiquidTooltip>
          </div>
        );

      default:
        return <div className="text-white">Select a component to test</div>;
    }
  };

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
      <ComponentSelector 
        currentComponent={currentComponent} 
        onComponentChange={setCurrentComponent} 
      />
      <BackgroundSelector currentBg={currentBg} onBgChange={setCurrentBg} />
      
      {/* Main content area */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="max-w-4xl w-full">
          {renderComponent()}
        </div>
      </div>

      {/* Sidebar */}
      <LiquidSidebar className="w-64">
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Menu</h3>
          <nav className="space-y-2">
            <a href="#" className="block text-white/80 hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="block text-white/80 hover:text-white transition-colors">Components</a>
            <a href="#" className="block text-white/80 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="block text-white/80 hover:text-white transition-colors">Support</a>
          </nav>
        </div>
      </LiquidSidebar>
    </div>
  );
};

const meta: Meta = {
  title: 'Showcase/Interactive Demo',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive showcase of all ALG UI components. Select different components and backgrounds to test the liquid glass effects!',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveShowcase: Story = {
  render: () => <ShowcaseStory />,
}; 
