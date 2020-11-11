import React from 'react';
import Slider from 'react-slick';

import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 420,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 575,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1199,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 1366,
      settings: { slidesToShow: 6 },
    },
  ],
};

const Client = () => (
  <section className="saas1 client brand-slider" id="client-box">
    <Container fluid={true}>
      <Row>
        <Col md="12" className="client-box text-center">
          <Slider className="owl-carousel saas-brand owl-theme" {...settings}>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/1.png"
              />
            </div>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/2.png"
              />
            </div>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/3.png"
              />
            </div>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/4.png"
              />
            </div>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/5.png"
              />
            </div>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/6.png"
              />
            </div>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/4.png"
              />
            </div>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/3.png"
              />
            </div>
            <div className="item">
              <img
                alt="client-slider"
                className="img-fluid"
                src="/assets/images/saas1/brand/2.png"
              />
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Client;
