import HorizontalDivider from 'src/components/common/HorizontalDivider';
import Container from 'src/components/common/layout/Container';
import ContainerHeader from 'src/components/home/ContainerHeader';
import ProductList from 'src/components/product/ProductList';
import ReviewList from 'src/components/review/ReviewList';
import HeadCard from 'src/components/shop/detail/HeadCard';

const SellerDetail = () => {
  console.log('hihi');
  return (
    <>
      <HeadCard />
      <Container>
        <ContainerHeader title="판매중인 상품" href="idk" />
        <ProductList
          productList={[
            {
              name: 'test',
              price: 1200,
              img:
                'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
            },
            {
              name: 'test',
              price: 1200,
              img:
                'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
            },
            {
              name: 'test',
              price: 1200,
              img:
                'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
            },
          ]}
        />
      </Container>
      <HorizontalDivider />
      <Container>
        <ContainerHeader title="상품리뷰" href="idk" />
        <ReviewList />
      </Container>
    </>
  );
};

export default SellerDetail;
