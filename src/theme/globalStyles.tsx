import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color:  #000000;
    --secondary-color: #6c757d;
    --danger-color: #DF0000;
    --color-white:  #ffffff;
    --color-gray: #cccccc;
    --color-light-gray: #F3F2F2;
    --background-color: var(--color-white);
    --text-color: var(--primary-color);
    --font-size-xxs: 10px;
    --font-size-xs: 12px;
    --font-size-s: 14px;
    --font-size-m: 16px;
    --font-size-l: 20px;
    --font-size-xl: 22px;
    --font-size-xxl: 24px;
    --font-family: Helvetica, Arial, sans-serif;
    --font-weight-light: 300;
    --font-weight-semi-bold: 400;
    --font-weight-bold: bold;
    --media-sm: 576px;
    --media-md: 768px;
    --media-lg: 992px;
    --media-xl: 1200px;
  }

  #root {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);
    transition: all 0.3s ease-in-out;
    margin: 0;
    padding: 0;
  }
`;
