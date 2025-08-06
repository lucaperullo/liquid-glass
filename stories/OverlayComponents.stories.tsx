import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GlassModal from '../src/components/GlassModal';
import GlassSidebar from '../src/components/GlassSidebar';
import GlassButton from '../src/components/GlassButton';
import GlassInput from '../src/components/GlassInput';
import GlassCard from '../src/components/GlassCard';

const meta: Meta = {
  title: 'Components/Overlay Components',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Overlay components with glass morphism effects including modals, sidebars, and other overlay elements.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// GlassModal Stories
export const ModalExamples: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg'>('md');

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Modal Examples</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <GlassButton onClick={() => setIsOpen(true)}>
                  Open Modal
                </GlassButton>
                
                <GlassButton 
                  variant="subtle" 
                  onClick={() => {
                    setModalSize('sm');
                    setIsOpen(true);
                  }}
                >
                  Small Modal
                </GlassButton>
                
                <GlassButton 
                  variant="intense" 
                  onClick={() => {
                    setModalSize('lg');
                    setIsOpen(true);
                  }}
                >
                  Large Modal
                </GlassButton>
              </div>
            </div>
          </GlassCard>
          
          <GlassModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            size={modalSize}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Welcome to ALG UI
            </h2>
            <p className="text-white/80 mb-6">
              This is a beautiful modal with glass morphism effects. 
              Experience the advanced chromatic aberration and liquid distortion.
            </p>
            <div className="flex justify-end space-x-3">
              <GlassButton 
                variant="subtle" 
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </GlassButton>
              <GlassButton onClick={action('modal-confirm')}>
                Confirm
              </GlassButton>
            </div>
          </GlassModal>
        </div>
      </div>
    );
  },
};

export const ModalWithForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-8">
        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Modal with Form</h3>
            <GlassButton onClick={() => setIsOpen(true)}>
              Contact Us
            </GlassButton>
          </GlassCard>
          
          <GlassModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            size="md"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Contact Form
            </h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-white/80 text-sm mb-2">Name</label>
                <GlassInput
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm mb-2">Email</label>
                <GlassInput
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm mb-2">Message</label>
                <textarea
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="Enter your message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <GlassButton 
                variant="subtle" 
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </GlassButton>
              <GlassButton onClick={action('form-submit')}>
                Send Message
              </GlassButton>
            </div>
          </GlassModal>
        </div>
      </div>
    );
  },
};

export const ModalVariants: Story = {
  render: () => {
    const [currentModal, setCurrentModal] = useState<string | null>(null);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Modal Variants</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <GlassButton onClick={() => setCurrentModal('info')}>
                Info Modal
              </GlassButton>
              
              <GlassButton onClick={() => setCurrentModal('warning')}>
                Warning Modal
              </GlassButton>
              
              <GlassButton onClick={() => setCurrentModal('success')}>
                Success Modal
              </GlassButton>
              
              <GlassButton onClick={() => setCurrentModal('error')}>
                Error Modal
              </GlassButton>
            </div>
          </GlassCard>
          
          {/* Info Modal */}
          <GlassModal
            isOpen={currentModal === 'info'}
            onClose={() => setCurrentModal(null)}
            size="md"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">ℹ️</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Information
              </h2>
              <p className="text-white/80 mb-6">
                This is an informational modal with important details.
              </p>
              <GlassButton onClick={() => setCurrentModal(null)}>
                Got it
              </GlassButton>
            </div>
          </GlassModal>
          
          {/* Warning Modal */}
          <GlassModal
            isOpen={currentModal === 'warning'}
            onClose={() => setCurrentModal(null)}
            size="md"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Warning
              </h2>
              <p className="text-white/80 mb-6">
                This action cannot be undone. Are you sure you want to proceed?
              </p>
              <div className="flex justify-center space-x-3">
                <GlassButton 
                  variant="subtle" 
                  onClick={() => setCurrentModal(null)}
                >
                  Cancel
                </GlassButton>
                <GlassButton onClick={() => setCurrentModal(null)}>
                  Proceed
                </GlassButton>
              </div>
            </div>
          </GlassModal>
          
          {/* Success Modal */}
          <GlassModal
            isOpen={currentModal === 'success'}
            onClose={() => setCurrentModal(null)}
            size="md"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Success!
              </h2>
              <p className="text-white/80 mb-6">
                Your action has been completed successfully.
              </p>
              <GlassButton onClick={() => setCurrentModal(null)}>
                Continue
              </GlassButton>
            </div>
          </GlassModal>
          
          {/* Error Modal */}
          <GlassModal
            isOpen={currentModal === 'error'}
            onClose={() => setCurrentModal(null)}
            size="md"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">❌</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Error
              </h2>
              <p className="text-white/80 mb-6">
                Something went wrong. Please try again.
              </p>
              <div className="flex justify-center space-x-3">
                <GlassButton 
                  variant="subtle" 
                  onClick={() => setCurrentModal(null)}
                >
                  Close
                </GlassButton>
                <GlassButton onClick={() => setCurrentModal(null)}>
                  Retry
                </GlassButton>
              </div>
            </div>
          </GlassModal>
        </div>
      </div>
    );
  },
};

// GlassSidebar Stories
export const SidebarExamples: Story = {
  render: () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="p-8">
          <h3 className="text-xl font-bold text-white mb-4">Sidebar Examples</h3>
          <p className="text-white/80">The sidebar is positioned on the left side of the screen.</p>
        </div>
        
        <GlassSidebar className="w-80">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Menu</h3>
            </div>
            
            <nav className="space-y-2">
              <a href="#" className="block p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                🏠 Dashboard
              </a>
              <a href="#" className="block p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                🎨 Components
              </a>
              <a href="#" className="block p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                📖 Documentation
              </a>
              <a href="#" className="block p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                ⚙️ Settings
              </a>
              <a href="#" className="block p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                💬 Support
              </a>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-white/60 text-sm mb-2">User</div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">U</span>
                </div>
                <div>
                  <div className="text-white font-medium">User Name</div>
                  <div className="text-white/60 text-sm">user@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </GlassSidebar>
      </div>
    );
  },
};

export const SidebarWithContent: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="p-8">
          <h3 className="text-xl font-bold text-white mb-4">Sidebar with Navigation</h3>
          <p className="text-white/80">Interactive sidebar with navigation sections.</p>
        </div>
        
        <GlassSidebar className="w-96">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">ALG UI</h3>
              <button
                className="text-white/60 hover:text-white"
              >
                ⚙️
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white/80 text-sm mb-3">MAIN NAVIGATION</h4>
                <nav className="space-y-1">
                  {[
                    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
                    { id: 'components', label: 'Components', icon: '🎨' },
                    { id: 'analytics', label: 'Analytics', icon: '📈' },
                    { id: 'settings', label: 'Settings', icon: '⚙️' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-white/20 text-white'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
              
              <div>
                <h4 className="text-white/80 text-sm mb-3">TOOLS</h4>
                <nav className="space-y-1">
                  {[
                    { id: 'docs', label: 'Documentation', icon: '📖' },
                    { id: 'support', label: 'Support', icon: '💬' },
                    { id: 'feedback', label: 'Feedback', icon: '💡' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-white/20 text-white'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">A</span>
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">ALG UI</div>
                  <div className="text-white/60 text-sm">Advanced Liquid Glass</div>
                </div>
                <button className="text-white/60 hover:text-white">
                  ⚙️
                </button>
              </div>
            </div>
          </div>
        </GlassSidebar>
      </div>
    );
  },
}; 