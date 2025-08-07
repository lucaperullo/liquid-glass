import React from 'react';
import { LiquidCardProps } from './LiquidCard.types';
import LiquidGlass from '../LiquidGlass';

const LiquidCard: React.FC<LiquidCardProps> = ({
  children,
  className = "",
  style = {},
  ...props
}) => {
  return (
    <LiquidGlass
      className={`p-6 shadow-lg ${className}`}
      style={style}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default LiquidCard;