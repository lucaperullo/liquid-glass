import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlgUIThemeProvider } from '../src';
import LiquidCalendar from '../src/components/LiquidCalendar';
import { CalendarEvent } from '../src/components/LiquidCalendar/LiquidCalendar.types';

const meta: Meta<typeof LiquidCalendar> = {
  title: 'Components/Display/LiquidCalendar',
  component: LiquidCalendar,
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
    showWeekNumbers: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Meeting',
    date: '2024-01-15',
    time: '10:00 AM',
    color: '#3B82F6'
  },
  {
    id: '2',
    title: 'Client Call',
    date: '2024-01-15',
    time: '2:00 PM',
    color: '#10B981'
  },
  {
    id: '3',
    title: 'Project Deadline',
    date: '2024-01-20',
    time: '5:00 PM',
    color: '#EF4444'
  },
  {
    id: '4',
    title: 'Design Review',
    date: '2024-01-22',
    time: '11:00 AM',
    color: '#8B5CF6'
  },
  {
    id: '5',
    title: 'Code Review',
    date: '2024-01-25',
    time: '3:00 PM',
    color: '#F59E0B'
  }
];

export const Default: Story = {
  args: {
    events: sampleEvents,
    label: 'Event Calendar',
    variant: 'clean',
    accent: 'blue',
    size: 'md',
    showWeekNumbers: false,
  },
};

export const WithWeekNumbers: Story = {
  args: {
    events: sampleEvents,
    label: 'Calendar with Week Numbers',
    variant: 'clean',
    accent: 'purple',
    size: 'md',
    showWeekNumbers: true,
  },
};

export const Small: Story = {
  args: {
    events: sampleEvents,
    label: 'Small Calendar',
    variant: 'clean',
    accent: 'green',
    size: 'sm',
    showWeekNumbers: false,
  },
};

export const Large: Story = {
  args: {
    events: sampleEvents,
    label: 'Large Calendar',
    variant: 'clean',
    accent: 'red',
    size: 'lg',
    showWeekNumbers: false,
  },
};

export const Disabled: Story = {
  args: {
    events: sampleEvents,
    label: 'Disabled Calendar',
    disabled: true,
    variant: 'clean',
    accent: 'gray',
    size: 'md',
    showWeekNumbers: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = useState<'clean' | 'default' | 'subtle' | 'intense' | 'minimal'>('clean');
    const [accent, setAccent] = useState<string>('blue');
    const [showWeekNumbers, setShowWeekNumbers] = useState(false);

    const handleEventClick = (event: CalendarEvent, date: Date) => {
      alert(`Event clicked: ${event.title} on ${date.toLocaleDateString()}`);
    };

    const handleDateClick = (date: Date) => {
      console.log('Date clicked:', date.toLocaleDateString());
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
            <label className="flex items-center">
              <input 
                type="checkbox" 
                checked={showWeekNumbers} 
                onChange={(e) => setShowWeekNumbers(e.target.checked)}
                className="mr-2"
              />
              Show Week Numbers
            </label>
          </div>
        </div>

        <LiquidCalendar
          events={events}
          onEventClick={handleEventClick}
          onDateClick={handleDateClick}
          label="Interactive Event Calendar"
          size={size}
          variant={variant}
          accent={accent}
          showWeekNumbers={showWeekNumbers}
        />
      </div>
    );
  },
}; 