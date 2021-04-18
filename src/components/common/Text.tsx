import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { ColorType, FontSizeType } from 'src/interfaces/emotion';

type TextProps = {
  children: ReactNode;
  size?: keyof FontSizeType;
  color?: keyof ColorType;
};

const Text = ({ children, size, color }: TextProps) => (
  <p
    css={(theme) =>
      css`
        ${size && theme.fontSize[size]};
        color: ${theme.color[color || 'black']};
      `
    }
  >
    {children}
  </p>
);

type TitleProps = TextProps & {
  level: number;
};

const Title = ({ children, size, level, color }: TitleProps) => {
  switch (level) {
    case 1:
      return (
        <h1
          css={(theme) =>
            css`
              ${size && theme.fontSize[size]};
              color: ${color};
            `
          }
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          css={(theme) =>
            css`
              ${size && theme.fontSize[size]};
              color: ${color};
            `
          }
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          css={(theme) =>
            css`
              ${size && theme.fontSize[size]};
              color: ${color};
            `
          }
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          css={(theme) =>
            css`
              ${size && theme.fontSize[size]};
              color: ${color};
            `
          }
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          css={(theme) =>
            css`
              ${size && theme.fontSize[size]};
              color: ${color};
            `
          }
        >
          {children}
        </h5>
      );
    case 6:
      return (
        <h6
          css={(theme) =>
            css`
              ${size && theme.fontSize[size]};
              color: ${color};
            `
          }
        >
          {children}
        </h6>
      );
    default:
      return (
        <p
          css={(theme) =>
            css`
              ${size && theme.fontSize[size]};
              color: ${color};
            `
          }
        >
          {children}
        </p>
      );
  }
};

Text.Title = Title;

export default Text;
