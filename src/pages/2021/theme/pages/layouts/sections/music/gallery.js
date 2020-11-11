import React from 'react';
import Slider from 'react-slick';
import { GalleryData } from '../../../../database/layouts/music/database';
import { Container, Row, Col } from 'reactstrap';
const LeftNavButton = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        bottom: '0',
        marginLeft: '43%',
        padding: '38px 38px 6px 38px',
      }}
      onClick={onClick}>
      <img src="/assets/images/music/gallery/gallery-icon/left.png" alt="arrow_left" />
    </div>
  );
};

const RightNavButton = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: 'block', marginLeft: '48%', padding: '38px 38px 6px 38px' }}
      onClick={onClick}>
      <img src="/assets/images/music/gallery/gallery-icon/right.png" alt="arrow_left" />
    </div>
  );
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: '0px',
  prevArrow: <LeftNavButton />,
  nextArrow: <RightNavButton />,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Gallery = () => (
  <section className="music gallery bg-gallery bg-shadow-top-bottom">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title4">
            <div className="main-title">
              <h2>gallery Music</h2>
            </div>
            <div className="sub-title">
              <p>Latest Photo Our Music Event</p>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <Slider className="gallery-slider" id="gallery-slider" {...settings}>
            {GalleryData.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <img className="img-fluid w-100" alt="" src={item.img} />
                  <div className="abs-center w-100 text-container">
                    <h5 className="text-white overlay-text text-center">
                      {item.tag}
                      <span>{item.year}</span>
                    </h5>
                  </div>
                  <div className="overlay"></div>
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Gallery;
