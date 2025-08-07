import React, { useState, useEffect, useRef } from 'react';
import { LiquidDatePickerProps } from './LiquidDatePicker.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidDatePicker: React.FC<LiquidDatePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  size = 'md',
  variant = 'clean',
  accent = 'blue',
  placeholder = 'Select date...',
  format = 'YYYY-MM-DD',
  showTime = false,
  label,
  error,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);
  const [inputValue, setInputValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
      setInputValue(formatDate(date));
    } else {
      setSelectedDate(null);
      setInputValue('');
    }
  }, [value, format]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-3',
    lg: 'text-lg px-4 py-3'
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    if (showTime) {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    
    return `${year}-${month}-${day}`;
  };

  const parseDate = (dateString: string): Date | null => {
    try {
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? null : date;
    } catch {
      return null;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    
    const parsedDate = parseDate(value);
    if (parsedDate) {
      setSelectedDate(parsedDate);
      onChange?.(formatDate(parsedDate));
    }
  };

  const handleDateSelect = (date: Date) => {
    if (disabled) return;
    
    setSelectedDate(date);
    setInputValue(formatDate(date));
    onChange?.(formatDate(date));
    setIsOpen(false);
  };

  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < new Date(minDate)) return true;
    if (maxDate && date > new Date(maxDate)) return true;
    return false;
  };

  const getCurrentDate = (): Date => {
    return selectedDate || new Date();
  };

  const inputClasses = `
    w-full
    ${sizeClasses[size]}
    rounded-lg font-medium
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
    ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}
    ${className}
  `.trim();

  return (
    <div className="w-full" ref={containerRef}>
      {label && (
        <label className={`
          block ${labelSizeClasses[size]} font-medium mb-2
          ${disabled ? 'text-gray-400' : error ? 'text-red-500' : 'text-gray-900 dark:text-white'}
        `.trim()}>
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          type={showTime ? 'datetime-local' : 'date'}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => !disabled && setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          min={minDate}
          max={maxDate}
          className={inputClasses}
          style={{
            background: 'transparent',
            border: `1px solid ${error 
              ? themeColorsConfig.colors.accentError 
              : themeColorsConfig.colors.glassBorder}`,
            color: themeColorsConfig.colors.textPrimary
          }}
          {...props}
        />
        
        {/* Calendar Icon */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Calendar Dropdown */}
        {isOpen && !disabled && (
          <div
            className="absolute top-full left-0 mt-2 z-50 w-80 p-4 rounded-lg shadow-xl"
            style={{
              background: `linear-gradient(135deg, 
                ${themeColorsConfig.colors.glassBackground} 0%, 
                ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
              backdropFilter: 'blur(15px)',
              border: `1px solid ${themeColorsConfig.colors.glassBorder}`,
              boxShadow: `
                inset 0 1px 3px rgba(255, 255, 255, 0.1),
                0 8px 32px rgba(0, 0, 0, 0.1)
              `
            }}
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => {
                  const current = getCurrentDate();
                  current.setMonth(current.getMonth() - 1);
                  setSelectedDate(current);
                }}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <h3 className="text-white font-semibold">
                {getCurrentDate().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              
              <button
                onClick={() => {
                  const current = getCurrentDate();
                  current.setMonth(current.getMonth() + 1);
                  setSelectedDate(current);
                }}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Day headers */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-xs font-medium text-white/60 py-1">
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {(() => {
                const current = getCurrentDate();
                const year = current.getFullYear();
                const month = current.getMonth();
                const firstDay = new Date(year, month, 1);
                const lastDay = new Date(year, month + 1, 0);
                const daysInMonth = lastDay.getDate();
                const firstDayOfWeek = firstDay.getDay();
                
                const days = [];
                
                // Add empty cells for days before the first day of the month
                for (let i = 0; i < firstDayOfWeek; i++) {
                  days.push(null);
                }
                
                // Add days of the month
                for (let i = 1; i <= daysInMonth; i++) {
                  days.push(new Date(year, month, i));
                }
                
                return days.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => date && handleDateSelect(date)}
                    disabled={!date || isDateDisabled(date)}
                    className={`
                      p-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${!date ? 'invisible' : ''}
                      ${date && isDateDisabled(date) ? 'text-gray-400 cursor-not-allowed' : 'text-white hover:bg-white/10 cursor-pointer'}
                      ${date && selectedDate && date.toDateString() === selectedDate.toDateString() ? 'bg-blue-500 text-white' : ''}
                      ${date && date.toDateString() === new Date().toDateString() ? 'ring-2 ring-blue-300' : ''}
                    `.trim()}
                  >
                    {date?.getDate()}
                  </button>
                ));
              })()}
            </div>

            {/* Quick Actions */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex gap-2">
                <button
                  onClick={() => handleDateSelect(new Date())}
                  className="flex-1 px-3 py-2 text-sm bg-white/10 hover:bg-white/20 rounded transition-colors text-white"
                >
                  Today
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-3 py-2 text-sm bg-white/10 hover:bg-white/20 rounded transition-colors text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default LiquidDatePicker; 