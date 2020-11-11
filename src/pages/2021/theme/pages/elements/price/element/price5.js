import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import { PricingResume2 } from '../../../../database/elements/price/database';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        centerPadding: '160px',
        padding: '20px',
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const PricingFive = () => {
  return (
    <Fragment>
      <Container>
        <div className="wrapper-full" id="monthly">
          <Row>
            <Col xs="12">
              <Slider className="owl-carousel owl-theme pricing-slider price-margin" {...settings}>
                {PricingResume2.map((item, i) => {
                  return (
                    <div className="item" key={i}>
                      <div className="price-container hover-overlay shadows bg-white text-center">
                        <div className="price-feature-container set-relative">
                          <div className="feature-text">
                            <span className="flaticon-rocket-ship feature-icon"></span>
                            <h4 className="feature-text-heading text-center bold text-uppercase font-primary">
                              {item.title}
                            </h4>
                            <hr className="set-border" />
                          </div>
                          <div className="price-features font-primary">
                            <h5 className="price-feature text-center">{item.feature1}</h5>
                            <h5 className="price-feature text-center">{item.feature2}</h5>
                            <h5 className="price-feature text-center">{item.feature3}</h5>
                          </div>
                          <div className="price-value">
                            <h6 className="price text-center font-primary">
                              $<span className="large font-primary">{item.price}</span>/month
                            </h6>
                          </div>
                          <a className="btn btn-default back-white" href="#">
                            purchase
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default PricingFive;
