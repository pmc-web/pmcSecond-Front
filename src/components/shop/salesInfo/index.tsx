import { css, Theme } from '@emotion/react';
import Text from 'src/components/common/Text';
import SalesInfoItem from './SalesInfoItem';

const SalesInfo = () => (
  <div css={wrapperCss}>
    <div css={(theme) => titleCss(theme)}>
      <Text.Title level={3} size="subtitle1">
        오늘 매출 현황
      </Text.Title>
    </div>
    <div>
      <SalesInfoItem desc="주문" count={0} amount={0} />
      <SalesInfoItem desc="주문" count={0} amount={0} />
      <SalesInfoItem desc="주문" count={0} amount={0} />
    </div>
  </div>
);

export default SalesInfo;

const wrapperCss = css`
  margin: 1.25rem 0;
`;

const titleCss = (theme: Theme) => css`
  padding-bottom: 0.66rem;
  border-bottom: 1px solid ${theme.color.grey020};
`;
