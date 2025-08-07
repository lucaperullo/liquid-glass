import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidModal from '../src/components/LiquidModal';

const meta: Meta<typeof LiquidModal> = {
  title: 'Components/Overlay/LiquidModal',
  component: LiquidModal,
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['clean', 'default', 'subtle', 'intense', 'minimal'],
    },
    accent: {
      control: { type: 'select' },
      options: ['blue', 'purple', 'green', 'red', 'orange', 'pink', 'cyan', 'yellow', 'indigo', 'teal', 'emerald', 'violet', 'fuchsia', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    children: 'This is the modal content. You can put any content here.',
    variant: 'clean',
    accent: 'blue',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    isOpen: true,
    title: 'Small Modal',
    children: 'This is a small modal with limited content.',
    variant: 'clean',
    accent: 'purple',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    isOpen: true,
    title: 'Large Modal',
    children: (
      <div className="space-y-4">
        <p>This is a large modal with more content.</p>
        <p>You can include multiple paragraphs and complex content.</p>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-sm">This is a content block within the modal.</p>
        </div>
      </div>
    ),
    variant: 'clean',
    accent: 'green',
    size: 'lg',
  },
};

export const WithActions: Story = {
  args: {
    isOpen: true,
    title: 'Modal with Close Button',
    children: 'This modal has a close button and can be closed by clicking outside or pressing Escape.',
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEscape: true,
    variant: 'clean',
    accent: 'red',
    size: 'md',
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [title, setTitle] = useState('Interactive Modal');
    const [showCloseButton, setShowCloseButton] = useState(true);
    const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
    const [closeOnEscape, setCloseOnEscape] = useState(true);

    return (
      <div className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <select 
              value={size} 
              onChange={(e) => setSize(e.target.value as 'sm' | 'md' | 'lg')}
              className="w-full p-2 border rounded"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Variant</label>
            <select 
              value={variant} 
              onChange={(e) => setVariant(e.target.value as 'clean' | 'default' | 'subtle' | 'intense' | 'minimal')}
              className="w-full p-2 border rounded"
            >
              <option value="clean">Clean</option>
              <option value="default">Default</option>
              <option value="subtle">Subtle</option>
              <option value="intense">Intense</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Accent Color</label>
            <select 
              value={accent} 
              onChange={(e) => setAccent(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
              <option value="cyan">Cyan</option>
              <option value="yellow">Yellow</option>
              <option value="indigo">Indigo</option>
              <option value="teal">Teal</option>
              <option value="emerald">Emerald</option>
              <option value="violet">Violet</option>
              <option value="fuchsia">Fuchsia</option>
              <option value="rose">Rose</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={showCloseButton} 
              onChange={(e) => setShowCloseButton(e.target.checked)}
              className="mr-2"
            />
            Show Close Button
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={closeOnOverlayClick} 
              onChange={(e) => setCloseOnOverlayClick(e.target.checked)}
              className="mr-2"
            />
            Close on Overlay Click
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={closeOnEscape} 
              onChange={(e) => setCloseOnEscape(e.target.checked)}
              className="mr-2"
            />
            Close on Escape
          </label>
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Open Modal
        </button>

        <LiquidModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={title}
          size={size}
          variant={variant}
          accent={accent}
          showCloseButton={showCloseButton}
          closeOnOverlayClick={closeOnOverlayClick}
          closeOnEscape={closeOnEscape}
        >
          <div className="space-y-4">
            <p>This is an interactive modal with customizable properties.</p>
            <p>You can change the size, variant, accent color, and title using the controls above.</p>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm">This modal demonstrates the glassmorphism effect with the selected accent color.</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </LiquidModal>
      </div>
    );
  },
}; 
