import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GlassButton from '../src/components/GlassButton';

const meta: Meta<typeof GlassButton> = {
  title: 'Components/GlassButton',
  component: GlassButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Interactive button component with glass morphism effects and hover animations.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'intense', 'minimal'],
      description: 'Visual variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interactions',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
  args: {
    children: 'Click me',
    onClick: action('button-clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <GlassButton size="sm" onClick={action('small-clicked')}>
        Small
      </GlassButton>
      <GlassButton size="md" onClick={action('medium-clicked')}>
        Medium
      </GlassButton>
      <GlassButton size="lg" onClick={action('large-clicked')}>
        Large
      </GlassButton>
      <GlassButton size="xl" onClick={action('xl-clicked')}>
        Extra Large
      </GlassButton>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <GlassButton variant="default" onClick={action('default-clicked')}>
        Default
      </GlassButton>
      <GlassButton variant="subtle" onClick={action('subtle-clicked')}>
        Subtle
      </GlassButton>
      <GlassButton variant="intense" onClick={action('intense-clicked')}>
        Intense
      </GlassButton>
      <GlassButton variant="minimal" onClick={action('minimal-clicked')}>
        Minimal
      </GlassButton>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex gap-4">
      <GlassButton onClick={action('normal-clicked')}>
        Normal
      </GlassButton>
      <GlassButton disabled onClick={action('disabled-clicked')}>
        Disabled
      </GlassButton>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: '🚀 Launch App',
  },
};