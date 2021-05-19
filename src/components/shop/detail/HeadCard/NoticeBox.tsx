import { css, Theme } from '@emotion/react';
import Text from 'src/components/common/Text';

const NoticeBox = () => {
  const notice = 'aaaaa';
  return (
    <div css={wrapperCss}>
      <Text size="body2" color="white">
        {notice}
      </Text>
    </div>
  );
};

export default NoticeBox;

const wrapperCss = (theme: Theme) => css`
  ${theme.commonStyle.flexCenter};
  justify-content: flex-start;
  margin: auto;
  width: 95%;
  height: 2rem;
  padding: 0.2rem 0.8rem;
  border-radius: 0.3rem;
  background-color: ${theme.color.grey050};
`;
