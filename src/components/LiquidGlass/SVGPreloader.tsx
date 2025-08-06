import React, { useEffect, useState } from 'react';

interface SVGPreloaderProps {
  displacementDataUri: string;
  filterId: string;
  onLoad: () => void;
}

const SVGPreloader: React.FC<SVGPreloaderProps> = ({ 
  displacementDataUri, 
  filterId, 
  onLoad 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Create a hidden SVG to preload the filter
    const preloadSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    preloadSvg.style.position = 'absolute';
    preloadSvg.style.left = '-9999px';
    preloadSvg.style.top = '-9999px';
    preloadSvg.style.width = '1px';
    preloadSvg.style.height = '1px';
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', filterId);
    filter.setAttribute('colorInterpolationFilters', 'sRGB');
    
    // Add filter content
    const feImage = document.createElementNS('http://www.w3.org/2000/svg', 'feImage');
    feImage.setAttribute('href', displacementDataUri);
    feImage.setAttribute('x', '0');
    feImage.setAttribute('y', '0');
    feImage.setAttribute('width', '100%');
    feImage.setAttribute('height', '100%');
    feImage.setAttribute('result', 'map');
    
    filter.appendChild(feImage);
    defs.appendChild(filter);
    preloadSvg.appendChild(defs);
    
    // Add to DOM temporarily
    document.body.appendChild(preloadSvg);
    
    // Simulate load completion
    const timer = setTimeout(() => {
      setIsLoaded(true);
      onLoad();
      document.body.removeChild(preloadSvg);
    }, 50); // Small delay to ensure proper loading
    
    return () => {
      clearTimeout(timer);
      if (document.body.contains(preloadSvg)) {
        document.body.removeChild(preloadSvg);
      }
    };
  }, [displacementDataUri, filterId, onLoad]);

  return null; // This component doesn't render anything visible
};

export default SVGPreloader; 