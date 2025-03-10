import styled from 'styled-components';

type Variant = 'solid' | 'bordered' | 'light' | 'danger';
type Type = 'button' | 'submit' | 'reset';
type Size = 'small' | 'large' | 'noPadding';

const BUTTON_SOLID = 'solid';
const BUTTON_DANGER = 'danger';
const BUTTON_BORDERED = 'bordered';
const BUTTON_LIGHT = 'light';

const BUTTON_SIZE_SMALL = 'small';

const BUTTON_STYLES = {
  PADDING: {
    small: '5px 10px',
    large: '10px 20px',
    noPadding: 'unset',
  },
  SIZE: {
    small: '12px',
    large: '14px',
    noPadding: '12px',
  },
  HEIGHT: {
    small: '34px',
    large: '48px',
    noPadding: '34px',
  },
};

interface ButtonProps {
  variant: Variant;
  testId?: string;
  size: Size;
  type?: Type;
  children: React.ReactNode;
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
  fullWidth?: boolean;
  uppercase?: boolean;
  disabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop: string) =>
    !['variant', 'size', 'mt', 'ml', 'mb', 'mr', 'uppercase', 'fullWidth'].includes(prop),
})<ButtonProps>`
  padding: ${({ size }) => BUTTON_STYLES.PADDING[size] ?? BUTTON_STYLES.PADDING.small};
  font-size: ${({ size }) => BUTTON_STYLES.SIZE[size] ?? BUTTON_STYLES.SIZE.small};
  margin-top: ${({ mt }) => mt ?? ''};
  margin-left: ${({ ml }) => ml ?? ''};
  margin-bottom: ${({ mb }) => mb ?? ''};
  margin-right: ${({ mr }) => mr ?? ''};
  font-weight: var(--font-weight-light);
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'normal')};
  cursor: pointer;
  height: ${({ size }) => BUTTON_STYLES.HEIGHT[size] ?? BUTTON_STYLES.HEIGHT.small};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  min-width: 116px;
  border-radius: unset;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;

  ${({ variant }) =>
    variant === BUTTON_BORDERED &&
    `
    background-color: var(--color-white);
    border: 1px solid var(--color-gray);
    color: var(--primary-color);
    &:hover {
      background-color: var(--color-white);
      color: var(--primary-color);
    }
  `}

  ${({ variant }) =>
    variant === BUTTON_LIGHT &&
    `
    background-color: transparent;
    color: var(--primary-color);
    min-width: auto;
    &:hover {
      background-color: #transparent;
    }
  `}


    ${({ variant }) =>
    variant === BUTTON_SOLID &&
    `
    background-color: var(--primary-color);
    color: var(--color-white);
    &:hover {
      background-color: var(--primary-color);
    }
  `}

      ${({ variant }) =>
    variant === BUTTON_DANGER &&
    `
    background-color: transparent;
    color: var(--danger-color);
    min-width: auto;
    &:hover {
      background-color: transparent;
    }
  `}


    ${({ disabled }) =>
    disabled &&
    `
    background-color: var(--color-light-gray);
    color: #C2BFBC;
    cursor: not-allowed;
    &:hover {
      background-color: var(--color-light-gray);
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({
  variant = BUTTON_SOLID,
  size = BUTTON_SIZE_SMALL,
  mt,
  ml,
  mb,
  mr,
  type = 'button',
  testId,
  uppercase = false,
  fullWidth = false,
  startContent,
  endContent,
  children,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      data-testid={testId}
      variant={variant}
      size={size}
      type={type}
      uppercase={uppercase}
      fullWidth={fullWidth}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
      onClick={onClick}
      disabled={disabled}
    >
      {startContent}
      {children}
      {endContent}
    </StyledButton>
  );
};

Button.displayName = 'Button';

export default Button;
