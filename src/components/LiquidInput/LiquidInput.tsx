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
  const variantClasses = {
    default: "shadow-lg shadow-white/10 focus-within:shadow-xl focus-within:shadow-white/20",
    subtle: "shadow-md shadow-white/5 focus-within:shadow-lg focus-within:shadow-white/10",
    intense: "shadow-xl shadow-white/20 focus-within:shadow-2xl focus-within:shadow-white/30",
    minimal: "shadow-sm shadow-white/5 focus-within:shadow-md focus-within:shadow-white/10",
    clean: "shadow-xl shadow-white/15 focus-within:shadow-2xl focus-within:shadow-white/25"
  };

  const inputClass = `
    w-full px-4 py-3 bg-transparent border-none outline-none
    text-white placeholder-white/60
    transition-all duration-200 ease-out
    focus:placeholder-white/40
    ${className}
  `.trim();

  const containerClass = `
    p-1 rounded-lg transition-all duration-300 ease-out
    hover:scale-[1.02] focus-within:scale-[1.02]
    ${variantClasses[variant]}
  `.trim();

  return (
    <LiquidGlass
      variant={variant}
      className={containerClass}
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