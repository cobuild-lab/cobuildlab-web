import React from 'react';
import Slider from 'react-slick';

import { ExpertData } from '../../../../database/layouts/yoga/database';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  autoplay: true,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: '60px',
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 },
    },
  ],
};

const Expert = () => (
  <section className="yoga trainers" id="screenshot">
    <div className="animated-bg">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title title2">
            <h2>our expert</h2>
            <img alt="" className="img-fluid" src="/assets/images/yoga-img/logo/wave-blue.png" />
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Slider className="trainers-slider" id="trainers-slider" {...settings}>
        {ExpertData.map((data, i) => {
          return (
            <div className="item" key={i}>
              <img alt="" className="img-fluid" src={data.img} />
              <div className="text-center trainers-info">
                <h4 className=" m-b-10">{data.heading}</h4>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
                    <li>
                      <a href="#">
                        <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i aria-hidden="true" className="fa fa-google center-content"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Container>
  </section>
);

export default Expert;
