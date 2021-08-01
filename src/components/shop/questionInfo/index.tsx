import { css } from '@emotion/react';
import theme from 'src/assets/theme';
import Icon from 'src/components/common/Icon';
import Text from 'src/components/common/Text';
import QuestionItem from './QuestionItem';

const data = [
  {
    img:
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    title: '[문의] 제목 영역',
    nickname: '사용자 닉네임',
    createdDate: new Date(),
  },
  {
    img:
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    title: '[문의] 제목 영역',
    nickname: '사용자 닉네임',
    createdDate: new Date(),
  },
  {
    img:
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    title: '[문의] 제목 영역',
    nickname: '사용자 닉네임',
    createdDate: new Date(),
  },
];

const QuestionInfo = () => {
  const handleNavigate = () => {};
  return (
    <div css={wrapperCss}>
      <div onClick={handleNavigate} role="button" tabIndex={0} css={headerCss}>
        <span>
          <Text.Title level={3} size="subtitle1">
            문의/구매평
          </Text.Title>
        </span>
        <span>
          <Icon name="rightArrow" size="1rem" />
        </span>
      </div>
      <div>
        {data.map((v) => (
          <QuestionItem key={v.title} img={v.img} createdDate={v.createdDate} nickname={v.nickname} title={v.title} />
        ))}
      </div>
    </div>
  );
};

export default QuestionInfo;

const wrapperCss = css`
  margin: 1.25rem 0;
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.3rem;
  border-bottom: 1px solid ${theme.color.grey020};
`;
