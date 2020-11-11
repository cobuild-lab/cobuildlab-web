import React from 'react';
import Slider from 'react-slick';

import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
};
const Testimonial = () => (
  <section className="yoga testimonial bg img-1">
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title title2">
            <h2 className="text-white">what people say</h2>
            <img alt="" className="img-fluid" src="/assets/images/yoga-img/logo/bottom-curve.png" />
          </div>
        </Col>
        <Col lg="10" className="offset-lg-1">
          <Slider
            className="owl-carousel owl-theme testimonial-slider"
            id="testimonial-slider"
            {...settings}>
            <div className="item">
              <img
                alt=""
                className="img-fluid m-auto"
                src="/assets/images/gym/testimonial/quote.png"
              />
              <div className="text-center testimonial-info">
                <p className="testimonial-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to.
                </p>
                <img
                  alt=""
                  className="img-fluid m-auto"
                  src="/assets/images/yoga-img/testimonial/testimonial-img.png"
                />
                <div className="testimonial-name m-t-10">
                  <h4 className="text-white name">Alan Lakor</h4>
                </div>
                <div className="testimonial-post">
                  <h6 className="text-white post">CEO OF SC.</h6>
                </div>
              </div>
            </div>
            <div className="item">
              <img
                alt=""
                className="img-fluid m-auto"
                src="/assets/images/gym/testimonial/quote.png"
              />
              <div className="text-center testimonial-info">
                <p className="testimonial-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to.
                </p>
                <img
                  alt=""
                  className="img-fluid m-auto"
                  src="/assets/images/yoga-img/testimonial/testimonial-img.png"
                />
                <div className="testimonial-name m-t-10">
                  <h4 className="text-white name">Alan Lakor</h4>
                </div>
                <div className="testimonial-post">
                  <h6 className="text-white post">CEO OF SC.</h6>
                </div>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonial;
