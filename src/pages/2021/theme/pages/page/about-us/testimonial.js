import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: { arrows: false },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Testimonial = () => (
  <section className="event testimonial set-relative bg about-page">
    <Container>
      <Row>
        <Col xs="12">
          <div className="title title2 title-inner">
            <div className="main-title">
              <h2 className="font-primary borders text-center text-uppercase m-b-0">
                <span>testimonial 2</span>
              </h2>
            </div>
          </div>
        </Col>
        <Col md="10" className="offset-md-1 margin-b">
          <Slider
            className="owl-carousel owl-theme testimonial"
            id="event-testimonial"
            {...settings}>
            <div className="item p-t-30">
              <Col lg="10" xs="12" className="offset-lg-1">
                <Row>
                  <Col sm="3">
                    <div className="testimonial-msg set-relative">
                      <img
                        alt=""
                        className="img-fluid avtar-img"
                        src="../assets/images/event/testimonial/L3-1.png"
                      />
                      <div className="msg-box">
                        <div className="center-content">
                          <img
                            alt=""
                            className="img-fluid set-abs avtar-img"
                            src="../assets/images/event/testimonial/message.png"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm="9" className="px-lg-4">
                    <div className="quotes set-relative m-b-50">
                      <img
                        alt=""
                        className="img-fluid set-abs left-quote"
                        src="../assets/images/event/testimonial/i1.png"
                      />
                      <div className="quote-text">
                        <h5>
                          "When you innovate, you make mistakes.It is best to admit them quickly, &
                          get on with improving your other innovations."
                        </h5>
                      </div>
                      <img
                        alt=""
                        className="img-fluid set-abs right-quote"
                        src="../assets/images/event/testimonial/i2.png"
                      />
                    </div>
                    <div className="rating">
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
                  </Col>
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
                        className="img-fluid avtar-img"
                        src="../assets/images/event/testimonial/L3-1.png"
                      />
                      <div className="msg-box">
                        <div className="center-content">
                          <img
                            alt=""
                            className="img-fluid set-abs avtar-img"
                            src="../assets/images/event/testimonial/message.png"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm="9" className="px-lg-4">
                    <div className="quotes set-relative m-b-50">
                      <img
                        alt=""
                        className="img-fluid set-abs left-quote"
                        src="../assets/images/event/testimonial/i1.png"
                      />
                      <div className="quote-text">
                        <h5>
                          "When you innovate, you make mistakes.It is best to admit them quickly, &
                          get on with improving your other innovations."
                        </h5>
                      </div>
                      <img
                        alt=""
                        className="img-fluid set-abs right-quote"
                        src="../assets/images/event/testimonial/i2.png"
                      />
                    </div>
                    <div className="rating">
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
                  </Col>
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
