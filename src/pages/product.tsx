import { Input, Loader, ProductCardList } from '@/components';

import { ENDPOINT, PRODUCTS_LIMIT, URL_FRIENDLY } from '@/constants';
import { LITERALS } from '@/data';
import { useFetch } from '@/hooks';
import { useAppContext } from '@/store/context';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SectionSearcher = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 60px;
`;

const SectionCardList = styled.section``;

const Label = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 12px;
  line-height: 14.51px;
`;

export const Product: React.FC = () => {
  const { setId } = useAppContext();

  const [products, setProducts] = useState([]);
  const [value, setValue] = useState('');

  const navigate = useNavigate();
  const { data, loading, fetch } = useFetch();

  const URL = `${ENDPOINT.PRODUCTS}?limit=${PRODUCTS_LIMIT}`;

  useEffect(() => {
    fetch(URL);
  }, []);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const handleSearch = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setValue(value);

    fetch(`${URL}&search=${value}`);
  };

  const handleProductClick = (id: string, brand: string, name: string) => {
    setId(id);

    const url = `${URL_FRIENDLY.DETAILS}/${brand.toLocaleLowerCase()}/${name
      .replace(/\s+/g, '_')
      .toLocaleLowerCase()}`;

    return navigate(url);
  };

  return (
    <>
      <SectionSearcher>
        <Input
          testId="searcher"
          placeholder={LITERALS.SEARCHER}
          onChange={handleSearch}
          value={value}
        />
        <Label>
          {products?.length} {LITERALS.RESULTS}
        </Label>
      </SectionSearcher>
      <SectionCardList>
        {loading ? (
          <Loader />
        ) : (
          <ProductCardList
            variant="grid"
            phones={products}
            onClick={handleProductClick}
          />
        )}
      </SectionCardList>
    </>
  );
};
