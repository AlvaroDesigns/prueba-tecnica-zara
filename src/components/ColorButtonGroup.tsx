import { Title } from '@/components';
import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ColorSquareProps {
  value: string;
  checked: boolean;
  onClick: (value: string) => void;
}

interface ColorMarginProps {
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
}

interface ColorButtonGroupProps extends ColorMarginProps {
  label?: string;
  legent?: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode[];
}

const StyledColorButton = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !['mt', 'ml', 'mb', 'mr'].includes(prop),
})<ColorMarginProps>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ mt }) => mt ?? ''};
  margin-left: ${({ ml }) => ml ?? ''};
  margin-bottom: ${({ mb }) => mb ?? ''};
  margin-right: ${({ mr }) => mr ?? ''};
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const ColorButtonGroup = ({
  label,
  legent,
  value,
  mt,
  ml,
  mb,
  mr,
  onChange,
  children,
}: ColorButtonGroupProps) => {
  return (
    <StyledColorButton mt={mt} ml={ml} mb={mb} mr={mr}>
      {label && (
        <Title uppercase variant="small" mb="20px">
          {label}
        </Title>
      )}
      <StyledWrapper>
        {children
          ?.filter((child): child is React.ReactElement<ColorSquareProps> =>
            React.isValidElement(child),
          )
          .map((child) =>
            React.cloneElement(child, {
              key: child.props.value,
              checked: value === child.props.value,
              onClick: onChange,
            }),
          )}
      </StyledWrapper>
      {legent && (
        <Title variant="small" mt="8px">
          {legent}
        </Title>
      )}
    </StyledColorButton>
  );
};

ColorButtonGroup.displayName = 'ColorButtonGroup';

export default ColorButtonGroup;
