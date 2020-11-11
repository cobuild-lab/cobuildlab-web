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

const Banner = () => (
  <section className="gym header" id="home">
    <div className="header5-content">
      <Slider className="default-dots gym-slider" id="gym-slider" {...settings}>
        <div className="item">
          <div className="gym-header bg">
            <Container>
              <Row>
                <Col md="10" className="offset-md-1">
                  <div className="center-text">
                    <div className="text-center">
                      <div className="header-text">
                        <h1>
                          <span className="bold-text">build your</span> body more strong
                        </h1>
                      </div>
                      <div className="header-sub-text">
                        <p className="text-white p-light">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took.
                        </p>
                      </div>
                      <div className="link-horizontal">
                        <ul className="justify-content-center">
                          <li>
                            <a className=" btn btn-default">
                              <span>
                                register 20%<sup>off</sup>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className=" btn btn-default">start now</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="item">
          <div className="gym-header bg">
            <Container>
              <Row>
                <Col md="10" className="offset-md-1">
                  <div className="center-text">
                    <div className="text-center">
                      <div className="header-text">
                        <h1>
                          <span className="bold-text">build your</span> body more strong
                        </h1>
                      </div>
                      <div className="header-sub-text">
                        <p className="text-white p-light">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took.
                        </p>
                      </div>
                      <div className="link-horizontal">
                        <ul className="justify-content-center">
                          <li>
                            <a className=" btn btn-default">
                              <span>
                                register 20%<sup>off</sup>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className=" btn btn-default">start now</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Slider>
    </div>
  </section>
);

export default Banner;
