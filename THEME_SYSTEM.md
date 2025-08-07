# algUI Dual Theme System

## Panoramica

algUI ora supporta un sistema di temi dual-mode professionale con due temi distinti:

- **Crystal Light**: Tema chiaro con effetti vetro trasparenti e puliti
- **Plasma Dark**: Tema scuro con effetti vetro scuri professionali

## Caratteristiche Principali

### 🎨 Temi Professionali
- **Crystal Light**: Design pulito e minimal con trasparenze eleganti
- **Plasma Dark**: Design sofisticato con contrasti ben bilanciati

### 🔄 Transizioni Smooth
- Transizioni fluide tra i temi (0.3s)
- Animazioni professionali per tutti i componenti
- Persistenza del tema in localStorage

### 🎛️ Controllo Programmático
- Hook `useAlgUITheme()` per controllo completo
- Context Provider per gestione globale
- Override per componenti singoli

## Installazione e Setup

### 1. Provider Setup

```tsx
import { AlgUIThemeProvider } from 'advanced-liquid-glass-ui';

function App() {
  return (
    <AlgUIThemeProvider defaultTheme="crystal-light">
      <YourApp />
    </AlgUIThemeProvider>
  );
}
```

### 2. Hook Usage

```tsx
import { useAlgUITheme } from 'advanced-liquid-glass-ui';

function MyComponent() {
  const { 
    theme, 
    setTheme, 
    toggleTheme, 
    isLight, 
    isDark, 
    colors 
  } = useAlgUITheme();

  return (
    <div style={{ background: colors.background }}>
      <h1 style={{ color: colors.textPrimary }}>
        Current theme: {theme}
      </h1>
      <button onClick={toggleTheme}>
        Switch to {isLight ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}
```

## Temi Disponibili

### Crystal Light Theme

**Caratteristiche:**
- Effetti vetro trasparenti e raffinati
- Palette colori chiari e neutri
- Trasparenze eleganti e minimali
- Bordi netti e definiti

**Configurazione:**
```tsx
{
  name: 'crystal-light',
  colors: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    accentPrimary: '#3b82f6',
    // ... altri colori
  },
  glass: {
    blur: 8,
    saturation: 110,
    lightness: 95,
    alpha: 0.08,
    frost: 0.12
  }
}
```

### Plasma Dark Theme

**Caratteristiche:**
- Effetti vetro scuri professionali
- Palette colori scuri con accenti sobri
- Contrasti ben bilanciati per leggibilità
- Design pulito e moderno

**Configurazione:**
```tsx
{
  name: 'plasma-dark',
  colors: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    textPrimary: '#f1f5f9',
    textSecondary: '#cbd5e1',
    accentPrimary: '#60a5fa',
    // ... altri colori
  },
  glass: {
    blur: 12,
    saturation: 120,
    lightness: 20,
    alpha: 0.15,
    frost: 0.18
  }
}
```

## Componenti con Supporto Tema

### AlgUIThemeSwitch

Componente switch per cambiare tema:

```tsx
import { AlgUIThemeSwitch } from 'advanced-liquid-glass-ui';

<AlgUIThemeSwitch 
  size="md"        // 'sm' | 'md' | 'lg'
  showLabel={true} // Mostra/nasconde il label
/>
```

### Componenti Esistenti

Tutti i componenti esistenti supportano il tema:

```tsx
// Override tema per componente singolo
<LiquidButton theme="plasma-dark">
  Button
</LiquidButton>

// Usa tema globale
<LiquidCard>
  Content
</LiquidCard>
```

## API Reference

### AlgUIThemeProvider Props

```tsx
interface AlgUIThemeProviderProps {
  children: ReactNode;
  defaultTheme?: AlgUITheme; // 'crystal-light' | 'plasma-dark'
  storageKey?: string;       // Chiave per localStorage
}
```

### useAlgUITheme Hook

```tsx
interface AlgUIThemeContextType {
  theme: AlgUITheme;                    // Tema corrente
  setTheme: (theme: AlgUITheme) => void; // Cambia tema
  toggleTheme: () => void;              // Alterna tema
  isDark: boolean;                      // Se è tema scuro
  isLight: boolean;                     // Se è tema chiaro
  colors: ThemeColors;                  // Colori del tema
  config: ThemeConfig;                  // Configurazione completa
}
```

### ThemeColors Interface

