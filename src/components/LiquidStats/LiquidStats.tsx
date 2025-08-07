import React from 'react';
import { LiquidStatsProps } from './LiquidStats.types';
import LiquidGlass from '../LiquidGlass';

const LiquidStats: React.FC<LiquidStatsProps> = ({
  items = [],
  variant = "default",
  className = "",
  style = {},
  ...props
}) => {
  return (
    <LiquidGlass
      variant={variant}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 ${className}`}
      style={style}
      {...props}
    >
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-white">{item.value}</div>
          <div className="text-white/60 text-sm">{item.label}</div>
        </div>
      ))}
    </LiquidGlass>
  );
};

export default LiquidStats;