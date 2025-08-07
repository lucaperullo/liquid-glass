import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlassInput from '../src/components/GlassInput';
import GlassButton from '../src/components/GlassButton';

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

const GlassInputDemo: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [variant, setVariant] = useState<'default' | 'subtle' | 'intense' | 'minimal'>('default');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
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
        <div className="max-w-md w-full space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Glass Input Demo</h1>
            <p className="text-white/80">
              Beautiful glass morphism input fields with advanced effects
            </p>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Email Address</label>
            <GlassInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant={variant}
              blur={blur}
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Password</label>
            <GlassInput
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant={variant}
              blur={blur}
            />
          </div>

          {/* Search Input */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Search</label>
            <GlassInput
              type="text"
              placeholder="Search for anything..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant={variant}
              blur={blur}
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Message</label>
            <GlassInput
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant={variant}
              blur={blur}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <GlassButton 
              variant="default" 
              size="lg"
              className="w-full"
              onClick={() => alert('Form submitted!')}
            >
              Submit Form
            </GlassButton>
          </div>

          {/* Form Values Display */}
          <div className="mt-8 p-4 bg-white/10 rounded-lg">
            <h3 className="text-white font-bold mb-2 text-sm">Form Values:</h3>
            <div className="text-white/80 text-xs space-y-1">
              <div>Email: {email || 'Not entered'}</div>
              <div>Password: {password ? '••••••••' : 'Not entered'}</div>
              <div>Search: {search || 'Not entered'}</div>
              <div>Message: {message || 'Not entered'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/GlassInput',
  component: GlassInput,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced glass morphism input component with beautiful effects and smooth interactions. Perfect for forms and data entry!',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'intense', 'minimal'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    blur: {
      control: { type: 'range', min: 0, max: 10, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => <GlassInputDemo />,
};

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-80 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Default Input</h2>
            <p className="text-white/80 text-sm">Standard glass morphism input field</p>
          </div>
          
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Email</label>
            <GlassInput
              type="email"
              placeholder="Enter your email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          
          <div className="text-center">
            <p className="text-white/60 text-sm">Value: {value || 'Not entered'}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const InputTypes: Story = {
  render: () => {
    const [values, setValues] = useState({
      text: '',
      email: '',
      password: '',
      number: '',
      tel: ''
    });
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-80 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Input Types</h2>
            <p className="text-white/80 text-sm">Different input types with glass effects</p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Text</label>
              <GlassInput
                type="text"
                placeholder="Enter text"
                value={values.text}
                onChange={(e) => setValues({...values, text: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Email</label>
              <GlassInput
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={(e) => setValues({...values, email: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Password</label>
              <GlassInput
                type="password"
                placeholder="Enter password"
                value={values.password}
                onChange={(e) => setValues({...values, password: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Number</label>
              <GlassInput
                type="number"
                placeholder="Enter number"
                value={values.number}
                onChange={(e) => setValues({...values, number: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Phone</label>
              <GlassInput
                type="tel"
                placeholder="Enter phone"
                value={values.tel}
                onChange={(e) => setValues({...values, tel: e.target.value})}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
        <div className="w-80 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Input Variants</h2>
            <p className="text-white/80 text-sm">Different glass morphism variants</p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Default</label>
              <GlassInput
                type="text"
                placeholder="Default variant"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="default"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Subtle</label>
              <GlassInput
                type="text"
                placeholder="Subtle variant"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="subtle"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Intense</label>
              <GlassInput
                type="text"
                placeholder="Intense variant"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="intense"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium">Minimal</label>
              <GlassInput
                type="text"
                placeholder="Minimal variant"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="minimal"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
}; 