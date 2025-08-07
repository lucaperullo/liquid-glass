import React from 'react';
import { LiquidBadgeProps } from './LiquidBadge.types';
import LiquidGlass from '../LiquidGlass';

const LiquidBadge: React.FC<LiquidBadgeProps> = ({
  children,
  variant = "default",
  color = "default",
  className = "",
  style = {},
  ...props
}) => {
  const colorClasses = {
    default: "bg-white/20 text-white",
    success: "bg-green-500/20 text-green-100",
    warning: "bg-yellow-500/20 text-yellow-100",
    error: "bg-red-500/20 text-red-100",
    info: "bg-blue-500/20 text-blue-100"
  };

  const badgeClass = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]} ${className}`;

  return (
    <LiquidGlass
      variant={variant}
      className={badgeClass}
      style={style}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default LiquidBadge;