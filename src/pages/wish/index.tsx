import { css } from '@emotion/react';

import TopBar from 'src/components/common/layout/TopBar';
import Tab from 'src/components/common/tab/Tab';

const WishIndex = () => (
  <>
    <TopBar title="찜한내역" leftIcon="leftArrow" />
    <Tab>
      <Tab.TabItem label="상품">
        <div
          css={css`
            flex: 1;
            flex-direction: row;
          `}
        >
          <p
            css={(theme) => css`
              padding: 0.7em 1.2em;
              ${theme.fontSize.body2};
              border-bottom: 1px solid ${theme.color.grey030};
            `}
          >
            찜함 상품 0개
          </p>
          <div>asdasd</div>
        </div>
      </Tab.TabItem>
      <Tab.TabItem label="쇼핑몰">쇼핑몰</Tab.TabItem>
    </Tab>
  </>
);

export default WishIndex;
