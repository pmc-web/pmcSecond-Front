import { css } from '@emotion/react';
import { CssReturnType } from 'src/interfaces/emotion';
import FilterButton from './FilterButton';

type FilterButtonGroupProps = {
  containerStyle?: CssReturnType;
};

const FilterButtonGroup = ({ containerStyle }: FilterButtonGroupProps) => {
  console.log('hihi');
  return (
    <div css={[wrapperCss, containerStyle]}>
      <FilterButton>카테고리</FilterButton>
      <FilterButton>가격대</FilterButton>
      <FilterButton>색상</FilterButton>
    </div>
  );
};

export default FilterButtonGroup;

const wrapperCss = css`
  display: flex;
  button + button {
    margin-left: 0.6rem;
  }
`;
