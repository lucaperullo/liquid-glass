import React, { useState, useEffect } from 'react';
import { LiquidCalendarProps, CalendarEvent } from './LiquidCalendar.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';

const LiquidCalendar: React.FC<LiquidCalendarProps> = ({
  events = [],
  onEventClick,
  onDateClick,
  disabled = false,
  size = 'md',
  variant = 'clean',
  accent = 'blue',
  showToday = true,
  showWeekNumbers = false,
  label,
  className = '',
  ...props
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
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
    
    return days;
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const isDateSelected = (date: Date): boolean => {
    return selectedDate ? date.toDateString() === selectedDate.toDateString() : false;
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const handleDateClick = (date: Date) => {
    if (disabled) return;
    
    setSelectedDate(date);
    onDateClick?.(date);
  };

  const handleEventClick = (event: CalendarEvent, date: Date) => {
    if (disabled) return;
    onEventClick?.(event, date);
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="w-full">
      {label && (
        <label className={`block ${sizeClasses[size]} font-medium mb-2 text-gray-900 dark:text-white`}>
          {label}
        </label>
      )}
      
      <div 
        className={`p-4 ${className}`}
        style={{
          background: `linear-gradient(135deg, 
            ${themeColorsConfig.colors.glassBackground} 0%, 
            ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
          backdropFilter: 'blur(15px)',
          border: `1px solid ${themeColorsConfig.colors.glassBorder}`,
          borderRadius: '12px',
          boxShadow: `
            inset 0 1px 3px rgba(255, 255, 255, 0.1),
            0 4px 16px rgba(0, 0, 0, 0.1)
          `
        }}
      >
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateMonth('prev')}
            disabled={disabled}
            className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h3 className="text-white font-semibold">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          
          <button
            onClick={() => navigateMonth('next')}
            disabled={disabled}
            className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Calendar Grid */}
        <div>
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {showWeekNumbers && <div className="text-center text-xs font-medium text-white/60 py-1">#</div>}
            {weekDays.map(day => (
              <div key={day} className="text-center text-xs font-medium text-white/60 py-1">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentMonth).map((date, index) => {
              const dayEvents = date ? getEventsForDate(date) : [];
              
              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => date && handleDateClick(date)}
                    disabled={!date || disabled}
                    className={`
                      w-full p-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${!date ? 'invisible' : ''}
                      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-white/10'}
                      ${date && isDateSelected(date) ? 'bg-blue-500 text-white' : 'text-white'}
                      ${date && isToday(date) && !isDateSelected(date) ? 'ring-2 ring-blue-300' : ''}
                      ${dayEvents.length > 0 ? 'font-bold' : ''}
                    `.trim()}
                  >
                    {date?.getDate()}
                  </button>
                  
                  {/* Event indicators */}
                  {date && dayEvents.length > 0 && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {dayEvents.slice(0, 3).map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="w-1.5 h-1.5 rounded-full cursor-pointer"
                          style={{ backgroundColor: event.color || themeColorsConfig.colors.accentPrimary }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEventClick(event, date);
                          }}
                          title={event.title}
                        />
                      ))}
                      {dayEvents.length > 3 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 text-xs flex items-center justify-center">
                          +
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Selected Date Events */}
        {selectedDate && getEventsForDate(selectedDate).length > 0 && (
          <div className="mt-4 p-3 bg-white/10 rounded-lg">
            <h4 className="text-white font-semibold mb-2">
              Events for {selectedDate.toLocaleDateString()}
            </h4>
            <div className="space-y-2">
              {getEventsForDate(selectedDate).map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => handleEventClick(event, selectedDate)}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: event.color || themeColorsConfig.colors.accentPrimary }}
                    />
                    <span className="text-white text-sm">{event.title}</span>
                  </div>
                  {event.time && (
                    <span className="text-white/60 text-xs">{event.time}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiquidCalendar; 