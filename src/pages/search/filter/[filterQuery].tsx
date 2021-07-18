import { useRouter } from 'next/router';
import Category from 'src/components/search/filter/Category';
import Price from 'src/components/search/filter/Price';
import Color from 'src/components/search/filter/Color';

const FilterResult = () => {
  const router = useRouter();

  const { filterQuery } = router.query;

  return (
    <>
      {filterQuery === '카테고리' && <Category />}
      {filterQuery === '가격대' && <Price />}
      {filterQuery === '색상' && <Color />}
    </>
  );
};

export default FilterResult;
