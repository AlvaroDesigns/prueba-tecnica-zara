import { Header } from '@/components';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main.withConfig({
  shouldForwardProp: (prop: string) =>
    !['variant', 'size', 'mt', 'ml', 'mb', 'mr', 'uppercase', 'fullWidth'].includes(prop),
})<LayoutProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 1024px) {
    max-width: ${({ fullWidth }) => (fullWidth ? '1720px' : '1280px')};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Layout = ({ children, fullWidth = false }: Readonly<LayoutProps>) => {
  return (
    <Wrapper>
      <Header />
      <Main fullWidth={fullWidth}>{children}</Main>
    </Wrapper>
  );
};

Layout.displayName = 'Layout';

export default Layout;
