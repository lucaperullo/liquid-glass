import React from 'react';
import { LiquidModalProps } from './LiquidModal.types';
import LiquidGlass from '../LiquidGlass';

const LiquidModal: React.FC<LiquidModalProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  style = {},
  ...props
}) => {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl"
  };

  const modalClass = `mx-auto ${sizeClasses[size]} ${className}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <LiquidGlass
        variant={variant}
        className={modalClass}
        style={style}
        {...props}
      >
        {children}
      </LiquidGlass>
    </div>
  );
};

export default LiquidModal;