import {
  Button,
  ColorButton,
  ColorButtonGroup,
  Image,
  ProductCardList,
  RadioButton,
  RadioButtonGroup,
  Specifications,
  Title,
} from '@/components';

import { ENDPOINT, URL_FRIENDLY } from '@/constants';
import { LITERALS } from '@/data';
import { useFetch } from '@/hooks';
import { useAppContext } from '@/store/context';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface ColorOptionsProps {
  name?: string;
  hexCode?: string | undefined;
  imageUrl: string;
}

const SectionProduct = styled.section`
  display: grid;
  justify-items: end;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 40px;
    justify-items: center;
  }
`;

const SectionSpecifications = styled.section`
  margin-top: 154px;
  width: 100%;
`;

const SectionSimilar = styled.section`
  margin-top: 154px;
  padding-bottom: 40px;
  width: 100%;
`;

const Heading = styled.div`
  margin-bottom: 40px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Details = () => {
  const { id, setId, product, setProduct, setCart, cart } = useAppContext();

  const [selectedCapacity, setSelectedCapacity] = useState<string>('');
  const [selectedColor, setColor] = useState<ColorOptionsProps>();

  const navigate = useNavigate();

  const { data, fetch } = useFetch();

  useEffect(() => {
    fetch(`${ENDPOINT.PRODUCTS}/${id}`);
  }, [id]);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  useEffect(() => {
    if (product?.colorOptions?.length > 0) {
      const firstColor = product.colorOptions[0];
      setColor(firstColor);
    }
  }, [product]);

  const handleBack = useCallback(() => {
    setProduct(null);
    navigate(-1);
  }, []);

  const handleChangeColor = useCallback(
    (value: string) => {
      const colorSeted = product?.colorOptions.filter(
        (option) => option?.hexCode === value,
      )[0];

      setColor(colorSeted);
    },
    [product],
  );

  const handleSubmit = () => {
    setCart([
      ...cart,
      {
        id: product?.id,
        name: product?.name,
        brand: product?.brand,
        imageUrl: selectedColor?.imageUrl || '',
        basePrice: product?.basePrice,
        colorName: selectedColor?.name || '',
        storageCapacity: selectedCapacity,
      },
    ]);
    navigate(`/${URL_FRIENDLY.CART}`);
  };

  return (
    <>
      <section>
        <Button
          uppercase
          variant="light"
          size="noPadding"
          onClick={handleBack}
          startContent={<Image width="20px" src="/icons/arrow-left.svg" alt="Back" />}
        >
          {LITERALS.BACK}
        </Button>
      </section>
      <SectionProduct>
        <ImageWrapper>
          <Image width="100%" src={selectedColor?.imageUrl || ''} alt="Product" />
        </ImageWrapper>
        <BoxWrapper>
          <Box>
            <Heading>
              <Title uppercase variant="large" as="h1" mb="11px">
                {product?.name}
              </Title>
              <Title uppercase variant="medium" as="h2">
                {`From ${product?.basePrice}`} {LITERALS.CURRENCY}
              </Title>
            </Heading>
            <RadioButtonGroup
              label={LITERALS.STORAGE}
              value={selectedCapacity}
              onChange={setSelectedCapacity}
              mb="32px"
            >
              {product?.storageOptions?.map((option, index) => (
                <RadioButton
                  testId={`radio-${index}`}
                  key={option?.capacity}
                  value={option?.capacity}
                  selected={selectedCapacity === option?.capacity}
                  onClick={() => setSelectedCapacity(option?.capacity)}
                >
                  {option?.capacity}
                </RadioButton>
              ))}
            </RadioButtonGroup>
            <ColorButtonGroup
              label={LITERALS.COLOR}
              legent={selectedColor?.name || ''}
              value={selectedColor?.hexCode || ''}
              onChange={handleChangeColor}
              mb="40px"
            >
              {product?.colorOptions?.map((option, index) => (
                <ColorButton
                  testId={`color-${index}`}
                  key={option?.hexCode}
                  value={option?.hexCode}
                  selected={selectedColor?.hexCode === option?.hexCode}
                  onClick={() => setSelectedCapacity(option?.hexCode)}
                />
              ))}
            </ColorButtonGroup>
            <Button
              testId="cta"
              uppercase
              variant="solid"
              size="large"
              disabled={!selectedCapacity || !selectedColor}
              onClick={handleSubmit}
            >
              {LITERALS.CTA}
            </Button>
          </Box>
        </BoxWrapper>
      </SectionProduct>
      <SectionSpecifications>
        <Specifications label={LITERALS.TITLE_SPECIFICATIONS} data={product} />
      </SectionSpecifications>
      <SectionSimilar>
        <ProductCardList
          label={LITERALS.TITLE_SIMILAR_ITEMS}
          phones={product?.similarProducts}
          variant="list"
          onClick={(id) => setId(id)}
        />
      </SectionSimilar>
    </>
  );
};
