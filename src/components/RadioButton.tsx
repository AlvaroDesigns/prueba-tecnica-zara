import { ReactNode } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  selected: boolean;
}

interface RadioButtonProps extends StyledButtonProps {
  value: string;
  testId?: string;
  onClick: (value: string) => void;
  children: ReactNode;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  border-radius: unset;
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-light);
  cursor: pointer;
  height: 48px;
  min-width: 86px;
  transition: all 0.3s ease;
  background-color: transparent;
  border: ${({ selected }) =>
    selected ? '1px solid var(--text-color)' : '1px solid var(--color-gray)'};
  color: var(--text-color);
`;

const RadioButton = ({
  value,
  testId,
  selected,
  onClick,
  children,
}: RadioButtonProps) => {
  return (
    <StyledButton
      data-testid={testId}
      data-selected={selected}
      selected={selected}
      onClick={() => onClick(value)}
    >
      {children}
    </StyledButton>
  );
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
