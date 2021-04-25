import { css } from '@emotion/react';
import { rotateClockwise } from 'src/assets/animations/rotate';
import Icon from './Icon';

type SpinnerProps = {
  size?: string;
};

const Spinner = ({ size = '20' }: SpinnerProps) => (
  <Icon
    css={css`
      animation: ${rotateClockwise} 0.7s infinite;
    `}
    name="alarm" // TODO: 스피너 아이콘 받아서 교체
    size={size}
    className="spinner"
  />
);

export default Spinner;
