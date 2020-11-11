import React, { Fragment } from 'react';
import Slider from 'react-slick';
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
      breakpoint: 991,
      settings: { slidesToShow: 2 },
    },
  ],
};

const PricingTwo = () => (
  <Fragment>
    <Col xs="12">
      <Slider className="owl-carousel owl-theme price-margin pricing-slider" {...settings}>
        <div className="item">
          <div className="price-container shadows text-center">
            <div className="service-feature ">
              <div className="feature-text">
                <span className="flaticon-rocket-ship feature-icon "></span>
                <h3 className="text-white feature-text-heading text-center">free</h3>
              </div>
            </div>
            <div>
              <div className="price-feature-container ">
                <div className="price-features">
                  <h5 className="price-feature text-center">Easy Installations</h5>
                  <h5 className="price-feature text-center">Unlimited support</h5>
                  <h5 className="price-feature text-center">Free Forever</h5>
                </div>
                <div className="price-value">
                  <h6 className="price text-center">
                    $<span className="large">0</span>/month
                  </h6>
                </div>
                <a className="btn btn-default btn-white" href="#">
                  purchase
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="price-container shadows text-center">
            <div className="service-feature ">
              <div className="feature-text">
                <span className="flaticon-diamond feature-icon"></span>
                <h3 className="text-white feature-text-heading text-center">medium</h3>
              </div>
            </div>
            <div>
              <div className="price-feature-container ">
                <div className="price-features">
                  <h5 className="price-feature text-center">Easy Installations</h5>
                  <h5 className="price-feature text-center">Unlimited support</h5>
                  <h5 className="price-feature text-center">Free Forever</h5>
                </div>
                <div className="price-value">
                  <h6 className="price text-center">
                    $<span className="large">49</span>/month
                  </h6>
                </div>
                <a className="btn btn-default btn-white" href="#">
                  purchase
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="price-container shadows text-center">
            <div className="service-feature ">
              <div className="feature-text">
                <span className="flaticon-pie-chart feature-icon"></span>
                <h3 className="text-white feature-text-heading text-center">business</h3>
              </div>
            </div>
            <div>
              <div className="price-feature-container">
                <div className="price-features">
                  <h5 className="price-feature text-center">Easy Installations</h5>
                  <h5 className="price-feature text-center">Unlimited support</h5>
                  <h5 className="price-feature text-center">Free Forever</h5>
                </div>
                <div className="price-value">
                  <h6 className="price text-center">
                    $<span className="large">99</span>/month
                  </h6>
                </div>
                <a className="btn btn-default btn-white" href="#">
                  purchase
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="price-container shadows text-center">
            <div className="service-feature ">
              <div className="feature-text">
                <span className="flaticon-rocket-ship feature-icon "></span>
                <h3 className="text-white feature-text-heading text-center">free</h3>
              </div>
            </div>
            <div>
              <div className="price-feature-container ">
                <div className="price-features">
                  <h5 className="price-feature text-center">Easy Installations</h5>
                  <h5 className="price-feature text-center">Unlimited support</h5>
                  <h5 className="price-feature text-center">Free Forever</h5>
                </div>
                <div className="price-value">
                  <h6 className="price text-center">
                    $<span className="large">0</span>/month
                  </h6>
                </div>
                <a className="btn btn-default btn-white" href="#">
                  purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </Col>
  </Fragment>
);

export default PricingTwo;
