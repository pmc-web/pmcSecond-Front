import { css } from '@emotion/react';
import Text from 'src/components/common/Text';

type SellingInfoItemProps = {
  desc: string;
  count: number;
};

const SellingInfoItem = ({ desc, count }: SellingInfoItemProps) => (
  <span css={wrapperCss}>
    <Text.Title level={3} color="purple050" size="subtitle2">
      {count}개
    </Text.Title>
    <Text color="grey050" size="caption1">
      {desc}
    </Text>
  </span>
);

export default SellingInfoItem;

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
