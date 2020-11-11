import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
  ],
};

const Team = () => (
  <section className="app2 team p-t-0">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title2">
            <img alt="" className="img-fluid title-img" src="/assets/images/logo/2.png" />
            <h6 className="font-primary borders main-text">
              <span>Client Review</span>
            </h6>
            <div className="sub-title">
              <h2 className="title-text text-capitalize text-center">Our Clients Love Us</h2>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme team-slider" {...settings}>
            <div className="item">
              <div className="team-container">
                <img
                  alt=""
                  className="img-fluid members"
                  src="/assets/images/app_landing2/team/1.png"
                />
                <div className="text-center">
                  <h5 className="name">Ashekur Rahman</h5>
                  <h6 className="post">Art Dirrector</h6>
                  <p className="team-para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="team-container">
                <img
                  alt=""
                  className="img-fluid members"
                  src="/assets/images/app_landing2/team/2.png"
                />
                <div className="text-center">
                  <h5 className="name">Ashekur Rahman</h5>
                  <h6 className="post">Art Dirrector</h6>
                  <p className="team-para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="team-container">
                <img
                  alt=""
                  className="img-fluid members"
                  src="/assets/images/app_landing2/team/3.png"
                />
                <div className="text-center">
                  <h5 className="name">Ashekur Rahman</h5>
                  <h6 className="post">Art Dirrector</h6>
                  <p className="team-para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="team-container">
                <img
                  alt=""
                  className="img-fluid members"
                  src="/assets/images/app_landing2/team/3.png"
                />
                <div className="text-center">
                  <h5 className="name">Ashekur Rahman</h5>
                  <h6 className="post">Art Dirrector</h6>
                  <p className="team-para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Team;
