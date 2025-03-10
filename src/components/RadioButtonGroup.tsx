import { Title } from '@/components';
import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface RadioButtonProps {
  value: string;
  checked?: boolean;
  onClick?: (value: string) => void;
}

interface RadioMarginProps {
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
}

interface RadioButtonGroupProps extends RadioMarginProps {
  label?: string;
  value: string;
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
  onChange: (value: string) => void;
  children: ReactNode[];
}

const StyledRadio = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !['mt', 'ml', 'mb', 'mr'].includes(prop),
})<RadioMarginProps>`
  margin-top: ${({ mt }) => mt ?? ''};
  margin-left: ${({ ml }) => ml ?? ''};
  margin-bottom: ${({ mb }) => mb ?? ''};
  margin-right: ${({ mr }) => mr ?? ''};
`;

const RadioButtonGroup = ({
  label,
  value,
  mt,
  ml,
  mb,
  mr,
  onChange,
  children,
}: RadioButtonGroupProps) => {
  return (
    <StyledRadio mt={mt} ml={ml} mb={mb} mr={mr}>
      {label && (
        <Title uppercase variant="small" mb="20px">
          {label}
        </Title>
      )}
      <div>
        {children
          ?.filter((child): child is React.ReactElement<RadioButtonProps> =>
            React.isValidElement(child),
          )
          .map((child) =>
            React.cloneElement(child, {
              key: child.props.value,
              checked: value === child.props.value,
              onClick: onChange,
            }),
          )}
      </div>
    </StyledRadio>
  );
};

RadioButtonGroup.displayName = 'RadioButtonGroup';

export default RadioButtonGroup;
