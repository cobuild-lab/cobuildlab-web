import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'reactstrap';

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="app1 download">
      <Container>
        <Row>
          <Col lg="5" md="6" data-aos="fade-right" data-aos-delay="100">
            <div className="center-content center-mobile">
              <img alt="" className="img-fluid" src="/assets/images/app_landing1/mobile.png" />
            </div>
          </Col>
          <Col lg="6" md="6" className="offset-lg-1">
            <div className="center-text">
              <div>
                <div className="download-img">
                  <div className="set-relative">
                    <img
                      alt=""
                      className="download-icon img-fluid"
                      src="/assets/images/app_landing1/download/download.png"
                    />
                    <div className="set-abs elipse center-abs">
                      <img alt="" src="/assets/images/app_landing1/download/Ellipse.png" />
                    </div>
                  </div>
                  <div className="center-img-content m-l-15">
                    <h3 className="m-b-5">download</h3>
                    <p>the Unice</p>
                  </div>
                </div>
                <div className="information">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                  </p>
                </div>
                <div className="link-horizontal">
                  <ul>
                    <li>
                      <a className="icon-btn">
                        <i aria-hidden="true" className="fa fa-android center-content shadow"></i>
                        <h6 className="text-center font-primary">android</h6>
                      </a>
                    </li>
                    <li>
                      <a className="icon-btn">
                        <i aria-hidden="true" className="fa fa-apple center-content shadow"></i>
                        <h6 className="text-center font-primary">ios</h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Download;
