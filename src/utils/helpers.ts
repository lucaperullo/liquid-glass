import { GLASS_PRESETS } from './constants';
import { GlassVariant, BaseGlassProps } from '../types/common';

export const getGlassConfig = (
  variant: GlassVariant,
  overrides: Partial<BaseGlassProps> = {}
) => {
  const preset = GLASS_PRESETS[variant];
  
  return {
    ...preset,
    ...(overrides.scale !== undefined && { scale: overrides.scale }),
    ...(overrides.border !== undefined && { border: overrides.border }),
    ...(overrides.lightness !== undefined && { lightness: overrides.lightness }),
    ...(overrides.displace !== undefined && { displace: overrides.displace }),
    ...(overrides.alpha !== undefined && { alpha: overrides.alpha }),
    ...(overrides.blur !== undefined && { blur: overrides.blur }),
    ...(overrides.dispersion !== undefined && { dispersion: overrides.dispersion }),
    ...(overrides.frost !== undefined && { frost: overrides.frost }),
    ...(overrides.borderColor !== undefined && { borderColor: overrides.borderColor }),
    radius: overrides.radius || 12,
    blend: "difference" as const,
    x: "R" as const,
    y: "B" as const
  };
};

export const generateDisplacementSVG = (
  width: number,
  height: number,
  config: ReturnType<typeof getGlassConfig>
): string => {
  const newwidth = width / 2;
  const newheight = height / 2;
  const border = Math.min(newwidth, newheight) * (config.border * 0.5);
  const effectiveRadius = Math.min(config.radius, width / 2, height / 2);
  
  const svgContent = `
    <svg viewBox="0 0 ${newwidth} ${newheight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="red-${effectiveRadius}" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#0000"/>
          <stop offset="100%" stop-color="red"/>
        </linearGradient>
        <linearGradient id="blue-${effectiveRadius}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0000"/>
          <stop offset="100%" stop-color="blue"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${newwidth}" height="${newheight}" fill="black"/>
      <rect x="0" y="0" width="${newwidth}" height="${newheight}" rx="${effectiveRadius}" fill="url(#red-${effectiveRadius})" />
      <rect x="0" y="0" width="${newwidth}" height="${newheight}" rx="${effectiveRadius}" fill="url(#blue-${effectiveRadius})" style="mix-blend-mode: ${config.blend}" />
      <rect x="${border}" y="${border}" width="${newwidth - border * 2}" height="${newheight - border * 2}" rx="${effectiveRadius}" fill="hsl(0 0% ${config.lightness}% / ${config.alpha})" style="filter:blur(${config.blur}px)" />
    </svg>
  `;
  
  return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
};

export const combineClassNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};