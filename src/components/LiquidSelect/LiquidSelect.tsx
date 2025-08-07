import React, { useState, useRef, useEffect } from 'react';
import { LiquidSelectProps, SelectOption } from './LiquidSelect.types';
import LiquidGlass from '../LiquidGlass';

const LiquidSelect: React.FC<LiquidSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  size = "md",
  variant = "default",
  className = "",
  style = {},
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    options.find(opt => opt.value === value) || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const variantClasses = {
    default: "shadow-lg shadow-white/10 focus-within:shadow-xl focus-within:shadow-white/20",
    subtle: "shadow-md shadow-white/5 focus-within:shadow-lg focus-within:shadow-white/10",
    intense: "shadow-xl shadow-white/20 focus-within:shadow-2xl focus-within:shadow-white/30",
    minimal: "shadow-sm shadow-white/5 focus-within:shadow-md focus-within:shadow-white/10",
    clean: "shadow-xl shadow-white/15 focus-within:shadow-2xl focus-within:shadow-white/25"
  };

  const containerClass = `
    relative p-1 rounded-lg transition-all duration-300 ease-out
    hover:scale-[1.02] focus-within:scale-[1.02]
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const triggerClass = `
    w-full ${sizeClasses[size]} bg-transparent border-none outline-none
    text-white placeholder-white/60 cursor-pointer
    transition-all duration-200 ease-out
    focus:placeholder-white/40
    flex items-center justify-between
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `.trim();

  const dropdownClass = `
    absolute top-full left-0 right-0 mt-2 z-50
    max-h-60 overflow-y-auto
    transition-all duration-200 ease-out
    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
  `.trim();

  const optionClass = `
    ${sizeClasses[size]} cursor-pointer transition-all duration-150 ease-out
    hover:bg-white/20 text-white
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `.trim();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const newSelectedOption = options.find(opt => opt.value === value) || null;
    setSelectedOption(newSelectedOption);
  }, [value, options]);

  const handleSelect = (option: SelectOption) => {
    if (option.disabled || disabled) return;
    
    setSelectedOption(option);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <LiquidGlass
        variant={variant}
        className={containerClass}
        style={style}
        {...props}
      >
        <button
          type="button"
          onClick={toggleDropdown}
          className={triggerClass}
          disabled={disabled}
        >
          <span className={selectedOption ? 'text-white' : 'text-white/60'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <LiquidGlass
          variant={variant}
          className={dropdownClass}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={optionClass}
            >
              {option.label}
            </div>
          ))}
        </LiquidGlass>
      </LiquidGlass>
    </div>
  );
};

export default LiquidSelect; 