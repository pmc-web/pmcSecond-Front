import { css, Theme } from '@emotion/react';
import Text from 'src/components/common/Text';
import { useToggle } from 'src/hooks';
import Notice from '../../notice';

const NoticeBox = () => {
  const notice = '공지사항 영역';
  const [showNoticeModal, toggleNoticeModal] = useToggle();
  return (
    <>
      <Notice handleClose={toggleNoticeModal} isOpen={showNoticeModal} />
      <div css={wrapperCss} onClick={toggleNoticeModal} role="button" tabIndex={0}>
        <Text size="body2" color="white">
          {notice}
        </Text>
      </div>
    </>
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
  cursor: pointer;
`;
