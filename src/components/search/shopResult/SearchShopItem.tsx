import { css } from '@emotion/react';
import { useState } from 'react';
import theme from 'src/assets/theme';
import Icon from 'src/components/common/Icon';
import Text from 'src/components/common/Text';
import priceFormatter from 'src/utils/priceFormatter';

type SearchProductItemProps = {
  img: string;
  shopName: string;
  price: number;
};
const SearchProductItem = ({ img, shopName, price }: SearchProductItemProps) => {
  const [wish, setWish] = useState(false);
  return (
    <li css={shopListCss}>
      <div css={shopImgCss}>
        <img
          src={img}
          alt={shopName}
          css={css`
            border-radius: 6px;
            height: 18vw;
            width: 18vw;
          `}
        />
        <div css={shopNameCss}>
          <Text.Title level={3} size="subtitle2">
            무신사 스탠다드
          </Text.Title>
          <Text.Title level={5} color="grey050" size="caption1">
            태그 태그 태그
          </Text.Title>
        </div>
      </div>
      <div css={wishCss} role="button" tabIndex={0} onClick={() => setWish((props) => !props)}>
        <Icon size="21" color={wish ? 'purple050' : 'purple010'} name="wishOn" />
        <span>{priceFormatter(5000)}</span>
      </div>
    </li>
  );
};

export default SearchProductItem;

const shopListCss = css`
  width: 100%;
  margin-bottom: 1.9rem;
  ${theme.commonStyle.flexCenter};
  justify-content: space-between;
`;

const shopImgCss = css`
  ${theme.commonStyle.flexCenter};
`;

const shopNameCss = css`
  margin-left: 0.85rem;
`;

const wishCss = css`
  cursor: pointer;
  ${theme.commonStyle.flexCenter};
  flex-direction: column;
  user-select: none;
  span {
    ${theme.color.grey050};
    ${theme.fontSize.caption1};
  }
`;
