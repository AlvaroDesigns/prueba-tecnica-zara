import { Layout } from '@/components';
import { URL_FRIENDLY } from '@/constants';
import { Cart, Details, Product } from '@/pages';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    index: true,
    element: (
      <Layout fullWidth>
        <Product />
      </Layout>
    ),
    path: URL_FRIENDLY.BASE,
  },
  {
    path: `${URL_FRIENDLY.DETAILS}/:id/:name`,
    element: (
      <Layout>
        <Details />
      </Layout>
    ),
  },
  {
    path: `${URL_FRIENDLY.CART}`,
    element: (
      <Layout fullWidth>
        <Cart />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
