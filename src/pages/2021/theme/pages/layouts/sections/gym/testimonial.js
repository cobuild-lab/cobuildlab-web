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

const Testimonial = () => (
  <section className="gym testimonial">
    <Container>
      <Row>
        <Col xs="12">
          <div className="title">
            <div className="text-center">
              <div>
                <h6 className=" borders-before text-white">
                  <span>OUR PROGRESS</span>
                </h6>
              </div>
              <div className="main-title">
                <h2 className="text-white">what people say</h2>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="8" className="offset-lg-2">
          <Slider
            className="owl-carousel owl-theme testimonial-slider"
            id="testimonial-slider"
            {...settings}>
            <div className="item">
              <div>
                <img
                  alt=""
                  className="img-fluid m-auto"
                  src="/assets/images/gym/testimonial/quote.png"
                />
                <div className="text-center testimonial-info">
                  <p className="p-light testimonial-para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to.
                  </p>
                  <div className="testimonial-name">
                    <h5 className="text-white name">Alan Lakor</h5>
                  </div>
                  <div className="testimonial-post">
                    <h6 className="text-white post">CEO OF SC.</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <img
                  alt=""
                  className="img-fluid m-auto"
                  src="/assets/images/gym/testimonial/quote.png"
                />
                <div className="text-center testimonial-info">
                  <p className="p-light testimonial-para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to.
                  </p>
                  <div className="testimonial-name">
                    <h5 className="text-white name">Alan Lakor</h5>
                  </div>
                  <div className="testimonial-post">
                    <h6 className="text-white post">CEO OF SC.</h6>
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
