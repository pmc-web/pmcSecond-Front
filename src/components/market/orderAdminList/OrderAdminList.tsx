import { css } from '@emotion/react';
import OrderAdminItem from './OrderAdminItem';

const data = [{ id: '1' }, { id: '2' }];

const OrderAdminList = () => (
  <ul
    css={css`
      padding: 0 1.2em;
    `}
  >
    {data.map((item) => (
      <OrderAdminItem key={item.id} id={item.id} />
    ))}
  </ul>
);

export default OrderAdminList;
