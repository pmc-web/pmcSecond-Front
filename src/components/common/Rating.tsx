import { css } from '@emotion/react';
import Icon from './Icon';

type RatingProps = {
  rating: number;
  size: string;
};
const Rating = ({ rating, size }: RatingProps) => (
  <ul css={containerCss}>
    {[1, 2, 3, 4, 5].map((value) => (
      <li key={value}>
        <Icon name={value <= rating ? 'starOn' : 'starOff'} size={size} color="purple050" />
      </li>
    ))}
  </ul>
);

export default Rating;

const containerCss = css`
  display: flex;
`;
