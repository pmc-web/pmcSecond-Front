import { css } from '@emotion/react';
import { useState } from 'react';
import Icon from './Icon';

type StarProps = {
  style?: ReturnType<typeof css>;
  rating: number;
  fix?: boolean;
};

const Rating = ({ style: starCss, rating, fix }: StarProps) => {
  const [fill, setFill] = useState(rating);
  // function
  const onSaveRating = (item: number) => {
    if (fix) setFill(item);
  };

  return (
    <ul css={containerCss}>
      {[1, 2, 3, 4, 5].map((item) => (
        <li key={item} css={[css``, starCss]}>
          <button onClick={() => onSaveRating(item)}>
            <Icon name={item <= fill ? 'starOn' : 'starOff'} size="24" color="grey050" />
          </button>
        </li>
      ))}
    </ul>
  );
};

const containerCss = () => css`
  display: flex;
  > li {
    margin-right: 2px;
  }
`;

export default Rating;
