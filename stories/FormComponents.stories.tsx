import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LiquidInput from '../src/components/LiquidInput';
import LiquidProgressBar from '../src/components/LiquidProgressBar';
import LiquidButton from '../src/components/LiquidButton';
import LiquidCard from '../src/components/LiquidCard';

const meta: Meta = {
  title: 'Components/Form Components',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Form components with Liquid morphism effects including inputs, progress bars, and interactive elements.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// LiquidInput Stories
export const InputExamples: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [search, setSearch] = useState('');

    return (
      <div className="space-y-6 max-w-md">
        <LiquidCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Input Fields</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm mb-2">Email</label>
              <LiquidInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-sm mb-2">Password</label>
              <LiquidInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-sm mb-2">Search</label>
              <LiquidInput
                type="text"
                placeholder="Search components..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </LiquidCard>
      </div>
    );
  },
};

export const InputVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <LiquidCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Input Variants</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Default</label>
            <LiquidInput placeholder="Default input" />
          </div>
          
          <div>
            <label className="block text-white/80 text-sm mb-2">With Value</label>
            <LiquidInput value="example@email.com" />
          </div>
          
          <div>
            <label className="block text-white/80 text-sm mb-2">Disabled</label>
            <LiquidInput value="Disabled input" disabled />
          </div>
          
          <div>
            <label className="block text-white/80 text-sm mb-2">With Icon</label>
            <div className="relative">
              <LiquidInput placeholder="Search..." />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60">
                🔍
              </span>
            </div>
          </div>
        </div>
      </LiquidCard>
    </div>
  ),
};

// Progress Bar Stories
export const ProgressExamples: Story = {
  render: () => {
    const [progress, setProgress] = useState(25);
    const [animatedProgress, setAnimatedProgress] = useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setAnimatedProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="space-y-6 max-w-md">
        <LiquidCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Progress Bars</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-white/80 text-sm mb-2">
                <span>Static Progress</span>
                <span>{progress}%</span>
              </div>
              <LiquidProgressBar progress={progress} />
              <div className="flex gap-2 mt-2">
                <LiquidButton 
                  size="sm" 
                  onClick={() => setProgress(Math.max(0, progress - 25))}
                >
                  -25%
                </LiquidButton>
                <LiquidButton 
                  size="sm" 
                  onClick={() => setProgress(Math.min(100, progress + 25))}
                >
                  +25%
                </LiquidButton>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-white/80 text-sm mb-2">
                <span>Animated Progress</span>
                <span>{animatedProgress}%</span>
              </div>
              <LiquidProgressBar progress={animatedProgress} />
            </div>
            
            <div>
              <div className="flex justify-between text-white/80 text-sm mb-2">
                <span>Without Label</span>
              </div>
              <LiquidProgressBar progress={75} showLabel={false} />
            </div>
          </div>
        </LiquidCard>
      </div>
    );
  },
};

export const ProgressVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <LiquidCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Progress Variants</h3>
        
        <div className="space-y-4">
          <div>
            <span className="block text-white/80 text-sm mb-2">Default (50%)</span>
            <LiquidProgressBar progress={50} />
          </div>
          
          <div>
            <span className="block text-white/80 text-sm mb-2">Low (25%)</span>
            <LiquidProgressBar progress={25} />
          </div>
          
          <div>
            <span className="block text-white/80 text-sm mb-2">High (75%)</span>
            <LiquidProgressBar progress={75} />
          </div>
          
          <div>
            <span className="block text-white/80 text-sm mb-2">Complete (100%)</span>
            <LiquidProgressBar progress={100} />
          </div>
        </div>
      </LiquidCard>
    </div>
  ),
};

// Complete Form Example
export const CompleteForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [step, setStep] = useState(1);

    const calculatePasswordStrength = (password: string) => {
      let strength = 0;
      if (password.length >= 8) strength += 25;
      if (/[a-z]/.test(password)) strength += 25;
      if (/[A-Z]/.test(password)) strength += 25;
      if (/[0-9]/.test(password)) strength += 25;
      return strength;
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value;
      setFormData(prev => ({ ...prev, password }));
      setPasswordStrength(calculatePasswordStrength(password));
    };

    return (
      <div className="space-y-6 max-w-lg">
        <LiquidCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Registration Form</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm mb-2">Full Name</label>
              <LiquidInput
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-sm mb-2">Email Address</label>
              <LiquidInput
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-sm mb-2">Password</label>
              <LiquidInput
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handlePasswordChange}
              />
              <div className="mt-2">
                <div className="flex justify-between text-white/80 text-xs mb-1">
                  <span>Password Strength</span>
                  <span>{passwordStrength}%</span>
                </div>
                <LiquidProgressBar progress={passwordStrength} showLabel={false} />
              </div>
            </div>
            
            <div>
              <label className="block text-white/80 text-sm mb-2">Confirm Password</label>
              <LiquidInput
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <LiquidButton 
                variant="subtle" 
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                Previous
              </LiquidButton>
              <LiquidButton 
                onClick={() => setStep(Math.min(3, step + 1))}
                className="flex-1"
              >
                {step === 3 ? 'Submit' : 'Next'}
              </LiquidButton>
            </div>
            
            <div className="flex justify-center">
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`w-3 h-3 rounded-full ${
                      s <= step ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </LiquidCard>
      </div>
    );
  },
}; 
