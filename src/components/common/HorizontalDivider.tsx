import { css } from '@emotion/react';

type HorizontalProps = {
  style?: ReturnType<typeof css>;
};

const HorizontalDivider = ({ style: HorizontalCss }: HorizontalProps) => (
  <div
    css={(theme) => [
      css`
        width: 100%;
        border-bottom: 0.625rem solid ${theme.color.grey005};
      `,
      HorizontalCss,
    ]}
  />
);

export default HorizontalDivider;
