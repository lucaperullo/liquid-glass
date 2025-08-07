import React, { useState } from 'react';
import {
  LiquidButton,
  LiquidCard,
  LiquidNavbar,
  LiquidInput,
  LiquidBadge,
  LiquidStats
} from '../../src';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <LiquidNavbar className="mb-8">
        <div className="text-xl font-bold text-white">Liquid Glass UI</div>
        <div className="flex items-center space-x-4">
          <LiquidBadge color="success">Active</LiquidBadge>
          <LiquidButton size="sm">Login</LiquidButton>
        </div>
      </LiquidNavbar>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LiquidCard>
            <h2 className="text-2xl font-bold mb-4 text-white">Welcome</h2>
            <p className="text-white/80 mb-4">
              Experience the beauty of liquid glass morphism with our advanced UI components.
            </p>
            <LiquidButton>Get Started</LiquidButton>
          </LiquidCard>

          <LiquidCard>
            <h3 className="text-xl font-bold mb-4 text-white">Input Demo</h3>
            <LiquidInput
              placeholder="Enter your name..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mb-4"
            />
            <LiquidButton size="sm">Submit</LiquidButton>
          </LiquidCard>
        </div>

        <div className="mt-8">
          <LiquidStats
            items={[
              { value: '42K', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '1.2s', label: 'Response Time' }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default App;