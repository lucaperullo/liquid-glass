import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  LiquidGlass,
  LiquidButton,
  LiquidCard,
  LiquidInput,
  LiquidModal,
  LiquidNavbar,
  LiquidProgressBar,
  LiquidSelect,
  LiquidSidebar,
  LiquidSlider,
  LiquidStats,
  LiquidSwitch,
  LiquidTabs,
  LiquidTooltip,
  LiquidBadge,
  LiquidCheckbox,
  LiquidRange
} from '../src';

const ShowcaseComponent = () => {
  const [progress, setProgress] = useState(65);
  const [sliderValue, setSliderValue] = useState(50);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const tabItems = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' }
  ];

  const statItems = [
    { value: '1,234', label: 'Users' },
    { value: '567', label: 'Projects' },
    { value: '89', label: 'Tasks' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          algUI Clean Variant Showcase
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* LiquidGlass */}
          <div className="h-48">
            <LiquidGlass variant="clean" className="h-full">
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">LiquidGlass</h3>
                <p className="text-sm opacity-80">Clean variant</p>
              </div>
            </LiquidGlass>
          </div>

          {/* LiquidButton */}
          <div className="h-48 flex items-center justify-center">
            <LiquidButton variant="clean" size="lg">
              Clean Button
            </LiquidButton>
          </div>

          {/* LiquidCard */}
          <div className="h-48">
            <LiquidCard variant="clean">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">LiquidCard</h3>
                <p className="text-sm opacity-80">Clean variant</p>
              </div>
            </LiquidCard>
          </div>

          {/* LiquidInput */}
          <div className="h-48 flex items-center justify-center">
            <div className="w-full max-w-xs">
              <LiquidInput
                variant="clean"
                placeholder="Clean Input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>

          {/* LiquidProgressBar */}
          <div className="h-48">
            <LiquidProgressBar
              variant="clean"
              progress={progress}
              showLabel={true}
            />
          </div>

          {/* LiquidRange */}
          <div className="h-48 flex items-center justify-center">
            <div className="w-full max-w-xs">
              <LiquidRange
                variant="clean"
                value={sliderValue}
                onChange={setSliderValue}
                showValue={true}
              />
            </div>
          </div>

          {/* LiquidSwitch */}
          <div className="h-48 flex items-center justify-center">
            <LiquidSwitch
              variant="clean"
              checked={switchChecked}
              onChange={setSwitchChecked}
              label="Clean Switch"
            />
          </div>

          {/* LiquidCheckbox */}
          <div className="h-48 flex items-center justify-center">
            <LiquidCheckbox
              variant="clean"
              checked={checkboxChecked}
              onChange={setCheckboxChecked}
              label="Clean Checkbox"
            />
          </div>

          {/* LiquidSelect */}
          <div className="h-48 flex items-center justify-center">
            <div className="w-full max-w-xs">
              <LiquidSelect
                variant="clean"
                options={selectOptions}
                value={selectedOption}
                onChange={setSelectedOption}
                placeholder="Select option"
              />
            </div>
          </div>

          {/* LiquidBadge */}
          <div className="h-48 flex items-center justify-center">
            <LiquidBadge variant="clean" color="success">
              Clean Badge
            </LiquidBadge>
          </div>

          {/* LiquidStats */}
          <div className="h-48">
            <LiquidStats
              variant="clean"
              items={statItems}
            />
          </div>

          {/* LiquidTooltip */}
          <div className="h-48 flex items-center justify-center">
            <LiquidTooltip
              variant="clean"
              content="Clean tooltip content"
              position="top"
            >
              <LiquidButton variant="clean">
                Hover for Tooltip
              </LiquidButton>
            </LiquidTooltip>
          </div>

          {/* LiquidTabs */}
          <div className="h-48">
            <LiquidTabs
              variant="clean"
              tabs={tabItems}
            />
          </div>

        </div>

        {/* LiquidNavbar */}
        <div className="mt-8">
          <LiquidNavbar variant="clean">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl font-bold text-white">Clean Navbar</h2>
              <div className="flex items-center gap-4">
                <LiquidButton variant="clean" size="sm">Home</LiquidButton>
                <LiquidButton variant="clean" size="sm">About</LiquidButton>
                <LiquidButton variant="clean" size="sm">Contact</LiquidButton>
              </div>
            </div>
          </LiquidNavbar>
        </div>

        {/* LiquidSidebar */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <LiquidSidebar variant="clean" position="left">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Clean Sidebar</h3>
              <div className="space-y-2">
                <div className="text-white/80 hover:text-white cursor-pointer">Menu Item 1</div>
                <div className="text-white/80 hover:text-white cursor-pointer">Menu Item 2</div>
                <div className="text-white/80 hover:text-white cursor-pointer">Menu Item 3</div>
              </div>
            </div>
          </LiquidSidebar>
          <div className="lg:col-span-3">
            <LiquidCard variant="clean">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Main Content</h3>
                <p className="text-white/80">
                  This is the main content area with a clean variant card.
                </p>
              </div>
            </LiquidCard>
          </div>
        </div>

      </div>
    </div>
  );
};

const meta: Meta<typeof ShowcaseComponent> = {
  title: 'Showcase/Clean Variant',
  component: ShowcaseComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Showcase of all algUI components using the clean variant.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', overflow: 'auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CleanVariantShowcase: Story = {
  render: () => <ShowcaseComponent />,
}; 
