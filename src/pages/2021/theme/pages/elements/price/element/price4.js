import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { PricingResume2 } from '../../../../database/elements/price/database';
import { Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
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

const PricingThree = () => (
  <Fragment>
    <Col xs="12">
      <Slider className="pricing-slider" {...settings}>
        {PricingResume2.map((item, i) => {
          return (
            <div className="item" key={i}>
              <div className="price-container price-margin shadows bg-white text-center">
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
  </Fragment>
);

export default PricingThree;
