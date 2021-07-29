import { css } from '@emotion/react';
import Text from 'src/components/common/Text';
import getDateString from 'src/utils/getDateString';

type QuestionItemProps = {
  img: string;
  title: string;
  nickname: string;
  createdDate: Date;
};

const QuestionItem = ({ img, title, nickname, createdDate }: QuestionItemProps) => (
  <div css={wrapperCss}>
    <span>
      <img src={img} alt={title} />
    </span>
    <span>
      <Text.Title level={5} size="subtitle3">
        {title}
      </Text.Title>
      <div css={bottomCss}>
        <Text size="caption1" color="grey050">
          {nickname}
        </Text>
        <Text size="caption1" color="grey050">
          {getDateString(createdDate)}
        </Text>
      </div>
    </span>
  </div>
);

export default QuestionItem;

const wrapperCss = css`
  display: flex;
  align-items: center;
  margin: 0.625rem 0;
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.625rem;
  }
`;

const bottomCss = css`
  margin-top: 0.33rem;
  display: flex;
  p + p {
    margin-left: 1.125rem;
  }
`;
