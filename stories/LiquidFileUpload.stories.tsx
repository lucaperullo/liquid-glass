import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidFileUpload from '../src/components/LiquidFileUpload';

const meta: Meta<typeof LiquidFileUpload> = {
  title: 'Components/Input/LiquidFileUpload',
  component: LiquidFileUpload,
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
    disabled: {
      control: { type: 'boolean' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    showPreview: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Upload Files',
    variant: 'clean',
    accent: 'blue',
    size: 'md',
    multiple: false,
    showPreview: true,
  },
};

export const Multiple: Story = {
  args: {
    label: 'Upload Multiple Files',
    variant: 'clean',
    accent: 'purple',
    size: 'md',
    multiple: true,
    showPreview: true,
  },
};

export const ImageOnly: Story = {
  args: {
    label: 'Upload Images',
    variant: 'clean',
    accent: 'green',
    size: 'md',
    multiple: true,
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024, // 5MB
    showPreview: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Upload',
    variant: 'clean',
    accent: 'red',
    size: 'sm',
    multiple: false,
    showPreview: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Upload',
    variant: 'clean',
    accent: 'orange',
    size: 'lg',
    multiple: true,
    showPreview: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Upload',
    disabled: true,
    variant: 'clean',
    accent: 'gray',
    size: 'md',
    multiple: false,
    showPreview: true,
  },
};

export const WithConstraints: Story = {
  args: {
    label: 'Upload with Constraints',
    variant: 'clean',
    accent: 'pink',
    size: 'md',
    multiple: true,
    accept: '.pdf,.doc,.docx',
    maxSize: 10 * 1024 * 1024, // 10MB
    showPreview: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [multiple, setMultiple] = useState(false);
    const [showPreview, setShowPreview] = useState(true);
    const [accept, setAccept] = useState<string>('');
    const [maxSize, setMaxSize] = useState<number>(5 * 1024 * 1024);

    const handleFiles = (files: File[]) => {
      console.log('Files uploaded:', files);
      alert(`Uploaded ${files.length} file(s)`);
    };

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
            <label className="block text-sm font-medium mb-2">Accept Type</label>
            <select 
              value={accept} 
              onChange={(e) => setAccept(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">All Files</option>
              <option value="image/*">Images Only</option>
              <option value=".pdf,.doc,.docx">Documents</option>
              <option value="video/*">Videos Only</option>
              <option value="audio/*">Audio Only</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={multiple} 
              onChange={(e) => setMultiple(e.target.checked)}
              className="mr-2"
            />
            Multiple Files
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={showPreview} 
              onChange={(e) => setShowPreview(e.target.checked)}
              className="mr-2"
            />
            Show Preview
          </label>
          <div>
            <label className="block text-sm font-medium mb-2">Max Size (MB)</label>
            <select 
              value={maxSize / (1024 * 1024)} 
              onChange={(e) => setMaxSize(Number(e.target.value) * 1024 * 1024)}
              className="w-full p-2 border rounded"
            >
              <option value={1}>1 MB</option>
              <option value={5}>5 MB</option>
              <option value={10}>10 MB</option>
              <option value={25}>25 MB</option>
              <option value={50}>50 MB</option>
            </select>
          </div>
        </div>

        <LiquidFileUpload
          onChange={handleFiles}
          label="Interactive File Upload"
          size={size}
          variant={variant}
          accent={accent}
          multiple={multiple}
          accept={accept}
          maxSize={maxSize}
          showPreview={showPreview}
        />
      </div>
    );
  },
}; 