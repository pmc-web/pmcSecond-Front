import { css } from '@emotion/react';

type HorizontalDividerProps = {
  lineWidth?: string;
};

const HorizontalDivider = ({ lineWidth = '0.625rem' }: HorizontalDividerProps) => (
  <div
    css={(theme) => css`
      width: 100%;
      border-bottom: ${lineWidth} solid ${theme.color.grey005};
    `}
  />
);

export default HorizontalDivider;
