# Liquid Glass - Funzionalità Avanzate

## Panoramica

Liquid Glass è stato aggiornato con nuove funzionalità per rendere i componenti più visibili e funzionali, mantenendo sempre l'effetto liquid glass come caratteristica principale.

## Nuove Proprietà

### 1. Intensità Variabile (`intensity`)

Controlla l'opacità e la visibilità del componente glass.

```tsx
// Progress bar con intensità bassa (30%)
<LiquidProgressBar 
  progress={65} 
  intensity={30}
  accentColor="#ff6b6b"
/>

// Progress bar con intensità alta (90%)
<LiquidProgressBar 
  progress={65} 
  intensity={90}
  accentColor="#45b7d1"
/>
```

**Valori:** 0-100 (default: 70-85 per componenti funzionali)

### 2. Colori di Accento (`accentColor`, `tint`)

Aggiunge tinte colorate al vetro per migliorare la visibilità e l'identificazione.

```tsx
// Slider con colore di accento
<LiquidSlider 
  value={50}
  onChange={setValue}
  accentColor="#ff6b6b"  // Rosso
  intensity={85}
  contrast={80}
/>

// Button con tint
<LiquidButton 
  tint="#51cf66"  // Verde
  intensity={75}
  contrast={70}
  glow={true}
  highlight={true}
>
  Verde
</LiquidButton>
```

**Note:** `tint` ha precedenza su `accentColor` se entrambi sono specificati.

### 3. Contrasto Migliorato (`contrast`)

Controlla l'intensità di bordi, ombre e riflessi per definire meglio i componenti.

```tsx
<LiquidCard 
  intensity={70}
  accentColor="#4ecdc4"
  contrast={70}  // Contrasto medio
  glow={true}
>
  Contenuto
</LiquidCard>
```

**Valori:** 0-100 (default: 60-80 per componenti funzionali)

### 4. Effetti Avanzati (`glow`, `highlight`)

Aggiunge effetti visivi per migliorare l'interattività.

```tsx
<LiquidButton 
  accentColor="#339af0"
  intensity={75}
  contrast={70}
  glow={true}        // Aggiunge glow effect
  highlight={true}   // Aggiunge highlight effect
>
  Blu
</LiquidButton>
```

## Preset Funzionali

Sono stati creati preset ottimizzati per diversi tipi di componenti:

### Progress Bar
- **Intensità:** 80%
- **Contrasto:** 70%
- **Glow:** true
- **Highlight:** true

### Slider
- **Intensità:** 85%
- **Contrasto:** 75%
- **Glow:** true
- **Highlight:** true

### Interactive Elements (Buttons, Inputs)
- **Intensità:** 75%
- **Contrasto:** 65%
- **Glow:** true
- **Highlight:** true

## Esempi di Utilizzo

### Progress Bar con Progressione Visibile

```tsx
const [progress, setProgress] = useState(65);

<LiquidProgressBar 
  progress={progress} 
  intensity={80}
  accentColor="#ff6b6b"
  contrast={70}
  glow={true}
  highlight={true}
/>
```

### Slider Interattivo

```tsx
const [value, setValue] = useState(50);

<LiquidSlider 
  value={value}
  onChange={setValue}
  accentColor="#51cf66"
  intensity={85}
  contrast={80}
  glow={true}
  highlight={true}
/>
```

### Button Funzionale

```tsx
<LiquidButton 
  accentColor="#339af0"
  intensity={75}
  contrast={70}
  glow={true}
  highlight={true}
  onClick={() => console.log('Clicked!')}
>
  Clicca qui
</LiquidButton>
```

### Card con Intensità Variabile

```tsx
// Card leggera per contenuti secondari
<LiquidCard 
  intensity={40}
  accentColor="#ff6b6b"
  contrast={50}
>
  Contenuto secondario
</LiquidCard>

// Card intensa per elementi di primo piano
<LiquidCard 
  intensity={90}
  accentColor="#45b7d1"
  contrast={85}
  glow={true}
  highlight={true}
>
  Contenuto principale
</LiquidCard>
```

## Migrazione dai Componenti Esistenti

I componenti esistenti continuano a funzionare senza modifiche. Le nuove proprietà sono opzionali:

```tsx
// Funziona ancora come prima
<LiquidProgressBar progress={65} />

// Con nuove funzionalità
<LiquidProgressBar 
  progress={65} 
  intensity={80}
  accentColor="#ff6b6b"
  contrast={70}
  glow={true}
  highlight={true}
/>
```

## Best Practices

1. **Intensità:** Usa 30-50% per contenuti secondari, 70-85% per elementi interattivi
2. **Contrasto:** Usa 40-60% per elementi decorativi, 70-85% per controlli funzionali
3. **Colori:** Scegli colori che si distinguono dal background
4. **Effetti:** Abilita `glow` e `highlight` per elementi interattivi
5. **Accessibilità:** Mantieni sempre un contrasto sufficiente per la leggibilità

## Compatibilità

- ✅ Tutti i componenti esistenti continuano a funzionare
- ✅ Le nuove proprietà sono opzionali
- ✅ Retrocompatibilità completa
- ✅ TypeScript support completo 