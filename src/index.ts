// Core Components
export { default as LiquidGlass } from './components/LiquidGlass';
export { default as LiquidButton } from './components/LiquidButton';
export { default as LiquidCard } from './components/LiquidCard';
export { default as LiquidBadge } from './components/LiquidBadge';
export { default as LiquidInput } from './components/LiquidInput';
export { default as LiquidSelect } from './components/LiquidSelect';
export { default as LiquidTabs } from './components/LiquidTabs';
export { default as LiquidModal } from './components/LiquidModal';
export { default as LiquidNavbar } from './components/LiquidNavbar';
export { default as LiquidSidebar } from './components/LiquidSidebar';
export { default as LiquidProgressBar } from './components/LiquidProgressBar';
export { default as LiquidStats } from './components/LiquidStats';
export { default as LiquidSwitch } from './components/LiquidSwitch';
export { default as LiquidCheckbox } from './components/LiquidCheckbox';
export { default as LiquidSlider } from './components/LiquidSlider';
export { default as LiquidTooltip } from './components/LiquidTooltip';

// Input Components
export { default as LiquidTextarea } from './components/LiquidTextarea';
export { default as LiquidRadio } from './components/LiquidRadio';
export { default as LiquidDatePicker } from './components/LiquidDatePicker';
export { default as LiquidFileUpload } from './components/LiquidFileUpload';
export { default as LiquidColorPicker } from './components/LiquidColorPicker';
export { default as LiquidRange } from './components/LiquidRange';
export { default as LiquidCalendar } from './components/LiquidCalendar';

// Feedback Components
export { default as LiquidAlert } from './components/LiquidAlert';

// Theme System
export { AlgUIThemeProvider, useAlgUITheme } from './context/algUIThemeContext';
export { default as AlgUIThemeSwitch } from './components/AlgUIThemeSwitch';

// Types
export type { 
  LiquidGlassProps,
  LiquidButtonProps, ButtonSize,
  LiquidCardProps,
  LiquidBadgeProps,
  LiquidInputProps,
  LiquidSelectProps,
  LiquidTabsProps,
  LiquidModalProps,
  LiquidNavbarProps,
  LiquidSidebarProps,
  LiquidProgressBarProps,
  LiquidStatsProps,
  LiquidSwitchProps,
  LiquidCheckboxProps,
  LiquidSliderProps,
  LiquidTooltipProps,
  LiquidTextareaProps,
  LiquidRadioProps, RadioOption,
  LiquidDatePickerProps,
  LiquidFileUploadProps,
  LiquidColorPickerProps,
  LiquidRangeProps,
  LiquidCalendarProps,
  LiquidAlertProps, AlertType,
  AlgUIThemeSwitchProps
} from './components';

export type { 
  AlgUITheme, 
  ThemeConfig, 
  AlgUIThemeContextType,
  ThemeColors
} from './types/theme';

// Utilities
export { 
  getTailwindColor, 
  getSemanticColor, 
  createRGBA, 
  createGlassColor, 
  getGlassColors,
  getAdaptiveColor,
  SEMANTIC_COLORS,
  GLASS_COLORS,
  TAILWIND_COLORS 
} from './utils/tailwindColors';

export { 
  getThemeConfig,
  CRYSTAL_LIGHT_THEME,
  PLASMA_DARK_THEME,
  THEME_CONFIGS
} from './utils/themes';

// Export CSS
import './styles/index.css';