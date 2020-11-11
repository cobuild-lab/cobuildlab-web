import React from 'react';
import Slider from 'react-slick';
import { TestimonialData } from '../../../../database/layouts/music/database';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
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

const Testimonial = () => (
  <section className="music testimonial sponsor bg-shadow-top-bottom">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title4">
            <div className="main-title">
              <h2>testimonial</h2>
            </div>
            <div className="sub-title">
              <p>Our happy client</p>
            </div>
          </div>
        </Col>
        <Col md="8" className="offset-md-2">
          <Slider
            className="owl-carousel owl-theme music-testimonial-slider"
            id="music-testimonial-slider"
            {...settings}>
            {TestimonialData.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div>
                    {/* <img alt="" className="img-fluid" src={item.img} /> */}
                    <div className="text-center testimonial-info">
                      <p className="testimonial-para">{item.desc}</p>
                      <h6 className="gradient-text text-uppercase m-b-5 font-large">
                        {item.title}
                      </h6>
                      <h6 className="font-small">{item.role}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonial;
