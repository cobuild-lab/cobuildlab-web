import React from 'react';
import Slider from 'react-slick';

import { DestinationData } from '../../../../database/layouts/wedding/database';
import { Container, Row, Col } from 'reactstrap';
const LeftNavButton = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        bottom: '50%',
        marginLeft: '-10%',
      }}
      onClick={onClick}>
      <img src="/assets/images/wedding-img/when/next.png" alt="arrow_left" />
    </div>
  );
};

const RightNavButton = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        bottom: '50%',
        marginLeft: '105%',
      }}
      onClick={onClick}>
      <img src="/assets/images/wedding-img/when/prev.png" alt="arrow_left" />
    </div>
  );
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  autoplay: true,
  prevArrow: <LeftNavButton />,
  nextArrow: <RightNavButton />,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Destination = () => (
  <section className="wedding pricing when-where-bg bg set-relative">
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
              <h2 className="gradient-text">When And Where</h2>
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
        <Col md="8" className="offset-md-2">
          <Slider className="owl-carousel owl-theme when-slider" id="when-slider" {...settings}>
            {DestinationData.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <div className="price-container bg-white price-margin shadows text-center">
                    <div className="price-feature-container set-relative">
                      <div className="feature-text">
                        <img alt="" className="img-fluid feature-icon" src={item.img} />

                        <hr className="set-border" />
                        <h3 className="feature-text-heading text-center bold gradient-text ">
                          {item.title}
                        </h3>
                        <div className="price-value">
                          <h6 className="price text-center font-primary">{item.timing}</h6>
                        </div>
                      </div>
                      <div className="price-features font-primary">
                        <h4 className="price-feature font-primary">{item.feature1} </h4>
                        <h4 className="price-feature font-primary">{item.feature2} </h4>
                        <h4 className="price-feature font-primary m-0">{item.feature3}</h4>
                      </div>
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

export default Destination;
