# ALG UI Setup Guide

## Quick Start

ALG UI comes with Tailwind CSS included, so you don't need to install it separately!

### 1. Install the package

```bash
npm install advanced-liquid-glass-ui
```

### 2. Import the CSS

Add this import to your main CSS file or component:

```css
@import 'advanced-liquid-glass-ui/alg-ui.css';
```

Or import it in your JavaScript/TypeScript:

```javascript
import 'advanced-liquid-glass-ui/alg-ui.css';
```

### 3. Use the components

```jsx
import { GlassButton, GlassCard, LiquidGlass } from 'advanced-liquid-glass-ui';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-8">
      <GlassCard className="p-6">
        <h1 className="text-2xl font-bold text-white mb-4">
          Welcome to ALG UI!
        </h1>
        <GlassButton onClick={() => alert('Hello!')}>
          Click Me
        </GlassButton>
      </GlassCard>
    </div>
  );
}
```

## What's Included

### 🎨 **Tailwind CSS Configuration**
- Custom glass morphism utilities
- Chromatic aberration effects
- Liquid distortion animations
- Pre-configured color palette
- Custom animations and keyframes

### 🧩 **Custom CSS Classes**
- `.alg-glass` - Base glass morphism
- `.alg-glass-strong` - Stronger glass effect
- `.alg-glass-soft` - Softer glass effect
- `.alg-chromatic` - Chromatic aberration
- `.alg-liquid` - Liquid distortion
- `.alg-button` - Glass button styles
- `.alg-input` - Glass input styles
- `.alg-progress` - Glass progress bar
- `.alg-badge` - Glass badge styles
- `.alg-modal-overlay` - Modal overlay
- `.alg-sidebar` - Sidebar styles
- `.alg-tooltip` - Tooltip styles
- `.alg-stats-grid` - Stats grid
- `.alg-stat-item` - Individual stat item

### 🎯 **Utility Classes**
- `.text-glass` - White text for glass components
- `.text-glass-soft` - Softer white text
- `.text-glass-muted` - Muted white text
- `.bg-glass` - Glass background
- `.bg-glass-strong` - Stronger glass background
- `.bg-glass-soft` - Softer glass background
- `.border-glass` - Glass border
- `.animate-glass-shimmer` - Shimmer animation
- `.animate-liquid-flow` - Liquid flow animation
- `.animate-chromatic-shift` - Chromatic shift animation

## Examples

### Basic Glass Card
```jsx
<div className="alg-glass p-6 rounded-lg">
  <h2 className="text-glass text-xl font-bold">Glass Card</h2>
  <p className="text-glass-soft">This is a beautiful glass card!</p>
</div>
```

### Animated Button
```jsx
<button className="alg-button animate-glass-shimmer">
  Animated Button
</button>
```

### Chromatic Effect
```jsx
<div className="alg-chromatic p-4 rounded-lg">
  <h3 className="text-glass">Chromatic Effect</h3>
</div>
```

### Liquid Distortion
```jsx
<div className="alg-liquid p-4 rounded-lg">
  <p className="text-glass">Liquid Distortion Effect</p>
</div>
```

## Background Images

For the best glass morphism effects, use colorful backgrounds:

```css
.glass-background {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* or */
  background: radial-gradient(circle, #ff6b6b, #4ecdc4, #45b7d1);
  /* or */
  background-image: url('your-image.jpg');
  background-size: cover;
  background-position: center;
}
```

## Browser Support

- ✅ Chrome 76+
- ✅ Firefox 70+
- ✅ Safari 14+
- ✅ Edge 79+

*Requires CSS `backdrop-filter` support*

## Customization

You can override any Tailwind classes or create your own custom styles:

```css
/* Custom glass effect */
.my-custom-glass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.6);
}
```

## Troubleshooting

### Glass effects not visible?
- Ensure you have a colorful background
- Check browser support for `backdrop-filter`
- Verify the CSS is properly imported

### Performance issues?
- Use `.alg-glass-soft` for better performance
- Limit the number of glass components
- Consider using `will-change: transform` for animations

### TypeScript errors?
- Ensure React types are installed: `npm i -D @types/react @types/react-dom`
- Check TypeScript version compatibility (5.0+)

## Need Help?

- 📧 Email: lucaperullo@outlook.it
- 🐛 Issues: [GitHub Issues](https://github.com/lucaperullo/liquid-glass/issues)
- 📖 Docs: [Documentation](https://advanced-liquid-glass-docs.com) 