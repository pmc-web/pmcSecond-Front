import { css } from '@emotion/react';

const HorizontalDivider = () => (
  <div
    css={(theme) => css`
      width: 100%;
      border-bottom: 0.625rem solid ${theme.color.grey005};
    `}
  />
);

export default HorizontalDivider;
