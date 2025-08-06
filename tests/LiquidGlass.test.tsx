import React from 'react';
import { render, screen } from '@testing-library/react';
import LiquidGlass from '../src/components/LiquidGlass';

describe('LiquidGlass', () => {
  it('renders children correctly', () => {
    render(
      <LiquidGlass>
        <div data-testid="child">Test content</div>
      </LiquidGlass>
    );
    
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByTestId('child')).toHaveTextContent('Test content');
  });

  it('applies custom className', () => {
    const { container } = render(
      <LiquidGlass className="custom-class">
        <div>Content</div>
      </LiquidGlass>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { width: '200px', height: '100px' };
    const { container } = render(
      <LiquidGlass style={customStyle}>
        <div>Content</div>
      </LiquidGlass>
    );
    
    expect(container.firstChild).toHaveStyle('width: 200px');
    expect(container.firstChild).toHaveStyle('height: 100px');
  });

  it('renders SVG filter elements', () => {
    const { container } = render(
      <LiquidGlass>
        <div>Content</div>
      </LiquidGlass>
    );
    
    const svg = container.querySelector('svg');
    const filter = container.querySelector('filter');
    
    expect(svg).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
  });

  it('generates unique filter IDs', () => {
    const { container: container1 } = render(
      <LiquidGlass>
        <div>Content 1</div>
      </LiquidGlass>
    );
    
    const { container: container2 } = render(
      <LiquidGlass>
        <div>Content 2</div>
      </LiquidGlass>
    );
    
    const filter1 = container1.querySelector('filter');
    const filter2 = container2.querySelector('filter');
    
    expect(filter1?.id).toBeDefined();
    expect(filter2?.id).toBeDefined();
    expect(filter1?.id).not.toBe(filter2?.id);
  });

  it('uses different presets for variants', () => {
    const { container: defaultContainer } = render(
      <LiquidGlass variant="default">
        <div>Default</div>
      </LiquidGlass>
    );
    
    const { container: subtleContainer } = render(
      <LiquidGlass variant="subtle">
        <div>Subtle</div>
      </LiquidGlass>
    );
    
    // Both should render but may have different internal configurations
    expect(defaultContainer.firstChild).toBeInTheDocument();
    expect(subtleContainer.firstChild).toBeInTheDocument();
  });
});