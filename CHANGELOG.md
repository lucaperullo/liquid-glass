# Changelog

All notable changes to this project will be documented in this file.

## [1.0.4] - 2024-12-19

### 🔧 Fixed - Story Import Issues

#### 🐛 Bug Fixes
- **Fixed Story Import Errors** - Replaced all `Glass*` component imports with `Liquid*` components in Storybook stories
- **Fixed Prop Name Issues** - Changed `value` prop to `progress` prop in LiquidProgressBar components
- **Fixed Modal Props** - Removed unsupported `isOpen` and `onClose` props from LiquidModal components
- **Fixed Component References** - Updated all story titles and meta objects to use correct component names

#### 📚 Storybook Improvements
- **LiquidBadge Stories** - Fixed all component references and prop names
- **LiquidButton Stories** - Updated imports and component usage
- **LiquidCard Stories** - Fixed component imports and props
- **LiquidInput Stories** - Updated component references
- **LiquidModal Stories** - Fixed modal state management and removed unsupported props
- **LiquidNavbar Stories** - Updated component interface to match actual implementation
- **LiquidProgressBar Stories** - Fixed progress prop names and removed unsupported props
- **LiquidSidebar Stories** - Updated component references
- **LiquidStats Stories** - Fixed component imports
- **LiquidTooltip Stories** - Updated component references
- **Showcase Stories** - Fixed all component references and prop names
- **FormComponents Stories** - Updated progress bar prop names
- **DisplayComponents Stories** - Fixed component imports
- **OverlayComponents Stories** - Fixed modal and sidebar component usage

#### 🎯 Technical Improvements
- **TypeScript Compatibility** - All stories now use correct component interfaces
- **Build System** - Fixed import resolution issues
- **Development Experience** - Storybook now runs without import errors
- **Component Consistency** - All stories match actual component implementations

## [1.0.1] - 2024-12-19

## [1.0.1] - 2024-12-19

### ✨ Added - Advanced Interactive Controls

#### 🎛️ New Advanced Properties
- **Refraction Mode** - Control refraction calculation method (`standard`, `polar`, `prominent`, `shader`)
- **Displacement Scale** - Fine-tune edge distortion intensity (0-200)
- **Blur Amount** - Precise backdrop blur control (0-20)
- **Saturation** - Color saturation control (0-200%)
- **Chromatic Aberration** - RGB channel separation intensity (0-20)
- **Elasticity** - Cursor interaction intensity (0-1)
- **Corner Radius** - Advanced corner radius control (0-100px)
- **Over Light** - Dark glass for bright backgrounds

#### 🔧 Enhanced Core Properties
- **Blur Control** - Fixed blur property functionality and added `blurAmount` for precise control
- **Real-time Controls** - All properties now work in real-time through Storybook controls
- **Performance Optimization** - Improved rendering efficiency for complex effects

#### 🎨 Component Improvements
- **LiquidGlass** - Enhanced with all new advanced properties
- **GlassButton** - Added blur and chromatic aberration controls
- **GlassCard** - Improved hover effects and blur controls
- **GlassModal** - Enhanced backdrop blur and size controls
- **GlassInput** - Added blur and saturation controls
- **GlassProgressBar** - Improved visual effects and blur controls
- **GlassBadge** - Enhanced color variants and blur effects

#### 📚 Documentation Updates
- **Comprehensive README** - Complete rewrite with advanced controls documentation
- **SETUP.md** - Updated with all new properties and examples
- **Storybook Stories** - Enhanced with interactive controls for all components
- **Type Definitions** - Complete TypeScript support for all new properties

#### 🎯 New Features
- **Interactive Storybook** - Real-time control panels for all properties
- **Advanced Presets** - Enhanced default configurations for all variants
- **Performance Monitoring** - Optimized rendering for complex effects
- **Browser Compatibility** - Improved support for modern browsers

#### 🐛 Bug Fixes
- Fixed blur property not working correctly in LiquidGlass component
- Resolved chromatic aberration calculation issues
- Fixed corner radius application in all components
- Improved backdrop blur performance

#### 📦 Build Improvements
- Enhanced Rollup configuration for better tree-shaking
- Improved CSS bundling with PostCSS
- Better TypeScript declarations
- Optimized package size

## [1.0.0] - 2024-12-18

### 🎉 Initial Release

#### ✨ Core Features
- **11 Premium Components** - Complete UI library ready to use
- **4 Visual Variants** - default, subtle, intense, minimal
- **Chromatic Aberration** - Advanced RGB separation effects
- **Liquid Distortion** - Dynamic SVG-based distortions
- **Glass Morphism** - Realistic frosted glass effects
- **Responsive Design** - Works on all screen sizes
- **TypeScript Support** - Full type safety included
- **Tailwind CSS Included** - No separate installation needed

#### 🧩 Components
- **LiquidGlass** - Base component with all effects
- **GlassButton** - Interactive buttons with hover effects
- **GlassCard** - Content containers with optional hover
- **GlassNavbar** - Responsive navigation bars
- **GlassModal** - Modal dialogs with backdrop blur
- **GlassSidebar** - Fixed position sidebars
- **GlassInput** - Transparent input fields
- **GlassProgressBar** - Progress indicators
- **GlassBadge** - Status badges with color variants
- **GlassTooltip** - Hover tooltips with positioning
- **GlassStats** - Statistics display grids

#### 🎨 Features
- **4 Visual Variants** - Carefully crafted presets
- **Customizable Properties** - Fine-tune all effects
- **Hover Effects** - Interactive animations
- **Color Variants** - Multiple color schemes
- **Size Variants** - Responsive sizing
- **Accessibility** - ARIA support and keyboard navigation

#### 📚 Documentation
- **Comprehensive README** - Complete setup and usage guide
- **SETUP.md** - Quick start guide
- **Storybook Documentation** - Interactive component showcase
- **TypeScript Definitions** - Full type safety

#### 🛠️ Development
- **Modern Build System** - Rollup with TypeScript
- **Storybook Integration** - Interactive development environment
- **Testing Setup** - Jest and React Testing Library
- **Linting** - ESLint with TypeScript support
- **CI/CD Ready** - Automated testing and building

---

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lucaperullo/liquid-glass/tags).

## Support

- 📧 Email: lucaperullo@outlook.it
- 🐛 Issues: [GitHub Issues](https://github.com/lucaperullo/liquid-glass/issues)
- 📖 Documentation: [Full Documentation](./docs)

---

**Advanced Liquid Glass UI (ALG UI) team** - Creating the future of glass morphism effects in React.