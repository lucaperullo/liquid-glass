import type { Meta, StoryObj } from '@storybook/react';
import LiquidGlass from '../src/components/LiquidGlass';

const meta: Meta<typeof LiquidGlass> = {
  title: 'Components/LiquidGlass',
  component: LiquidGlass,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The base LiquidGlass component that provides advanced glass morphism effects with chromatic aberration and liquid distortion.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'intense', 'minimal'],
      description: 'Predefined visual variants',
    },
    scale: {
      control: { type: 'range', min: 0, max: 500, step: 10 },
      description: 'Distortion intensity',
    },
    radius: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      description: 'Border radius',
    },
    backdropBlur: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Background blur intensity',
    },
    frost: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: 'Glass opacity/frost effect',
    },
    children: {
      control: 'text',
      description: 'Content to be rendered inside the glass component',
    },
  },
  args: {
    children: (
      <div className="p-6 text-white">
        <h2 className="text-xl font-bold mb-3">Glass Effect</h2>
        <p className="text-white/80">
          This is a demonstration of the LiquidGlass component with advanced 
          chromatic aberration and liquid distortion effects.
        </p>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
  },
};

export const Intense: Story = {
  args: {
    variant: 'intense',
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
  },
};

export const CustomConfiguration: Story = {
  args: {
    scale: 250,
    radius: 24,
    frost: 0.2,
    backdropBlur: 8,
    borderColor: 'rgba(255, 215, 0, 0.6)',
  },
};

export const InteractiveDemo: Story = {
  args: {
    variant: 'default',
    children: (
      <div className="p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Interactive Glass</h2>
        <p className="text-white/80 mb-6">
          Use the controls panel to experiment with different settings and see 
          how they affect the glass morphism effect in real-time.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Scale:</strong> Distortion intensity
          </div>
          <div>
            <strong>Radius:</strong> Corner roundness
          </div>
          <div>
            <strong>Frost:</strong> Glass opacity
          </div>
          <div>
            <strong>Blur:</strong> Background blur
          </div>
        </div>
      </div>
    ),
  },
};