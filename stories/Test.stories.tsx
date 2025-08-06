import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlassButton from '../src/components/GlassButton';

const meta: Meta<typeof GlassButton> = {
  title: 'Test/GlassButton',
  component: GlassButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    children: 'Test Button',
  },
}; 