import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Pricing } from '../../../../database/elements/price/database';
import { Col } from 'reactstrap';
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
      breakpoint: 992,
      settings: { slidesToShow: 1 },
    },
  ],
};

const PricingSeven = () => (
  <Fragment>
    <Col lg="12" md="8" className="offset-md-2 offset-lg-0">
      <Slider className="pricing-slider price-margin" {...settings}>
        {Pricing.map((item, i) => {
          return (
            <div className="item" key={i}>
              <div className="price-container shadows text-center">
                <div className="service-feature ">
                  <div className="feature-text">
                    <img alt="" className="image-top" src={item.img} />
                    <h3 className="text-white feature-text-heading text-center">{item.heading}</h3>
                  </div>
                </div>
                <div>
                  <div className="price-feature-container ">
                    <div className="price-features">
                      <h6 className="price text-center-feature">{item.feature1}</h6>
                      <h6 className="price text-center-feature">{item.feature2}</h6>
                      <h6 className="price text-center-feature">{item.feature3}</h6>
                      <h6 className="price text-center-feature">{item.feature4}</h6>
                    </div>
                    <div className="price-value">
                      <h6 className="price text-center">
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
  </Fragment>
);

export default PricingSeven;
