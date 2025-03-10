import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { AppContextProps } from './types';

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const defaultValues = {
    id: null,
    product: {
      id: '',
      brand: '',
      name: '',
      description: '',
      basePrice: 0,
      rating: 0,
      specs: {
        screen: '',
        resolution: '',
        processor: '',
        mainCamera: '',
        selfieCamera: '',
        battery: '',
        os: '',
        screenRefreshRate: '',
      },
      colorOptions: [],
      storageOptions: [],
      similarProducts: [],
      imageUrl: '',
      colorName: '',
      storageCapacity: '',
    },
    cart: [],
  };

  const [id, setId] = useState<string | null>(defaultValues.id);
  const [product, setProduct] = useState<AppContextProps['product']>(
    defaultValues.product,
  );

  const [cart, setCart] = useState<AppContextProps['cart']>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : defaultValues.cart;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <AppContext.Provider value={{ id, product, cart, setId, setProduct, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
