# Advanced Liquid Glass UI (ALG UI)

[![npm version](https://badge.fury.io/js/advanced-liquid-glass-ui.svg)](https://badge.fury.io/js/advanced-liquid-glass-ui)
[![npm downloads](https://img.shields.io/npm/dm/advanced-liquid-glass-ui.svg)](https://www.npmjs.com/package/advanced-liquid-glass-ui)

The most advanced glass morphism React UI library with liquid distortion effects, chromatic aberration, and real-time interactive controls.

## ✨ Features

🎨 **Advanced Glass Morphism** - Realistic liquid glass effects with chromatic aberration  
🎛️ **Interactive Controls** - Real-time adjustment of all visual properties  
🌈 **Chromatic Aberration** - RGB channel separation for stunning visual effects  
💧 **Liquid Distortion** - Dynamic displacement mapping for organic movement  
🎯 **Precision Controls** - Fine-tune blur, saturation, elasticity, and more  
🌙 **Over Light Mode** - Dark glass for bright backgrounds  
📱 **Responsive Design** - Works perfectly on all devices  
⚡ **Performance Optimized** - Smooth animations and efficient rendering  
🎨 **Tailwind CSS Included** - No separate installation needed  

## 🚀 Quick Start

### Installation

```bash
npm install advanced-liquid-glass-ui
```

### Import CSS (Required)

**CSS Import:**
```css
@import 'advanced-liquid-glass-ui/alg-ui.css';
```

**JavaScript Import:**
```javascript
import 'advanced-liquid-glass-ui/alg-ui.css';
```

### Basic Usage

```jsx
import { LiquidGlass, GlassButton, GlassCard } from 'advanced-liquid-glass-ui';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <LiquidGlass 
        variant="intense"
        blurAmount={2.5}
        saturation={120}
        chromaticAberration={8}
        cornerRadius={25}
      >
        <div className="p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Welcome to ALG UI</h2>
          <p className="text-white/80 mb-6">
            Experience the most advanced glass morphism effects in React.
          </p>
          <GlassButton variant="default" size="lg">
            Get Started
          </GlassButton>
        </div>
      </LiquidGlass>
    </div>
  );
}
```

## 🎛️ Advanced Controls

ALG UI provides unprecedented control over glass morphism effects:

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

### Example with Advanced Controls

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

## 🧩 Components

### LiquidGlass
The core component that provides all glass morphism effects.

```jsx
<LiquidGlass variant="intense" blurAmount={2.0}>
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

## 🎨 Variants

### Default
Balanced glass morphism effects for most use cases.

### Subtle
Gentle effects for elegant, minimal interfaces.

### Intense
Maximum visual impact with dramatic effects.

### Minimal
Barely noticeable effects for clean designs.

## 🌟 Advanced Features

### Real-time Interactive Controls
All components support real-time adjustment of visual properties through Storybook controls.

### Chromatic Aberration
Advanced RGB channel separation for stunning visual effects.

### Elasticity
Components respond to cursor interaction with configurable intensity.

### Over Light Mode
Dark glass effects for better visibility on bright backgrounds.

### Precision Blur Control
Separate controls for base blur and backdrop blur amounts.

## 📦 Installation & Setup

### Requirements
- React 16.8+ (for hooks support)
- Tailwind CSS is included in the package

### Step 1: Install
```bash
npm install advanced-liquid-glass-ui
```

### Step 2: Import CSS
```javascript
import 'advanced-liquid-glass-ui/alg-ui.css';
```

### Step 3: Use Components
```jsx
import { LiquidGlass, GlassButton } from 'advanced-liquid-glass-ui';

function App() {
  return (
    <LiquidGlass variant="intense">
      <GlassButton>Hello World</GlassButton>
    </LiquidGlass>
  );
}
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/lucaperullo/liquid-glass.git

# Install dependencies
npm install

# Start development
npm run build:watch

# Run tests
npm test

# Build for production
npm run build

# Start Storybook
npm run storybook
```

## 📚 Documentation

- [Component API Reference](./docs/components.md)
- [Advanced Controls Guide](./docs/advanced-controls.md)
- [Examples & Demos](./docs/examples.md)
- [Performance Tips](./docs/performance.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🆘 Support

- 📧 Email: lucaperullo@outlook.it
- 🐛 Issues: [GitHub Issues](https://github.com/lucaperullo/liquid-glass/issues)
- 📖 Documentation: [Full Documentation](./docs)

---

**Advanced Liquid Glass UI (ALG UI) team** - Creating the future of glass morphism effects in React.