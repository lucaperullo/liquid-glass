import React, { useState } from 'react'
import {
  LiquidGlass,
  GlassButton,
  GlassCard,
  GlassNavbar,
  GlassInput,
  GlassBadge,
  GlassStats
} from 'liquid-glass'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const stats = [
    { value: "12.4K", label: "Total Users" },
    { value: "2.8K", label: "Active Sessions" },
    { value: "98.5%", label: "Uptime" },
    { value: "$45.2K", label: "Revenue" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <GlassNavbar
        variant="minimal"
        logo={
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-white">Liquid Glass Demo</span>
          </div>
        }
        actions={
          <div className="flex items-center space-x-3">
            <GlassBadge color="success">Online</GlassBadge>
            <GlassButton size="sm">
              Profile
            </GlassButton>
          </div>
        }
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <LiquidGlass variant="intense" className="p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Liquid Glass
          </h1>
          <p className="text-white/80 mb-6 text-lg">
            Advanced liquid glass UI components with chromatic aberration and dynamic distortion effects.
          </p>
          <div className="flex gap-4">
            <GlassButton onClick={() => setCount(count + 1)}>
              Click me! ({count})
            </GlassButton>
            <GlassButton variant="subtle">
              Learn More
            </GlassButton>
          </div>
        </LiquidGlass>

        {/* Stats Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Statistics</h2>
          <GlassStats stats={stats} />
        </div>

        {/* Cards Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Feature Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-2">Glass Morphism</h3>
              <p className="text-white/80">Beautiful blur effects and transparency for modern UI design.</p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-2">Chromatic Aberration</h3>
              <p className="text-white/80">Advanced color separation effects for stunning visual appeal.</p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-2">Dynamic Distortion</h3>
              <p className="text-white/80">Interactive distortion effects that respond to user interactions.</p>
            </GlassCard>
          </div>
        </div>

        {/* Input Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Form Elements</h2>
          <div className="max-w-md">
            <GlassInput
              placeholder="Enter your name..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mb-4"
            />
            <div className="flex gap-2">
              <GlassBadge>Default</GlassBadge>
              <GlassBadge color="success">Success</GlassBadge>
              <GlassBadge color="warning">Warning</GlassBadge>
              <GlassBadge color="error">Error</GlassBadge>
              <GlassBadge color="info">Info</GlassBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 