import { css } from '@emotion/react';
import Text from 'src/components/common/Text';

type SalesInfoItemProps = {
  desc: string;
  count: number;
  amount: number;
};

const SalesInfoItem = ({ desc, count, amount }: SalesInfoItemProps) => (
  <div css={wrapperCss}>
    <Text color="grey050" size="subtitle3">
      {desc}
    </Text>
    <Text color="grey040" size="body2">
      {count}건
    </Text>
    <Text color="grey040" size="body2">
      {amount}원
    </Text>
  </div>
);

export default SalesInfoItem;

const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  margin: 0.375rem 0;
`;
