import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Schedule = () => (
  <section className="gym format bg-schedule" id="schedule">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title">
            <div className="main-title">
              <h2 className="text-white m-b-15">classes schedule</h2>
            </div>
            <img alt="" className="img-fluid" src="/assets/images/logo/l5-title-bottom.png" />
          </div>
        </Col>
        <Col xs="12">
          <Slider className="default-dots gym-slider" id="gym-about-slider" {...settings}>
            <div className="item">
              <Row>
                <Col lg="5">
                  <div className=" center-text">
                    <div>
                      <div className="format-small-text">
                        <h6 className="text-white borders-before">
                          <span>#1 Day Training</span>
                        </h6>
                      </div>
                      <div className="format-head-text">
                        <h3 className="text-white about-font-header">Monday</h3>
                      </div>
                      <div className="format-sub-text">
                        <p className="p-light about-para text-white">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s
                        </p>
                        <p className="p-light about-para text-white">
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s
                        </p>
                      </div>
                      <ul className="icon-collection">
                        <li className="about-icon">
                          <a className="center-content" href="#">
                            <img
                              alt=""
                              className="img-fluid icons"
                              src="/assets/images/gym/icons/2.png"
                            />
                          </a>
                        </li>
                        <li className="about-icon">
                          <a className="center-content" href="#">
                            <img
                              alt=""
                              className="img-fluid icons"
                              src="/assets/images/gym/icons/1.png"
                            />
                          </a>
                        </li>
                        <li className="about-icon">
                          <a className="center-content" href="#">
                            <img
                              alt=""
                              className="img-fluid icons"
                              src="/assets/images/gym/icons/3.png"
                            />
                          </a>
                        </li>
                      </ul>
                      <a className="btn btn-default back-white m-t-45">learn more</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="item">
              <Row>
                <Col lg="5" className="item">
                  <div className="center-text">
                    <div>
                      <div className="format-small-text">
                        <h6 className="text-white borders-before">
                          <span>#1 Day Training</span>
                        </h6>
                      </div>
                      <div className="format-head-text">
                        <h3 className="text-white about-font-header">Monday</h3>
                      </div>
                      <div className="format-sub-text">
                        <p className="p-light about-para text-white">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s
                        </p>
                        <p className="p-light about-para text-white">
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s
                        </p>
                      </div>
                      <ul className="icon-collection">
                        <li className="about-icon">
                          <a className="center-content" href="#">
                            <img
                              alt=""
                              className="img-fluid icons"
                              src="/assets/images/gym/icons/2.png"
                            />
                          </a>
                        </li>
                        <li className="about-icon">
                          <a className="center-content" href="#">
                            <img
                              alt=""
                              className="img-fluid icons"
                              src="/assets/images/gym/icons/1.png"
                            />
                          </a>
                        </li>
                        <li className="about-icon">
                          <a className="center-content" href="#">
                            <img
                              alt=""
                              className="img-fluid icons"
                              src="/assets/images/gym/icons/3.png"
                            />
                          </a>
                        </li>
                      </ul>
                      <a className="btn btn-default back-white m-t-45">learn more</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Schedule;
