import React, { useState } from 'react';
import { LiquidTooltipProps } from './LiquidTooltip.types';
import LiquidGlass from '../LiquidGlass';

const LiquidTooltip: React.FC<LiquidTooltipProps> = ({
  children,
  content,
  position = "top",
  variant = "default",
  className = "",
  style = {},
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute z-50 ${positionClasses[position]}`}>
          <LiquidGlass
            variant={variant}
            className={`px-3 py-2 text-sm whitespace-nowrap ${className}`}
            style={style}
            {...props}
          >
            {content}
          </LiquidGlass>
        </div>
      )}
    </div>
  );
};

export default LiquidTooltip;