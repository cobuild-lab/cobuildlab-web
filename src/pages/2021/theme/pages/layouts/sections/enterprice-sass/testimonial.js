import React from 'react';
import Slider from 'react-slick';

import { Container, Row, Col } from 'reactstrap';

const LeftNavButton = (props) => {
  const { style, onClick } = props;
  return (
    <div className="slick-arrow" style={{ ...style, marginLeft: '0%' }} onClick={onClick}>
      <img src="/assets/images/music/gallery/gallery-icon/left.png" alt="arrow_left" />
    </div>
  );
};

const RightNavButton = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: 'block', marginLeft: '95.5%' }}
      onClick={onClick}>
      <img src="/assets/images/music/gallery/gallery-icon/right.png" alt="arrow_left" />
    </div>
  );
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <LeftNavButton />,
  nextArrow: <RightNavButton />,
};

const Testimonial = () => (
  <section className="saas2 testimonial bg-gradient">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title">
            <div className="main-title">
              <h2 className="text-white">Testimonial</h2>
            </div>
            <div className="sub-title">
              <p className="sub-title-para text-white">
                We believe we have created the most efficient SaaS landing page for your users.
                Landing page with features that will convince you to use it for your SaaS business.
              </p>
            </div>
          </div>
        </Col>
        <Col md="10" className="offset-md-1">
          <Slider className="testimonial" id="testimonial" {...settings}>
            <div className="item p-t-30">
              <Col lg="10" xs="12" className="offset-lg-1">
                <Row>
                  <Col sm="3">
                    <div className="testimonial-msg set-relative">
                      <img
                        alt=""
                        className="img-fluid"
                        src="/assets/images/event/testimonial/L3-1.png"
                      />
                      <div className="msg-box">
                        <div className="center-content">
                          <img
                            alt=""
                            className="img-fluid set-abs"
                            src="/assets/images/event/testimonial/message.png"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm="9">
                    <div className="quote-margin">
                      <div className="quotes set-relative m-b-30">
                        <img
                          alt=""
                          className="img-fluid set-abs left-quote"
                          src="/assets/images/event/testimonial/i1.png"
                        />
                        <div className="quote-text">
                          <h6 className="text-white">
                            When you innovate, you make mistakes.It is best to admit them quickly, &
                            get on with improving your other innovations.
                          </h6>
                        </div>
                        <img
                          alt=""
                          className="img-fluid set-abs right-quote"
                          src="/assets/images/event/testimonial/i2.png"
                        />
                      </div>
                      <div className="rating align-items-center">
                        <div className="stars">
                          <ul>
                            <li>
                              <i aria-hidden="true" className="fa fa-star yellow"></i>
                              <i aria-hidden="true" className="fa fa-star yellow"></i>
                              <i aria-hidden="true" className="fa fa-star yellow"></i>
                              <i aria-hidden="true" className="fa fa-star yellow"></i>
                              <i aria-hidden="true" className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <h5 className="name">
                          Jhon Denal - <span> UI Designer</span>
                        </h5>
                      </div>
                    </div>
                  </Col>
                  <div></div>
                </Row>
              </Col>
            </div>
            <div className="item p-t-30">
              <Col lg="10" xs="12" className="offset-lg-1">
                <Row>
                  <Col sm="3">
                    <div className=" testimonial-msg set-relative">
                      <img
                        alt=""
                        className="img-fluid"
                        src="/assets/images/event/testimonial/L3-1.png"
                      />
                      <div className="msg-box">
                        <div className="center-content">
                          <img
                            alt=""
                            className="img-fluid set-abs"
                            src="/assets/images/event/testimonial/message.png"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm="9">
                    <div className="quote-margin">
                      <div className="quotes set-relative m-b-20">
                        <img
                          alt=""
                          className="img-fluid set-abs left-quote"
                          src="/assets/images/event/testimonial/i1.png"
                        />
                        <div className="quote-text">
                          <h6 className="text-white">
                            When you innovate, you make mistakes.It is best to admit them quickly, &
                            get on with improving your other innovations.
                          </h6>
                        </div>
                        <img
                          alt=""
                          className="img-fluid set-abs right-quote"
                          src="/assets/images/event/testimonial/i2.png"
                        />
                      </div>
                      <div className="rating align-items-center">
                        <div className="stars">
                          <ul>
                            <li>
                              <i aria-hidden="true" className="fa fa-star yellow"></i>
                              <i aria-hidden="true" className="fa fa-star yellow"></i>
                              <i aria-hidden="true" className="fa fa-star yellow"></i>
                              <i aria-hidden="true" className="fa fa-star yellow"></i>
                              <i aria-hidden="true" className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <h5 className="name">
                          Jhon Denal - <span> UI Designer</span>
                        </h5>
                      </div>
                    </div>
                  </Col>
                  <div></div>
                </Row>
              </Col>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonial;
