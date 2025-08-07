import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidBadge from '../src/components/LiquidBadge';

const meta: Meta<typeof LiquidBadge> = {
  title: 'Components/Display/LiquidBadge',
  component: LiquidBadge,
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
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['clean', 'default', 'subtle', 'intense', 'minimal'],
    },
    accent: {
      control: { type: 'select' },
      options: ['blue', 'purple', 'green', 'red', 'orange', 'pink', 'cyan', 'yellow', 'indigo', 'teal', 'emerald', 'violet', 'fuchsia', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'clean',
    accent: 'blue',
    color: 'default',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'clean',
    accent: 'green',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'clean',
    accent: 'orange',
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'clean',
    accent: 'red',
    color: 'error',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'clean',
    accent: 'blue',
    color: 'info',
  },
};

export const WithNumber: Story = {
  args: {
    children: '5',
    variant: 'clean',
    accent: 'red',
    color: 'error',
  },
};

export const WithIcon: Story = {
  args: {
    children: '⭐ Star',
    variant: 'clean',
    accent: 'yellow',
    color: 'warning',
  },
}; 