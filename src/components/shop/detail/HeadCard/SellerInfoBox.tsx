import { css, Theme } from '@emotion/react';
import Icon from 'src/components/common/Icon';
import Text from 'src/components/common/Text';

const SellerInfoBox = () => {
  const sellerInfo = {
    sellerName: '테스트',
    sellerTags: ['test', 'sss', 'eee'],
    likes: 20,
  };

  return (
    <div css={wrapperCss}>
      <span>
        <Text.Title level={2} color="purple020" size="subtitle1">
          {sellerInfo.sellerName}
        </Text.Title>
        <Text color="grey050" size="body2">
          {sellerInfo.sellerTags.join(' · ')}
        </Text>
      </span>
      <span>
        <button css={(theme) => buttonCss(theme)}>
          <Icon name="wishOff" size="1rem" color="grey040" />
          <Text color="grey050" size="subtitle3">
            {sellerInfo.likes}
          </Text>
        </button>
      </span>
    </div>
  );
};

export default SellerInfoBox;

const wrapperCss = css`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const buttonCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  border-radius: 0.4rem;
  background-color: ${theme.color.white};
  > svg {
    margin-right: 0.3rem;
  }
`;
