import React, { useState } from 'react';
import {
  LiquidGlass,
  LiquidButton,
  LiquidCard,
  LiquidInput,
  LiquidSelect,
  LiquidTabs,
  LiquidRange,
  AlgUIThemeProvider
} from '../../src';

const FunctionalDemo: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [progress, setProgress] = useState(75);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('tab1');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' }
  ];

  return (
    <AlgUIThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Liquid Glass UI - Functional Demo
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <LiquidCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Interactive Controls
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Range Slider
                    </label>
                    <LiquidRange
                      value={sliderValue}
                      onChange={setSliderValue}
                      accent="blue"
                      size="md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Intensity Control
                    </label>
                    <LiquidRange
                      value={sliderValue}
                      onChange={setSliderValue}
                      accent="purple"
                      size="md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Contrast Control
                    </label>
                    <LiquidRange
                      value={sliderValue}
                      onChange={setSliderValue}
                      accent="green"
                      size="md"
                    />
                  </div>
                </div>
              </LiquidCard>

              <LiquidCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Form Elements
                </h3>
                
                <div className="space-y-4">
                  <LiquidInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter some text..."
                    accent="blue"
                  />
                  
                  <LiquidSelect
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Select an option"
                    accent="purple"
                  />
                </div>
              </LiquidCard>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <LiquidCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Progress Indicators
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Progress Bar
                    </label>
                    <LiquidRange
                      value={progress}
                      onChange={setProgress}
                      accent="orange"
                      size="sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Volume Control
                    </label>
                    <LiquidRange
                      value={sliderValue}
                      onChange={setSliderValue}
                      accent="red"
                      size="sm"
                    />
                  </div>
                </div>
              </LiquidCard>

              <LiquidCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Tabs Example
                </h3>
                
                <LiquidTabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  accent="indigo"
                />
              </LiquidCard>
            </div>
          </div>

          {/* Glass Container Demo */}
          <LiquidCard className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Glass Container with Controls
            </h2>
            
            <LiquidGlass
              accent="cyan"
              className="p-8 rounded-lg"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Interactive Glass Container
                </h3>
                <p className="text-white/80 mb-6">
                  This container demonstrates the glass effect with interactive controls.
                </p>
                
                <div className="flex justify-center space-x-4">
                  <LiquidButton
                    onClick={() => alert('Button clicked!')}
                    accent="white"
                    size="md"
                  >
                    Primary Action
                  </LiquidButton>
                  
                  <LiquidButton
                    onClick={() => alert('Secondary clicked!')}
                    variant="subtle"
                    accent="white"
                    size="md"
                  >
                    Secondary Action
                  </LiquidButton>
                </div>
              </div>
            </LiquidGlass>
          </LiquidCard>
        </div>
      </div>
    </AlgUIThemeProvider>
  );
};

export default FunctionalDemo; 