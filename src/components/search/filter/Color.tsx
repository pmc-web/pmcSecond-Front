import { css } from '@emotion/react';
import Layout from 'src/components/common/layout/Layout';
import { useRouter } from 'next/router';
import theme from 'src/assets/theme';
import Text from 'src/components/common/Text';
import Icon from 'src/components/common/Icon';
import { useState } from 'react';
import Button from 'src/components/common/Button';

const colorList = [
  { name: '레드', value: '#8B1F26' },
  { name: '오렌지', value: '#F4AA24' },
  { name: '노랑', value: '#F1F223' },
  { name: '그린', value: '#A5DD0C' },
  { name: '스카이', value: '#98D0EA' },
  { name: '블루', value: '#3131FD' },
  { name: '네이비', value: '#1C2C85' },
  { name: '퍼플', value: '#8316C0' },
  { name: '핑크', value: '#FFC4DB' },
  { name: '그레이', value: '#C6C6C6' },
  { name: '화이트', value: '#FFFFFF' },
  { name: '블랙', value: '#1A1A1A' },
];

const Color = () => {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState();
  const { filterQuery, searchQuery } = router.query;
  const onClick = (ev: React.MouseEvent<HTMLElement>) => {
    const { id } = ev.currentTarget;
    setFilterValue(id);
  };

  const onFinish = () => {
    router.push({
      pathname: '/search/[searchQuery]',
      query: { searchQuery, filter: filterValue, filterQuery },
    });
  };

  return (
    <Layout leftIcon="close" title={`${filterQuery} 선택`}>
      <ul css={wrapperCss}>
        {colorList.map((item) => (
          <li
            css={() => colorCss(item.value)}
            role="button"
            tabIndex={0}
            key={item.value}
            id={item.name}
            onClick={onClick}
          >
            <span>{filterValue === item.name ? <Icon name="check" size="22" color="green030" /> : <div />}</span>
          </li>
        ))}
      </ul>
      <Button style={buttonCss} type="primary" htmlType="button" size="large" onClick={onFinish}>
        선택 완료
      </Button>
    </Layout>
  );
};

export default Color;

const wrapperCss = css`
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  li {
    ${theme.commonStyle.flexCenter};
    height: 5rem;
    width: 5rem;
    border: 1px solid ${theme.color.grey030};
    cursor: pointer;
    &:hover {
      background-color: ${theme.color.grey030};
    }
  }
`;

const colorCss = (value?: string) => css`
  background-color: ${value};
`;

const buttonCss = css`
  position: fixed;
  bottom: 0;
`;
