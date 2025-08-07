import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidAlert from '../src/components/LiquidAlert';

const meta: Meta<typeof LiquidAlert> = {
  title: 'Components/Feedback/LiquidAlert',
  component: LiquidAlert,
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
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['clean', 'default', 'subtle', 'intense', 'minimal'],
    },
    showIcon: {
      control: { type: 'boolean' },
    },
    dismissible: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    children: 'This is an informational message. It provides useful information to the user.',
    variant: 'clean',
    size: 'md',
    showIcon: true,
    dismissible: false,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success!',
    children: 'Your changes have been saved successfully. The operation completed without any errors.',
    variant: 'clean',
    size: 'md',
    showIcon: true,
    dismissible: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    children: 'Please review your input before proceeding. Some fields may need attention.',
    variant: 'clean',
    size: 'md',
    showIcon: true,
    dismissible: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    children: 'An error occurred while processing your request. Please try again or contact support.',
    variant: 'clean',
    size: 'md',
    showIcon: true,
    dismissible: true,
  },
};

export const Small: Story = {
  args: {
    type: 'info',
    title: 'Small Alert',
    children: 'This is a small alert with compact styling.',
    variant: 'clean',
    size: 'sm',
    showIcon: true,
    dismissible: false,
  },
};

export const Large: Story = {
  args: {
    type: 'success',
    title: 'Large Alert',
    children: 'This is a large alert with more prominent styling and spacing.',
    variant: 'clean',
    size: 'lg',
    showIcon: true,
    dismissible: true,
  },
};

export const NoIcon: Story = {
  args: {
    type: 'info',
    title: 'Alert without Icon',
    children: 'This alert doesn\'t show an icon, relying only on the title and content.',
    variant: 'clean',
    size: 'md',
    showIcon: false,
    dismissible: false,
  },
};

export const NoTitle: Story = {
  args: {
    type: 'warning',
    children: 'This alert has no title, only content. It\'s useful for simple messages.',
    variant: 'clean',
    size: 'md',
    showIcon: true,
    dismissible: true,
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <LiquidAlert
        type="info"
        title="Information"
        variant="clean"
        size="md"
      >
        This is an informational message with glass effects.
      </LiquidAlert>
      
      <LiquidAlert
        type="success"
        title="Success!"
        variant="clean"
        size="md"
        dismissible={true}
      >
        Your operation completed successfully with beautiful glass styling.
      </LiquidAlert>
      
      <LiquidAlert
        type="warning"
        title="Warning"
        variant="clean"
        size="md"
        dismissible={true}
      >
        Please review your input before proceeding with the glass-enhanced interface.
      </LiquidAlert>
      
      <LiquidAlert
        type="error"
        title="Error"
        variant="clean"
        size="md"
        dismissible={true}
      >
        An error occurred while processing your request with the liquid glass system.
      </LiquidAlert>
    </div>
  ),
}; 