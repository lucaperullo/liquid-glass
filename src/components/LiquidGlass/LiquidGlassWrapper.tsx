import React from 'react';
import LiquidGlass from './LiquidGlass';
import { useAlgUITheme } from '../../context/algUIThemeContext';

interface LiquidGlassWrapperProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const LiquidGlassWrapper: React.FC<LiquidGlassWrapperProps> = (props) => {
  try {
    // Try to use the theme hook
    useAlgUITheme();
    
    // If we get here, the provider is available
    return <LiquidGlass {...props} />;
  } catch (error) {
    // If the provider is not available, render without theme
    return (
      <LiquidGlass 
        {...props}
        // Disable theme-related props to avoid errors
        theme={undefined}
      />
    );
  }
};

export default LiquidGlassWrapper; 