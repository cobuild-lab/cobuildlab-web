import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Banner = () => (
  <section className="saas1 header" id="home">
    <div className="saas1-header bg header8-content">
      <Container>
        <Row>
          <Col md="7">
            <div className="center-text">
              <div>
                <div className="header-text">
                  <div className="d-flex">
                    <h1>
                      <span className="theme-color">S</span>imple{' '}
                      <span className="small-text">and </span>
                      <span className="theme-color">S</span>mart
                    </h1>
                    <div className="center-content slider-logo">
                      <img
                        alt=""
                        className="img-fluid"
                        src="/assets/images/saas1/slider-logo.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="header-sub-text">
                  <h3 className="text-white">
                    Landing Page Templates For<span> SaaS</span> Companies
                  </h3>
                </div>
                <div className="header-sub-text">
                  <h6>
                    For as low as<span className="theme-color"> $0.95 </span>per user account
                  </h6>
                </div>
                <div className="link-horizontal">
                  <ul>
                    <li>
                      <a className="btn btn-default primary-btn transparent">
                        watch demo
                        <img
                          alt="video-icon"
                          className="m-l-5"
                          src="/assets/images/saas1/video-icon.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-default primary-btn transparent">start now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <div>
            <div className="center-text slider-banner">
              <img
                alt="slid-banner"
                src="/assets/images/saas1/slider-laptop2.png"
                className="img-fluid"
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
    <img
      alt=""
      className="img-fluid set-abs background"
      src="/assets/images/saas1/background2.png"
    />
    <img alt="" className="img-fluid set-abs dot" src="/assets/images/saas1/dot.png" />
  </section>
);

export default Banner;
