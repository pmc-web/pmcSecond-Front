import { css, Theme } from '@emotion/react';
import OrderInfoItem from './OrderInfoItem';

const OrderInfoBox = () => (
  <div css={(theme) => wrapperCss(theme)}>
    <OrderInfoItem desc="입금대기" count={0} />
    <OrderInfoItem desc="결제완료" count={0} />

    <OrderInfoItem desc="배송준비" count={0} />
    <OrderInfoItem desc="배송중" count={0} />

    <OrderInfoItem desc="취소요청" count={0} />
    <OrderInfoItem desc="반품요청" count={0} />
  </div>
);

export default OrderInfoBox;

const wrapperCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 50% 50%;
  border-left: 1px solid ${theme.color.grey020};
  border-top: 1px solid ${theme.color.grey020};
  & > div {
    border-right: 1px solid ${theme.color.grey020};
    border-bottom: 1px solid ${theme.color.grey020};
  }
`;
