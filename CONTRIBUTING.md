# Contributing to LiquidGlass UI

First off, thank you for considering contributing to LiquidGlass UI! It's people like you that make this library great.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to [conduct@liquid-glass.com](mailto:conduct@liquid-glass.com).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**

#### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g. iOS]
- Browser [e.g. chrome, safari]
- Version [e.g. 22]
- React version: [e.g. 18.2.0]
- LiquidGlass version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the JavaScript/TypeScript styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/liquid-glass.git
   cd liquid-glass
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a branch for your feature/fix:
   ```bash
   git checkout -b feature/amazing-feature
   ```

### Development Workflow

1. **Start development mode:**
   ```bash
   npm run build:watch
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **Run Storybook for component development:**
   ```bash
   npm run storybook
   ```

4. **Lint your code:**
   ```bash
   npm run lint
   ```

5. **Type check:**
   ```bash
   npm run typecheck
   ```

### Project Structure

```
src/
├── components/          # All React components
│   ├── LiquidGlass/    # Base component
│   ├── GlassButton/    # Button component
│   └── ...             # Other components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and constants
└── index.ts           # Main export file

tests/                  # Test files
stories/               # Storybook stories
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript/TypeScript Styleguide

* Use TypeScript for all new code
* Use meaningful variable and function names
* Add JSDoc comments for public APIs
* Use arrow functions for inline functions
* Prefer `const` over `let` when possible

Example:
```typescript
/**
 * Creates a glass morphism effect configuration
 * @param variant - The visual variant to use
 * @param overrides - Custom property overrides
 * @returns Computed glass configuration
 */
export const getGlassConfig = (
  variant: GlassVariant,
  overrides: Partial<BaseGlassProps> = {}
): GlassConfig => {
  // Implementation
};
```

### Component Guidelines

1. **File Structure:**
   ```
   ComponentName/
   ├── ComponentName.tsx
   ├── ComponentName.types.ts
   └── index.ts
   ```

2. **TypeScript Props:**
   ```typescript
   export interface ComponentProps extends BaseGlassProps {
     specificProp?: string;
     onAction?: () => void;
   }
   ```

3. **Component Template:**
   ```typescript
   import React from 'react';
   import { ComponentProps } from './Component.types';
   
   const Component: React.FC<ComponentProps> = ({ 
     children, 
     variant = "default",
     ...props 
   }) => {
     return (
       <LiquidGlass variant={variant} {...props}>
         {children}
       </LiquidGlass>
     );
   };
   
   export default Component;
   ```

### Testing Guidelines

* Write tests for all new components
* Use React Testing Library
* Test user interactions, not implementation details
* Aim for high code coverage

Example:
```typescript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Component from '../Component';

describe('Component', () => {
  it('renders children correctly', () => {
    render(<Component>Test content</Component>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick}>Click me</Component>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Documentation

* Update README.md if you change functionality
* Add JSDoc comments to new functions
* Update Storybook stories for new components
* Include examples in documentation

## Release Process

1. All changes must be made via pull request
2. Pull requests require review from maintainers
3. Tests must pass on all supported Node.js versions
4. Documentation must be updated for new features
5. Version bumps follow semantic versioning

## Questions?

Don't hesitate to ask questions! You can:

* Open an issue with the "question" label
* Join our Discord server
* Email us at [dev@liquid-glass.com](mailto:dev@liquid-glass.com)

## Recognition

Contributors will be recognized in:

* The project README
* Release notes
* Our website contributors page

Thank you for contributing to LiquidGlass UI! 🌟