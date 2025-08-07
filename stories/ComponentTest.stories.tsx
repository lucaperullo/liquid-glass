import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import { 
  LiquidGlass, 
  LiquidButton, 
  LiquidCard, 
  LiquidInput,
  LiquidBadge,
  LiquidCheckbox,
  LiquidSwitch,
  LiquidProgressBar,
  LiquidStats,
  LiquidTooltip
} from '../src';

const meta: Meta = {
  title: 'Test/Component Test',
  decorators: [
    (Story) => (
      <AlgUIThemeProvider defaultTheme="system">
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
          <Story />
        </div>
      </AlgUIThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Component Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LiquidGlass */}
        <LiquidGlass variant="clean" accent="blue" className="p-6">
          <h3 className="text-lg font-semibold mb-2">LiquidGlass</h3>
          <p>Glass effect component</p>
        </LiquidGlass>

        {/* LiquidButton */}
        <div className="flex items-center justify-center">
          <LiquidButton variant="clean" accent="green">
            Test Button
          </LiquidButton>
        </div>

        {/* LiquidCard */}
        <LiquidCard variant="clean" accent="purple" className="p-6">
          <h3 className="text-lg font-semibold mb-2">LiquidCard</h3>
          <p>Card component with glass effect</p>
        </LiquidCard>

        {/* LiquidInput */}
        <div className="flex items-center justify-center">
          <LiquidInput 
            placeholder="Test input" 
            variant="clean" 
            accent="orange"
            className="w-64"
          />
        </div>

        {/* LiquidBadge */}
        <div className="flex items-center justify-center">
          <LiquidBadge variant="clean" accent="red" color="error">
            Badge
          </LiquidBadge>
        </div>

        {/* LiquidCheckbox */}
        <div className="flex items-center justify-center">
          <LiquidCheckbox 
            label="Test checkbox" 
            variant="clean" 
            accent="pink"
          />
        </div>

        {/* LiquidSwitch */}
        <div className="flex items-center justify-center">
          <LiquidSwitch 
            label="Test switch" 
            variant="clean" 
            accent="cyan"
          />
        </div>

        {/* LiquidProgressBar */}
        <div className="w-full">
          <LiquidProgressBar 
            progress={75} 
            showLabel={true}
            variant="clean" 
            accent="teal"
          />
        </div>

        {/* LiquidStats */}
        <LiquidStats 
          items={[
            { value: '1,234', label: 'Test Stats' }
          ]}
          variant="clean" 
          accent="indigo"
        />

        {/* LiquidTooltip */}
        <div className="flex items-center justify-center">
          <LiquidTooltip 
            content="This is a tooltip" 
            variant="clean" 
            accent="violet"
          >
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Hover me
            </button>
          </LiquidTooltip>
        </div>
      </div>
    </div>
  ),
}; 