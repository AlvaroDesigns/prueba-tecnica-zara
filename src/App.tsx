import { ThemeProvider } from 'styled-components';

import { router } from '@/routes';
import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './store/context';
import { GlobalStyles } from './theme/globalStyles';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={{}}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
