import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlassButton from '../src/components/GlassButton';

describe('GlassButton', () => {
  it('renders button text correctly', () => {
    render(<GlassButton>Click me</GlassButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<GlassButton onClick={handleClick}>Click me</GlassButton>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', () => {
    const handleClick = jest.fn();
    render(
      <GlassButton onClick={handleClick} disabled>
        Disabled button
      </GlassButton>
    );
    
    fireEvent.click(screen.getByText('Disabled button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies disabled styles', () => {
    const { container } = render(
      <GlassButton disabled>Disabled button</GlassButton>
    );
    
    expect(container.firstChild).toHaveClass('opacity-50');
    expect(container.firstChild).toHaveClass('cursor-not-allowed');
  });

  it('applies size classes correctly', () => {
    const { container: smallContainer } = render(
      <GlassButton size="sm">Small</GlassButton>
    );
    const { container: largeContainer } = render(
      <GlassButton size="lg">Large</GlassButton>
    );
    
    expect(smallContainer.firstChild).toHaveClass('px-3', 'py-1.5', 'text-sm');
    expect(largeContainer.firstChild).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('combines custom className with default classes', () => {
    const { container } = render(
      <GlassButton className="custom-class">Button</GlassButton>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toHaveClass('font-semibold');
    expect(container.firstChild).toHaveClass('text-white');
  });
});