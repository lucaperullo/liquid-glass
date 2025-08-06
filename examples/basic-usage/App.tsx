import React from 'react';
import { 
  LiquidGlass, 
  GlassButton, 
  GlassCard, 
  GlassNavbar,
  GlassInput,
  GlassBadge,
  GlassStats
} from '../../src';

const stats = [
  { value: "42K", label: "Users" },
  { value: "1.2K", label: "Projects" },
  { value: "99%", label: "Uptime" },
  { value: "24/7", label: "Support" }
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <GlassNavbar 
        logo="LiquidGlass Demo"
        links={navLinks}
        actions={
          <GlassButton size="sm">
            Get Started
          </GlassButton>
        }
      />

      <div className="p-8 space-y-8 max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <GlassCard hover className="text-center p-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to LiquidGlass UI
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the future of UI design with advanced glass morphism effects, 
            chromatic aberration, and liquid distortions.
          </p>
          <div className="flex justify-center space-x-4">
            <GlassButton variant="intense" size="lg">
              Explore Components
            </GlassButton>
            <GlassButton variant="subtle" size="lg">
              View Documentation
            </GlassButton>
          </div>
        </GlassCard>

        {/* Stats Section */}
        <GlassStats stats={stats} />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <GlassCard>
            <div className="text-center">
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Chromatic Aberration
              </h3>
              <p className="text-white/80 mb-4">
                Advanced RGB channel separation creates stunning visual effects 
                that make your interface stand out.
              </p>
              <GlassBadge color="info">Advanced</GlassBadge>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Liquid Distortion
              </h3>
              <p className="text-white/80 mb-4">
                Dynamic SVG-based distortions create fluid, organic movements 
                that feel alive and responsive.
              </p>
              <GlassBadge color="success">Dynamic</GlassBadge>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Glass Morphism
              </h3>
              <p className="text-white/80 mb-4">
                Realistic frosted glass effects with proper backdrop blur 
                and transparency for premium UI feel.
              </p>
              <GlassBadge color="warning">Premium</GlassBadge>
            </div>
          </GlassCard>
        </div>

        {/* Form Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <GlassCard>
            <h2 className="text-2xl font-bold text-white mb-6">
              Newsletter Signup
            </h2>
            <div className="space-y-4">
              <GlassInput 
                placeholder="Enter your email..."
                type="email"
              />
              <GlassInput 
                placeholder="Your name..."
                type="text"
              />
              <GlassButton className="w-full">
                Subscribe Now
              </GlassButton>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Join 10,000+ developers using LiquidGlass UI
            </p>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-white mb-6">
              Component Variants
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <GlassButton variant="default" size="sm">Default</GlassButton>
                <GlassButton variant="subtle" size="sm">Subtle</GlassButton>
                <GlassButton variant="intense" size="sm">Intense</GlassButton>
                <GlassButton variant="minimal" size="sm">Minimal</GlassButton>
              </div>
              <div className="flex flex-wrap gap-2">
                <GlassBadge>Default</GlassBadge>
                <GlassBadge color="success">Success</GlassBadge>
                <GlassBadge color="warning">Warning</GlassBadge>
                <GlassBadge color="error">Error</GlassBadge>
                <GlassBadge color="info">Info</GlassBadge>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Custom Glass Example */}
        <LiquidGlass 
          scale={300}
          radius={32}
          frost={0.2}
          backdropBlur={10}
          borderColor="rgba(255, 215, 0, 0.8)"
          className="p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Custom Configuration
          </h2>
          <p className="text-white/80 mb-6">
            This example shows a fully customized LiquidGlass component with 
            enhanced distortion effects and golden borders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-white">Scale:</strong>
              <div className="text-white/70">300 (High intensity)</div>
            </div>
            <div>
              <strong className="text-white">Radius:</strong>
              <div className="text-white/70">32px (Large corners)</div>
            </div>
            <div>
              <strong className="text-white">Border:</strong>
              <div className="text-white/70">Golden accent</div>
            </div>
          </div>
        </LiquidGlass>

        {/* Footer */}
        <GlassCard variant="minimal" className="text-center">
          <p className="text-white/60">
            Built with ❤️ using LiquidGlass UI • 
            <a href="#" className="text-white/80 hover:text-white ml-1">
              View on GitHub
            </a>
          </p>
        </GlassCard>

      </div>
    </div>
  );
}

export default App;