import { BaseGlassProps } from '../../types/common';

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  color?: string;
  description?: string;
}

export interface LiquidCalendarProps extends BaseGlassProps {
  events?: CalendarEvent[];
  onEventClick?: (event: CalendarEvent, date: Date) => void;
  onDateClick?: (date: Date) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showToday?: boolean;
  showWeekNumbers?: boolean;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
} 