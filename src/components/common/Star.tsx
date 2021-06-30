import { css } from '@emotion/react';
import { useState } from 'react';
import Icon from './Icon';

type StarProps = {
  style?: ReturnType<typeof css>;
};

const Star = ({ style: starCss }: StarProps) => {
  const [star, setStar] = useState([
    { id: 1, onOff: false },
    { id: 2, onOff: false },
    { id: 3, onOff: false },
    { id: 4, onOff: false },
    { id: 5, onOff: false },
  ]);
  return (
    <ul>
      {star.map((item) => (
        <Icon
          name="starOff"
          size="24"
          key={item.id}
          color="grey050"
          css={[
            css`
              margin-right: 4px;
            `,
            starCss,
          ]}
        />
      ))}
    </ul>
  );
};

export default Star;
