import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 510,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 359,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 479,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 5 },
    },
  ],
};

const Client = () => (
  <section className="app2 brand-sliders p-t-0">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title2">
            <img alt="" className="img-fluid title-img" src="/assets/images/logo/2.png" />
            <h6 className="font-primary borders main-text">
              <span>brand logo</span>
            </h6>
            <div className="sub-title">
              <h2 className="title-text text-capitalize text-center">trusted us</h2>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme brand-slider" {...settings}>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/app_landing2/brand/1.png" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/app_landing2/brand/2.png" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/app_landing2/brand/3.png" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/app_landing2/brand/4.png" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/app_landing2/brand/5.png" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/app_landing2/brand/3.png" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img alt="" className="img-fluid" src="/assets/images/app_landing2/brand/4.png" />
              </a>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Client;
