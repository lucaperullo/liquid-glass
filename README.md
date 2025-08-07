# 🎨 algUI - Advanced Liquid Glass UI Library

A comprehensive React component library featuring advanced liquid glass effects with dual theme system, functional properties, and experimental components.

## 🎬 Demo

![algUI Liquid Glass Effects](algui_effect.gif)

*Watch the advanced liquid distortion effects in action - real-time chromatic aberration, displacement mapping, and dynamic glass morphism.*

## ✨ Features

### 🎨 **Tailwind-Integrated Theme System**
- **Crystal Light**: Transparent, clean, subtle glass effects
- **Plasma Dark**: Dark, professional, elegant glass effects
- **System Auto-detect**: Automatically follows your system theme preference
- **Tailwind Color Palette**: Full integration with Tailwind CSS colors
- **Semantic Colors**: Easy-to-use semantic color system
- Smooth transitions and theme persistence
- Global theme provider with CSS variables

### 🧩 **Complete Component Library**
- **Core Components**: LiquidGlass, LiquidButton, LiquidCard, LiquidBadge
- **Form Components**: LiquidInput, LiquidSelect, LiquidSwitch, LiquidCheckbox, LiquidSlider
- **Layout Components**: LiquidNavbar, LiquidSidebar, LiquidTabs, LiquidModal
- **Display Components**: LiquidProgressBar, LiquidStats, LiquidTooltip
- **Theme System**: AlgUIThemeProvider, AlgUIThemeSwitch

### 🌟 **Advanced Glass Effects**
- **Liquid Distortion**: Real-time chromatic aberration and displacement mapping
- **Clean Variant**: Advanced liquid distortion with professional effects
- **Multiple Variants**: Default, subtle, intense, minimal, clean
- **Responsive Design**: Mobile-first approach with touch support
- **Accessibility**: Full ARIA support and keyboard navigation

### 🎯 **Professional Features**
- **Mobile Compatible**: Touch gestures and responsive design
- **Fullscreen Modals**: Immersive modal experiences
- **Interactive Controls**: Switches, checkboxes, sliders with glass effects
- **Tooltip System**: Contextual information with glass styling
- **Theme Switching**: Dropdown select for Light/Dark/System themes

## 🚀 Quick Start

### Installation

```bash
npm install algui
```

### Basic Usage

```tsx
import { 
  LiquidGlass, 
  LiquidButton, 
  AlgUIThemeProvider 
} from 'algui';

function App() {
  return (
    <AlgUIThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <LiquidGlass variant="clean" className="p-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to algUI
          </h1>
          <LiquidButton variant="clean" size="lg">
            Get Started
          </LiquidButton>
        </LiquidGlass>
      </div>
    </AlgUIThemeProvider>
  );
}
```

## 📚 Component Examples

### Form Components

```tsx
import { LiquidSwitch, LiquidCheckbox, LiquidSlider } from 'algui';

// Interactive Switch
<LiquidSwitch
  checked={isEnabled}
  onChange={setIsEnabled}
  label="Enable notifications"
  variant="clean"
/>

// Professional Checkbox
<LiquidCheckbox
  checked={isAccepted}
  onChange={setIsAccepted}
  label="Accept terms and conditions"
  variant="clean"
/>

// Glass Effect Slider
<LiquidSlider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  label="Volume"
  variant="clean"
/>
```

### Modal System

```tsx
import { LiquidModal, LiquidButton } from 'algui';

const [isOpen, setIsOpen] = useState(false);

<LiquidButton onClick={() => setIsOpen(true)}>
  Open Modal
</LiquidButton>

<LiquidModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Fullscreen Modal"
  size="full"
  variant="clean"
>
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-white">
      Immersive Experience
    </h3>
    <p className="text-white/80">
      This modal takes up the full screen with glass effects.
    </p>
  </div>
</LiquidModal>
```

### Tooltip System

```tsx
import { LiquidTooltip } from 'algui';

<LiquidTooltip
  content="This is a glass-effect tooltip"
  position="top"
  variant="clean"
>
  <LiquidButton>Hover me</LiquidButton>
</LiquidTooltip>
```

## 🎨 System Theme Auto-detect

```tsx
import { AlgUIThemeProvider, AlgUIThemeSwitch } from 'algui';

function App() {
  return (
    <AlgUIThemeProvider defaultTheme="system">
      <div>
        <AlgUIThemeSwitch showSystem={true} />
        {/* Your app content */}
      </div>
    </AlgUIThemeProvider>
  );
}
```

## 🌈 Tailwind Color Integration

```tsx
import { getTailwindColor, getSemanticColor, createGlassColor } from 'algui';

// Get Tailwind colors
const blue500 = getTailwindColor('blue', 500);

// Use semantic colors
const primaryColor = getSemanticColor('primary', isDark);

// Create glass colors
const glassColor = createGlassColor('#3B82F6', 0.2);
```

## 📖 Documentation

### Storybook

```bash
npm run storybook
```

Visit `http://localhost:6006` to explore all components with interactive examples.

### Available Stories

- **Form Components/**: LiquidSwitch, LiquidCheckbox, LiquidSlider
- **Overlay Components/**: LiquidModal (with fullscreen support)
- **Display Components/**: LiquidTooltip, LiquidProgressBar
- **Theme System/**: Theme demonstrations
- **Showcase/**: Complete component showcase

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build

# Run tests
npm test
```

## 📦 Available Components

### Core Components
- `LiquidGlass` - Base glass effect container
- `LiquidButton` - Interactive buttons with glass effects
- `LiquidCard` - Content cards with glass styling
- `LiquidBadge` - Status indicators with glass effects

### Form Components
- `LiquidInput` - Text input with glass styling
- `LiquidSelect` - Dropdown select with glass effects
- `LiquidSwitch` - Toggle switches with glass styling
- `LiquidCheckbox` - Checkboxes with glass effects
- `LiquidSlider` - Range sliders with glass styling

### Layout Components
- `LiquidNavbar` - Navigation bars with glass effects
- `LiquidSidebar` - Sidebar navigation with glass styling
- `LiquidTabs` - Tab navigation with glass effects
- `LiquidModal` - Modal dialogs with fullscreen support

### Display Components
- `LiquidProgressBar` - Progress indicators with glass effects
- `LiquidStats` - Statistics display with glass styling
- `LiquidTooltip` - Contextual tooltips with glass effects

### Theme System
- `AlgUIThemeProvider` - Theme context provider
- `AlgUIThemeSwitch` - Theme selection dropdown
- `useAlgUITheme` - Theme hook for components

## 🎯 Key Features

### Mobile Compatibility
- Touch gesture support for all interactive components
- Responsive design that works on all screen sizes
- Optimized performance for mobile devices

### Accessibility
- Full ARIA support for screen readers
- Keyboard navigation for all components
- Focus management in modals and overlays

### Performance
- Optimized glass effect calculations
- Efficient theme switching
- Minimal bundle size impact

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**algUI** - Advanced Liquid Glass UI Library with Tailwind integration and system theme detection.