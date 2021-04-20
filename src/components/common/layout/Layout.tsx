import { useRouter } from 'next/dist/client/router';
import { ReactNode, useState } from 'react';
import Button from '../Button';
import SideBar from './SideBar';
import SideBarItem from './SideBarItem';
import TopBar from './TopBar';
import { LeftIconType, RightIconType } from './types';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  leftIcon?: LeftIconType;
  rightIcon?: Array<RightIconType>;
};

const Layout = ({ children, title, leftIcon, rightIcon }: LayoutProps) => {
  const router = useRouter();

  const [showSideBar, setShowSideBar] = useState(false);
  const handleCloseSideBar = () => {
    setShowSideBar(false);
  };
  const onClickHandler = (iconName: RightIconType | LeftIconType) => () => {
    switch (iconName) {
      case 'leftArrow':
        router.back();
        break;
      case 'menu':
        setShowSideBar(true);
        break;
      case 'wishOn':
        // TODO: 추후 추가
        break;
      case 'wishOff':
        // TODO: 추후 추가
        break;
      case 'search':
        // TODO: 추후 추가 (search 화면으로 push or modal)
        break;
      case 'alarm':
        // TODO: 추후 추가
        break;
      default:
        break;
    }
  };
  return (
    <>
      <TopBar title={title} leftIcon={leftIcon} rightIcon={rightIcon} onClick={onClickHandler} />
      <SideBar
        visible={showSideBar}
        onClickBackground={handleCloseSideBar}
        headerComponent={
          <SideBarItem
            label="안녕하세요, 회원님"
            textSize="subtitle2"
            rightIcon="close"
            onClick={() => null}
            onIconClick={handleCloseSideBar}
          />
        }
        footerComponent={<Button title="판매자 신청" />}
      >
        <SideBarItem label="개인정보수정" onClick={() => null} />
        <SideBarItem label="장바구니" onClick={() => null} />
        <SideBarItem label="찜한내역" onClick={() => null} />
        <SideBarItem label="주문내역" onClick={() => null} />
        <SideBarItem label="작성한리뷰" onClick={() => null} />
      </SideBar>
      <main>{children}</main>
    </>
  );
};

export default Layout;
