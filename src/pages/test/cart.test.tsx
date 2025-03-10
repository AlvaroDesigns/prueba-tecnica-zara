import { LITERALS } from '@/data';
import { useMediaQuery } from '@/hooks';
import { Cart } from '@/pages/cart';
import { useAppContext } from '@/store/context';
import { CART_MOCK } from '@/test/mock';
import '@testing-library/jest-dom';
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

describe('Cart Component Products', () => {
  beforeEach(() => {
    (window.matchMedia as unknown as Mock).mockImplementation((query) => ({
      matches: query === '(max-width: 768px)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    (useAppContext as Mock).mockReturnValue({
      cart: CART_MOCK,
      setCart: vi.fn(),
    });
  });

  it('debería renderizar el título del carrito con la cantidad de productos', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    render(<Cart />);

    expect(result.current).toBe(false);
  });

  it('renders cart title and item list', () => {
    const { container } = render(<Cart />);
    const { result } = renderHook(() => useAppContext());

    waitFor(() => {
      result.current.setCart(CART_MOCK);
    });

    expect(
      screen.getByText((content) => content.startsWith(`${LITERALS.TITLE_CART}(2)`)),
    ).toBeInTheDocument();

    expect(screen.getByText('Samsung')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('128GB | Black')).toBeInTheDocument();
    expect(screen.getByText('256GB | White')).toBeInTheDocument();
    expect(screen.getByText(`100 ${LITERALS.CURRENCY}`)).toBeInTheDocument();
    expect(screen.getByText(`200 ${LITERALS.CURRENCY}`)).toBeInTheDocument();
    expect(container).toBeDefined();
  });

  it('renders total price correctly', async () => {
    render(<Cart />);
    const { result } = renderHook(() => useAppContext());

    waitFor(() => {
      result.current.setCart(CART_MOCK);
    });

    expect(screen.getByText(LITERALS.TOTAL)).toBeInTheDocument();
    expect(screen.getByText(`300 ${LITERALS.CURRENCY}`)).toBeInTheDocument();
  });

  it('calls setCart with updated cart when item is removed', async () => {
    const { setCart, cart } = useAppContext();
    render(<Cart />);
    setCart(CART_MOCK);

    const removeButton = screen.getByTestId(`remove-item-1`);
    fireEvent.click(removeButton);

    expect(cart.length).toBe(2);
    expect(cart[0].name).toBe('Samsung');
  });

  it('displays an alert with the correct message when the "Pay" button is clicked', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Cart />);
    const { result } = renderHook(() => useAppContext());

    waitFor(() => {
      result.current.setCart(CART_MOCK);
    });

    const payButton = screen.getByText(LITERALS.PAY);
    fireEvent.click(payButton);

    expect(alertSpy).toHaveBeenCalledWith(LITERALS.PAY);
    alertSpy.mockRestore();
  });
});

describe('Cart Component 1 products', () => {
  beforeEach(() => {
    (window.matchMedia as unknown as Mock).mockImplementation((query) => ({
      matches: query === '(max-width: 768px)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    (useAppContext as Mock).mockReturnValue({
      cart: [CART_MOCK[0]],
      setCart: vi.fn(),
    });
  });

  it('calls setCart with updated cart when item is removed', async () => {
    const { setCart } = useAppContext();
    render(<Cart />);

    expect(
      screen.getByText((content) => content.startsWith(`${LITERALS.TITLE_CART}(1)`)),
    ).toBeInTheDocument();

    const removeButton = screen.getByText((content) => content.includes(LITERALS.REMOVE));
    fireEvent.click(removeButton);

    expect(setCart).toHaveBeenCalledTimes(1);
    expect(setCart).toHaveBeenCalledWith([]);
  });
});

describe('Cart Component 0 products', () => {
  beforeEach(() => {
    (window.matchMedia as unknown as Mock).mockImplementation((query) => ({
      matches: query === '(max-width: 768px)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    (useAppContext as Mock).mockReturnValue({
      cart: [],
      setCart: vi.fn(),
    });
  });

  it('renders correctly when the cart is empty', async () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));

    const { setCart } = useAppContext();
    render(<Cart />);
    setCart([]);

    expect(screen.getByText(`${LITERALS.TITLE_CART}(0)`)).toBeInTheDocument();
    expect(screen.getByText(LITERALS.BACK_TO_SHOPPING)).toBeInTheDocument();
    expect(screen.queryByText(LITERALS.REMOVE)).not.toBeInTheDocument();
    expect(result.current).toBe(true);
  });
});
