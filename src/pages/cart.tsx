import { Button, Footer, Image, Title } from '@/components';

import { LITERALS } from '@/data';
import { useMediaQuery } from '@/hooks';
import { useAppContext } from '@/store/context';
import { styled } from 'styled-components';

const SectionList = styled.div`
  height: 100%;
`;

const List = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Cart: React.FC = () => {
  const { cart, setCart } = useAppContext();

  const isMobile = useMediaQuery('(max-width: 640px)');

  const handleItemRemove = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <Title uppercase variant="medium" mt="20px" mb="20px">
        {LITERALS.TITLE_CART}({cart?.length})
      </Title>
      <SectionList>
        {cart?.map((item, index) => (
          <List key={`${item.id}-${index}`}>
            <div>
              <Image src={item.imageUrl || ''} width="240px" alt={item.name} />
            </div>
            <Text>
              <div>
                <Title uppercase variant="small" as="h1">
                  {item.name}
                </Title>
                <Title uppercase variant="small" as="h2" mb="20px">
                  {item.storageCapacity} | {item.colorName}
                </Title>
                <Title uppercase variant="small" mb="20px">
                  {item.basePrice} {LITERALS.CURRENCY}
                </Title>
              </div>
              <div>
                <Button
                  testId={`remove-item-${index}`}
                  variant="danger"
                  size="noPadding"
                  onClick={() => handleItemRemove(index)}
                >
                  {LITERALS.REMOVE}
                </Button>
              </div>
            </Text>
          </List>
        ))}
      </SectionList>
      <Footer data={cart} totalItems={cart?.length} isMobile={isMobile} />
    </>
  );
};
