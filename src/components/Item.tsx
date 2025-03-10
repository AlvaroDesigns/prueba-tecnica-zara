import { Title } from '@/components';
import styled from 'styled-components';

interface ItemProps {
  name: string;
  description?: string;
  showBottomBorder?: boolean;
}

const StyledItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['showBottomBorder'].includes(prop),
})<{ showBottomBorder?: boolean }>`
  display: flex;
  border-top: 0.5px solid var(--text-color);
  border-bottom: ${({ showBottomBorder }) =>
    showBottomBorder ? '0.5px solid var(--text-color)' : 'none'};
  padding: 10px 0;
`;

const Name = styled.div`
  min-width: 370px;
  width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    min-width: 150px;
    width: 150px;
  }
`;

const Item = ({ name, description, showBottomBorder = true }: ItemProps) => {
  return (
    <StyledItem showBottomBorder={showBottomBorder}>
      <Name>
        <Title variant="small" uppercase>
          {name?.toUpperCase()}
        </Title>
      </Name>
      <Title variant="small">{description}</Title>
    </StyledItem>
  );
};

Item.displayName = 'Item';

export default Item;
