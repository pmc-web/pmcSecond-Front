import { keyframes } from '@emotion/react';

export const inFromLeftToRight = keyframes`
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0);
  }
`;
export const inFromRightToLeft = keyframes`
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0);
  }
`;

export const outRightToLeft = keyframes`
from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-100%);
  }
`;
