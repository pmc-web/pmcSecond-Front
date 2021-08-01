import { css } from '@emotion/react';
import { Bar } from 'react-chartjs-2';
import theme from 'src/assets/theme';
import Text from 'src/components/common/Text';

const data = {
  labels: ['04-05', '04-06', '04-07', '04-08', '04-09', '04-10', '04-11'],
  datasets: [
    {
      label: 'visitor',
      data: [12, 19, 3, 5, 2, 3, 1],
      backgroundColor: theme.color.purple050,
    },
    {
      label: 'view',
      data: [2, 3, 20, 5, 1, 4, 30],
      backgroundColor: theme.color.purple010,
    },
  ],
};

const VisitorInfo = () => (
  <div css={wrapperCss}>
    <div css={headerCss}>
      <Text.Title level={3} size="subtitle1">
        방문자 현황
      </Text.Title>
      <span css={flexRowCss}>
        <span css={colorBoxCss(theme.color.purple050)} />
        <span>
          <Text color="grey040" size="caption1">
            방문자
          </Text>
        </span>
        <span css={colorBoxCss(theme.color.purple010)} />
        <span>
          <Text color="grey040" size="caption1">
            페이지뷰
          </Text>
        </span>
      </span>
    </div>
    <div>
      <Bar type="bar" data={data} options={{ legend: { display: false } }} />
    </div>
  </div>
);

export default VisitorInfo;

const wrapperCss = css`
  margin: 1.25rem 0;
`;

const flexRowCss = css`
  display: flex;
  justify-content: space-between;
`;

const headerCss = css`
  ${flexRowCss}
  margin-bottom: 1.25rem;
`;

const colorBoxCss = (color: string) => css`
  height: 0.625rem;
  width: 0.625rem;
  margin: calc(calc(18px - 0.625rem) / 2);
  margin-left: 0.66rem;
  background-color: ${color};
`;
