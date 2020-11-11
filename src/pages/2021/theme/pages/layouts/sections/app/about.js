import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const About = () => (
  <section className="app2 about format">
    <div className="animated-bg">
      <i></i>
      <i></i>
      <i></i>
    </div>

    <Container>
      <Row>
        <Col sm="5" className="counters set-height">
          <img alt="" className="img-fluid mobile1" src="/assets/images/app_landing2/mobile.png" />
          <img alt="" className="img-fluid j-img" src="/assets/images/app_landing2/j.png" />
        </Col>
        <Col sm="7" className="counters">
          <div className="abouts  center-text">
            <div>
              <div>
                <h6 className="font-primary borders-before text-uppercase">
                  <span>our progress</span>
                </h6>
              </div>
              <div className="format-head-text">
                <h3 className="about-font-header font-secondary">Great Application Ever</h3>
              </div>
              <div className="format-sub-text">
                <p className="about-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
              <ul className="icon-collection">
                <li className="about-icon">
                  <a className="center-content" href="#">
                    <img
                      alt=""
                      className="img-fluid"
                      src="/assets/images/app_landing2/about-icons/1.png"
                    />
                  </a>
                </li>
                <li className="about-icon">
                  <a className="center-content" href="#">
                    <img
                      alt=""
                      className="img-fluid"
                      src="/assets/images/app_landing2/about-icons/2.png"
                    />
                  </a>
                </li>
                <li className="about-icon">
                  <a className="center-content" href="#">
                    <img
                      alt=""
                      className="img-fluid"
                      src="/assets/images/app_landing2/about-icons/3.png"
                    />
                  </a>
                </li>
              </ul>
              <a className="btn btn-default btn-gradient m-t-50">learn more</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
