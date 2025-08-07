import React, { useEffect, useRef } from 'react';
import { LiquidModalProps } from './LiquidModal.types';
import { useAlgUITheme } from '../../context/algUIThemeContext';
import { getThemeConfig } from '../../utils/themes';
import LiquidGlass from '../LiquidGlass';

const LiquidModal: React.FC<LiquidModalProps> = ({
  isOpen = false,
  onClose,
  children,
  title,
  size = 'md',
  variant = 'clean',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = '',
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const themeContext = useAlgUITheme();
  const globalTheme = themeContext?.theme || 'crystal-light';
  const effectiveTheme = globalTheme === 'system' ? themeContext?.systemTheme || 'crystal-light' : globalTheme;
  const themeColorsConfig = getThemeConfig(effectiveTheme as 'crystal-light' | 'plasma-dark');

  const sizeClasses = {
    sm: 'max-w-sm w-full mx-4',
    md: 'max-w-2xl w-full mx-4',
    lg: 'max-w-4xl w-full mx-4',
    xl: 'max-w-6xl w-full mx-4',
    '2xl': 'max-w-7xl w-full mx-4',
    full: 'w-full h-full max-w-none mx-0'
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose?.();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (closeOnEscape && event.key === 'Escape') {
      onClose?.();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Focus management
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      firstElement?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, 
          ${themeColorsConfig.colors.overlayPrimary} 0%, 
          ${themeColorsConfig.colors.overlaySecondary} 100%)`,
        backdropFilter: 'blur(8px)'
      }}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      tabIndex={-1}
    >
      <div
        ref={modalRef}
        className={`
          ${sizeClasses[size]}
          max-h-[90vh] overflow-y-auto
          transition-all duration-300 ease-out
          ${className}
        `.trim()}
        style={{
          animation: 'modalSlideIn 0.3s ease-out'
        }}
      >
        <LiquidGlass
          variant={variant}
          className="relative w-full h-full"
          style={{
            background: `linear-gradient(135deg, 
              ${themeColorsConfig.colors.glassBackground} 0%, 
              ${themeColorsConfig.colors.backgroundSecondary} 100%)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${themeColorsConfig.colors.glassBorder}`,
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(255, 255, 255, 0.1)
            `
          }}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              {title && (
                <h2 
                  id="modal-title"
                  className="text-xl font-semibold text-white"
                >
                  {title}
                </h2>
              )}
              
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="
                    p-2 rounded-full
                    text-white/70 hover:text-white
                    hover:bg-white/10
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-white/20
                  "
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </LiquidGlass>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LiquidModal;