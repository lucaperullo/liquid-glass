import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiquidGlass from '../src/components/LiquidGlass';

const NoProviderComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            No Provider Test
          </h1>
          <p className="text-white/80 mb-6">
            This component should work without the AlgUIThemeProvider
          </p>
        </div>
        
        <LiquidGlass variant="default" className="w-80">
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Liquid Glass Without Provider</h3>
            <p className="text-white/80 mb-4">
              This component should render correctly even without the theme provider.
            </p>
            <button className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors">
              Test Button
            </button>
          </div>
        </LiquidGlass>
        
        <LiquidGlass variant="intense" className="w-80">
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Intense Variant</h3>
            <p className="text-white/80 mb-4">
              This should work with the intense variant.
            </p>
            <button className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors">
              Intense Button
            </button>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

const meta: Meta<typeof NoProviderComponent> = {
  title: 'Test/No Provider',
  component: NoProviderComponent,
  parameters: {
    layout: 'fullscreen',
  },
  // No decorators - this tests without the provider
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <NoProviderComponent />,
}; 