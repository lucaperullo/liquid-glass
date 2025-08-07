import React from 'react';
import { LiquidInputProps } from './LiquidInput.types';
import LiquidGlass from '../LiquidGlass';

const LiquidInput: React.FC<LiquidInputProps> = ({
  variant = "default",
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  style = {},
  ...props
}) => {
  const inputClass = `w-full px-4 py-2 bg-transparent border-none outline-none text-white placeholder-white/60 ${className}`;

  return (
    <LiquidGlass
      variant={variant}
      className="p-1"
      style={style}
      {...props}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    </LiquidGlass>
  );
};

export default LiquidInput;