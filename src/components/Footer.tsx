import { Button, Title } from '@/components';
import { URL_FRIENDLY } from '@/constants';
import { LITERALS } from '@/data';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface StackProps {
  isMobile?: boolean;
}

interface ItemProps extends StackProps {
  data: { basePrice: number }[];
  totalItems: number;
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Stack = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isMobile'].includes(prop),
})<StackProps>`
  display: flex;
  width: ${({ isMobile }) => (isMobile ? '100%' : '')};
  gap: 16px;
`;

const TotalPrice = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isMobile'].includes(prop),
})<StackProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ isMobile }) => (isMobile ? '100%' : '131px')};
`;

const Cta = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 12px;
  width: 100%;
  justify-content: space-between;
`;

const Footer = ({ data, totalItems, isMobile = false }: ItemProps) => {
  const navigate = useNavigate();

  const Total = () => (
    <TotalPrice isMobile={isMobile}>
      <Title uppercase weight="semibold" variant="small">
        Total
      </Title>
      <Title uppercase weight="semibold" variant="small">
        {data?.reduce((acc, item) => acc + item.basePrice, 0)} {LITERALS.CURRENCY}
      </Title>
    </TotalPrice>
  );

  return (
    <StyledFooter>
      {totalItems > 0 && isMobile && <Total />}
      <Cta>
        <Stack isMobile={isMobile}>
          <Button
            fullWidth={isMobile}
            uppercase
            variant="bordered"
            size="large"
            onClick={() => navigate(URL_FRIENDLY.BASE)}
          >
            {LITERALS.BACK_TO_SHOPPING}
          </Button>
        </Stack>
        {totalItems > 0 && (
          <Stack isMobile={isMobile}>
            {!isMobile && <Total />}
            <Button
              fullWidth={isMobile}
              uppercase
              variant="solid"
              size="large"
              onClick={() => alert(LITERALS.PAY)}
            >
              {LITERALS.PAY}
            </Button>
          </Stack>
        )}
      </Cta>
    </StyledFooter>
  );
};

Footer.displayName = 'Footer';

export default Footer;
