import HorizontalDivider from 'src/components/common/HorizontalDivider';
import Container from 'src/components/common/layout/Container';
import Layout from 'src/components/common/layout/Layout';
import OrderInfoBox from 'src/components/shop/orderInfo';
import SellingInfo from 'src/components/shop/sellingInfo';
import VisitorInfo from 'src/components/shop/visitorInfo';
import QuestionInfo from '../../../components/shop/questionInfo';
import SalesInfo from '../../../components/shop/salesInfo';

const ShopManageMentPage = () => {
  console.log('');
  return (
    <Layout leftIcon="menu" title="쇼핑몰명">
      <Container>
        <OrderInfoBox />
      </Container>
      <HorizontalDivider />
      <Container>
        <SellingInfo />
      </Container>
      <HorizontalDivider />
      <Container>
        <SalesInfo />
      </Container>
      <HorizontalDivider />
      <Container>
        <VisitorInfo />
      </Container>
      <HorizontalDivider />
      <Container>
        <QuestionInfo />
      </Container>
    </Layout>
  );
};

export default ShopManageMentPage;
