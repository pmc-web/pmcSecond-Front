import { css } from '@emotion/react';
import Text from 'src/components/common/Text';
import Chip from 'src/components/common/Chip';

const PopularSearch = () => {
  const onRemove = () => null;
  const onClick = (value: string) => () => {
    console.log(value);
  };
  return (
    <section css={wrapperCss}>
      <div css={spaceBetweenCss}>
        <Text.Title level={3} color="grey050" size="body2">
          최근 검색어
        </Text.Title>
        <Text.Title level={3} color="grey060" size="subtitle3">
          <span
            css={css`
              cursor: pointer;
            `}
            tabIndex={0}
            role="button"
            onClick={onRemove}
          >
            지우기
          </span>
        </Text.Title>
      </div>
      <div css={gridWrapper}>
        {/* map으로 셋팅 */}
        <Chip onClick={onClick('테스트')}>테스트</Chip>
        <Chip onClick={onClick('테스트')}>테스트</Chip>
        <Chip onClick={onClick('테스트')}>테스트</Chip>
        <Chip onClick={onClick('테스트')}>테스트</Chip>
        <Chip onClick={onClick('테스트')}>테스트</Chip>
        <Chip onClick={onClick('테스트')}>테스트</Chip>
        <Chip onClick={onClick('테스트')}>테스트</Chip>
      </div>
    </section>
  );
};

export default PopularSearch;

const wrapperCss = css`
  width: 100%;
`;

const spaceBetweenCss = css`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const gridWrapper = css`
  padding: 0rem 1rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;
