import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Banner = () => (
  <section className="app2 header overflow-unset app2-animation" id="home">
    <div className="animated-bg">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div className="app2-header bg">
      <Container>
        <Row>
          <Col xl="7" lg="6" md="8">
            <div className="center-text">
              <div>
                <h6 className="header-top-line"># app landing page</h6>
                <div className="header-text">
                  <h1>
                    the best <span className="bold-text">landing page</span> for your app
                  </h1>
                </div>
                <div className="header-sub-text">
                  <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="link-horizontal">
                  <ul>
                    <li>
                      <a className="btn btn-default btn-white">get app now</a>
                    </li>
                    <li>
                      <a className="btn btn-default primary-btn transparent">discover more</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="5" lg="6" md="4">
            <div className="img-mobile set-abs">
              <img
                alt=""
                className="headaer-image"
                src="/assets/images/app_landing2/h2-mobile.png"
              />
            </div>
            <div className="wave-orange"></div>
          </Col>
        </Row>
      </Container>
      <div className="wave"></div>
    </div>
  </section>
);

export default Banner;
