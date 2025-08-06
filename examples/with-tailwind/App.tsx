import React, { useState } from 'react';
import { 
  LiquidGlass, 
  GlassButton, 
  GlassCard, 
  GlassNavbar, 
  GlassModal, 
  GlassInput,
  GlassProgressBar,
  GlassBadge,
  GlassTooltip,
  GlassStats
} from 'advanced-liquid-glass-ui';

// Import the included CSS
import 'advanced-liquid-glass-ui/alg-ui.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(65);

  const stats = [
    { value: "42K", label: "Active Users" },
    { value: "1.2K", label: "Projects" },
    { value: "99.9%", label: "Uptime" },
    { value: "$2.4M", label: "Revenue" }
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Navigation */}
      <GlassNavbar
        logo="ALG UI"
        links={[
          { label: "Home", href: "#" },
          { label: "Components", href: "#" },
          { label: "Docs", href: "#" }
        ]}
        actions={
          <GlassButton size="sm" onClick={() => setModalOpen(true)}>
            Login
          </GlassButton>
        }
      />

      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Welcome Card */}
          <GlassCard className="p-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Welcome to ALG UI
            </h1>
            <p className="text-white/80 mb-6">
              Advanced Liquid Glass UI with included Tailwind CSS. 
              No separate installation needed!
            </p>
            <div className="space-y-4">
              <GlassButton onClick={() => setModalOpen(true)}>
                Get Started
              </GlassButton>
              <GlassButton variant="subtle">
                Learn More
              </GlassButton>
            </div>
          </GlassCard>

          {/* Stats Card */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Dashboard Stats</h2>
            <GlassStats stats={stats} />
            <div className="flex gap-2 mt-4">
              <GlassBadge color="success">Online</GlassBadge>
              <GlassBadge color="warning">Pending</GlassBadge>
              <GlassBadge color="error">Offline</GlassBadge>
            </div>
          </GlassCard>

          {/* Form Card */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm mb-2">Email</label>
                <GlassInput
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Message</label>
                <textarea
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="Enter your message"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Progress</label>
                <GlassProgressBar value={progress} />
              </div>
              <GlassButton className="w-full">
                Send Message
              </GlassButton>
            </div>
          </GlassCard>

          {/* Liquid Glass Demo */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Liquid Glass Effect</h2>
            <LiquidGlass 
              variant="intense"
              scale={300}
              radius={20}
              className="w-full"
            >
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Chromatic Aberration</h3>
                <p className="text-white/80 mb-4">
                  This component demonstrates the advanced chromatic aberration 
                  and liquid distortion effects.
                </p>
                <GlassTooltip content="This is a tooltip!">
                  <GlassButton size="sm">Hover Me</GlassButton>
                </GlassTooltip>
              </div>
            </LiquidGlass>
          </GlassCard>

        </div>
      </div>

      {/* Modal */}
      <GlassModal
        isOpen={modalOpen}
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
          <GlassButton 
            variant="subtle" 
            onClick={() => setModalOpen(false)}
          >
            Close
          </GlassButton>
          <GlassButton onClick={() => setModalOpen(false)}>
            Get Started
          </GlassButton>
        </div>
      </GlassModal>
    </div>
  );
}

export default App; 