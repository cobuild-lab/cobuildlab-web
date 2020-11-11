import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import { TestimonialData } from '../../../../database/layouts/agency/database';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
  ],
};

const Testimonial = () => (
  <section className="agency testimonial format testimonial-bg">
    <Container>
      <Row>
        <Col md="5">
          <div className="format-container m-b-50">
            <h6 className="borders-before">
              <span>Happy Clients</span>
            </h6>
            <div className="format-head-text">
              <h2 className=" text-white">
                We Will Ready For <span className="block-span">Your Services</span>
              </h2>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme testimonial-slider" {...settings}>
            {TestimonialData.length > 0
              ? TestimonialData.map((item, index) => (
                <div className="item" key={`testimonial-${index}`}>
                  <div className="testimonial-container testimonial-container2 m-0">
                    <div className="d-flex">
                      <img alt="" className="img-fluid m-r-25" src={item.photo} />
                      <div className="center-content">
                        <h6 className="name">{item.name}</h6>
                        <h6 className="post font-primary">{item.role}</h6>
                      </div>
                    </div>
                    <div className="testimonial-info">
                      <p className="m-b-20 para2">{item.details}</p>
                      <div className="primary-border"></div>
                    </div>
                  </div>
                </div>
              ))
              : 'No Testimonial Found'}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonial;
