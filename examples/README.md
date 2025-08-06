# Liquid Glass Examples

This directory contains example applications demonstrating the liquid-glass UI components.

## Examples

### Basic Usage (`basic-usage/`)
A simple demo showcasing the core components with a hero section, stats, and feature cards.

### Dashboard (`dashboard/`)
A comprehensive admin dashboard example showing all components working together in a real-world scenario.

## Running Examples

To run the examples, you'll need to:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the library:
   ```bash
   npm run build
   ```

3. Run Storybook to see interactive examples:
   ```bash
   npm run storybook
   ```

## TypeScript Configuration

The examples use a separate TypeScript configuration (`tsconfig.json`) that:
- Enables JSX support
- Configures module resolution for local development
- Includes proper React types

## Notes

- Examples import directly from the source files (`../../src`) for development
- In production, you would import from the published package (`liquid-glass`)
- Make sure to build the library before running examples 