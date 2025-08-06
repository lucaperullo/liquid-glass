import type { Preview } from '@storybook/react';
import '../alg-ui.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
        {
          name: 'dark',
          value: '#1a1a1a',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'colorful',
          value: 'radial-gradient(circle at 20% 80%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 40% 40%, #45b7d1 0%, transparent 50%)',
        },
      ],
    },
  },
};

export default preview;