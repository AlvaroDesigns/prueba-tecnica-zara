import { ENDPOINT, URL_FRIENDLY } from '@/constants';
import { LITERALS } from '@/data';
import useFetch from '@/hooks/useFetch';
import { useAppContext } from '@/store/context';
import { DETAILS_MOCK } from '@/test/mock';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { Details } from '../details';

const navigateMock = vi.fn();

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => navigateMock,
}));

describe('Details Component', () => {
  beforeEach(() => {
    (useFetch as any).mockReturnValue({
      data: null,
      loading: false,
      error: null,
      fetch: vi.fn(),
    });

    (useAppContext as Mock).mockReturnValue({
      id: 'SMG-S24U',
      product: DETAILS_MOCK,
      setProduct: vi.fn(),
      setCart: vi.fn(),
      cart: [],
    });
  });

  it('fetch product details on mount', async () => {
    const mockFetch = vi.fn();
    (useFetch as any).mockReturnValue({
      data: null,
      loading: false,
      error: null,
      fetch: mockFetch,
    });

    render(<Details />);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(`${ENDPOINT.PRODUCTS}/SMG-S24U`);
  });

  it('renders product details when data is fetch', async () => {
    (useFetch as any).mockReturnValue({
      data: DETAILS_MOCK,
      loading: false,
      error: null,
      fetch: vi.fn(),
    });

    render(<Details />);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: DETAILS_MOCK.name }),
      ).toBeInTheDocument();
      expect(screen.getByText(`From ${DETAILS_MOCK.basePrice} EUR`)).toBeInTheDocument();
    });
  });

  it('updates selected storage capacity on click', async () => {
    (useFetch as any).mockReturnValue({
      data: DETAILS_MOCK,
      loading: false,
      error: null,
      fetch: vi.fn(),
    });

    render(<Details />);

    const storageOption = screen.getByTestId('radio-0');
    fireEvent.click(storageOption);

    expect(storageOption).toHaveAttribute('data-selected', 'true');
  });

  it('updates selected color on click', async () => {
    (useFetch as any).mockReturnValue({
      data: DETAILS_MOCK,
      loading: false,
      error: null,
      fetch: vi.fn(),
    });

    render(<Details />);

    const colorOption = screen.getByTestId('color-0');
    fireEvent.click(colorOption);

    expect(colorOption).toHaveAttribute('data-selected', 'true');
  });

  it('add product to cart on submit', async () => {
    const mockSetCart = vi.fn();
    (useAppContext as Mock).mockReturnValue({
      id: 'SMG-S24U',
      product: DETAILS_MOCK,
      setProduct: vi.fn(),
      setCart: mockSetCart,
      cart: [],
    });

    render(<Details />);

    const storageOption = screen.getByTestId('radio-0');
    fireEvent.click(storageOption);

    const colorOption = screen.getByTestId('color-0');
    fireEvent.click(colorOption);

    const submitButton = screen.getByTestId('cta');
    fireEvent.click(submitButton);

    expect(mockSetCart).toHaveBeenCalledWith([
      {
        id: DETAILS_MOCK.id,
        name: DETAILS_MOCK.name,
        brand: DETAILS_MOCK.brand,
        imageUrl: DETAILS_MOCK.colorOptions[0].imageUrl,
        basePrice: DETAILS_MOCK.basePrice,
        colorName: DETAILS_MOCK.colorOptions[0].name,
        storageCapacity: DETAILS_MOCK.storageOptions[0].capacity,
      },
    ]);
    expect(navigateMock).toHaveBeenCalledWith(`/${URL_FRIENDLY.CART}`);
  });

  it('navigates back on back button click', async () => {
    render(<Details />);

    const backButton = screen.getByText(LITERALS.BACK);
    fireEvent.click(backButton);

    expect(navigateMock).toHaveBeenCalledWith(-1);
  });
});
