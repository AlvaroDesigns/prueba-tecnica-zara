import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
  cleanup();
});

// mock useParams
const mockUrl = 'http://example.com';
const mockTitle = 'Test Vitest';

vi.mock('@/hooks/useFetch');

vi.mock('@/store/context', () => ({
  useAppContext: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  ...vi.importActual<typeof import('react-router-dom')>('react-router-dom'),
  useNavigate: () => vi.fn(),
  useLocation: vi.fn().mockImplementation(() => {
    return {
      pathname: mockUrl,
      title: mockTitle,
    };
  }),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
