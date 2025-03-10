import { ENDPOINT, PRODUCTS_LIMIT, URL_FRIENDLY } from '@/constants';
import { LITERALS } from '@/data';
import useFetch from '@/hooks/useFetch';
import { useAppContext } from '@/store/context';
import { PRODUCTS_MOCK } from '@/test/mock';
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { Product } from '../product';

const navigateMock = vi.fn();

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => navigateMock,
}));

describe('Product Component', () => {
  beforeEach(() => {
    (useFetch as any).mockReturnValue({
      data: null,
      loading: false,
      error: null,
      fetch: vi.fn(),
    });

    (useAppContext as Mock).mockReturnValue({
      setId: vi.fn(),
      setProduct: vi.fn(),
    });
  });

  it('renders the search input and label', () => {
    render(<Product />);

    expect(screen.getByPlaceholderText(LITERALS.SEARCHER)).toBeInTheDocument();
    expect(screen.getByText(`0 ${LITERALS.RESULTS}`)).toBeInTheDocument();
  });

  it('fetches products on mount', async () => {
    const mockFetch = vi.fn();
    (useFetch as any).mockReturnValue({
      data: null,
      loading: false,
      error: null,
      fetch: mockFetch,
    });
    render(<Product />);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${ENDPOINT.PRODUCTS}?limit=${PRODUCTS_LIMIT}`,
    );
  });

  it('updates products when data is fetched', async () => {
    (useFetch as any).mockReturnValue({
      data: PRODUCTS_MOCK,
      loading: false,
      error: null,
      fetch: vi.fn(),
    });

    render(<Product />);

    expect(screen.getByText('2 RESULTS')).toBeInTheDocument();
  });
  it('updates search value when input changes', async () => {
    const mockFetch = vi.fn();
    (useFetch as any).mockReturnValue({
      data: PRODUCTS_MOCK,
      loading: false,
      error: null,
      fetch: mockFetch,
    });

    render(<Product />);

    const input = screen.getByTestId('searcher');
    fireEvent.change(input, { target: { value: 'apple' } });

    expect(input).toHaveValue('apple');
    expect(mockFetch).toHaveBeenLastCalledWith(
      `${ENDPOINT.PRODUCTS}?limit=${PRODUCTS_LIMIT}&search=apple`,
    );
  });
  it('updates the id in the context on product click', async () => {
    (useFetch as any).mockReturnValue({
      data: PRODUCTS_MOCK,
      loading: false,
      error: null,
      fetch: vi.fn(),
    });

    const { setId } = useAppContext();
    render(<Product />);

    const { result } = renderHook(() => useAppContext());

    await waitFor(() => {
      result.current.setProduct(PRODUCTS_MOCK);
    });
    const firstProduct = PRODUCTS_MOCK[0];

    const productCard = screen.getAllByText(firstProduct.name)[0];

    fireEvent.click(productCard);

    expect(setId).toHaveBeenCalledWith(firstProduct.id);
  });
  it('navigates to the correct url on product click', async () => {
    (useFetch as any).mockReturnValue({
      data: PRODUCTS_MOCK,
      loading: false,
      error: null,
      fetch: vi.fn(),
    });

    render(<Product />);
    const firstProduct = PRODUCTS_MOCK[0];

    const productCard = screen.getAllByText(firstProduct.name)[0];

    fireEvent.click(productCard);

    const expectedUrl = `${URL_FRIENDLY.DETAILS}/${firstProduct.brand.toLocaleLowerCase()}/${firstProduct.name.replace(/\s+/g, '_').toLocaleLowerCase()}`;
    expect(navigateMock).toHaveBeenCalledWith(expectedUrl);
  });
});
