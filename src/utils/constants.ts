import { GlassVariant, ButtonSize, ModalSize } from '../types/common';

export const GLASS_PRESETS: Record<GlassVariant, any> = {
  default: {
    scale: 20,
    border: 0.1,
    lightness: 85,
    displace: 2,
    alpha: 0.1,
    blur: 1,
    dispersion: 5,
    frost: 0.1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    refractionMode: 'standard',
    displacementScale: 57,
    blurAmount: 0.0,
    saturation: 100,
    chromaticAberration: 5,
    elasticity: 0.10,
    cornerRadius: 52,
    overLight: false
  },
  subtle: {
    scale: 10,
    border: 0.05,
    lightness: 90,
    displace: 1,
    alpha: 0.05,
    blur: 0.5,
    dispersion: 2,
    frost: 0.05,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    refractionMode: 'standard',
    displacementScale: 30,
    blurAmount: 0.0,
    saturation: 80,
    chromaticAberration: 2,
    elasticity: 0.05,
    cornerRadius: 25,
    overLight: false
  },
  intense: {
    scale: 30,
    border: 0.2,
    lightness: 80,
    displace: 3,
    alpha: 0.15,
    blur: 2,
    dispersion: 8,
    frost: 0.15,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    refractionMode: 'prominent',
    displacementScale: 80,
    blurAmount: 2.0,
    saturation: 120,
    chromaticAberration: 8,
    elasticity: 0.15,
    cornerRadius: 75,
    overLight: false
  },
  minimal: {
    scale: 5,
    border: 0.02,
    lightness: 95,
    displace: 0.5,
    alpha: 0.02,
    blur: 0.2,
    dispersion: 1,
    frost: 0.02,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    refractionMode: 'standard',
    displacementScale: 15,
    blurAmount: 0.0,
    saturation: 60,
    chromaticAberration: 1,
    elasticity: 0.02,
    cornerRadius: 12,
    overLight: false
  }
};

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl'
};

export const MODAL_SIZE_CLASSES: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl'
};

export const DEFAULT_DIMENSIONS = {
  width: 100,
  height: 100
};

export const BADGE_COLOR_CLASSES = {
  default: "text-white",
  success: "text-green-300",
  warning: "text-yellow-300",
  error: "text-red-300",
  info: "text-blue-300"
};

export const TOOLTIP_POSITION_CLASSES = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
};