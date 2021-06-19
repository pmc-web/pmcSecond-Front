import { css } from '@emotion/react';
import { useMemo } from 'react';
import Icon from 'src/components/common/Icon';
import Container from 'src/components/common/layout/Container';
import Text from 'src/components/common/Text';
import { useToggle } from 'src/hooks';
import HorizontalDivider from 'src/components/common/HorizontalDivider';
import PhotoReviews from './PhotoReviews';
import ReviewItem from './ReviewItem';

const data = [
  {
    title: '너무 좋아요',
    reviewer: 'lifeisegg',
    createdDate: new Date(),
    desc: '받아보니 너무너무 좋네요. 잘쓸게요.',
    images: [
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    ],
  },
  {
    title: '너무 좋아요',
    reviewer: '삶은계란',
    createdDate: new Date(),
    desc: '받아보니 너무너무 좋네요. 잘쓸게요.',
    images: [
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    ],
  },
  {
    title: '너무 좋아요',
    reviewer: '주당이선생',
    createdDate: new Date(),
    desc: '받아보니 너무너무 좋네요. 잘쓸게요.',
  },
];

const ProductReview = () => {
  const images = useMemo(
    () =>
      data.reduce((acc, v) => {
        if (v.images) {
          acc = [...acc, ...v.images];
        }
        return acc;
      }, [] as string[]),
    []
  );
  const [onlyPhotoReview, toggleOnlyPhotoReview] = useToggle(false);

  return (
    <div css={wrapperCss}>
      <Container style={photoReviewContainerCss}>
        <Text size="subtitle2">{data.length}명이 만족한 상품이에요.</Text>
        <PhotoReviews images={images} />
      </Container>
      <HorizontalDivider lineWidth="1px" />
      <Container>
        <div onClick={toggleOnlyPhotoReview} tabIndex={0} role="button" css={photoReviewCheckButtonCss}>
          <span>
            <Icon name="checkBox" color={onlyPhotoReview ? 'purple050' : 'grey030'} size="1.5rem" />
          </span>
          <span>
            <Text size="body1">사진리뷰만 모아보기</Text>
          </span>
        </div>
      </Container>
      {data.map((review) => (
        <>
          <HorizontalDivider lineWidth="1px" />
          <Container key={review.title}>
            <ReviewItem review={review} />
          </Container>
        </>
      ))}
    </div>
  );
};

export default ProductReview;

const wrapperCss = css`
  width: 100%;
`;

const photoReviewContainerCss = css`
  margin-bottom: 1.8rem;
`;

const photoReviewCheckButtonCss = css`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  span + span {
    margin-left: 0.4rem;
  }
`;
