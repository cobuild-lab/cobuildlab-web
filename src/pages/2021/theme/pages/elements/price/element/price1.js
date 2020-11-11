import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { PricingData } from '../../../../database/elements/price/database';
import { Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 991,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
  ],
};

const PriceOne = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme pricing-slider price-margin" {...settings}>
            {PricingData.length > 0
              ? PricingData.map((item, index) => (
                <div className="item" key={`price-${index}`}>
                  <div className="price-container  shadows text-center">
                    <div className="price-feature-container set-relative">
                      <div className="feature-text">
                        <h3 className="feature-text-heading font-primary">{item.title}</h3>
                        <hr />
                      </div>
                      <div className="price-value">
                        <h4 className="price">${item.price}</h4>
                      </div>
                      <div className="price-features">
                        {item.features.map((feature, i) => (
                          <h5 key={`price-features-${i}`} className="price-feature">
                            {feature}
                          </h5>
                        ))}
                        <a
                          className=" btn btn-default btn-gradient text-white btn-app1-theme"
                          href="#">
                            purchase
                        </a>
                        <div className="set-abs bottom-0">
                          <img alt="" className="img-fluid pricing-img" src={item.img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              : 'Pricing Data Not Found'}
          </Slider>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PriceOne;
