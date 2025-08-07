import { BaseGlassProps } from '../../types/common';

export interface SliderItem {
  id: string;
  type: 'image' | 'content';
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  overlay?: {
    title: string;
    description: string;
  };
}

export interface LiquidSliderProps extends BaseGlassProps {
  items?: SliderItem[];
  mode?: 'carousel' | 'slider' | 'gallery';
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showThumbnails?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
} 