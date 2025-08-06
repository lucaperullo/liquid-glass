import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassInputProps } from './GlassInput.types';

const GlassInput: React.FC<GlassInputProps> = ({ 
  placeholder, 
  value, 
  onChange, 
  type = "text",
  variant = "subtle",
  className = "",
  inputProps,
  ...glassProps 
}) => {
  return (
    <LiquidGlass 
      variant={variant} 
      className={className}
      {...glassProps}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/20 transition-all duration-200 font-medium"
        {...inputProps}
      />
    </LiquidGlass>
  );
};

export default GlassInput;