# LiquidGlass UI 🌟

[![npm version](https://badge.fury.io/js/liquid-glass.svg)](https://badge.fury.io/js/liquid-glass)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> Advanced liquid glass UI components for React with chromatic aberration and dynamic distortion effects

## ✨ Features

- 🔥 **11 Premium Components** - Complete UI library ready to use
- 🎨 **4 Visual Variants** - default, subtle, intense, minimal
- 🌈 **Chromatic Aberration** - Advanced RGB separation effects
- 🌊 **Liquid Distortion** - Dynamic SVG-based distortions
- 💎 **Glass Morphism** - Realistic frosted glass effects
- 📱 **Responsive Design** - Works on all screen sizes
- 🎯 **TypeScript Support** - Full type safety included
- 🚀 **Zero Dependencies** - Lightweight and fast
- 📖 **Comprehensive Docs** - Easy to learn and use

## 🚀 Quick Start

### Installation

```bash
npm install liquid-glass
# or
yarn add liquid-glass
# or
pnpm add liquid-glass
```

### Basic Usage

```jsx
import { LiquidGlass, GlassButton, GlassCard } from 'liquid-glass';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-8">
      <GlassCard className="p-6">
        <h1 className="text-2xl font-bold text-white mb-4">
          Welcome to LiquidGlass UI!
        </h1>
        <p className="text-white/80 mb-6">
          The most advanced glass effect library for React.
        </p>
        <GlassButton onClick={() => alert('Clicked!')}>
          Get Started
        </GlassButton>
      </GlassCard>
    </div>
  );
}
```

## 📦 Components

### Core Components
- **LiquidGlass** - Base component with all effects
- **GlassButton** - Interactive buttons with hover effects
- **GlassCard** - Content containers with optional hover
- **GlassNavbar** - Responsive navigation bars
- **GlassModal** - Modal dialogs with backdrop blur
- **GlassSidebar** - Fixed position sidebars

### Form Components  
- **GlassInput** - Transparent input fields
- **GlassProgressBar** - Progress indicators
- **GlassBadge** - Status badges with color variants
- **GlassTooltip** - Hover tooltips with positioning
- **GlassStats** - Statistics display grids

## 🎨 Variants

Choose from 4 carefully crafted presets:

```jsx
<GlassCard variant="default">   {/* Balanced effect */}
<GlassCard variant="subtle">    {/* Minimal, elegant */}
<GlassCard variant="intense">   {/* High impact */}
<GlassCard variant="minimal">   {/* Ultra-light */}
```

## 🔧 Customization

Every component accepts custom props for fine-tuning:

```jsx
<LiquidGlass 
  scale={250}              // Distortion intensity
  radius={24}              // Border radius
  frost={0.15}             // Glass opacity
  backdropBlur={5}         // Background blur
  borderColor="rgba(255, 215, 0, 0.5)"  // Border color
>
  Your content
</LiquidGlass>
```

## 📖 Component Examples

### Navigation Bar
```jsx
import { GlassNavbar, GlassButton } from 'liquid-glass';

<GlassNavbar 
  logo="My App"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]}
  actions={<GlassButton size="sm">Login</GlassButton>}
/>
```

### Modal Dialog
```jsx
import { GlassModal, GlassButton } from 'liquid-glass';

const [isOpen, setIsOpen] = useState(false);

<GlassModal 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="md"
>
  <h2 className="text-2xl font-bold text-white mb-4">
    Confirm Action
  </h2>
  <p className="text-white/80 mb-6">
    Are you sure you want to proceed?
  </p>
  <div className="flex justify-end space-x-3">
    <GlassButton 
      variant="subtle" 
      onClick={() => setIsOpen(false)}
    >
      Cancel
    </GlassButton>
    <GlassButton onClick={handleConfirm}>
      Confirm
    </GlassButton>
  </div>
</GlassModal>
```

### Form with Progress
```jsx
import { GlassCard, GlassInput, GlassProgressBar, GlassButton } from 'liquid-glass';

<GlassCard className="p-8">
  <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
  
  <div className="space-y-4">
    <GlassInput 
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    
    <GlassInput 
      type="password"
      placeholder="Create password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    
    <GlassProgressBar 
      value={passwordStrength} 
      showLabel={false}
    />
    
    <GlassButton className="w-full">
      Create Account
    </GlassButton>
  </div>
</GlassCard>
```

### Statistics Dashboard
```jsx
import { GlassStats, GlassBadge } from 'liquid-glass';

const stats = [
  { value: "42K", label: "Active Users" },
  { value: "1.2K", label: "Projects" },
  { value: "99.9%", label: "Uptime" },
  { value: "$2.4M", label: "Revenue" }
];

<div className="space-y-6">
  <GlassStats stats={stats} />
  
  <div className="flex space-x-2">
    <GlassBadge color="success">Online</GlassBadge>
    <GlassBadge color="warning">Pending</GlassBadge>
    <GlassBadge color="error">Offline</GlassBadge>
  </div>
</div>
```

## 🎯 Best Practices

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

## 🔍 Browser Support

- ✅ Chrome 76+
- ✅ Firefox 70+
- ✅ Safari 14+
- ✅ Edge 79+

*Requires CSS `backdrop-filter` support*

## 📋 Requirements

- React 16.8+
- Modern browser with backdrop-filter support
- Tailwind CSS (recommended for styling)

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/yourusername/liquid-glass.git

# Install dependencies
npm install

# Start development
npm run build:watch

# Run tests
npm test

# Build for production
npm run build
```

## 🐛 Troubleshooting

### Effects not visible?
- Ensure you have a colorful background
- Check browser support for `backdrop-filter`
- Verify no z-index conflicts

### Performance issues?
- Use `variant="minimal"` for lighter effects
- Reduce the number of glass components
- Check for unnecessary re-renders

### TypeScript errors?
- Ensure React types are installed: `npm i -D @types/react @types/react-dom`
- Check TypeScript version compatibility (5.0+)

## 📝 Changelog

### v1.0.0
- 🎉 Initial release
- ✨ 11 component library
- 🎨 4 visual variants
- 🔧 Full TypeScript support
- 📖 Complete documentation

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern glass morphism design trends
- Built with advanced SVG filter techniques
- Thanks to the React community for feedback and support

## 📞 Support

- 📧 Email: support@liquid-glass.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/liquid-glass/issues)
- 📖 Docs: [Documentation](https://liquid-glass-docs.com)
- 💬 Discord: [Join our community](https://discord.gg/liquid-glass)

---

Made with ❤️ by the LiquidGlass UI team