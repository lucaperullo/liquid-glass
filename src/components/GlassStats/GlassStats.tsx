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
  const statsClass = combineClassNames("p-6 text-white", className);

  return (
    <LiquidGlass 
      variant={variant} 
      className={statsClass}
      {...props}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-white/70 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </LiquidGlass>
  );
};

export default GlassStats;