```tsx
interface ThemeColors {
  // Background colors
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  
  // Glass colors
  glassBackground: string;
  glassBorder: string;
  glassShadow: string;
  glassHighlight: string;
  
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;
  
  // Accent colors
  accentPrimary: string;
  accentSecondary: string;
  accentTertiary: string;
  accentSuccess: string;
  accentWarning: string;
  accentError: string;
  accentInfo: string;
  
  // Interactive colors
  interactiveHover: string;
  interactiveActive: string;
  interactiveFocus: string;
  
  // Border colors
  borderPrimary: string;
  borderSecondary: string;
  borderAccent: string;
  
  // Shadow colors
  shadowPrimary: string;
  shadowSecondary: string;
  shadowAccent: string;
  
  // Overlay colors
  overlayPrimary: string;
  overlaySecondary: string;
  overlayAccent: string;
}
```

## Esempi di Utilizzo

### Setup Base

```tsx
import { AlgUIThemeProvider } from 'advanced-liquid-glass-ui';

function App() {
  return (
    <AlgUIThemeProvider defaultTheme="crystal-light">
      <div className="min-h-screen">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </AlgUIThemeProvider>
  );
}
```

### Componente con Tema

```tsx
import { useAlgUITheme, LiquidCard } from 'advanced-liquid-glass-ui';

function ThemedComponent() {
  const { colors, theme } = useAlgUITheme();

  return (
    <LiquidCard>
      <h1 style={{ color: colors.textPrimary }}>
        Welcome to {theme} theme
      </h1>
      <p style={{ color: colors.textSecondary }}>
        This component adapts to the current theme.
      </p>
    </LiquidCard>
  );
}
```

### Controllo Programmático

```tsx
import { useAlgUITheme } from 'advanced-liquid-glass-ui';

function ThemeController() {
  const { theme, setTheme, toggleTheme, isLight } = useAlgUITheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('crystal-light')}>
        Set Light
      </button>
      <button onClick={() => setTheme('plasma-dark')}>
        Set Dark
      </button>
      <button onClick={toggleTheme}>
        Toggle ({isLight ? 'Dark' : 'Light'})
      </button>
    </div>
  );
}
```

### Override per Componente

```tsx
import { LiquidButton } from 'advanced-liquid-glass-ui';

function MixedThemes() {
  return (
    <div>
      {/* Usa tema globale */}
      <LiquidButton>Global Theme</LiquidButton>
      
      {/* Override tema */}
      <LiquidButton theme="plasma-dark">
        Dark Theme
      </LiquidButton>
      
      <LiquidButton theme="crystal-light">
        Light Theme
      </LiquidButton>
    </div>
  );
}
```

## CSS Variables

Il sistema applica automaticamente CSS variables al document root:

```css
:root {
  --algui-background: linear-gradient(...);
  --algui-text-primary: #1e293b;
  --algui-accent-primary: #3b82f6;
  /* ... tutte le variabili del tema */
}
```

## Best Practices

### 1. Provider Setup
- Avvolgi sempre l'app con `AlgUIThemeProvider`
- Imposta un `defaultTheme` appropriato
- Usa una `storageKey` unica se necessario

### 2. Uso dei Colori
- Usa sempre `colors.textPrimary` per testo principale
- Usa `colors.textSecondary` per testo secondario
- Usa `colors.accentPrimary` per accenti

### 3. Transizioni
- Le transizioni sono automatiche (0.3s)
- Non aggiungere transizioni manuali per i colori
- Usa `transition-all duration-300` per animazioni custom

### 4. Override Tema
- Usa `theme` prop solo quando necessario
- Preferisci sempre il tema globale
- Testa sempre entrambi i temi

### 5. Accessibilità
- Entrambi i temi rispettano gli standard WCAG
- Contrasti ottimizzati per leggibilità
- Supporto completo per screen reader

## Migrazione

### Da Versione Precedente

I componenti esistenti continuano a funzionare:

```tsx
// Funziona ancora
<LiquidButton>Button</LiquidButton>

// Ora supporta temi
<LiquidButton theme="plasma-dark">Button</LiquidButton>
```

### Aggiunta Provider

```tsx
// Prima
function App() {
  return <YourApp />;
}

// Dopo
function App() {
  return (
    <AlgUIThemeProvider>
      <YourApp />
    </AlgUIThemeProvider>
  );
}
```

## Troubleshooting

### Tema non cambia
- Verifica che `AlgUIThemeProvider` avvolga l'app
- Controlla che non ci siano errori nella console
- Verifica che localStorage sia abilitato

### Colori non aggiornati
- Usa sempre `colors` dal hook `useAlgUITheme`
- Non usare colori hardcoded
- Verifica che il componente sia dentro il provider

### Performance
- Le transizioni sono ottimizzate
- CSS variables sono applicate efficientemente
- localStorage è usato solo quando necessario

## Compatibilità

- ✅ React 16.8+
- ✅ TypeScript completo
- ✅ SSR support
- ✅ localStorage fallback
- ✅ Retrocompatibilità completa 