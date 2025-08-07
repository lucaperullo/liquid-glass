import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidSlider from '../src/components/LiquidSlider';
import { SliderItem } from '../src/components/LiquidSlider/LiquidSlider.types';

const meta: Meta<typeof LiquidSlider> = {
  title: 'Components/Display/LiquidSlider',
  component: LiquidSlider,
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
    mode: {
      control: { type: 'select' },
      options: ['carousel', 'slider', 'gallery'],
    },
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
    autoPlay: {
      control: { type: 'boolean' },
    },
    showArrows: {
      control: { type: 'boolean' },
    },
    showDots: {
      control: { type: 'boolean' },
    },
    showThumbnails: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: SliderItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d134df?w=800&h=400&fit=crop',
    alt: 'Mountain Landscape',
    overlay: {
      title: 'Mountain Adventure',
      description: 'Explore the beautiful mountain ranges'
    }
  },
  {
    id: '2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    alt: 'Forest Path',
    overlay: {
      title: 'Forest Walk',
      description: 'Discover the hidden paths in nature'
    }
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d134df?w=800&h=400&fit=crop',
    alt: 'Ocean View',
    overlay: {
      title: 'Ocean Breeze',
      description: 'Feel the calming ocean waves'
    }
  },
  {
    id: '4',
    type: 'content',
    title: 'Custom Content Slide',
    description: 'This is a content slide with custom text and styling'
  }
];

export const Default: Story = {
  args: {
    items: sampleItems,
    mode: 'carousel',
    variant: 'clean',
    accent: 'blue',
    size: 'md',
    autoPlay: false,
    showArrows: true,
    showDots: true,
    showThumbnails: false,
  },
};

export const AutoPlay: Story = {
  args: {
    items: sampleItems,
    mode: 'carousel',
    variant: 'clean',
    accent: 'purple',
    size: 'md',
    autoPlay: true,
    autoPlayInterval: 3000,
    showArrows: true,
    showDots: true,
    showThumbnails: false,
  },
};

export const WithThumbnails: Story = {
  args: {
    items: sampleItems,
    mode: 'gallery',
    variant: 'clean',
    accent: 'green',
    size: 'md',
    autoPlay: false,
    showArrows: true,
    showDots: true,
    showThumbnails: true,
  },
};

export const Small: Story = {
  args: {
    items: sampleItems,
    mode: 'carousel',
    variant: 'clean',
    accent: 'red',
    size: 'sm',
    autoPlay: false,
    showArrows: true,
    showDots: true,
    showThumbnails: false,
  },
};

export const Large: Story = {
  args: {
    items: sampleItems,
    mode: 'carousel',
    variant: 'clean',
    accent: 'orange',
    size: 'lg',
    autoPlay: false,
    showArrows: true,
    showDots: true,
    showThumbnails: false,
  },
};

export const NoArrows: Story = {
  args: {
    items: sampleItems,
    mode: 'carousel',
    variant: 'clean',
    accent: 'pink',
    size: 'md',
    autoPlay: false,
    showArrows: false,
    showDots: true,
    showThumbnails: false,
  },
};

export const NoDots: Story = {
  args: {
    items: sampleItems,
    mode: 'carousel',
    variant: 'clean',
    accent: 'cyan',
    size: 'md',
    autoPlay: false,
    showArrows: true,
    showDots: false,
    showThumbnails: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [mode, setMode] = useState<'carousel' | 'slider' | 'gallery'>('carousel');
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [autoPlay, setAutoPlay] = useState(false);
    const [showArrows, setShowArrows] = useState(true);
    const [showDots, setShowDots] = useState(true);
    const [showThumbnails, setShowThumbnails] = useState(false);

    return (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Mode</label>
            <select 
              value={mode} 
              onChange={(e) => setMode(e.target.value as 'carousel' | 'slider' | 'gallery')}
              className="w-full p-2 border rounded"
            >
              <option value="carousel">Carousel</option>
              <option value="slider">Slider</option>
              <option value="gallery">Gallery</option>
            </select>
          </div>
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
        </div>
        
        <div className="grid grid-cols-2 gap-4">
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
        </div>

        <div className="grid grid-cols-3 gap-4">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={autoPlay} 
              onChange={(e) => setAutoPlay(e.target.checked)}
              className="mr-2"
            />
            Auto Play
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={showArrows} 
              onChange={(e) => setShowArrows(e.target.checked)}
              className="mr-2"
            />
            Show Arrows
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={showDots} 
              onChange={(e) => setShowDots(e.target.checked)}
              className="mr-2"
            />
            Show Dots
          </label>
        </div>

        <div>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={showThumbnails} 
              onChange={(e) => setShowThumbnails(e.target.checked)}
              className="mr-2"
            />
            Show Thumbnails
          </label>
        </div>

        <LiquidSlider
          items={sampleItems}
          mode={mode}
          size={size}
          variant={variant}
          accent={accent}
          autoPlay={autoPlay}
          showArrows={showArrows}
          showDots={showDots}
          showThumbnails={showThumbnails}
        />
      </div>
    );
  },
}; 