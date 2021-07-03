import { css, Theme } from '@emotion/react';

type WishCountProps = {
  count: number;
};

const WishCount = ({ count }: WishCountProps) => (
  <div css={containerCss}>
    <p>{`찜함 상품 ${count}개`}</p>
  </div>
);

const containerCss = (theme: Theme) => css`
  flex: 1;
  flex-direction: row;

  > p {
    padding: 0.7em 1.2em;
    ${theme.fontSize.body2};
    border-bottom: 1px solid ${theme.color.grey030};
  }
`;

export default WishCount;
