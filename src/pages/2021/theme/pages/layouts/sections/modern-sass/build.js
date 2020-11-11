import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
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

const Build = () => (
  <section className="saas1 build-bg">
    <div className="build-right-slider">
      <Slider className="owl-carousel owl-theme sync2" id="sync2" {...settings}>
        <div className="item">
          <img
            alt="work-slider"
            className="img-fluid work-slide"
            src="/assets/images/saas1/work.png"
          />
        </div>
        <div className="item">
          <img
            alt="work-slider"
            className="img-fluid work-slide"
            src="/assets/images/saas1/work.png"
          />
        </div>
        <div className="item">
          <img
            alt="work-slider"
            className="img-fluid work-slide"
            src="/assets/images/saas1/work.png"
          />
        </div>
      </Slider>
    </div>
    <Container>
      <Row>
        <Col lg="6">
          <Slider className="sync1 owl-carousel owl-theme overflow-hidden" id="sync1" {...settings}>
            <div className="item">
              <div className="build-box">
                <h3 className="build-head text-white">
                  <span className="theme-color">Let’s </span>Build Something Great. Together
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <ul>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We provide free initial consultation and support.
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We work with some of the most successful businesses
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We Are Entrepreneurs & Innovators of Website Building
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We’d love to hear from you to discuss web design.
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="build-box">
                <h3 className="build-head text-white">
                  <span className="theme-color">Let’s </span>Build Something Great. Together
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <ul>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We provide free initial consultation and support.
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We work with some of the most successful businesses
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We Are Entrepreneurs & Innovators of Website Building
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We’d love to hear from you to discuss web design.
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="build-box">
                <h3 className="build-head text-white">
                  <span className="theme-color">Let’s </span>Build Something Great. Together
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <ul>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We provide free initial consultation and support.
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We work with some of the most successful businesses
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We Are Entrepreneurs & Innovators of Website Building
                  </li>
                  <li>
                    <img alt="icon" src="/assets/images/saas1/build-.png" />
                    We’d love to hear from you to discuss web design.
                  </li>
                </ul>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Build;
