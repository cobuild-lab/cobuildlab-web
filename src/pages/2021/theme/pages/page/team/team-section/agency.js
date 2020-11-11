import React from 'react';
import Slider from 'react-slick';
import { AgencyData } from '../../../../database/pages/team/database';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
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

const Agency = () => (
  <section className="agency format speaker expert-bg">
    <Container>
      <Row>
        <Col xs="12">
          <div className="title title2 title-inner">
            <div className="main-title">
              <h2 className="font-primary borders text-center text-uppercase m-b-0">
                <span>team 4</span>
              </h2>
            </div>
          </div>
        </Col>
        <Col lg="3" md="4">
          <div className="format-container">
            <h6 className="borders-before text-uppercase font-600">
              <span>Meet our Expert</span>
            </h6>
            <div className="format-head-text">
              <h2>
                We Will Ready For <span className="block-span">Your Services</span>
              </h2>
            </div>
            <div className="format-sub-text">
              <p className="about-para">
                Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.
              </p>
            </div>
            <a className=" btn btn-default btn-gradient text-white" href="#">
              view more
            </a>
          </div>
        </Col>
        <Col lg="9" md="8">
          <Slider className="owl-carousel owl-theme speaker-slider" {...settings}>
            {AgencyData.map((data, i) => {
              return (
                <div className="item speker-container" key={i}>
                  <div className="text-center">
                    <div className="team-img">
                      <img alt="" className="img-fluid" src={data.img} />
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
                      <h5 className="e-name text-center font-secondary">{data.name}</h5>
                      <h6 className="post text-center ">{data.role}</h6>
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

export default Agency;
