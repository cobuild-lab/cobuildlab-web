import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Container, Row, Col } from 'reactstrap';
const Banner = () => (
  <section className="app1 header" id="home">
    <div className="app1-header bg">
      <Container>
        <Row>
          <Col lg="6" md="7">
            <div className="center-text">
              <div>
                <div className="header-text">
                  <h1>Showcase your app with Unice</h1>
                </div>
                <div className="header-sub-text">
                  <p className="text-white p-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been
                  </p>
                </div>
                <div className="link-horizontal">
                  <ul>
                    <li>
                      <a className="icon-btn">
                        <i aria-hidden="true" className="fa fa-android center-content"></i>
                        <h6 className="text-center text-white">android</h6>
                      </a>
                    </li>
                    <li className="borders-right p-0"></li>
                    <li>
                      <a className="icon-btn">
                        <i aria-hidden="true" className="fa fa-apple center-content"></i>
                        <h6 className="text-center text-white">ios</h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <div className="rotate">
            <Tilt perspective="20000" transitionSpeed="3000">
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/app_landing1/preview_movie.png"
              />
            </Tilt>
          </div>
          <div className="squares">
            <img
              alt=""
              className="img-fluid img-1 set-abs"
              src="/assets/images/app_landing1/Ellipse.png"
            />
            <img
              alt=""
              className="img-fluid img-2 set-abs"
              src="/assets/images/app_landing1/Ellipse.png"
            />
          </div>
          <div className="animation-circle-inverse">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </Row>
      </Container>
    </div>
  </section>
);

export default Banner;
