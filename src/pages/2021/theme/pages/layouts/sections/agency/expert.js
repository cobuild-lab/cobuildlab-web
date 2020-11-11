import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import { ExpertData } from '../../../../database/layouts/agency/database';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 369,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 479,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 767,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
  ],
};

const Expert = () => (
  <section className="agency format speaker expert-bg">
    <Container>
      <Row>
        <Col lg="3" md="4">
          <div className="format-container">
            <h6 className="borders-before">
              <span>Meet our Expert</span>
            </h6>
            <div className="format-head-text">
              <h2>We Will Ready For Your Services</h2>
            </div>
            <div className="format-sub-text">
              <p className="about-para">
                Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.
              </p>
            </div>
            <a className=" btn btn-default btn-gradient" href="#">
              view more
            </a>
          </div>
        </Col>
        <Col lg="9" md="8">
          <Slider {...settings}>
            {ExpertData.length > 0
              ? ExpertData.map((item, index) => (
                <div className="item speker-container" key={`our-expert-team-${index}`}>
                  <div className="text-center">
                    <div className="team-img">
                      <img alt="" className="img-fluid" src={item.photo} />
                      <div className="overlay"></div>
                      <div className="social">
                        <ul>
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
                              <i aria-hidden="true" className="fa fa-globe center-content"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="employee">
                      <h5 className="e-name">{item.title}</h5>
                      <h6 className="post font-secondary">{item.details}</h6>
                    </div>
                  </div>
                </div>
              ))
              : 'Expert Details Not Found'}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Expert;
