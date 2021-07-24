import { css } from '@emotion/react';

type HorizontalProps = {
  style?: ReturnType<typeof css>;
  lineWidth?: string;
};

const HorizontalDivider = ({ style: HorizontalCss, lineWidth = '0.625rem' }: HorizontalProps) => (
  <div
    css={(theme) => [
      css`
        width: 100%;
        border-bottom: ${lineWidth} solid ${theme.color.grey005};
      `,
      HorizontalCss,
    ]}
  />
);

export default HorizontalDivider;
