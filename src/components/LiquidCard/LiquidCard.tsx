import React from 'react';
import { LiquidCardProps } from './LiquidCard.types';
import LiquidGlass from '../LiquidGlass';

const LiquidCard: React.FC<LiquidCardProps> = ({
  children,
  variant = "default",
  className = "",
  style = {},
  ...props
}) => {
  const variantClasses = {
    default: `
      shadow-2xl shadow-white/15 hover:shadow-3xl hover:shadow-white/25
      bg-gradient-to-br from-white/20 via-white/25 to-white/20
      hover:from-white/25 hover:via-white/30 hover:to-white/25
      border border-white/20 hover:border-white/30
    `,
    subtle: `
      shadow-xl shadow-white/10 hover:shadow-2xl hover:shadow-white/20
      bg-gradient-to-br from-white/15 via-white/20 to-white/15
      hover:from-white/20 hover:via-white/25 hover:to-white/20
      border border-white/15 hover:border-white/25
    `,
    intense: `
      shadow-3xl shadow-white/25 hover:shadow-4xl hover:shadow-white/35
      bg-gradient-to-br from-white/30 via-white/40 to-white/30
      hover:from-white/35 hover:via-white/45 hover:to-white/35
      border border-white/30 hover:border-white/40
    `,
    minimal: `
      shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-white/15
      bg-gradient-to-br from-white/10 via-white/15 to-white/10
      hover:from-white/15 hover:via-white/20 hover:to-white/15
      border border-white/10 hover:border-white/20
    `,
    clean: `
      shadow-2xl shadow-white/20 hover:shadow-3xl hover:shadow-white/30
      bg-gradient-to-br from-white/25 via-white/30 to-white/25
      hover:from-white/30 hover:via-white/35 hover:to-white/30
      border border-white/25 hover:border-white/35
    `
  };

  const cardClass = `
    p-8 rounded-2xl transition-all duration-500 ease-out
    hover:scale-[1.02] hover:-translate-y-2
    relative overflow-hidden group
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return (
    <LiquidGlass
      variant={variant}
      className={cardClass}
      style={style}
      {...props}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </LiquidGlass>
  );
};

export default LiquidCard;