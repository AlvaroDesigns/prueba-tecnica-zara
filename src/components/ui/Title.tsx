import styled from 'styled-components';

const fontSizes: { [key: string]: string } = {
  xs: '10px',
  small: '12px',
  medium: '16px',
  large: '20px',
};

const fontWeights: { [key in FontWeight]: string } = {
  light: 'var(--font-weight-light)',
  semibold: 'var(--font-weight-semi-bold)',
  bold: 'var(--font-weight-bold)',
};

type Variant = 'xs' | 'small' | 'medium' | 'large';
type AsTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
type FontWeight = 'light' | 'semibold' | 'bold';

interface StyledTitleProps {
  variant: Variant;
  color?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
  uppercase?: boolean;
  weight?: FontWeight;
  as?: AsTag;
  children: React.ReactNode;
}

const StyledTitle = styled.div.withConfig({
  shouldForwardProp: (prop) => !['uppercase'].includes(prop),
})<StyledTitleProps>`
  font-size: ${({ variant }) => fontSizes[variant] ?? 'var(--font-size-xs)'};
  color: ${({ color }) => color ?? 'var(--primary-color)'};
  font-weight: ${({ weight }) =>
    weight ? fontWeights[weight] : 'var(--font-weight-light)'};
  margin-top: ${({ mt }) => mt ?? ''};
  margin-left: ${({ ml }) => ml ?? ''};
  margin-bottom: ${({ mb }) => mb ?? ''};
  margin-right: ${({ mr }) => mr ?? ''};
  padding: 0;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'initial')};
`;

const Title = ({
  variant,
  color,
  mt,
  ml,
  mb,
  mr,
  uppercase = false,
  weight = 'light',
  as = 'p',
  children,
}: StyledTitleProps) => {
  return (
    <StyledTitle
      as={as}
      variant={variant}
      color={color}
      weight={weight}
      uppercase={uppercase}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
    >
      {children}
    </StyledTitle>
  );
};

Title.displayName = 'Title';

export default Title;
