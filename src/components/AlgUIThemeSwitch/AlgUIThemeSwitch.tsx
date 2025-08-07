import React from 'react';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import LiquidGlass from '../LiquidGlass';

interface AlgUIThemeSwitchProps {
  showSystem?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'clean' | 'default' | 'subtle' | 'intense' | 'minimal';
}

const AlgUIThemeSwitch: React.FC<AlgUIThemeSwitchProps> = ({
  showSystem = true,
  className = '',
  size = 'md',
  variant = 'clean'
}) => {
  const { theme, setTheme, systemTheme, isSystem } = useAlgUITheme();

  const sizeClasses = {
    sm: 'w-32 h-8 text-xs',
    md: 'w-40 h-10 text-sm',
    lg: 'w-48 h-12 text-base'
  };

  const getThemeIcon = (themeName: string) => {
    switch (themeName) {
      case 'crystal-light':
        return '☀️';
      case 'plasma-dark':
        return '🌙';
      case 'system':
        return systemTheme === 'crystal-light' ? '☀️' : '🌙';
      default:
        return '🎨';
    }
  };

  const getThemeLabel = (themeName: string) => {
    switch (themeName) {
      case 'crystal-light':
        return 'Light';
      case 'plasma-dark':
        return 'Dark';
      case 'system':
        return `System (${systemTheme === 'crystal-light' ? 'Light' : 'Dark'})`;
      default:
        return 'Theme';
    }
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value as 'crystal-light' | 'plasma-dark' | 'system';
    setTheme(newTheme);
  };

  const options = [
    { value: 'crystal-light', label: 'Light', icon: '☀️' },
    { value: 'plasma-dark', label: 'Dark', icon: '🌙' },
    ...(showSystem ? [{ value: 'system', label: `System (${systemTheme === 'crystal-light' ? 'Light' : 'Dark'})`, icon: systemTheme === 'crystal-light' ? '☀️' : '🌙' }] : [])
  ];

  return (
    <LiquidGlass
      variant={variant}
      className={`
        ${sizeClasses[size]} relative
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:scale-105 active:scale-95
        ${className}
      `.trim()}
    >
      <select
        value={theme}
        onChange={handleThemeChange}
        className={`
          w-full h-full
          bg-transparent text-white font-medium
          border-none outline-none
          cursor-pointer
          appearance-none
          pr-8 pl-3
          ${sizeClasses[size]}
        `.trim()}
        style={{ 
          backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 8px center',
          backgroundSize: '12px auto'
        }}
      >
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-slate-800 text-white"
          >
            {option.icon} {option.label}
          </option>
        ))}
      </select>
    </LiquidGlass>
  );
};

export default AlgUIThemeSwitch; 