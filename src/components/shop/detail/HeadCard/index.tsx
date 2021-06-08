import { css, Theme } from '@emotion/react';
import TopBar from 'src/components/common/layout/TopBar';
import NoticeBox from './NoticeBox';
import SellerInfoBox from './SellerInfoBox';
import SellingInfoBox from './SellingInfoBox';

type HeadCardProps = { title?: string };

const HeadCard = ({ title = '' }: HeadCardProps) => (
  <div css={wrapperCss}>
    <TopBar title={title} leftIcon="leftArrow" backgroundColor="grey080" />
    <SellerInfoBox />
    {!title && (
      <>
        <SellingInfoBox />
        <NoticeBox />
      </>
    )}
  </div>
);

export default HeadCard;

const wrapperCss = (theme: Theme) => css`
  background-color: ${theme.color.grey080};
  padding-bottom: 0.5rem;
`;
