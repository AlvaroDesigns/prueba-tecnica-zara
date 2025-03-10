import React from 'react';
import styled from 'styled-components';

type ObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

interface ImageProps {
  src: string;
  objectFit?: ObjectFit;
  fallbackSrc?: string;
  testId?: string;
  alt?: string;
  width?: string;
  height?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
}

const StyledImage = styled.img.withConfig({
  shouldForwardProp: (prop: string) =>
    !['width', 'height', 'mt', 'ml', 'mb', 'mr', 'objectFit'].includes(prop),
})<ImageProps>`
  width: ${({ width }) => width ?? ''};
  height: ${({ height }) => height ?? ''};
  object-fit: ${({ objectFit }) => objectFit ?? 'contain'};
  margin-top: ${({ mt }) => mt ?? ''};
  margin-left: ${({ ml }) => ml ?? ''};
  margin-right: ${({ mr }) => mr ?? ''};
  margin-bottom: ${({ mb }) => mb ?? ''};
`;

const Image: React.FC<ImageProps> = ({
  src,
  fallbackSrc = '/unnamed.jpg',
  objectFit,
  testId,
  alt = 'Imagen',
  width,
  height,
  mt,
  ml,
  mr,
  mb,
}) => {
  const imageSrc = src || fallbackSrc;
  return (
    <StyledImage
      src={imageSrc}
      objectFit={objectFit}
      data-testid={testId}
      width={width}
      height={height}
      mt={mt}
      ml={ml}
      mr={mr}
      mb={mb}
      alt={alt}
    />
  );
};

Image.displayName = 'Image';

export default Image;
