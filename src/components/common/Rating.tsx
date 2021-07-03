import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Icon from './Icon';

type StarProps = {
  style?: ReturnType<typeof css>;
  rating: number;
  fix?: boolean;
};

const Rating = ({ style: starCss, rating, fix }: StarProps) => {
  const [fill, setFill] = useState(0);
  // function
  const onSaveRating = (item: number) => {
    if (fix) setFill(item);
  };
  // useEffect
  useEffect(() => {
    setFill(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul css={containerCss}>
      {[1, 2, 3, 4, 5].map((item) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li key={item} css={[css``, starCss]} onClick={() => onSaveRating(item)}>
          <Icon name={item <= fill ? 'starOn' : 'starOff'} size="24" color="grey050" />
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
