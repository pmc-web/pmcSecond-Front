import { css } from '@emotion/react';
import Icon from 'src/components/common/Icon';
import Text from 'src/components/common/Text';

type OrderInfoItemProps = {
  desc: string;
  count: number;
};

const OrderInfoItem = ({ desc, count }: OrderInfoItemProps) => {
  const onClick = () => {
    // TODO: 네비게이션 처리
  };
  return (
    <div css={wrapperCss} onClick={onClick} role="button" tabIndex={0}>
      <span>
        <Text size="body2" color="grey050">
          {desc}
        </Text>
      </span>
      <span>
        <Text size="subtitle3">{count}개</Text>
        <Icon name="rightArrow" size="0.6rem" />
      </span>
    </div>
  );
};

export default OrderInfoItem;

const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  & > span {
    :last-of-type {
      display: flex;
      align-items: center;
      > svg {
        margin-left: 0.3rem;
        transform: translateY(-5%);
      }
    }
  }
`;
