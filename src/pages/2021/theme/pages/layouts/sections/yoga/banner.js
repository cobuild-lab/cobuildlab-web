import React from 'react';
import Slider from 'react-slick';

import { Container, Row, Col } from 'reactstrap';

var settings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Banner = () => (
  <section className="yoga header" id="home">
    <Slider
      className="yoga-content owl-carousel owl-theme overflow-hidden yoga-slider"
      {...settings}>
      <div className="item">
        <div className="yogas bg">
          <Container>
            <Row>
              <Col md="12">
                <div className="center-text">
                  <div className="bottom-0 set-abs girl center-content">
                    <img
                      alt=""
                      className="img-fluid girl-img"
                      src="/assets/images/yoga-img/girl-1050x640.png"
                    />
                  </div>
                  <div className="text-right">
                    <Row>
                      <Col lg="7">
                        <div className="right-way">
                          <div className="header-text">
                            <h1>
                              right way <span className="bold-text">yoga</span>
                            </h1>
                          </div>
                          <div className="header-sub-text">
                            <p className="text-white">
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text ever
                              since the 1500s
                            </p>
                          </div>
                          <a className=" btn btn-default back-white border-not">read more</a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <div className="animation-circle-inverse">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <div className="item">
        <div className="yogas bg">
          <Container>
            <Row>
              <Col md="12">
                <div className="center-text">
                  <div className="bottom-0 set-abs girl center-content">
                    <img
                      alt=""
                      className="img-fluid girl-img"
                      src="/assets/images/yoga-img/girl-1050x640.png"
                    />
                  </div>
                  <div className="text-right">
                    <Row>
                      <Col lg="7">
                        <div className="right-way">
                          <div className="header-text">
                            <h1>
                              right way <span className="bold-text">yoga</span>
                            </h1>
                          </div>
                          <div className="header-sub-text">
                            <p className="text-white">
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text ever
                              since the 1500s
                            </p>
                          </div>
                          <a className=" btn btn-default back-white border-not">read more</a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <div className="animation-circle-inverse">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </Slider>
  </section>
);

export default Banner;
