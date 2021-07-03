import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { LeftIconType, RightIconType } from 'src/components/common/layout/types';

const useTopBarClickHandler = (handleShowSideBar?: () => void) => {
  const router = useRouter();
  const onClickHandler = useCallback(
    (iconName: RightIconType | LeftIconType) => () => {
      switch (iconName) {
        case 'leftArrow':
          router.back();
          break;
        case 'menu':
          if (handleShowSideBar) {
            handleShowSideBar();
          }
          break;
        case 'search':
          router.push('/search');
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
        case 'close':
          router.back();
          break;
        default:
          break;
      }
    },
    [router, handleShowSideBar]
  );
  return onClickHandler;
};

export default useTopBarClickHandler;
