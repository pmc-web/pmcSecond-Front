import Modal from 'react-modal';

import TopBar from 'src/components/common/layout/TopBar';
import Text from 'src/components/common/Text';
import Container from 'src/components/common/layout/Container';
import { css } from '@emotion/react';

type NoticeProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const data = {
  title: '공지사항 타이틀',
  date: '2021.06.15',
  desc:
    '공지사항 타이틀공지사항 타이틀공지사항 타이틀공지사항 타이틀공지사항 타이틀공지사항 타이틀공지사항 타이틀공지사항 타이틀공지사항 타이틀',
};

const modalStyle = {
  content: { top: 0, left: 0, right: 0, bottom: 0, padding: 0 },
};

const Notice = ({ isOpen, handleClose }: NoticeProps) => (
  <Modal style={modalStyle} isOpen={isOpen}>
    <TopBar leftIcon="close" onLeftIconClick={handleClose} />
    <Container>
      <div css={titleCss}>
        <Text.Title level={1} size="subtitle1">
          {data.title}
        </Text.Title>
        <Text size="caption1" color="grey050">
          {data.date}
        </Text>
      </div>
      <div>
        <Text size="body2" color="grey070">
          {data.desc}
        </Text>
      </div>
    </Container>
  </Modal>
);

export default Notice;

const titleCss = css`
  margin-top: 1.2rem;
  margin-bottom: 2.5rem;
`;
