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
    default: `
      text-white/95 shadow-xl shadow-white/15
      bg-gradient-to-r from-white/25 via-white/30 to-white/25
      hover:from-white/35 hover:via-white/40 hover:to-white/35
    `,
    success: `
      text-emerald-100 shadow-xl shadow-emerald-500/20
      bg-gradient-to-r from-emerald-500/25 via-emerald-500/30 to-emerald-500/25
      hover:from-emerald-500/35 hover:via-emerald-500/40 hover:to-emerald-500/35
    `,
    warning: `
      text-amber-100 shadow-xl shadow-amber-500/20
      bg-gradient-to-r from-amber-500/25 via-amber-500/30 to-amber-500/25
      hover:from-amber-500/35 hover:via-amber-500/40 hover:to-amber-500/35
    `,
    error: `
      text-red-100 shadow-xl shadow-red-500/20
      bg-gradient-to-r from-red-500/25 via-red-500/30 to-red-500/25
      hover:from-red-500/35 hover:via-red-500/40 hover:to-red-500/35
    `,
    info: `
      text-blue-100 shadow-xl shadow-blue-500/20
      bg-gradient-to-r from-blue-500/25 via-blue-500/30 to-blue-500/25
      hover:from-blue-500/35 hover:via-blue-500/40 hover:to-blue-500/35
    `
  };

  const variantClasses = {
    default: "border border-white/20 hover:border-white/30",
    subtle: "border border-white/15 hover:border-white/25",
    intense: "border border-white/30 hover:border-white/40",
    minimal: "border border-white/10 hover:border-white/20",
    clean: "border border-white/25 hover:border-white/35"
  };

  const badgeClass = `
    inline-flex items-center gap-2 px-4 py-2
    rounded-full text-sm font-bold
    transition-all duration-300 ease-out
    hover:scale-110 active:scale-95
    relative overflow-hidden group
    ${colorClasses[color]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return (
    <LiquidGlass
      variant={variant}
      className={badgeClass}
      style={style}
      {...props}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </LiquidGlass>
  );
};

export default LiquidBadge;