import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface BoxProps {
  size: CSSProperties['width'] | CSSProperties['height'];
  color: CSSProperties['color'];
  onBoxClick: () => void;
}

const Box = ({ size, color, onBoxClick }: BoxProps) => {
  return <BoxButton size={size} color={color} onClick={onBoxClick} />;
};

export default Box;

const BoxButton = styled.button<Pick<BoxProps, 'size' | 'color'>>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 0.2rem;
  background-color: ${({ color }) => color};
  border-radius: 0.4rem;

  -webkit-mask-image: linear-gradient(
    45deg,
    #000 25%,
    rgba(0, 0, 0, 0.2) 50%,
    #000 75%
  );
  mask-image: linear-gradient(
    45deg,
    #000 25%,
    rgba(0, 0, 0, 0.2) 50%,
    #000 75%
  );
  -webkit-mask-size: 800%;
  mask-size: 800%;
  -webkit-mask-position: 0;
  mask-position: 0;

  &:hover {
    transition: mask-position 2s ease, -webkit-mask-position 2s ease;
    -webkit-mask-position: 120%;
    mask-position: 120%;
    opacity: 1;
  }
`;
