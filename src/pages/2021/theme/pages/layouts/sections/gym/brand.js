import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  infinite: true,
  dots: false,
  speed: 500,
  margin: 50,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  autoHeight: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 420,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 991,
      settings: { slidesToShow: 5 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 6 },
    },
  ],
};

const Brand = () => (
  <section className="gym brand-slider">
    <Container>
      <Row>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme" id="gym-brand" {...settings}>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/gym/brand/1.jpg" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/gym/brand/2.jpg" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/gym/brand/3.jpg" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/gym/brand/4.jpg" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/gym/brand/1.jpg" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/gym/brand/2.jpg" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/gym/brand/3.jpg" />
              </a>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Brand;
