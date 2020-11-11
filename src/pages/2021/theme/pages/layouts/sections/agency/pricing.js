import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import { PricingData } from '../../../../database/layouts/agency/database';

var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
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
  <section className="agency pricing price-bg" id="plan">
    <Container>
      <Row>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme pricing-slider price-margin" {...settings}>
            {PricingData.length > 0
              ? PricingData.map((item, index) => (
                <div className="item" key={`pricing-table-${index}`}>
                  <div className="price-container shadows">
                    <div className="price-feature-container">
                      <div className="feature-text">
                        <span className="flaticon-rocket-ship feature-icon"></span>
                        <h3 className="">{item.title}</h3>
                        <hr className="set-border" />
                      </div>
                      <div className="price-features font-primary">
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
              ))
              : 'Pricing Table Not Found'}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Pricing;
