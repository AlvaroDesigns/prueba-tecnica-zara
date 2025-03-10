export const PRODUCTS_MOCK = [
  {
    id: 'SMG-S24U',
    brand: 'Samsung',
    name: 'Galaxy S24 Ultra',
    basePrice: 1329,
    imageUrl:
      'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png',
  },
  {
    id: 'APL-I15PM',
    brand: 'Apple',
    name: 'iPhone 15 Pro Max',
    basePrice: 1319,
    imageUrl:
      'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png',
  },
];

export const DETAILS_MOCK = {
  id: 'SMG-S24U',
  brand: 'Samsung',
  name: 'Galaxy S24 Ultra',
  description:
    'El Samsung Galaxy S24 Ultra es un smartphone de gama alta con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas, procesador Qualcomm Snapdragon 8 Gen 3 for Galaxy, y un avanzado sistema de cámara con inteligencia artificial.',
  basePrice: 1329,
  rating: 4.6,
  specs: {
    screen: '6.8" Dynamic AMOLED 2X',
    resolution: '3120 x 1440 pixels',
    processor: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy Octa-Core',
    mainCamera:
      '200 MP (F1.7) Principal, OIS + 10 MP (F2.4) Zoom x3, OIS + 12 MP (F2.2) Ultra gran angular + 50 MP (F3.4) Zoom x5, OIS',
    selfieCamera: '12 MP',
    battery: '5000 mAh',
    os: 'Android 14',
    screenRefreshRate: '120 Hz',
  },
  colorOptions: [
    {
      name: 'Titanium Violet',
      hexCode: '#8E6F96',
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png',
    },
    {
      name: 'Titanium Black',
      hexCode: '#000000',
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-black.png',
    },
    {
      name: 'Titanium Gray',
      hexCode: '#808080',
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-gray.png',
    },
    {
      name: 'Titanium Yellow',
      hexCode: '#FFFF00',
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-yellow.png',
    },
  ],
  storageOptions: [
    {
      capacity: '256 GB',
      price: 1229,
    },
    {
      capacity: '512 GB',
      price: 1329,
    },
    {
      capacity: '1 TB',
      price: 1529,
    },
  ],
  similarProducts: [
    {
      id: 'OPP-R11F',
      brand: 'OPPO',
      name: 'Reno 11 F',
      basePrice: 269,
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R11F-verde.png',
    },
    {
      id: 'OPP-A18',
      brand: 'OPPO',
      name: 'A18',
      basePrice: 99,
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A18-azul-brillante.png',
    },
    {
      id: 'XIA-RN13',
      brand: 'Xiaomi',
      name: 'Redmi Note 13',
      basePrice: 169,
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XIA-RN13-mint-green.png',
    },
    {
      id: 'SNY-XPERIA1V',
      brand: 'SONY',
      name: 'Xperia 1 V',
      basePrice: 959.42,
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SNY-XPERIA1V-negro.png',
    },
    {
      id: 'APL-IP13-128',
      brand: 'Apple',
      name: 'iPhone 13',
      basePrice: 619,
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-IP13-128-medianoche.png',
    },
    {
      id: 'SMG-A25',
      brand: 'Samsung',
      name: 'Galaxy A25 5G',
      basePrice: 239,
      imageUrl:
        'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-negro.png',
    },
  ],
};

export const CART_MOCK = [
  {
    id: 'SMG-S24U',
    name: 'Samsung',
    brand: 'Galaxy S24 Ultra',
    basePrice: 100,
    storageCapacity: '128GB',
    colorName: 'Black',
    imageUrl:
      'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png',
  },
  {
    id: 'APL-I15PM',
    name: 'Apple',
    brand: 'iPhone 15 Pro Max',
    basePrice: 200,
    storageCapacity: '256GB',
    colorName: 'White',
    imageUrl:
      'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png',
  },
];
