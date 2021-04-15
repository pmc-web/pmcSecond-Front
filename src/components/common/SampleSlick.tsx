import Slider from 'react-slick';

const SampleSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickNext: true,
  };

  return (
    <div style={{ width: 600 }}>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3 style={{ height: 100, backgroundColor: 'red' }}>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SampleSlick;
