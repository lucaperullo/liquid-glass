import React from 'react';
import {
  LiquidButton,
  LiquidCard,
  LiquidInput,
  LiquidSelect,
  LiquidTabs,
  LiquidGlass,
  AlgUIThemeProvider
} from '../../src';

const App: React.FC = () => {
  return (
    <AlgUIThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Liquid Glass UI with Tailwind CSS
          </h1>

          {/* Component Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <LiquidCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Interactive Components
                </h3>
                
                <div className="space-y-4">
                  <LiquidButton
                    variant="clean"
                    accent="blue"
                    onClick={() => alert('Button clicked!')}
                  >
                    Primary Button
                  </LiquidButton>
                  
                  <LiquidInput
                    placeholder="Enter some text..."
                    variant="clean"
                    accent="purple"
                  />
                  
                  <LiquidSelect
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                      { value: 'option3', label: 'Option 3' }
                    ]}
                    placeholder="Select an option"
                    variant="clean"
                    accent="green"
                  />
                </div>
              </LiquidCard>

              <LiquidCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Glass Effects
                </h3>
                
                <div className="space-y-4">
                  <LiquidGlass
                    variant="clean"
                    accent="red"
                    className="p-4 rounded-lg"
                  >
                    <p className="text-white text-sm">
                      Custom glass container with red accent
                    </p>
                  </LiquidGlass>
                  
                  <LiquidGlass
                    variant="intense"
                    accent="orange"
                    className="p-4 rounded-lg"
                  >
                    <p className="text-white text-sm">
                      Intense glass effect with orange accent
                    </p>
                  </LiquidGlass>
                </div>
              </LiquidCard>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <LiquidCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Tabs Example
                </h3>
                
                <LiquidTabs
                  tabs={[
                    { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
                    { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
                    { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' }
                  ]}
                  variant="clean"
                  accent="indigo"
                />
              </LiquidCard>

              <LiquidCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Different Variants
                </h3>
                
                <div className="space-y-4">
                  <LiquidButton variant="subtle" accent="teal">
                    Subtle Button
                  </LiquidButton>
                  
                  <LiquidButton variant="intense" accent="pink">
                    Intense Button
                  </LiquidButton>
                  
                  <LiquidButton variant="minimal" accent="cyan">
                    Minimal Button
                  </LiquidButton>
                </div>
              </LiquidCard>
            </div>
          </div>

          {/* Color Palette */}
          <LiquidCard className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Available Accent Colors
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {['blue', 'purple', 'green', 'red', 'orange', 'pink', 'cyan', 'yellow', 'indigo', 'teal', 'emerald', 'violet', 'fuchsia', 'rose', 'slate', 'gray'].map(color => (
                <div key={color} className="text-center">
                  <LiquidButton
                    variant="clean"
                    accent={color}
                    size="sm"
                    className="w-full h-12"
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </LiquidButton>
                </div>
              ))}
            </div>
          </LiquidCard>
        </div>
      </div>
    </AlgUIThemeProvider>
  );
};

export default App; 