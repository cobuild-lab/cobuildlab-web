import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import { PricingData } from '../../../../database/layouts/app/database';

var settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
  ],
};

const Pricing = () => (
  <section className="app2 pricing p-t-0" id="plan">
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
              <span>pricing</span>
            </h6>
            <div className="sub-title">
              <h2 className="title-text text-capitalize text-center">our plan</h2>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme pricing-slider price-margin" {...settings}>
            {PricingData.length > 0
              ? PricingData.map((item, index) => (
                <div className="item" key={`pricing-table-${index}`}>
                  <div className="price-container shadows text-center">
                    <div className="service-feature ">
                      <div className="feature-text">
                        <span className="flaticon-rocket-ship feature-icon "></span>
                        <h3 className="text-white">{item.title}</h3>
                      </div>
                    </div>
                    <div>
                      <div className="price-feature-container ">
                        <div className="price-features">
                          {item.features.map((feature, i) => (
                            <h5 key={`price-features-${i}`} className="price-feature">
                              {feature}
                            </h5>
                          ))}
                        </div>
                        <div className="price-value">
                          <h6 className="price">
                              $<span className="large">{item.price}</span>/month
                          </h6>
                        </div>
                        <a className="btn btn-default btn-white" href="#">
                            purchase
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              : 'Pricing Data Not Found'}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Pricing;
