import React from 'react';
import Slider from 'react-slick';

import { PricingData } from '../../../../database/layouts/yoga/database';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  autoplay: true,
  centerMode: true,
  centerPadding: '0',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Pricing = () => (
  <section className="yoga pricing" id="plan">
    <div className="animated-bg">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title title2">
            <h2>Gifts & Cards</h2>
            <img alt="" className="img-fluid" src="/assets/images/yoga-img/logo/wave-blue.png" />
          </div>
        </Col>
        <Col lg="12" md="8" className="offset-md-2 offset-lg-0">
          <Slider className="pricing-slider price-margin" {...settings}>
            {PricingData.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <div className="price-container shadows text-center">
                    <div className="service-feature ">
                      <div className="feature-text">
                        <img alt="" className="image-top" src={item.img} />
                        <h3 className="text-white feature-text-heading">{item.heading}</h3>
                      </div>
                    </div>
                    <div>
                      <div className="price-feature-container ">
                        <div className="price-features">
                          <h5 className="price-feature">{item.feature1}</h5>
                          <h5 className="price-feature">{item.feature2} </h5>
                          <h5 className="price-feature">{item.feature3} </h5>
                        </div>
                        <div className="price-value">
                          <h6 className="price">
                            $<span className="large">{item.price}</span>/month
                          </h6>
                        </div>
                        <a className="btn btn-default btn-gradient" href="#">
                          more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Pricing;
