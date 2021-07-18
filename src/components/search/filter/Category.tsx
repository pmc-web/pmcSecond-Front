import { css } from '@emotion/react';
import Layout from 'src/components/common/layout/Layout';
import { useRouter } from 'next/router';
import theme from 'src/assets/theme';
import Text from 'src/components/common/Text';
import Icon from 'src/components/common/Icon';
import { useState } from 'react';
import Button from 'src/components/common/Button';

const categoryList = ['악세사리', '패션잡화', '의류', '화장품', '식품', '문구류', '반려동물', '기타'];

const Category = () => {
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
        {categoryList.map((item) => (
          <li role="button" tabIndex={0} key={item} id={item} onClick={onClick}>
            <Text.Title level={3} size="subtitle3">
              {item}
            </Text.Title>
            <span>{filterValue === item ? <Icon name="check" size="22" color="green030" /> : <div />}</span>
          </li>
        ))}
      </ul>
      <Button style={buttonCss} type="primary" htmlType="button" size="large" onClick={onFinish}>
        선택 완료
      </Button>
    </Layout>
  );
};

export default Category;

const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 50%;
    ${theme.commonStyle.flexCenter};
    justify-content: space-around;
    height: 3.5rem;
    border: 1px solid ${theme.color.grey020};
    cursor: pointer;
    &:hover {
      background-color: ${theme.color.grey030};
    }
    h3 {
      width: 40%;
    }
    span {
      width: 10%;
    }
  }
`;

const buttonCss = css`
  position: fixed;
  bottom: 0;
`;
