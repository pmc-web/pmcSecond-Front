import { css } from '@emotion/react';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  style?: ReturnType<typeof css>;
};

const Container = ({ children, style }: ContainerProps) => (
  <div
    css={[
      css`
        margin: 0 1.25rem;
      `,
      style,
    ]}
  >
    {children}
  </div>
);

export default Container;
