import { styled } from 'styled-components';

interface ColorButtonProps {
  size?: string;
  value: string;
  border?: string;
  innerBorderWidth?: string;
  innerBorderColor?: string;
  selected?: boolean;
  testId?: string;
  onClick: (value: string) => void;
}

const StyledColorButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['size', 'value', 'selected'].includes(prop),
})<ColorButtonProps>`
  width: ${({ size }) => size ?? 'var(--font-size-l)'};
  height: ${({ size }) => size ?? 'var(--font-size-l)'};
  background-color: ${({ value }) => value};
  box-shadow: inset 0 0 0 ${({ innerBorderWidth }) => innerBorderWidth ?? '1px'}
    ${({ innerBorderColor }) => innerBorderColor ?? 'var(--color-white)'};
  border: ${({ border }) => border ?? '1px solid var(--color-gray)'};
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ selected }) =>
    selected &&
    `
    border: 1px solid #000;
  `}
`;

const ColorButton = ({
  value,
  size,
  testId,
  border,
  selected,
  onClick,
}: ColorButtonProps) => {
  return (
    <StyledColorButton
      data-testid={testId}
      value={value}
      size={size}
      border={border}
      selected={selected}
      data-selected={selected}
      onClick={() => onClick(value)}
    />
  );
};

ColorButton.displayName = 'ColorButton';

export default ColorButton;
