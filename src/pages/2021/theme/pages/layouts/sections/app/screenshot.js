import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 359,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 479,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
  ],
};

const Screenshot = () => (
  <section className="app2 screenshot p-t-0" id="screen-shot">
    <div className="animated-bg">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title2">
            <img alt="" className="img-fluid title-img" src="/assets/images/logo/2.png" />
            <h6 className="font-primary borders main-text">
              <span>screen shot</span>
            </h6>
            <div className="sub-title">
              <h2 className="title-text text-capitalize text-center">screen shot</h2>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="set-relative">
        <Col xs="12">
          <Slider className="screenshot-slider" {...settings}>
            <div className="item">
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/app_landing2/screenshot/1.png"
              />
            </div>
            <div className="item">
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/app_landing2/screenshot/2.png"
              />
            </div>
            <div className="item">
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/app_landing2/screenshot/1.png"
              />
            </div>
            <div className="item">
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/app_landing2/screenshot/2.png"
              />
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Screenshot;
