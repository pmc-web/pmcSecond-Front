import { css } from '@emotion/react';
import TopBar from 'src/components/common/layout/TopBar';
import OrderItemList from 'src/components/shopping/order/OrderItemList';
import moment from 'moment';

const OrderList = () => (
  <>
    <TopBar title="개인정보 수정" leftIcon="leftArrow" />
    <p
      css={(theme) => css`
        ${theme.fontSize.body1};
        color: ${theme.color.black};
        padding: 10px 1.2em;
        border-bottom: 1px solid ${theme.color.grey030};
      `}
    >
      {moment().format('YYYY.MM.DD')}
    </p>
    <OrderItemList />
  </>
);

export default OrderList;
