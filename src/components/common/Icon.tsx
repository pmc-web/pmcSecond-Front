import { css } from '@emotion/react';

import { ColorType } from 'src/interfaces/emotion';

import AlarmSvg from 'src/assets/icon/icn_alarm_18.svg';
import DownSvg from 'src/assets/icon/icn_arw_down_18.svg';
import LeftSvg from 'src/assets/icon/icn_arw_left_18.svg';
import RightSvg from 'src/assets/icon/icn_arw_right_18.svg';
import UpSvg from 'src/assets/icon/icn_arw_up_18.svg';
import CheckSvg from 'src/assets/icon/icn_check_18.svg';
import CheckBoxSvg from 'src/assets/icon/icn_checkbox_18.svg';
import CloseSvg from 'src/assets/icon/icn_close_18.svg';
import CloseBoxSvg from 'src/assets/icon/icn_closebox_18.svg';
import ErrorSvg from 'src/assets/icon/icn_error_18.svg';
import KakaoSvg from 'src/assets/icon/icn_kakao_18.svg';
import MenuSvg from 'src/assets/icon/icn_menu_18.svg';
import SearchSvg from 'src/assets/icon/icn_search_18.svg';
import ShareSvg from 'src/assets/icon/icn_share_18.svg';
import StarOffSvg from 'src/assets/icon/icn_star_off_18.svg';
import StarOnSvg from 'src/assets/icon/icn_star_on_18.svg';
import WishOffSvg from 'src/assets/icon/icn_wish_off_18.svg';
import WishOnSvg from 'src/assets/icon/icn_wish_on_18.svg';

const iconMap = {
  alarm: AlarmSvg,
  downArrow: DownSvg,
  leftArrow: LeftSvg,
  rightArrow: RightSvg,
  upArrow: UpSvg,
  check: CheckSvg,
  checkBox: CheckBoxSvg,
  close: CloseSvg,
  closeBox: CloseBoxSvg,
  error: ErrorSvg,
  kakao: KakaoSvg,
  menu: MenuSvg,
  search: SearchSvg,
  share: ShareSvg,
  starOff: StarOffSvg,
  starOn: StarOnSvg,
  wishOff: WishOffSvg,
  wishOn: WishOnSvg,
};

export type IconKeyType = keyof typeof iconMap;

type IconProp = {
  name: IconKeyType;
  size: string;
  color?: keyof ColorType;
  className?: string;
};

const Icon = ({ name, size, color, className }: IconProp) => {
  const IconSvg = iconMap[name];
  return (
    <IconSvg
      className={className}
      css={(theme) => css`
        color: ${color ? theme.color[color] : theme.color.black};
      `}
      width={size}
      height={size}
    >
      Enter
    </IconSvg>
  );
};

export default Icon;
