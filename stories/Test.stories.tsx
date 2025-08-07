import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LiquidButton from '../src/components/LiquidButton';

const meta: Meta<typeof LiquidButton> = {
  title: 'Test/LiquidButton',
  component: LiquidButton,
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
