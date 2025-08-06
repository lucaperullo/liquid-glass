import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassStatsProps } from './GlassStats.types';
import { combineClassNames } from '../../utils';

const GlassStats: React.FC<GlassStatsProps> = ({ 
  stats = [], 
  variant = "default",
  className = "",
  ...props 
}) => {
  const statsClass = combineClassNames("p-6", className);

  return (
    <LiquidGlass 
      variant={variant} 
      className={statsClass}
      {...props}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </LiquidGlass>
  );
};

export default GlassStats;