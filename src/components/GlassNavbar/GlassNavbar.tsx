import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { GlassNavbarProps } from './GlassNavbar.types';
import { combineClassNames } from '../../utils';

const GlassNavbar: React.FC<GlassNavbarProps> = ({ 
  logo, 
  links = [], 
  actions,
  variant = "minimal",
  className = "",
  ...props 
}) => {
  const navbarClass = combineClassNames("p-4 w-full text-white", className);

  return (
    <LiquidGlass 
      variant={variant} 
      className={navbarClass}
      {...props}
    >
      <nav className="flex items-center justify-between">
        <div className="text-xl font-bold text-white">{logo}</div>
        
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {actions && <div className="flex items-center space-x-3">{actions}</div>}
      </nav>
    </LiquidGlass>
  );
};

export default GlassNavbar;