import { css, Theme } from '@emotion/react';
import SellingInfoItem from './SellingInfoItem';

const SellingInfo = () => (
  <div css={(theme) => wrapperCss(theme)}>
    <SellingInfoItem desc="판매중인 상품" count={0} />
    <SellingInfoItem desc="판매중지 상품" count={0} />
    <SellingInfoItem desc="품절된 상품" count={0} />
  </div>
);

export default SellingInfo;

const wrapperCss = (theme: Theme) => css`
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    border-right: 1px solid ${theme.color.grey020};
    :last-of-type {
      border-right: none;
    }
  }
`;
