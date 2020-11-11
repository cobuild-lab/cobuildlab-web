import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
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

const PricingSix = () => {
  return (
    <Fragment>
      <Container>
        <div className="wrapper-full">
          <Row>
            <Col lg="12" md="12" sm="12" xs="12" className="text-center">
              <Slider className="owl-carousel owl-theme pricing-slider plan-box" {...settings}>
                <div className="item">
                  <div className="price-box">
                    <h3 className="price-heading">free</h3>
                    <img alt="pan-line" src="/assets/images/saas1/plan-box.png" />
                    <h4 className="no-weight">
                      $<span>0</span>/Month
                    </h4>
                    <ul>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>1</span>
                        User Account
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>10</span>
                        Team Members
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>Unlimited</span>
                        Emails Accounts
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        Set And Manage
                      </li>
                      <li>API & extension support</li>
                      <li>Developer support</li>
                      <li>A/B Testing</li>
                    </ul>
                    <a className="btn btn-default btn-white">Sign up</a>
                  </div>
                </div>
                <div className="item">
                  <div className="price-box active">
                    <h3 className="price-heading">pro</h3>
                    <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                    <h4 className="no-weight">
                      $<span>49</span>/Month
                    </h4>
                    <ul>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>50</span>
                        User Account
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>500</span> Team Member
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>Unlimited</span>
                        Emails Accounts
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        Set And Manage
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        API & extension support
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        Devloper support
                      </li>
                      <li>A/B Testing</li>
                    </ul>
                    <a className="btn btn-default btn-white">Sign up</a>
                  </div>
                </div>
                <div className="item">
                  <div className="price-box">
                    <h3 className="price-heading">ultra</h3>
                    <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                    <h4 className="no-weight">
                      $<span>99</span>/Month
                    </h4>
                    <ul>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>Unlimited</span>
                        User Account
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>Unlimited</span>
                        Team Member
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>Unlimited</span>
                        Emails Accounts
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        Set And Manage
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        API & extension support
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        Developer support
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />A / B
                        Testing
                      </li>
                    </ul>
                    <a className="btn btn-default btn-white">Sign up</a>
                  </div>
                </div>
                <div className="item">
                  <div className="price-box">
                    <h3 className="price-heading">ultra</h3>
                    <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                    <h4 className="no-weight">
                      $<span>99</span>/Month
                    </h4>
                    <ul>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>Unlimited</span>
                        User Account
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>Unlimited</span>
                        Team Member
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        <span>Unlimited</span>
                        Emails Accounts
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        Set And Manage
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        API & extension support
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />
                        Developer support
                      </li>
                      <li>
                        <img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />A / B
                        Testing
                      </li>
                    </ul>
                    <a className="btn btn-default btn-white">Sign up</a>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default PricingSix;
