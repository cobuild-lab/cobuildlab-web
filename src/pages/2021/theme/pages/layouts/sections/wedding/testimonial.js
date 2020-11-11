import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonial = () => (
  <section className="wedding testimonial wishes-bg bg set-relative">
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title">
            <img
              alt=""
              className="img-fluid title-img"
              src="/assets/images/wedding-img/bottom.png"
            />
            <div className="main-title">
              <h2 className="gradient-text">friends wishes</h2>
            </div>
            <div className="sub-title">
              <p>
                A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut mollit anim id est laborum. Sedut perspiciatis unde omnis.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="8" className="offset-lg-2">
          <Slider {...settings}>
            <div className="item">
              <div className="testimonial-container">
                <div className="border-around">
                  <img
                    alt=""
                    className="img-fluid m-auto"
                    src="/assets/images/wedding-img/testimonial/quote.png"
                  />
                  <div className="text-center testimonial-info">
                    <p className="testimonial-para">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to.
                    </p>
                    <h4>Alan Lakor</h4>
                    <h6>CEO OF SC.</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-container">
                <div className="border-around">
                  <img
                    alt=""
                    className="img-fluid m-auto"
                    src="/assets/images/wedding-img/testimonial/quote.png"
                  />
                  <div className="text-center testimonial-info">
                    <p className="testimonial-para">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to.
                    </p>
                    <h4>Alan Lakor</h4>
                    <h6>CEO OF SC.</h6>
                  </div>
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
