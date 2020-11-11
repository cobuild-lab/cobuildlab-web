import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
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

const Portfolio = () => (
  <section className="portfolio-section" id="portfolio">
    <div className="portfolio-back">
      <h1>ortfolio page</h1>
    </div>
    <Container>
      <Row>
        <Col xs="12">
          <div className="title">
            <h2>portfolio</h2>
            <h6>portfolio</h6>
            <hr className="bottom-border" />
          </div>
        </Col>
        <Col xs="12">
          <Slider className="slide-center-3" {...settings}>
            <div>
              <Link href="/portfolio/centered-slide">
                <div className="port-img">
                  <img
                    src="assets/images/landing/portfolio/1.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/portfolio/full-width-4-grid">
                <div className="port-img">
                  <img
                    src="assets/images/landing/portfolio/2.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/portfolio/portfolio-detail-2">
                <div className="port-img">
                  <img
                    src="assets/images/landing/portfolio/3.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/portfolio/full-width-4-grid">
                <div className="port-img">
                  <img
                    src="assets/images/landing/portfolio/2.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
    <div className="animat-potfolio">
      <img
        src="assets/images/landing/animate-icon/sib-1.png"
        className="img-fluid port-sib"
        alt=""
      />
      <img
        src="assets/images/landing/animate-icon/round-2.png"
        className="img-fluid port-round"
        alt=""
      />
      <img
        src="assets/images/landing/animate-icon/ract.png"
        className="img-fluid port-ract"
        alt=""
      />
      <img
        src="assets/images/landing/animate-icon/squar.png"
        className="img-fluid port-squar"
        alt=""
      />
    </div>
  </section>
);

export default Portfolio;
