import React, { useState, useEffect, useRef } from 'react';
import { LiquidTabsProps, TabItem } from './LiquidTabs.types';
import LiquidGlass from '../LiquidGlass';

const LiquidTabs: React.FC<LiquidTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
  orientation = "horizontal",
  size = "md",
  className = "",
  style = {},
  ...props
}) => {
  const [currentTab, setCurrentTab] = useState<string>(activeTab || tabs[0]?.id || '');
  const [activeTabStyle, setActiveTabStyle] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab && activeTab !== currentTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    updateActiveTabPosition();
  }, [currentTab, orientation]);

  const updateActiveTabPosition = () => {
    const activeTabElement = tabRefs.current[currentTab];
    const containerElement = containerRef.current;
    
    if (activeTabElement && containerElement) {
      const rect = activeTabElement.getBoundingClientRect();
      const containerRect = containerElement.getBoundingClientRect();
      
      setActiveTabStyle({
        left: `${rect.left - containerRect.left}px`,
        top: `${rect.top - containerRect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
    }
  };

  const handleTabClick = async (tabId: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setCurrentTab(tabId);
    }
    
    // Add a small delay to ensure smooth animation
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const sizeClasses = {
    sm: {
      tab: "px-3 py-2 text-sm",
      content: "p-3",
      gap: "gap-1"
    },
    md: {
      tab: "px-4 py-3 text-base",
      content: "p-4",
      gap: "gap-2"
    },
    lg: {
      tab: "px-6 py-4 text-lg",
      content: "p-6",
      gap: "gap-3"
    }
  };

  const orientationClasses = {
    horizontal: "flex flex-col",
    vertical: "flex"
  };

  const tabListClasses = {
    horizontal: `flex ${sizeClasses[size].gap} relative`,
    vertical: `flex flex-col ${sizeClasses[size].gap} relative`
  };

  const inactiveTabClasses = {
    default: "text-white/70 hover:text-white/90 hover:bg-white/10 hover:shadow-md hover:shadow-white/5",
    subtle: "text-white/60 hover:text-white/80 hover:bg-white/5 hover:shadow-sm hover:shadow-white/5",
    intense: "text-white/80 hover:text-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/10",
    minimal: "text-white/50 hover:text-white/70 hover:bg-white/5 hover:shadow-sm hover:shadow-white/5",
    clean: "text-white/75 hover:text-white/95 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10"
  };

  const currentTabData = tabs.find(tab => tab.id === currentTab);

  return (
    <div className={`${orientationClasses[orientation]} ${className}`} style={style}>
      {/* Tab List with LiquidGlass wrapper */}
      <LiquidGlass
        variant={variant}
        cornerRadius={10}
        className={`${orientation === 'horizontal' ? 'mb-4' : 'mr-4'} p-1 rounded`}
        {...props}
      >
        <div 
          ref={containerRef}
          className={`${tabListClasses[orientation]} min-w-fit`}
        >
          {/* Sliding Active Tab LiquidGlass */}
          <div
            className="absolute rounded transition-all duration-300 ease-out"
            style={activeTabStyle}
          >
            <LiquidGlass
              variant={variant}
              cornerRadius={10}
              className="w-full h-full flex items-center justify-center"
              {...props}
            >
              <span className="text-white font-medium">
                {tabs.find(tab => tab.id === currentTab)?.label}
              </span>
            </LiquidGlass>
          </div>

          {tabs.map((tab) => {
            const isActive = tab.id === currentTab;
            const isDisabled = tab.disabled;
            
            return (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[tab.id] = el; }}
                onClick={() => !isDisabled && handleTabClick(tab.id)}
                disabled={isDisabled}
                className={`
                  ${sizeClasses[size].tab}
                  transition-all duration-200 ease-out
                  ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  flex items-center gap-2
                  relative
                  rounded
                  ${orientation === 'horizontal' ? 'border-b-2 border-transparent' : 'border-r-2 border-transparent'}
                  ${isActive ? 'text-transparent' : `${inactiveTabClasses[variant]}`}
                `}
              >
                {tab.icon && (
                  <span className="flex-shrink-0">
                    {tab.icon}
                  </span>
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </LiquidGlass>

      {/* Tab Content */}
      {currentTabData && (
        <div className="flex-1">
          <LiquidGlass
            variant={variant}
            cornerRadius={10}
            className={`${sizeClasses[size].content} rounded`}
            {...props}
          >
            {currentTabData.content}
          </LiquidGlass>
        </div>
      )}
    </div>
  );
};

export default LiquidTabs; 