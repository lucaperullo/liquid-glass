# ALG UI Setup Guide

## Quick Start

### 1. Installation

```bash
npm install advanced-liquid-glass-ui
```

### 2. Import CSS (Required)

**CSS Import:**
```css
@import 'advanced-liquid-glass-ui/alg-ui.css';
```

**JavaScript Import:**
```javascript
import 'advanced-liquid-glass-ui/alg-ui.css';
```

### 3. Basic Usage

```jsx
import { LiquidGlass, GlassButton } from 'advanced-liquid-glass-ui';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <LiquidGlass variant="intense">
        <div className="p-6 text-white">
          <h1 className="text-2xl font-bold mb-4">Welcome to ALG UI</h1>
          <GlassButton>Get Started</GlassButton>
        </div>
      </LiquidGlass>
    </div>
  );
}
```

## Advanced Controls

ALG UI provides unprecedented control over glass morphism effects. Here are all available properties:

### Core Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'subtle' \| 'intense' \| 'minimal'` | `'default'` | Glass morphism intensity |
| `blur` | `number` | `1` | Base blur amount |
| `blurAmount` | `number` | `0.0` | Precise backdrop blur control |
| `radius` | `number` | `12` | Border radius |
| `cornerRadius` | `number` | `52` | Advanced corner radius control |

### Advanced Effects

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `refractionMode` | `'standard' \| 'polar' \| 'prominent' \| 'shader'` | `'standard'` | Refraction calculation method |
| `displacementScale` | `number` | `57` | Edge distortion intensity |
| `saturation` | `number` | `100` | Color saturation (0-200%) |
| `chromaticAberration` | `number` | `5` | RGB channel separation |
| `elasticity` | `number` | `0.10` | Cursor interaction intensity |
| `overLight` | `boolean` | `false` | Dark glass for bright backgrounds |

### Example with All Controls

```jsx
<LiquidGlass
  variant="intense"
  refractionMode="prominent"
  displacementScale={80}
  blurAmount={3.5}
  saturation={150}
  chromaticAberration={12}
  elasticity={0.25}
  cornerRadius={75}
  overLight={true}
>
  <div className="p-8 text-white">
    <h1 className="text-3xl font-bold mb-4">Advanced Effects</h1>
    <p className="text-white/80">
      Experience the full power of ALG UI with all controls enabled.
    </p>
  </div>
</LiquidGlass>
```

## Component Library

### LiquidGlass
The core component that provides all glass morphism effects.

```jsx
<LiquidGlass 
  variant="intense" 
  blurAmount={2.0}
  chromaticAberration={8}
  saturation={120}
>
  <div className="p-6 text-white">
    <h2>Glass Content</h2>
    <p>Your content here</p>
  </div>
</LiquidGlass>
```

### GlassButton
Advanced button component with glass morphism effects.

```jsx
<GlassButton 
  variant="default" 
  size="lg"
  blurAmount={1.5}
  chromaticAberration={6}
  onClick={() => alert('Clicked!')}
>
  Click Me
</GlassButton>
```

### GlassCard
Card component with beautiful glass effects.

```jsx
<GlassCard 
  variant="subtle" 
  hover={true}
  saturation={110}
  cornerRadius={30}
>
  <div className="p-6 text-white">
    <h3>Card Title</h3>
    <p>Card content</p>
  </div>
</GlassCard>
```

### GlassModal
Modal component with backdrop blur and smooth animations.

```jsx
<GlassModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  variant="intense"
  size="lg"
  blurAmount={4.0}
>
  <div className="text-white">
    <h2>Modal Title</h2>
    <p>Modal content</p>
  </div>
</GlassModal>
```

### GlassInput
Input field with glass morphism effects.

```jsx
<GlassInput
  type="email"
  placeholder="Enter your email"
  variant="default"
  blurAmount={1.0}
  saturation={90}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### GlassProgressBar
Progress bar with glass morphism effects.

```jsx
<GlassProgressBar
  value={75}
  max={100}
  variant="intense"
  blurAmount={2.0}
  showLabel={true}
/>
```

### GlassBadge
Badge component with glass effects.

```jsx
<GlassBadge 
  color="success" 
  variant="intense"
  chromaticAberration={4}
>
  Success
</GlassBadge>
```

## Included Tailwind CSS Features

ALG UI includes a comprehensive Tailwind CSS setup with:

### Custom Colors
- `glass-*` - Glass morphism specific colors
- `chromatic-*` - Chromatic aberration colors
- `liquid-*` - Liquid effect colors

### Custom Utilities
- `.glass-morphism` - Apply glass morphism effects
- `.chromatic-border` - Chromatic aberration borders
- `.liquid-effect` - Liquid distortion effects

### Custom Animations
- `glass-float` - Floating glass animation
- `chromatic-shift` - Chromatic aberration animation
- `liquid-wave` - Liquid wave effect

### Custom Shadows
- `glass-shadow` - Glass-specific shadows
- `chromatic-shadow` - Chromatic aberration shadows

## Best Practices

### 1. Use Colorful Backgrounds
LiquidGlass effects are most visible on colorful or patterned backgrounds:

```css
.app-background {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* or */
  background: radial-gradient(circle, #ff6b6b, #4ecdc4, #45b7d1);
}
```

### 2. Ensure Text Contrast
Always use light text on glass components:

```jsx
<GlassCard>
  <h1 className="text-white font-bold">High Contrast Title</h1>
  <p className="text-white/80">Readable secondary text</p>
</GlassCard>
```

### 3. Layer Different Variants
Create visual hierarchy with different variants:

```jsx
<GlassNavbar variant="minimal" />      {/* Subtle header */}
<GlassCard variant="default" />        {/* Main content */}
<GlassButton variant="intense" />      {/* Call-to-action */}
```

### 4. Performance Considerations
- Use `minimal` variant for better performance
- Limit the number of glass components in viewport
- Consider `React.memo()` for static components

### 5. Advanced Controls
- Use `blurAmount` for precise backdrop blur control
- Adjust `chromaticAberration` for RGB separation effects
- Set `overLight={true}` for bright backgrounds
- Fine-tune `elasticity` for cursor interactions

## Browser Support

- ✅ Chrome 76+
- ✅ Firefox 70+
- ✅ Safari 14+
- ✅ Edge 79+

*Requires CSS `backdrop-filter` support*

## Troubleshooting

### Effects not visible?
- Ensure you have a colorful background
- Check browser support for `backdrop-filter`
- Verify no z-index conflicts
- Try increasing `blurAmount` or `chromaticAberration`

### Performance issues?
- Use `variant="minimal"` for lighter effects
- Reduce the number of glass components
- Check for unnecessary re-renders
- Lower `displacementScale` values

### TypeScript errors?
- Ensure React types are installed: `npm i -D @types/react @types/react-dom`
- Check TypeScript version compatibility (5.0+)

## Support

- 📧 Email: lucaperullo@outlook.it
- 🐛 Issues: [GitHub Issues](https://github.com/lucaperullo/liquid-glass/issues)
- 📖 Documentation: [Full Documentation](./docs)

---

**Advanced Liquid Glass UI (ALG UI)** - The most advanced glass morphism library for React. 