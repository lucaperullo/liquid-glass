# Storybook Setup per algUI

## Problema Risolto: useAlgUITheme must be used within an AlgUIThemeProvider

### 🔧 **Configurazione Implementata**

#### 1. **File Preview (.storybook/preview.tsx)**
```tsx
import React from 'react';
import type { Preview } from "@storybook/react";
import { AlgUIThemeProvider } from '../src/context/algUIThemeContext';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        // ... altri background
      ],
    },
  },
  decorators: [
    (Story) => (
      <AlgUIThemeProvider defaultTheme="crystal-light">
        <Story />
      </AlgUIThemeProvider>
    ),
  ],
};

export default preview;
```

#### 2. **CSS Loading (.storybook/preview-head.html)**
```html
<link rel="stylesheet" href="../alg-ui.css">
<style>
  body {
    margin: 0;
    padding: 0;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
</style>
```

#### 3. **Componente LiquidGlass Aggiornato**
Il componente ora gestisce il caso in cui il provider non sia disponibile:

```tsx
// Try to get theme context, but don't fail if not available
let themeContext = null;
try {
  themeContext = useAlgUITheme();
} catch (error) {
  // Provider not available, use defaults
  console.warn('AlgUIThemeProvider not found, using default theme values');
}

const globalTheme = themeContext?.theme || 'crystal-light';
const themeColors = themeContext?.colors || getThemeConfig('crystal-light').colors;
const themeConfig = themeContext?.config || getThemeConfig('crystal-light');
```

### 🎯 **Stories di Test**

#### **Test/Theme System**
- Verifica che il sistema di temi funzioni con il provider
- Include AlgUIThemeSwitch e LiquidGlass

#### **Test/No Provider**
- Verifica che i componenti funzionino senza il provider
- Test di compatibilità retroattiva

### 📁 **Struttura File**

```
.storybook/
├── main.ts              # Configurazione principale
├── preview.tsx          # Decorator globale
├── preview-head.html    # CSS loading
└── manager.ts           # Configurazione UI

stories/
├── ThemeSystem.stories.tsx      # Demo sistema temi
├── AlgUIThemeSwitch.stories.tsx # Componente switch
├── useAlgUITheme.stories.tsx    # Hook demo
├── Test.stories.tsx             # Test con provider
└── NoProvider.stories.tsx       # Test senza provider
```

### 🚀 **Come Testare**

1. **Avvia Storybook**:
   ```bash
   npm run storybook
   ```

2. **Naviga alle Stories**:
   - **Test/Theme System**: Verifica con provider
   - **Test/No Provider**: Verifica senza provider
   - **Theme System/**: Demo complete

3. **Verifica Funzionamento**:
   - Tutti i componenti dovrebbero renderizzare
   - Il sistema di temi dovrebbe funzionare
   - Non dovrebbero esserci errori di provider

### 🔍 **Troubleshooting**

#### **Se vedi ancora l'errore**:

1. **Verifica il file preview.tsx**:
   ```bash
   cat .storybook/preview.tsx
   ```

2. **Pulisci la cache di Storybook**:
   ```bash
   rm -rf node_modules/.cache/storybook
   npm run storybook
   ```

3. **Verifica gli import**:
   - Assicurati che `AlgUIThemeProvider` sia importato correttamente
   - Controlla che il percorso sia corretto

4. **Testa senza decorator**:
   - Vai alla story "Test/No Provider"
   - Dovrebbe funzionare anche senza il provider

#### **Se i componenti non si renderizzano**:

1. **Verifica il CSS**:
   - Controlla che `alg-ui.css` sia presente
   - Verifica che il file `preview-head.html` sia configurato

2. **Controlla la console**:
   - Apri gli strumenti di sviluppo
   - Verifica che non ci siano errori JavaScript

3. **Testa componenti singoli**:
   - Prova a renderizzare solo `LiquidGlass` senza altri componenti

### ✅ **Verifica Finale**

Dopo aver seguito questi passaggi:

- ✅ Tutti i componenti si renderizzano
- ✅ Il sistema di temi funziona
- ✅ Non ci sono errori di provider
- ✅ Le transizioni tra temi sono smooth
- ✅ Il CSS viene caricato correttamente

### 📚 **Documentazione Aggiuntiva**

- **THEME_SYSTEM.md**: Guida completa al sistema di temi
- **FUNCTIONAL_FEATURES.md**: Funzionalità avanzate
- **README.md**: Documentazione principale

Il sistema dovrebbe ora funzionare correttamente in Storybook! 🎉 