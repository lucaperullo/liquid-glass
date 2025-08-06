import '@testing-library/jest-dom';

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

// Mock useId for testing
let mockIdCounter = 0;
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useId: () => `test-id-${++mockIdCounter}`
}));