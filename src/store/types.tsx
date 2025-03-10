export interface Product {
  name: string;
  brand: string;
  imageUrl: string;
  basePrice: number;
  colorName: string;
  storageCapacity: string;
  id: string;
}

interface ColorOption {
  name: string;
  hexCode: string;
  imageUrl: string;
}

interface StorageOption {
  capacity: string;
  price: number;
}

interface SimilarProduct {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}

interface Specs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

interface ColorData {
  imageUrl: string;
  colorName: string;
  storageCapacity: string;
}

export interface ProductData extends ColorData {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: Specs;
  colorOptions: ColorOption[];
  storageOptions: StorageOption[];
  similarProducts: SimilarProduct[];
}

interface CartItem {
  id?: string;
  name?: string;
  brand?: string;
  imageUrl?: string;
  basePrice?: number;
  colorName: string;
  storageCapacity: string;
}

export interface AppContextProps {
  id: string | null;
  product: ProductData;
  cart: CartItem[];
  setId: React.Dispatch<React.SetStateAction<string | null>>;
  setProduct: React.Dispatch<React.SetStateAction<ProductData>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}
