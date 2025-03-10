import { Image } from '@/components';
import { URL_FRIENDLY } from '@/constants';
import { useAppContext } from '@/store/context';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 14px 16px;

  @media (min-width: 1280px) {
    max-width: 1720px;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

const Logo = styled.div`
  font-weight: var(--font-weight-bold);
  cursor: pointer;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    margin-right: 6px;
  }
`;

const Header = () => {
  const { cart } = useAppContext();

  const navigate = useNavigate();

  const count = cart?.length;

  return (
    <StyledHeader>
      <Container>
        <Logo onClick={() => navigate(`${URL_FRIENDLY.BASE}`)}>
          <Image src="/logo.svg" alt="logo" />
        </Logo>
        <Cart onClick={() => navigate(`/${URL_FRIENDLY.CART}`)}>
          <Image
            width="18px"
            src={count > 0 ? '/icons/bag-filled.svg' : '/icons/bag.svg'}
            alt="cart"
          />
          <span>{count}</span>
        </Cart>
      </Container>
    </StyledHeader>
  );
};

Header.displayName = 'Header';

export default Header;
