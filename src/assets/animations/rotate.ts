import { keyframes } from '@emotion/react';

export const rotateClockwise = keyframes`
  to{
    transform: rotate(360deg);
  }
`;
export const rotateAntiClockwise = keyframes`
  to{
    transform: rotate(-360deg);
  }
`;
