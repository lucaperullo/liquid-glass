import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassModalProps } from './GlassModal.types';
import { MODAL_SIZE_CLASSES } from '../../utils/constants';
import { combineClassNames } from '../../utils';

const GlassModal: React.FC<GlassModalProps> = ({ 
  children, 
  isOpen, 
  onClose, 
  variant = "default",
  size = "md",
  className = "",
  ...props 
}) => {
  const sizeClass = MODAL_SIZE_CLASSES[size];
  
  const modalClass = combineClassNames(
    "relative p-6 w-full",
    sizeClass,
    className
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <LiquidGlass 
        variant={variant} 
        className={modalClass}
        {...props}
      >
        {children}
      </LiquidGlass>
    </div>
  );
};

export default GlassModal;