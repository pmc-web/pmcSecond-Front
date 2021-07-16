import { css, Theme } from '@emotion/react';

type PhotoReviewsProps = {
  images: string[];
};

const PhotoReviews = ({ images }: PhotoReviewsProps) => {
  const handleShowMore = () => {
    // TODO: 사진리뷰 플러스 버튼 동작 어떻게 할지?
  };
  return (
    <div css={containerCss(images.slice(0, 4).length)}>
      {images.slice(0, 3).map((image) => (
        <img key={image} src={image} alt={image} />
      ))}
      {images.length > 4 && <span css={(theme) => showMoreCss(theme)}>+{images.length - 4}</span>}
    </div>
  );
};

export default PhotoReviews;

const containerCss = (itemLength: number) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${25 * itemLength}%;
  & > img {
    width: calc(95% / ${itemLength});
  }
  & > span {
    width: calc(95% / ${itemLength});
  }
`;

const showMoreCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
`;
