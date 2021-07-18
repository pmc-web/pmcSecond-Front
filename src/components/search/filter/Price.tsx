import { css } from '@emotion/react';
import Layout from 'src/components/common/layout/Layout';
import { useRouter } from 'next/router';
import theme from 'src/assets/theme';
import Text from 'src/components/common/Text';
import Icon from 'src/components/common/Icon';
import { useState } from 'react';
import Button from 'src/components/common/Button';

const priceList = [5000, 10000, 15000, 20000, 25000];

const Price = () => {
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
        <li id="0" role="button" tabIndex={0} onClick={onClick}>
          <Text.Title level={3} size="subtitle3">
            5000원 미만
          </Text.Title>
          <span>{filterValue === '0' ? <Icon name="check" size="22" color="green030" /> : <div />}</span>
        </li>
        {priceList.map((item) => (
          <li role="button" tabIndex={0} key={item} id={String(item)} onClick={onClick}>
            <Text.Title level={3} size="subtitle3">
              {`${item}원 이상 ~ ${item + 5000}원 미만`}
            </Text.Title>
            <span>{filterValue === String(item) ? <Icon name="check" size="22" color="green030" /> : <div />}</span>
          </li>
        ))}
        <li role="button" tabIndex={0} id="30000" onClick={onClick}>
          <Text.Title level={3} size="subtitle3">
            30000원 이상
          </Text.Title>
          <span>{filterValue === '30000' ? <Icon name="check" size="22" color="green030" /> : <div />}</span>
        </li>
      </ul>
      <Button style={buttonCss} type="primary" htmlType="button" size="large" onClick={onFinish}>
        선택 완료
      </Button>
    </Layout>
  );
};

export default Price;

const wrapperCss = css`
  li {
    width: 100%;
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
