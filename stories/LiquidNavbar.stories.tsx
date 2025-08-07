import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GlassNavbar from '../src/components/GlassNavbar';
import GlassButton from '../src/components/GlassButton';

const meta: Meta<typeof GlassNavbar> = {
  title: 'Components/GlassNavbar',
  component: GlassNavbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Responsive navigation bar with glass morphism effects and mobile menu support.',
      },
    },
  },
  argTypes: {
    logo: {
      control: 'text',
      description: 'Brand logo or text',
    },
    links: {
      control: 'object',
      description: 'Navigation links array',
    },
    actions: {
      control: 'object',
      description: 'Action buttons or elements',
    },
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'intense', 'minimal'],
      description: 'Visual variant',
    },
  },
  args: {
    logo: 'ALG UI',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
    ],
    actions: <GlassButton size="sm">Login</GlassButton>,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <GlassNavbar
        logo="ALG UI"
        variant="default"
        links={[
          { label: 'Home', href: '#' },
          { label: 'Components', href: '#' },
          { label: 'Docs', href: '#' },
        ]}
        actions={<GlassButton size="sm">Login</GlassButton>}
      />
      
      <GlassNavbar
        logo="ALG UI"
        variant="subtle"
        links={[
          { label: 'Home', href: '#' },
          { label: 'Components', href: '#' },
          { label: 'Docs', href: '#' },
        ]}
        actions={<GlassButton size="sm" variant="subtle">Login</GlassButton>}
      />
      
      <GlassNavbar
        logo="ALG UI"
        variant="intense"
        links={[
          { label: 'Home', href: '#' },
          { label: 'Components', href: '#' },
          { label: 'Docs', href: '#' },
        ]}
        actions={<GlassButton size="sm" variant="intense">Login</GlassButton>}
      />
      
      <GlassNavbar
        logo="ALG UI"
        variant="minimal"
        links={[
          { label: 'Home', href: '#' },
          { label: 'Components', href: '#' },
          { label: 'Docs', href: '#' },
        ]}
        actions={<GlassButton size="sm" variant="minimal">Login</GlassButton>}
      />
    </div>
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <GlassNavbar
      logo="ALG UI"
      links={[
        { label: 'Home', href: '#' },
        { label: 'Components', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Support', href: '#' },
      ]}
      actions={
        <div className="flex items-center gap-3">
          <GlassButton size="sm" variant="subtle">
            Sign Up
          </GlassButton>
          <GlassButton size="sm">
            Login
          </GlassButton>
        </div>
      }
    />
  ),
};

export const WithLogo: Story = {
  render: () => (
    <GlassNavbar
      logo={
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-white font-bold text-lg">ALG UI</span>
        </div>
      }
      links={[
        { label: 'Home', href: '#' },
        { label: 'Components', href: '#' },
        { label: 'Documentation', href: '#' },
      ]}
      actions={<GlassButton size="sm">Get Started</GlassButton>}
    />
  ),
};

export const Minimal: Story = {
  render: () => (
    <GlassNavbar
      logo="ALG UI"
      variant="minimal"
      links={[
        { label: 'Home', href: '#' },
        { label: 'About', href: '#' },
        { label: 'Contact', href: '#' },
      ]}
      actions={<GlassButton size="sm" variant="minimal">Contact</GlassButton>}
    />
  ),
};

export const Intense: Story = {
  render: () => (
    <GlassNavbar
      logo="ALG UI"
      variant="intense"
      links={[
        { label: 'Home', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Support', href: '#' },
      ]}
      actions={<GlassButton size="sm" variant="intense">Try Free</GlassButton>}
    />
  ),
}; 