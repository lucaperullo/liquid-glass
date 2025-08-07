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
  const variantClasses = {
    default: "shadow-xl shadow-white/10",
    subtle: "shadow-lg shadow-white/5",
    intense: "shadow-2xl shadow-white/20",
    minimal: "shadow-md shadow-white/5",
    clean: "shadow-xl shadow-white/15"
  };

  const containerClass = `
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-lg
    transition-all duration-300 ease-out
    hover:scale-[1.02]
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return (
    <LiquidGlass
      variant={variant}
      className={containerClass}
      style={style}
      {...props}
    >
      {items.map((item, index) => (
        <div 
          key={index} 
          className="text-center transition-all duration-200 ease-out hover:scale-105"
        >
          <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
          <div className="text-white/70 text-sm font-medium">{item.label}</div>
        </div>
      ))}
    </LiquidGlass>
  );
};

export default LiquidStats;