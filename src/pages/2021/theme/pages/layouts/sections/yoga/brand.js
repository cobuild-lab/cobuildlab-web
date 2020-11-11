import React from 'react';
import Slider from 'react-slick';

import { BrandData } from '../../../../database/layouts/yoga/database';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 421,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 4 },
    },
  ],
};

const Brand = () => (
  <section className="yoga brand-slider">
    <Container>
      <Row>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme" id="gym-brand" {...settings}>
            {BrandData.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <a href="#">
                    <img alt="" className="img-fluid" src={item.img} />
                  </a>
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Brand;
